import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-700">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900">Despacho</div>
            <div>Calle Ejemplo 12, [Ciudad]</div>
            <div>+34 600 000 000</div>
            <div>contacto@tu-dominio.com</div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900">Legal</div>
            <div><Link className="underline" href="/legal/aviso-legal">Aviso legal</Link></div>
            <div><Link className="underline" href="/legal/privacidad">Privacidad</Link></div>
            <div><Link className="underline" href="/legal/cookies">Cookies</Link></div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-zinc-900">Nota</div>
            <div>Contenido informativo. No sustituye asesoramiento jurídico.</div>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Despacho. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}