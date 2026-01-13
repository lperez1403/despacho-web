import Link from "next/link";

const SERVICES: Record<string, { title: string; intro: string }> = {
  laboral: {
    title: "Derecho Laboral",
    intro: "Despidos, reclamaciones de cantidad, sanciones y asesoramiento.",
  },
  civil: {
    title: "Derecho Civil",
    intro: "Contratos, deudas, herencias y responsabilidad civil.",
  },
  penal: {
    title: "Derecho Penal",
    intro: "Asistencia urgente y defensa en procedimientos penales.",
  },
  familia: {
    title: "Familia",
    intro: "Divorcios, custodia, pensiones y medidas.",
  },
  mercantil: {
    title: "Mercantil",
    intro: "Sociedades, contratos, impagos y asesoría a empresas.",
  },
  extranjeria: {
    title: "Extranjería",
    intro: "Arraigos, permisos, nacionalidad y recursos.",
  },
};

export default function AreaPage({ params }: { params: { slug: string } }) {
  const data = SERVICES[params.slug];

  if (!data) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Área no encontrada</h1>
        <p className="text-zinc-700">
          No existe el área <b>{params.slug}</b>.
        </p>
        <Link className="underline" href="/areas">
          Volver a Áreas
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{data.title}</h1>
      <p className="text-zinc-700">{data.intro}</p>
      <Link className="underline" href="/contacto">
        Solicitar cita
      </Link>
    </div>
  );
}