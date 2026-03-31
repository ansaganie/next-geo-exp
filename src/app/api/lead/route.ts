import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  surname: z.string().min(2).max(100),
  phone: z.string().regex(/^(?:\+7|8)\d{10}$/),
  comment: z.string().max(1000).optional(),
});

// Simple in-memory rate limiter: max 5 requests per IP per 60 seconds
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60_000;

function pruneExpired() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  // Prune stale entries periodically to prevent unbounded growth
  if (rateLimitMap.size > 1000) pruneExpired();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { name, surname, phone, comment } = result.data;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  const text = [
    "📩 Новая заявка с сайта",
    "",
    `👤 ${name} ${surname}`,
    `📞 ${phone}`,
    comment ? `💬 ${comment}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const tgRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    },
  );

  if (!tgRes.ok) {
    console.error("Telegram API error:", await tgRes.text());
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
