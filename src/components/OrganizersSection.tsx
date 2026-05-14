import { useScrollReveal } from "./useScrollReveal";

/* ─────────── DATOS ─────────── */

const organizan = [
  { name: "Neuquén Capital", logo: "/logos/muniLogo.webp", scale: 1.4 },
  { name: "Municipalidad de Neuquén", logo: "/logos/logoMuni.webp", scale: 1.8 },
  { name: "ENE", logo: "/logos/eneLogo.webp", scale: 1.4 },
  { name: "Polo Científico Tecnológico", logo: "/logos/polo.webp", scale: 1.3 },
  { name: "SAIA", logo: "/logos/saia.webp", scale: 1 },
];

const presentan = [
  { name: "Globant", logo: "/logos/globantLogo.webp", scale: 1 },
  { name: "SIMA Ingeniería", logo: "/logos/sima.webp", scale: 1 },
  { name: "Sancor Seguros", logo: "/logos/sancorLogo.webp", scale: 1 },
  { name: "IFES Educación Superior", logo: "/logos/ifesLogo.webp", scale: 1 },
];

const institucionales = [
  { name: "Gobierno de la Provincia", logo: "/logos/provinciaLogo.webp", scale: 1 },
  { name: "BPN", logo: "/logos/bpnLogo.webp", scale: 1 },

]

const auspician = [
  { name: "ABB", logo: "/logos/abbLogo.webp" },
  { name: "AlitaWare", logo: "/logos/alitaWareLogo.webp" },
  { name: "AWS", logo: "/logos/awsLogo.webp" },
  { name: "Calf", logo: "/logos/calfLogo.webp" },
  { name: "Casablanca Carpas", logo: "/logos/Casablanca.webp" },
  { name: "CAVAL Grafica Integral", logo: "/logos/caval.webp" },
  { name: "CoffeeStore", logo: "/logos/coffeeStoreLogo.webp" },
  { name: "La Colonia", logo: "/logos/coloniaLogo.webp" },
  { name: "COMASEG", logo: "/logos/comasegLogo.webp" },
  { name: "Confluencia", logo: "/logos/confluLogo.webp" },
  { name: "DAVITEL", logo: "/logos/davitelLogo.webp" },
  { name: "Dina", logo: "/logos/dinaLogo.webp" },
  { name: "Endeavor", logo: "/logos/endeavorLogo.webp" },
  { name: "DV Tech", logo: "/logos/dvTechLogo.webp", scale: 1.8 },
  { name: "Instituto Balseiro", logo: "/logos/balseiroLogo.webp" },
  { name: "LCDH", logo: "/logos/LCDHLogo.webp" },
  { name: "Leo Sfeir & Asoc.", logo: "/logos/leoSfeirLogo.webp" },
  { name: "Estudio Litvin", logo: "/logos/lisickiLogo.webp" },
  { name: "HOMELAND Security", logo: "/logos/LogoHomeLand.webp" },
  { name: "TKT Events", logo: "/logos/logoTktevent.webp" },
  { name: "Microsoft", logo: "/logos/microsoftLogo.webp" },
  { name: "Oldelval", logo: "/logos/oldelvalLogo.webp" },
  { name: "OSDE", logo: "/logos/osde.webp" },
  { name: "Pason", logo: "/logos/pasonLogo.webp" },
  { name: "Patagonia Solutions", logo: "/logos/patagoniaSolutionsLogo.webp" },
  { name: "Patagonia Trading Food", logo: "/logos/patagTradingFood.webp" },
  { name: "PwC", logo: "/logos/pwcLogo.webp", scale: 1.5},
  { name: "RESTART", logo: "/logos/restartLogo.webp" },
  { name: "Sancor Seguros", logo: "/logos/sancorLogo.webp" },
  { name: "Universidad Patagonia", logo: "/logos/UniPatagoniaLogo.webp" },
  { name: "Vista", logo: "/logos/vistaLogo.webp" },
  { name: "YPF", logo: "/logos/ypfLogo.webp" },
  { name: "Schlumberger", logo: "/logos/slbLogo.webp", scale: 1.8 },
  { name: "SIAM", logo: "/logos/siamLogo.webp" },
  { name: "Consejo Profesional", logo: "/logos/consejoProvincialLogo.webp" },
  { name: "SAMPE", logo: "/logos/sampeLogo.webp" },
];

const mediosPrincipal = { name: "Infoenergía", logo: "/logos/infoenergiaLogo.webp"};

