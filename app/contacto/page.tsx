import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/Card";

export default function Contacto() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Contacto</h1>
      <p className="text-zinc-700">
        Cuéntanos tu caso y te respondemos en 24–48h. También puedes llamar o escribir por WhatsApp.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6 space-y-2">
          <div className="text-lg font-semibold">Datos</div>
          <div className="text-sm text-zinc-700">📍 Calle Ejemplo?? , Navia</div>
          <div className="text-sm text-zinc-700">📞 +34 600 000 000</div>
          <div className="text-sm text-zinc-700">✉️ correooo@prueba.es</div>
          <div className="text-sm text-zinc-700">🕘 L–V 9:00–18:00</div>
          <div className="pt-3 text-sm text-zinc-600">
            * No envíes información sensible por el formulario si no es necesario.
          </div>
        </Card>

        <Card className="p-6">
          <ContactForm />
        </Card>
      </div>
    </div>
  );
}