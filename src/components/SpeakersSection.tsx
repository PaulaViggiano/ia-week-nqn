import { useScrollReveal } from "./useScrollReveal";

const speakers = [
  { name: "Santi Siri", role: "Speaker confirmado", img: "/santiagoSiri.png" },
  { name: "Yas Garcia", role: "Speaker confirmado", img: "/yasGarcia.png" },
  { name: "Fredi Vivas", role: "Speaker confirmado", img: "/frediVivas.png" },
  { name: "Alexander Ditzend", role: "Speaker confirmado", img: "/alexanderDitzend.png" },
  { name: "Diego Manfio", role: "Speaker confirmado", img: "/diegoManfio.png" },
  { name: "Silvana Querci", role: "Speaker confirmado", img: "/silvanaQuerci.png" },
];

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center gap-4 mb-10">
    <span className="h-px w-12 bg-primary/30" />
    <span className="font-heading font-bold text-xs uppercase tracking-widest text-primary/70">
      {text}
    </span>
    <span className="h-px w-12 bg-primary/30" />
  </div>
);

const SpeakersSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20">
      <div className="container">
        <h2
          className={`font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-3 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Speakers Confirmados
        </h2>
        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel text="IA Week 2025" />
        </div>

        {/* Grid 2 cols mobile / 3 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {speakers.map((s, i) => (
            <div
              key={s.name}
              className={`glass-card p-5 sm:p-6 text-center group cursor-default
                transition-all duration-700
                hover:scale-105 hover:-translate-y-1
                hover:shadow-[0_0_30px_hsl(195_100%_50%/0.25)]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Avatar con anillo degradado */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                {/* Anillo exterior degradado */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/70 to-accent/30 p-[2px]">
                  <div className="w-full h-full rounded-full bg-secondary overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* Glow al hacer hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_22px_hsl(195_100%_50%/0.45)]" />
              </div>

              <h3 className="font-heading font-bold text-foreground text-sm sm:text-base leading-tight">
                {s.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-primary/70 mt-1 font-heading uppercase tracking-wide">
                {s.role}
              </p>
            </div>
          ))}
        </div>

        {/* Card "+ Speakers" — diferenciada, centrada */}
        <div
          className={`flex justify-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${speakers.length * 120}ms` }}
        >
          <div className="border border-dashed border-primary/30 rounded-sm p-5 sm:p-6 w-44 sm:w-56 text-center hover:border-primary/60 hover:shadow-[0_0_20px_hsl(195_100%_50%/0.15)] transition-all duration-300">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-primary/40 mx-auto mb-4 flex items-center justify-center">
              <span className="font-heading font-bold text-4xl text-primary animate-pulse">+</span>
            </div>
            <h3 className="font-heading font-bold text-foreground text-sm sm:text-base">
              + Speakers
            </h3>
            <p className="text-[10px] sm:text-xs text-primary mt-1 font-heading uppercase tracking-wide">
              Próximamente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
