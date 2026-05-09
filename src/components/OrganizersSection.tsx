import { useScrollReveal } from "./useScrollReveal";

const groups = [
  {
    label: "Organizan",
    orgs: [
      { name: "Neuquén Capital", logo: "/logos/muniLogo.png", scale: 1.3 },
      { name: "Municipalidad de Neuquén", logo: "/logos/muniLogo.png", scale: 1.3 },
      { name: "Polo Científico Tecnológico", logo: "/logos/polo.png", scale: 1.2 },
      { name: "SAIA", logo: "/logos/saia.png", scale: 1 },
    ],
  },
  {
    label: "Coorganizan",
    orgs: [
      { name: "ENE", logo: "/logos/ene.png", scale: 1.3 },
      { name: "IFES Educación Superior", logo: "/logos/ifesLogo.png", scale: 1 },
      { name: "OSDE", logo: "/logos/osde.png", scale: 1 },
    ],
  },
  {
    label: "Producen",
    orgs: [
      { name: "MSGN", logo: "/logos/MSGN.png", scale: 1 },
      { name: "MMPRO Eventos", logo: "/logos/mmpro.png", scale: 1 },
      { name: "TKT eventos", logo: "/logos/logoTktevent.png", scale: 1.5 },
    ],
  },
];

const OrganizersSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16">
      <div className="container max-w-4xl space-y-10">
        {groups.map((group, gi) => (
          <div
            key={group.label}
            className={`text-center transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${gi * 200}ms` }}
          >
            {/* Etiqueta con líneas decorativas */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-primary/30" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-primary/70">
                {group.label}
              </span>
              <span className="h-px w-12 bg-primary/30" />
            </div>

            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
              {group.orgs.map((org, oi) => (
                <div
                  key={org.name}
                  className={`flex flex-col items-center gap-2 transition-all duration-500 ${
                    visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${gi * 200 + oi * 100}ms` }}
                >
                  <img
                    src={org.logo}
                    alt={org.name}
                    style={{ height: `clamp(${2 * org.scale}rem, ${2.5 * org.scale}vw + 1rem, ${3 * org.scale}rem)` }}
                    className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {org.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Separador entre grupos (excepto el último) */}
            {gi < groups.length - 1 && (
              <div className="mt-8 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizersSection;