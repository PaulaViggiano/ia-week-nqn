import { useScrollReveal } from "./useScrollReveal";

const features = [
  {
    icon: "🎤",
    title: "Paneles de Alto Impacto",
    desc: "Disertaciones a cargo de speakers nacionales e internacionales que lideran la vanguardia tecnológica, como es els caso de Santi Siri, Freddy Vivas, entre otros.",
  },
  {
    icon: "⚡",
    title: "Experiencias Interactivas",
    desc: "Espacios para conocer de cerca casos de uso reales y el potencial de la IA generativa.",
  },
  {
    icon: "🤝",
    title: "Networking Estratégico",
    desc: "Un punto de encuentro clave para generar sinergias entre emprendedores, referentes del sector público y el ámbito empresarial de Neuquén y Río Negro.",
  },
];

const FeaturesSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-background py-20">
      <div className="container">
        <h2
          className={`font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Qué vas a encontrar
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glass-card p-8 text-center hover:glow-cyan transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-4xl mb-4 block">{f.icon}</span>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
