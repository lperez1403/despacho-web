import { Card } from "@/components/ui/Card";

export default function Equipo() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Equipo</h1>
      <p className="text-zinc-700">
        Presentación aquí a las personas del despacho. ( foto real, colegiación e idiomas.)
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6 space-y-2">
          <div className="text-lg font-semibold">Nombre Apellido</div>
          <div className="text-sm text-zinc-700">Abogada • ICAM nº XXXXX</div>
          <div className="text-sm text-zinc-700">
            Especialidad: Laboral y Civil. Idiomas: ES/EN/IT.
          </div>
        </Card>

        <Card className="p-6 space-y-2">
          <div className="text-lg font-semibold">Nombre Apellido</div>
          <div className="text-sm text-zinc-700">Abogado • ICAM nº XXXXX</div>
          <div className="text-sm text-zinc-700">
            Especialidad: Penal y Familia. Idiomas: ES/EN.
          </div>
        </Card>
      </div>
    </div>
  );
}