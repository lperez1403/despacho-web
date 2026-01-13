import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name?.toString().trim();
    const email = body.email?.toString().trim();
    const message = body.message?.toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // 🔕 Email desactivado por ahora
    console.log("Nuevo contacto:", body);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Error procesando el formulario" },
      { status: 500 }
    );
  }
}