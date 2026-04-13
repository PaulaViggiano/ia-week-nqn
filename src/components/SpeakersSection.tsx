import { useScrollReveal } from "./useScrollReveal";

const speakers = [
  { name: "Santi Siri", role: "Speaker confirmado", img: "/santiagoSiri.png" },
  { name: "Freddi Vivas", role: "Speaker confirmado", img: "/frediVivas.png" },
  { name: "+ Speakers", role: "Próximamente", img: null },
];

const SpeakersSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section ref={ref} className="py-20">
      <div className="container">
        <h2
          className={`font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Speakers Confirmados
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {speakers.map((s, i) => (
            <div
              key={s.name}
              className={`glass-card p-6 w-56 text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center overflow-hidden">
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-heading font-bold text-2xl text-primary">+</span>
                )}
              </div>
              <h3 className="font-heading font-bold text-foreground">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;