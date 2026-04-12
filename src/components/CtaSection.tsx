import { useScrollReveal } from "./useScrollReveal";

const CTA_URL = "https://tktevent.com/pass/event/form/157";

const CtaSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="inscripcion" ref={ref} className="gradient-dark-section py-24">
      <div
        className={`container text-center max-w-2xl transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
          La pregunta no es si va a pasar.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10">
          La pregunta es si vos vas a ser parte.
        </p>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gradient-cta font-heading font-bold text-xl px-12 py-5 rounded-full text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform"
        >
          → INSCRIBIRME GRATIS
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
