const CTA_URL = "https://tktevent.com/pass/event/form/157";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a1628]">
    {/* Fondo gradiente que conecta con el resto del sitio */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b5da6] via-[#0a3a6e] to-[#0a1628] opacity-30" />

    {/* Banner image */}
    <div className="relative z-10 w-full max-w-6xl px-4 mt-20">
      <img
        src="/BannerHero.jpeg"
        alt="IA Week Neuquén 2026 — Del 14 al 16 de Mayo en el Polo Tecnológico"
        className="w-full rounded-2xl shadow-[0_8px_60px_rgba(11,125,218,0.3)]"
      />
    </div>

    {/* CTA + chips debajo del banner */}
    <div className="relative z-10 text-center mt-10 pb-16">
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block gradient-cta font-heading font-bold text-lg md:text-xl px-10 py-4 rounded-full text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform"
      >
        QUIERO MI LUGAR →
      </a>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {["📅 14-16 Mayo", "📍 Polo Tecnológico", "✅ Gratuito"].map(chip => (
          <span key={chip} className="glass-card px-4 py-2 text-sm text-foreground/90">
            {chip}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;