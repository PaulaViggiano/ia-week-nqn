import { useScrollReveal } from "./useScrollReveal";

const orgs = [
  { name: "Polo Científico Tecnológico", logo: "/logos/polo.png" },
  { name: "SAIA", logo: "/logos/saia.png" },
  { name: "ENE", logo: "/logos/ene.png" },
  { name: "IFES Educación Superior", logo: "/logos/ifesLogo.png" },
  { name: "MMPRO Eventos", logo: "/logos/mmpro.png" },
];

const OrganizersSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-background py-16 overflow-hidden">
      <div
        className={`container text-center mb-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-widest text-foreground/50">
          <span>Organizan</span>
          <span className="text-primary">·</span>
          <span>Coorganizan</span>
          <span className="text-primary">·</span>
          <span>Producen</span>
        </div>
      </div>

      {/* Marquee infinito */}
      <div className="relative w-full">
        {/* Fade en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {/* Se duplica el contenido para el loop infinito */}
          {[...orgs, ...orgs, ...orgs, ...orgs].map((org, i) => (
            <div
              key={`${org.name}-${i}`}
              className="flex flex-col items-center gap-3 mx-10 flex-shrink-0"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OrganizersSection;