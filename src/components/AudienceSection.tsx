import { useScrollReveal } from "./useScrollReveal";

const audiences = [
  { icon: "🚀", label: "Emprendedores" },
  { icon: "💼", label: "Profesionales" },
  { icon: "🏢", label: "Empresas" },
  { icon: "🎓", label: "Académicos" },
  { icon: "🔍", label: "Curiosos" },
];

const AudienceSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-background py-20">
      <div
        className={`container text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          ¿Para quién es?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Si el futuro te importa, este evento es para vos
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {audiences.map(a => (
            <div key={a.label} className="glass-card px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">{a.icon}</span>
              <span className="font-heading font-semibold text-foreground">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
