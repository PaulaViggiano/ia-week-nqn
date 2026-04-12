import { useScrollReveal } from "./useScrollReveal";

const EventInfoSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="informacion" ref={ref} className="gradient-dark-section py-20">
      <div
        className={`container max-w-3xl text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-10">
          Info del Evento
        </h2>
        <div className="space-y-6 text-lg">
          <p className="text-foreground">📅 14, 15 y 16 de mayo de 2026</p>
          <p className="text-foreground">
            📍 ENE Polo Tecnológico — Av. Raúl Soldi y Av. Huilén, Q8300 Neuquén – Argentina
          </p>
          <p className="text-primary font-heading font-bold text-xl">✅ Entrada 100% gratuita</p>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
