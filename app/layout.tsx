import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Despacho | Abogados en Ciudad",
  description:
    "Asesoramiento legal claro y eficaz. Civil, laboral, penal, familia, mercantil y extranjería. Primera valoración en 24–48h.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={
          inter.className +
          " min-h-screen bg-white text-zinc-950 antialiased"
        }
      >
        {/* Fondo premium sutil */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(24,24,27,0.04),transparent_60%)]" />
        </div>

        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}