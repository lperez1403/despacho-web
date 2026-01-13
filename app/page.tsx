import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Clock, Scale, ArrowRight, Star } from "lucide-react";

const areas = [
  { slug: "laboral", title: "Derecho Laboral", desc: "Despidos, reclamaciones, sanciones y negociación." },
  { slug: "civil", title: "Derecho Civil", desc: "Contratos, deudas, herencias y responsabilidad." },
  { slug: "penal", title: "Derecho Penal", desc: "Asistencia urgente, defensa y recursos." },
  { slug: "familia", title: "Familia", desc: "Divorcios, custodia, pensiones y medidas." },
  { slug: "mercantil", title: "Mercantil", desc: "Sociedades, contratos B2B, impagos y compliance." },
  { slug: "extranjeria", title: "Extranjería", desc: "Arraigos, permisos, nacionalidad y recursos." },
];

const highlights = [
  { icon: Clock, title: "Respuesta 24–48h", desc: "Primera valoración rápida y plan de acción." },
  { icon: ShieldCheck, title: "Confidencialidad", desc: "Rigor profesional y privacidad." },
  { icon: Scale, title: "Estrategia clara", desc: "Opciones, riesgos, plazos y presupuesto." },
];

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2.25rem] border border-zinc-200/70 bg-white/70 p-8 shadow-sm md:p-12">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-zinc-950/5 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-zinc-950/5 blur-3xl" />

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
              <span className="font-medium">Despacho</span>
              <span className="text-zinc-400">•</span>
              <span>Atención presencial y online</span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Defensa legal <span className="text-zinc-600">clara</span> y{" "}
              <span className="text-zinc-600">estratégica</span>.
            </h1>

            <p className="text-zinc-700 md:text-lg">
              Te ayudamos a resolver tu problema legal con un enfoque directo:
              análisis, estrategia y ejecución. Presupuesto antes de actuar.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contacto">
                <Button>
                  Solicitar cita <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer">
                <Button variant="secondary">WhatsApp</Button>
              </a>
              <a href="tel:+34600000000">
                <Button variant="ghost">Llamar</Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Colegiación</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Transparencia</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Confidencialidad</span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Atención online</span>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="p-6">
              <div className="text-sm font-medium text-zinc-600">Primera valoración</div>
              <div className="mt-1 text-3xl font-semibold">24–48h</div>
              <p className="mt-3 text-sm text-zinc-700">
                Te explicamos opciones, riesgos y próximos pasos. Enfoque práctico.
              </p>
              <div className="mt-4 grid gap-2 text-sm text-zinc-700">
                <div>✅ Análisis documental</div>
                <div>✅ Estrategia y plazos</div>
                <div>✅ Seguimiento claro</div>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <Card key={h.title} className="p-5">
                  <h.icon className="h-5 w-5 text-zinc-900" />
                  <div className="mt-3 text-sm font-semibold">{h.title}</div>
                  <div className="mt-1 text-xs text-zinc-700">{h.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Áreas de práctica</h2>
          <Link className="text-sm text-zinc-700 underline" href="/areas">
            Ver todas
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`}>
              <Card className="group h-full p-6 transition-all hover:-translate-y-0.5 hover:shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{a.title}</div>
                    <p className="mt-2 text-sm text-zinc-700">{a.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS (placeholders) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Clientes satisfechos</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "M. G.",
              text: "Me explicaron todo con claridad y resolvieron el caso más rápido de lo que esperaba.",
            },
            {
              name: "A. R.",
              text: "Trato cercano y profesional. Transparencia total con costes y plazos.",
            },
            {
              name: "L. P.",
              text: "Estrategia impecable y comunicación constante. Repetiría sin dudar.",
            },
          ].map((t) => (
            <Card key={t.name} className="p-6">
              <div className="flex items-center gap-1 text-zinc-900">
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
              </div>
              <p className="mt-3 text-sm text-zinc-700">{t.text}</p>
              <div className="mt-4 text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-zinc-600">Reseña verificada</div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-zinc-200/70 bg-white/70 p-6">
          <div>
            <div className="text-lg font-semibold">¿Hablamos de tu caso?</div>
            <div className="text-sm text-zinc-700">
              Escríbenos y te respondemos en 24–48h.
            </div>
          </div>
          <Link href="/contacto">
            <Button>
              Contactar <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}