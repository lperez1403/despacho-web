import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Despacho | Abogados en Navia",
  description:
    "Asesoramiento legal claro y eficaz. Civil, laboral, penal, familia, mercantil y extranjería. Primera valoración en 24–48h.",
  metadataBase: new URL("https://tu-dominio.com"),
  openGraph: {
    title: "Despacho | Abogados en [Ciudad]",
    description:
      "Asesoramiento legal claro y eficaz. Primera valoración en 24–48h.",
    url: "https://tu-dominio.com",
    siteName: "Despacho",
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Despacho [Nombre]",
    url: "https://tu-dominio.com",
    telephone: "+34 600 000 000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Ejemplo 12",
      addressLocality: "[Ciudad]",
      postalCode: "28000",
      addressCountry: "ES",
    },
    areaServed: "[Ciudad]",
    priceRange: "€€",
  };

  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-zinc-900">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}