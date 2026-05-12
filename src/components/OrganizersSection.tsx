import { useScrollReveal } from "./useScrollReveal";

const staticGroups = [
  {
    label: "Organizan",
    orgs: [
      { name: "Neuquén Capital", logo: "/logos/muniLogo.png", scale: 1.3 },
      { name: "Municipalidad de Neuquén", logo: "/logos/logoMuni.png", scale: 2 },
      { name: "Polo Científico Tecnológico", logo: "/logos/polo.png", scale: 1.2 },
      { name: "SAIA", logo: "/logos/saia.png", scale: 1.3 },
    ],
  },
  {
    label: "Producen",
    orgs: [
      { name: "MSGN", logo: "/logos/MSGN.png", scale: 1 },
      { name: "MMPRO Eventos", logo: "/logos/mmpro.png", scale: 1 },
      { name: "TKT eventos", logo: "/logos/logoTktevent.png", scale: 1.6 },
    ],
  },
];

const Coorganizan = [
  { name: "ENE", logo: "/logos/ene.png" },
  { name: "IFES Educación Superior", logo: "/logos/ifesLogo.png" },
  { name: "OSDE", logo: "/logos/osde.png" },
  { name: "Pason", logo: "/logos/pasonLogo.png" },
  { name: "Infoenergía", logo: "/logos/infoenergiaLogo.png" },
  { name: "Estudio Litvin", logo: "/logos/lisickiLogo.png" },
  { name: "AlitaWare", logo: "/logos/alitaWareLogo.png" },
  { name: "DV Tech", logo: "/logos/dvTechLogo.png" },
  { name: "Sancor Seguros", logo: "/logos/sancorLogo.png" },
  { name: "Patagonia Trading Food", logo: "/logos/patagTradingFood.png" },
  { name: "Oldelval Oleoductos del valle", logo: "/logos/oldelvalLogo.png" },
  { name: "SIMA Ingeniería", logo: "/logos/sima.png" },
  { name: "DAVITEL", logo: "/logos/davitelLogo.png" },
  { name: "CAVAL Grafica Integral", logo: "/logos/caval.png" },
  { name: "La Colonia", logo: "/logos/coloniaLogo.png" },
  { name: "HOMELAND Security", logo: "/logos/LogoHomeLand.png" },
  { name: "Confluencia", logo: "/logos/confluLogo.png" },
  { name: "Tech Biz", logo: "/logos/techBizLogo.png" },
  { name: "Dina", logo: "/logos/dinaLogo.png" },
  { name: "Casablanca Carpas", logo: "/logos/Casablanca.png" },
];

const StaticGroup = ({
  group,
  gi,
  visible,
}: {
  group: (typeof staticGroups)[0];
  gi: number;
  visible: boolean;
}) => {
  const marqueeItems = [...group.orgs, ...group.orgs, ...group.orgs, ...group.orgs];

  return (
    <div
      className={`text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${gi * 200}ms` }}
    >
      <div className="flex items-center justify-center gap-4 mb-3">
        <span className="h-px w-12 bg-primary/30" />
        <span className="font-heading font-bold text-xs uppercase tracking-widest text-primary/70">
          {group.label}
        </span>
        <span className="h-px w-12 bg-primary/30" />
      </div>

      {/* Desktop: estático */}
      <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
        {group.orgs.map((org, oi) => (
          <div
            key={org.name}
            className={`flex flex-col items-center transition-all duration-500 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${gi * 200 + oi * 100}ms` }}
          >
            <div className="h-20 sm:h-24 flex items-end justify-center mb-2">
              <img
                src={org.logo}
                alt={org.name}
                style={{
                  height: `clamp(${2 * org.scale}rem, ${2.5 * org.scale}vw + 1rem, ${3 * org.scale}rem)`,
                }}
                className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {org.name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="sm:hidden relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-8 w-max animate-marquee-scroll"
            style={{ animationDuration: `${group.orgs.length * 5}s` }}
          >

          {marqueeItems.map((org, i) => (
            <div key={`${org.name}-${i}`} className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="h-14 flex items-end justify-center">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-10 w-auto object-contain opacity-80"
                />
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{org.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
};

const OrganizersSection = () => {
  const { ref, visible } = useScrollReveal();
  const marqueeItems = [...Coorganizan, ...Coorganizan, ...Coorganizan, ...Coorganizan];

  return (
    <section ref={ref} className="py-16">
      <div className="container max-w-4xl space-y-6">
        {/* 1. Organizan — estático */}
        <StaticGroup group={staticGroups[0]} gi={0} visible={visible} />

        {/* 2. Coorganizan — marquee en el medio */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-12 bg-primary/30" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-primary/70">
              Coorganizan
            </span>
            <span className="h-px w-12 bg-primary/30" />
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-10 w-max animate-marquee-scroll hover:[animation-play-state:paused]"
              style={{ animationDuration: `${Coorganizan.length * 5}s` }}
              >
              {marqueeItems.map((org, i) => (
                <div
                  key={`${org.name}-${i}`}
                  className="flex flex-col items-center gap-2 flex-shrink-0"
                >
                <div className="h-9 flex items-end justify-center">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {org.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* 3. Producen — estático */}
        {/* 3. Producen — siempre estático */}
<div
  className={`text-center transition-all duration-700 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
  style={{ transitionDelay: "400ms" }}
>
  <div className="flex items-center justify-center gap-4 mb-3">
    <span className="h-px w-12 bg-primary/30" />
    <span className="font-heading font-bold text-xs uppercase tracking-widest text-primary/70">
      Producen
    </span>
    <span className="h-px w-12 bg-primary/30" />
  </div>
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
    {staticGroups[1].orgs.map((org, oi) => (
      <div
        key={org.name}
        className={`flex flex-col items-center transition-all duration-500 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{ transitionDelay: `${400 + oi * 100}ms` }}
      >
        <div className="h-16 sm:h-24 flex items-end justify-center mb-2">
          <img
            src={org.logo}
            alt={org.name}
            style={{
              height: `clamp(${2 * org.scale}rem, ${2.5 * org.scale}vw + 1rem, ${3 * org.scale}rem)`,
            }}
            className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">{org.name}</span>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default OrganizersSection;