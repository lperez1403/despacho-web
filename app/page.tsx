import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const areas = [
  { slug: "laboral", title: "Derecho Laboral", desc: "Despidos, reclamaciones, sanciones, nóminas." },
  { slug: "civil", title: "Derecho Civil", desc: "Contratos, reclamaciones, herencias, deudas." },
  { slug: "penal", title: "Derecho Penal", desc: "Asistencia al detenido, defensa y acusación." },
  { slug: "familia", title: "Familia", desc: "Divorcios, custodia, pensiones, medidas." },
  { slug: "mercantil", title: "Mercantil", desc: "Sociedades, pactos, impagos, contratos." },
  { slug: "extranjeria", title: "Extranjería", desc: "Arraigos, nacionalidad, permisos, recursos." },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border bg-gradient-to-b from-zinc-50 to-white p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Defensa legal clara, rápida y cercana.
            </h1>
            <p className="text-zinc-700">
              Despacho especializado para particulares y empresas. Primera
              valoración en 24–48h. Atención presencial y online.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto">
                <Button>Solicitar cita</Button>
              </Link>
              <a href="tel:+34600000000">
                <Button variant="secondary">Llamar</Button>
              </a>
            </div>
            <div className="text-sm text-zinc-600">
              Colegiación • Transparencia • Estrategia • Confidencialidad
            </div>
          </div>

          <Card className="p-6">
            <div className="space-y-3">
              <div className="text-sm font-medium text-zinc-600">
                Respuesta rápida
              </div>
              <div className="text-2xl font-semibold">24–48h</div>
              <p className="text-sm text-zinc-700">
                Te explicamos opciones, riesgos y próximos pasos con un plan
                claro. Presupuesto antes de actuar.
              </p>
              <div className="grid gap-2 text-sm text-zinc-700">
                <div>✅ Estrategia y hoja de ruta</div>
                <div>✅ Documentación necesaria</div>
                <div>✅ Seguimiento y comunicación</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Áreas de práctica</h2>
          <Link className="text-sm text-zinc-700 underline" href="/areas">
            Ver todas
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`}>
              <Card className="h-full p-5 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <div className="text-lg font-semibold">{a.title}</div>
                  <p className="text-sm text-zinc-700">{a.desc}</p>
                  <div className="text-sm font-medium text-zinc-900">
                    Ver detalles →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <div className="text-lg font-semibold">Cómo trabajamos</div>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>1) Analizamos tu caso y documentación.</li>
            <li>2) Proponemos estrategia y presupuesto.</li>
            <li>3) Actuamos y te informamos en cada fase.</li>
            <li>4) Cierre y seguimiento.</li>
          </ol>
        </Card>
        <Card className="p-6">
          <div className="text-lg font-semibold">Confianza</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• Colegiación y experiencia verificable</li>
            <li>• Comunicación clara (sin jerga)</li>
            <li>• Confidencialidad y rigor</li>
          </ul>
        </Card>
        <Card className="p-6">
          <div className="text-lg font-semibold">Cita</div>
          <p className="mt-3 text-sm text-zinc-700">
            Atención presencial y online. Horario: L–V 9:00–18:00.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/contacto">
              <Button>Contactar</Button>
            </Link>
            <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer">
              <Button variant="secondary">WhatsApp</Button>
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}