const mediosSecundarios = [
  { name: "Diario de Río Negro", logo: "/logos/rioNegroLogo.webp" },
  { name: "La Mañana de Neuquén", logo: "/logos/lmNeuquenLogo.webp" },
  { name: "Guía Cores", logo: "/logos/guiaCoresLogo.webp" },
  { name: "Cumbre Neuquén", logo: "/logos/cumbreLogo.webp" },
];

const producen = [
  { name: "MSGN - Marcos Galian", logo: "/logos/MSGN.webp", scale: 1 },
  { name: "MMPRO Eventos", logo: "/logos/mmpro.webp", scale: 1 },
  { name: "Barda Agencia", logo: "/logos/bardaLogo.webp", scale: 1 },
];

/* ─────────── COMPONENTES AUXILIARES ─────────── */

/* Etiqueta con líneas decorativas a los lados */
const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center gap-4 mb-4">
    <span className="h-px w-12 bg-primary/30" />
    <span className="font-heading font-bold text-xs uppercase tracking-widest text-primary/70">
      {text}
    </span>
    <span className="h-px w-12 bg-primary/30" />
  </div>
);

/* Separador entre grupos */
const Divider = () => (
  <div className="mt-6 mx-auto w-64 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
);

/* ─────────── COMPONENTE PRINCIPAL ─────────── */

