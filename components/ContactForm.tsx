"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const form = e.currentTarget; // ✅ guarda referencia ANTES de await
    setStatus("loading");
    setMsg("");
  
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error");
  
      setStatus("ok");
      setMsg("Mensaje enviado. Te responderemos en 24–48h.");
      form.reset(); // ✅ ya no falla
    } catch (err: any) {
      setStatus("err");
      setMsg(err?.message || "No se pudo enviar. Inténtalo de nuevo.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="text-sm font-medium">Nombre</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label className="text-sm font-medium">Teléfono (opcional)</label>
        <input
          name="phone"
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="+34..."
        />
      </div>
      <div>
        <label className="text-sm font-medium">Área</label>
        <select name="area" className="mt-1 w-full rounded-xl border px-3 py-2">
          <option value="General">General</option>
          <option value="Laboral">Laboral</option>
          <option value="Civil">Civil</option>
          <option value="Penal">Penal</option>
          <option value="Familia">Familia</option>
          <option value="Mercantil">Mercantil</option>
          <option value="Extranjería">Extranjería</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium">Mensaje</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Describe tu consulta (sin datos sensibles si no es necesario)."
        />
      </div>

      <div className="text-xs text-zinc-600">
        Al enviar, aceptas la política de privacidad.
      </div>

      <Button disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar"}
      </Button>

      {msg && (
        <div
          className={`text-sm ${
            status === "ok" ? "text-green-700" : "text-red-700"
          }`}
        >
          {msg}
        </div>
      )}
    </form>
  );
}