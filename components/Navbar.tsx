import Link from "next/link";
import { Button } from "@/components/ui/Button";

const nav = [
  { href: "/areas", label: "Áreas" },
  { href: "/equipo", label: "Equipo" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-950 text-white">
            D
          </span>
          <span>Despacho</span>
          <span className="text-zinc-500">·</span>
          <span className="text-zinc-600 text-sm font-medium">Abogados</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-zinc-700 hover:text-zinc-950"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="hidden sm:block" href="tel:+34600000000">
            <Button variant="secondary">+34 600 000 000</Button>
          </a>
          <Link href="/contacto">
            <Button>Solicitar cita</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}