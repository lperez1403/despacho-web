import Link from "next/link";
import { Card } from "@/components/ui/Card";

const posts = [
  { slug: "que-hacer-ante-un-despido", title: "Qué hacer ante un despido: primeros pasos", date: "2026-01-13" },
  { slug: "reclamar-una-deuda-sin-juicio", title: "Cómo reclamar una deuda sin ir a juicio (cuando se puede)", date: "2026-01-13" },
];

export default function Blog() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="text-zinc-700">Guías breves y prácticas. (Enfócalo a SEO local: “abogado + ciudad + tema”).</p>
      <div className="grid gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <Card className="p-5 hover:shadow-md transition-shadow">
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="text-sm text-zinc-600">{p.date}</div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}