const OrganizersSection = () => {
  const { ref, visible } = useScrollReveal();
  const marqueeItems = [...auspician, ...auspician, ...auspician, ...auspician];

  return (
    <section ref={ref} className="py-16">
      <div className="container max-w-7xl space-y-8">

        {/* ── 1. ORGANIZAN ── logos grandes, destacados */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel text="Organizan" />
            {/* Desktop: estático */}
          <div className="hidden sm:flex flex-wrap items-end justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {organizan.map((org, oi) => (
              <div
                key={org.name}
                className={`flex flex-col items-center transition-all duration-500 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${oi * 100}ms` }}
              >
                <div className="h-20 sm:h-28 flex items-end justify-center mb-2">
                  <img
                    src={org.logo}
                    alt={org.name}
                    style={{
                      height: `clamp(${2.2 * org.scale}rem, ${3 * org.scale}vw + 1rem, ${3.5 * org.scale}rem)`,
                    }}
                    className="w-auto object-contain opacity-90 hover:opacity-100 transition-opacity logo-glow"
                  />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                  {org.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile: marquee */}
          <div className="sm:hidden relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div
              className="flex gap-8 w-max animate-marquee-scroll"
              style={{ animationDuration: `${organizan.length * 5}s` }}
            >
              {[...organizan, ...organizan, ...organizan, ...organizan].map((org, i) => (
                <div key={`${org.name}-${i}`} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="h-14 flex items-end justify-center">
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="h-10 w-auto object-contain opacity-90"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{org.name}</span>
                </div>
              ))}
            </div>
          </div>
          <Divider />
        </div>

        {/* ── 2. PRESENTAN ── logos medianos, estático desktop, marquee mobile */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <SectionLabel text="Presentan" />

          {/* Desktop */}
          <div className="hidden sm:flex flex-wrap items-end justify-center gap-x-10 gap-y-4">
            {presentan.map((org, oi) => (
              <div
                key={org.name}
                className={`flex flex-col items-center transition-all duration-500 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${150 + oi * 100}ms` }}
              >
                <div className="h-20 sm:h-24 flex items-end justify-center mb-2">
                  <img
                    src={org.logo}
                    alt={org.name}
                    style={{
                       height: `clamp(${1.8 * org.scale}rem, ${2.2 * org.scale}vw + 0.5rem, ${2.8 * org.scale}rem)`,
                      }}
                    className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity logo-light"
                  />
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {org.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile marquee */}
          <div className="sm:hidden relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div
              className="flex gap-8 w-max animate-marquee-scroll"
              style={{ animationDuration: `${presentan.length * 5}s` }}
            >
              {[...presentan, ...presentan, ...presentan, ...presentan].map((org, i) => (
                <div key={`${org.name}-${i}`} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="h-14 flex items-end justify-center">
                    <img
                      src={org.logo}
                      alt={org.name}
                      style={{ height: `clamp(${1.5 * org.scale}rem, ${2 * org.scale}vw, ${2.2 * org.scale}rem)` }}
                      className="w-auto object-contain opacity-80 logo-light"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{org.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />
        </div>

        {/* ── INSTITUCIONALES ── */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <SectionLabel text="Institucionales" />

          {/* Desktop: estático */}
          <div className="hidden sm:flex flex-wrap items-end justify-center gap-x-10 gap-y-4">
            {institucionales.map((org, oi) => (
              <div
                key={org.name}
                className={`flex flex-col items-center transition-all duration-500 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${200 + oi * 100}ms` }}
              >
                <div className="h-20 sm:h-24 flex items-end justify-center mb-2">
                  <img
                    src={org.logo}
                    alt={org.name}
                    style={{
                      height: `clamp(${1.8 * org.scale}rem, ${2.2 * org.scale}vw + 0.5rem, ${2.8 * org.scale}rem)`,
                    }}
                    className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity logo-glow"
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
            <div
              className="flex gap-8 w-max animate-marquee-scroll"
              style={{ animationDuration: `${institucionales.length * 5}s` }}
            >
              {[...institucionales, ...institucionales, ...institucionales, ...institucionales].map((org, i) => (
                <div key={`${org.name}-${i}`} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="h-14 flex items-end justify-center">
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="h-10 w-auto object-contain opacity-80 logo-glow"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{org.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />
        </div>

        {/* ── 3. AUSPICIAN ── marquee siempre, logos más chicos */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <SectionLabel text="Auspician" />

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />

            <div
              className="flex gap-10 w-max animate-marquee-scroll hover:[animation-play-state:paused]"
              style={{ animationDuration: `${auspician.length * 4}s` }}
            >
              {marqueeItems.map((org, i) => (
                <div key={`${org.name}-${i}`} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="h-10 flex items-end justify-center">
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity logo-light"
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">{org.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />
        </div>

        {/* ── 4. MEDIOS DE COMUNICACIÓN ── Infoenergía arriba, 3 medios abajo */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <SectionLabel text="Medios de Comunicación" />

          {/* Infoenergía destacado */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center">
              <img
                src={mediosPrincipal.logo}
                alt={mediosPrincipal.name}
                className="h-16 sm:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity logo-glow"
              />
              <span className="text-sm sm:text-base font-heading font-bold text-muted-foreground mt-3">
                {mediosPrincipal.name}
              </span>
            </div>
          </div>

          {/* 3 medios en fila */}
          {/* 3 medios - Desktop: estático */}
          <div className="hidden sm:flex flex-wrap items-end justify-center gap-x-10 gap-y-4">
            {mediosSecundarios.map((medio, i) => (
              <div
                key={medio.name}
                className={`flex flex-col items-center transition-all duration-500 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${450 + i * 100}ms` }}
              >
                <div className="h-10 sm:h-14 flex items-end justify-center mb-2">
                  <img
                    src={medio.logo}
                    alt={medio.name}
                    className="h-7 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity logo-light"
                  />
                </div>
                <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                  {medio.name}
                </span>
              </div>
            ))}
          </div>

          {/* 3 medios - Mobile: marquee */}
          <div className="sm:hidden relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div
              className="flex gap-8 w-max animate-marquee-scroll"
              style={{ animationDuration: `${mediosSecundarios.length * 5}s` }}
            >
              {[...mediosSecundarios, ...mediosSecundarios, ...mediosSecundarios, ...mediosSecundarios].map((medio, i) => (
                <div key={`${medio.name}-${i}`} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="h-10 flex items-end justify-center">
                    <img src={medio.logo} alt={medio.name} className="h-7 w-auto object-contain opacity-80 logo-light" />
                  </div>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">{medio.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />
        </div>

        {/* ── 5. PRODUCEN ── estático desktop, marquee mobile */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <SectionLabel text="Producen" />

          {/* Desktop */}
          <div className="hidden sm:flex flex-wrap items-end justify-center gap-x-10 gap-y-4">
            {producen.map((org, oi) => (
              <div
                key={org.name}
                className={`flex flex-col items-center transition-all duration-500 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${600 + oi * 100}ms` }}
              >
                <div className="h-14 sm:h-18 flex items-end justify-center mb-2">
                  <img
                    src={org.logo}
                    alt={org.name}
                    style={{
                      height: `clamp(${2 * org.scale}rem, ${2.5 * org.scale}vw + 1rem, ${3 * org.scale}rem)`,
                    }}
                    className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity logo-glow"
                  />
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{org.name}</span>
              </div>
            ))}
          </div>

          {/* Mobile marquee */}
          <div className="sm:hidden relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
            <div
              className="flex gap-8 w-max animate-marquee-scroll"
              style={{ animationDuration: `${producen.length * 5}s` }}
            >
              {[...producen, ...producen, ...producen, ...producen].map((org, i) => (
                <div key={`${org.name}-${i}`} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="h-12 flex items-end justify-center">
                    <img src={org.logo} alt={org.name} className="h-9 w-auto object-contain opacity-80" />
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{org.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OrganizersSection;