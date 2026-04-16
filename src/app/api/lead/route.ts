import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  surname: z.string().min(2).max(100),
  phone: z.string().regex(/^(?:\+7|8)\d{10}$/i),
  comment: z.string().max(1000).optional(),
});

// In-memory rate limiter: max 5 requests per IP per 60 seconds.
// Expired entries are pruned every 5 minutes to prevent unbounded growth
// on long-running standalone servers with many unique IPs.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const PRUNE_INTERVAL_MS = 5 * 60_000;

function pruneExpired(): void {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}

const pruneTimer = setInterval(pruneExpired, PRUNE_INTERVAL_MS);
if (typeof pruneTimer === "object" && pruneTimer !== null && "unref" in pruneTimer) {
  (pruneTimer as { unref(): void }).unref();
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")?.[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    null;

  // Skip rate limiting when IP cannot be determined rather than
  // collapsing all anonymous clients into one shared bucket.
  if (ip !== null && isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const { name, surname, phone, comment } = parsed.data;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials not configured");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  const text = [
    "📩 Новая заявка с сайта GeoExploration",
    `👤 Имя: ${name} ${surname}`,
    `📞 Телефон: ${phone}`,
    comment ? `💬 Комментарий: ${comment}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML'
      }),
    },
  );

  if (!telegramRes.ok) {
    console.error("Telegram API error:", await telegramRes.text());
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
