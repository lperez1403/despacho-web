import Link from "next/link";
import { Card } from "@/components/ui/Card";

const areas = [
  { slug: "laboral", title: "Derecho Laboral" },
  { slug: "civil", title: "Derecho Civil" },
  { slug: "penal", title: "Derecho Penal" },
  { slug: "familia", title: "Familia" },
  { slug: "mercantil", title: "Mercantil" },
  { slug: "extranjeria", title: "Extranjería" },
];

export default function Areas() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Áreas de práctica</h1>
      <p className="text-zinc-700">
        Selecciona un área para ver casos frecuentes, documentación y proceso.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((a) => (
          <Link key={a.slug} href={`/areas/${a.slug}`}>
            <Card className="p-5 hover:shadow-md transition-shadow">
              <div className="text-lg font-semibold">{a.title}</div>
              <div className="mt-2 text-sm text-zinc-700">
                Ver detalles →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}