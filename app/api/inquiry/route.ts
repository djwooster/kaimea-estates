import { NextResponse } from "next/server";
import { formatInquiry, rateInquiry, REQUIRED_FIELDS, type Inquiry } from "@/lib/inquiry";

// Sends inquiries through Resend. Needs RESEND_API_KEY, and INQUIRY_FROM set to an
// address on a domain verified in Resend. Without a key this returns 503 and the
// form falls back to opening a pre-filled email, so no lead is lost.
const TO = process.env.INQUIRY_TO ?? "events@kaimeaestates.com";
const FROM = process.env.INQUIRY_FROM ?? "Kaimea Estates <inquiries@kaimeaestates.com>";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (body.company) return NextResponse.json({ ok: true });

  const inquiry: Inquiry = {
    name: String(body.name ?? "").trim().slice(0, 200),
    email: String(body.email ?? "").trim().slice(0, 200),
    phone: String(body.phone ?? "").trim().slice(0, 50),
    eventType: String(body.eventType ?? ""),
    date: String(body.date ?? ""),
    dateFlexible: Boolean(body.dateFlexible),
    guests: String(body.guests ?? ""),
    catering: String(body.catering ?? ""),
    stage: String(body.stage ?? ""),
    hasPlanner: String(body.hasPlanner ?? ""),
    source: String(body.source ?? ""),
    message: String(body.message ?? "").trim().slice(0, 5000),
    soundAck: Boolean(body.soundAck),
  };

  const missing = REQUIRED_FIELDS.filter((field) => !inquiry[field]);
  if (missing.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    return NextResponse.json({ error: "Missing or invalid fields", missing }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email delivery not configured" }, { status: 503 });
  }

  const { rating } = rateInquiry(inquiry);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: inquiry.email,
      subject: `[${rating}] ${inquiry.eventType} inquiry — ${inquiry.name}, ${inquiry.guests} guests`,
      text: formatInquiry(inquiry),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
