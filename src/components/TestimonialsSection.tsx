import { useRef, useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";


const testimonials = [
  {
    name: "SAIA",
    role: "Sociedad Argentina de Inteligencia Artificial",
    photo: "/logos/saia.png",
    logo: "/logos/saia.png",
    quote:
      "La IA no es sólo una herramienta tecnológica: es una oportunidad para transformar industrias, generar talento local y posicionar a la Argentina como referente regional en innovación.",
  },
  {
    name: "Diego Manfio",
    role: "Titular de Ingeniería SIMA SA · ENE Polo Tecnológico",
    photo: "/testimonials/DiegoManfio.png",
    logo: "/logos/ene.png",
    quote:
      "Un evento de IA en Neuquén es una ventana al futuro: ideas, innovación y oportunidades para transformar nuestra región.",
  },
  {
    name: "Gustavo Cabrera",
    role: "IFES Educación Superior",
    photo: "/testimonials/GustavoCabrera.png",
    logo: "/logos/ifesLogo.png",
    quote:
      "Este evento es clave para potenciar el futuro de Vaca Muerta, integrando la IA para el crecimiento y buscando que la tecnología impulse la capacidad de nuestro sector productivo.",
  },
  {
    name: "Marcos Galian",
    role: "MSGN",
    photo: "/testimonials/MarcosGalian.png",
    logo: "/logos/polo.png",
    quote:
      "Este evento es una gran oportunidad para capacitarse, conectar con otros y escuchar a los expertos. Se generará una sinergia de networking altamente positiva para toda la región.",
  },
  {
    name: "Marcela Messineo",
    role: "MMPRO Eventos",
    photo: "/testimonials/MarcelaMessineo.png",
    logo: "/logos/mmpro.png",
    quote:
      "Es una invitación a activar, el potencial de nuestra región. Integramos la IA como una fuerza transformadora que expande el talento e impulsa la innovación.",
  },
];
 
const FlipAvatar = ({ photo, logo, name, index }: { photo: string; logo: string; name: string; index: number }) => (
  <div className="w-14 h-14 flex-shrink-0" style={{ perspective: "600px" }}>
    <div
      className="relative w-full h-full animate-flip-slow"
      style={{ transformStyle: "preserve-3d", animationDelay: `${index * 1.2}s` }}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden [backface-visibility:hidden]">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 rounded-full overflow-hidden bg-secondary/80 flex items-center justify-center p-2 [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <img src={logo} alt={`${name} logo`} className="w-8 h-8 object-contain" />
      </div>
    </div>
  </div>
);
 
const Card = ({ t, index }: { t: (typeof testimonials)[0]; index: number }) => (
  <div className="glass-card p-5 flex gap-4 items-start w-[340px] flex-shrink-0">
    <FlipAvatar photo={t.photo} logo={t.logo} name={t.name} index={index} />
    <div className="flex-1 min-w-0">
      <h3 className="font-heading font-bold text-sm text-foreground">{t.name}</h3>
      <p className="text-xs text-muted-foreground mb-2">{t.role}</p>
      <p className="text-xs text-foreground/70 leading-relaxed italic">"{t.quote}"</p>
    </div>
  </div>
);
 
const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
 
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId: number;
 
    const step = () => {
      if (!paused && track) {
        track.scrollLeft += 0.4;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      animId = requestAnimationFrame(step);
    };
 
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [paused]);
 
  const handleStart = () => setPaused(true);
  const handleEnd = () => setTimeout(() => setPaused(false), 1500);
 
  const items = [...testimonials, ...testimonials, ...testimonials, ...testimonials];
 
  return (
    <section ref={ref} className="gradient-dark-section py-20 overflow-hidden">
      <div className="container">
        <h2
          className={`font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Qué dicen sobre IA Week
        </h2>
      </div>
 
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
 
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto px-8 cursor-grab active:cursor-grabbing scrollbar-hide"
          onMouseEnter={handleStart}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
        >
          {items.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} index={i % testimonials.length} />
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default TestimonialsSection;