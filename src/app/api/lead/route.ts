import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  surname: z.string().min(2).max(100),
  phone: z.string().regex(/^(?:\+7|8)\d{10}$/),
  comment: z.string().max(1000).optional(),
});

export async function POST(request: Request) {
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
