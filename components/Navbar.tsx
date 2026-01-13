import Link from "next/link";

const nav = [
  { href: "/areas", label: "Áreas" },
  { href: "/equipo", label: "Equipo" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Despacho<span className="text-zinc-500">.</span>
        </Link>

        <nav className="flex items-center gap-4">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+34600000000"
            className="hidden rounded-full border px-3 py-1 text-sm font-medium hover:bg-zinc-50 sm:block"
          >
            +34 600 000 000
          </a>
        </nav>
      </div>
    </header>
  );
}