import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  area?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const area = String(body.area || "General").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  // Fallback: si no configuras Resend, el endpoint igual responde OK.
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO_EMAIL;
  const FROM = process.env.CONTACT_FROM_EMAIL;

  if (!RESEND_API_KEY || !TO || !FROM) {
    return NextResponse.json({ ok: true, mode: "no-email" });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(RESEND_API_KEY);

  const subject = `Nuevo contacto (${area}) - ${name}`;
  const html = `
    <h2>Nuevo contacto</h2>
    <p><b>Nombre:</b> ${escapeHtml(name)}</p>
    <p><b>Email:</b> ${escapeHtml(email)}</p>
    <p><b>Teléfono:</b> ${escapeHtml(phone || "-")}</p>
    <p><b>Área:</b> ${escapeHtml(area)}</p>
    <p><b>Mensaje:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      html,
    });
    return NextResponse.json({ ok: true, mode: "email" });
  } catch (e: any) {
    return NextResponse.json(
      { error: "No se pudo enviar el email" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}