import { notFound } from "next/navigation";

const POSTS: Record<string, { title: string; body: string[] }> = {
  "que-hacer-ante-un-despido": {
    title: "Qué hacer ante un despido: primeros pasos",
    body: [
      "1) Reúne la documentación: carta, nóminas, contrato, comunicaciones.",
      "2) No firmes sin leer. Si firmas, añade “no conforme” si procede.",
      "3) Actúa rápido: los plazos pueden ser cortos.",
      "4) Agenda una valoración para elegir estrategia (conciliación, demanda, negociación).",
    ],
  },
  "reclamar-una-deuda-sin-juicio": {
    title: "Cómo reclamar una deuda sin ir a juicio (cuando se puede)",
    body: [
      "1) Reclamación amistosa documentada.",
      "2) Burofax o requerimiento fehaciente.",
      "3) Negociación y acuerdo por escrito.",
      "4) Si no funciona: monitorio u otras vías.",
    ],
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) return notFound();

  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      {post.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <p>
        *Este contenido es informativo y no sustituye asesoramiento jurídico.
      </p>
    </article>
  );
}