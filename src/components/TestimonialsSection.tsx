import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    name: "SAIA",
    role: "Sociedad Argentina de Inteligencia Artificial",
    photo: "/testimonials/saia.png",
    quote:
      "La IA no es sólo una herramienta tecnológica: es una oportunidad para transformar industrias, generar talento local y posicionar a la Argentina como referente regional en innovación.",
  },
  {
    name: "Diego Manfio",
    role: "Titular de Ingeniería SIMA SA · ENE Polo Tecnológico",
    photo: "/testimonials/DiegoManfio.png",
    quote:
      "Un evento de IA en Neuquén es una ventana al futuro: ideas, innovación y oportunidades para transformar nuestra región.",
  },
  {
    name: "Gustavo Cabrera",
    role: "IFES Educación Superior",
    photo: "/testimonials/GustavoCabrera.png",
    quote:
      "Este evento es clave para potenciar el futuro de Vaca Muerta.",
  },
  {
    name: "Marcos Galian",
    role: "MSGN",
    photo: "/testimonials/MarcosGalian.png",
    quote:
      "Este evento es una gran oportunidad para conocer casos de éxito, capacitarse, conectar con otros y escuchar a los expertos.",
  },
  {
    name: "Marcela Messineo",
    role: "MMPRO Eventos",
    photo: "/testimonials/MarcelaMessineo.png",
    quote:
      "Integramos la IA como una fuerza transformadora que expande el talento, impulsa la innovación y eleva todo nuestro ecosistema productivo.",
  },
];


 
const Card = ({ t, i }: { t: (typeof testimonials)[0]; i: number }) => (
  <div className="glass-card p-5 flex gap-4 items-start w-[340px] flex-shrink-0">
    <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
    <div className="flex-1 min-w-0">
      <h3 className="font-heading font-bold text-sm text-foreground">
        {t.name}
      </h3>
      <p className="text-xs text-muted-foreground mb-2">{t.role}</p>
      <p className="text-xs text-foreground/70 leading-relaxed italic">
        "{t.quote}"
      </p>
    </div>
  </div>
);
 
const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();
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
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(210,100%,6%)] to-transparent z-10 pointer-events-none" />
 
        <div className="testimonials-track flex gap-6 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} i={i % testimonials.length} />
          ))}
        </div>
      </div>
 
      <style>{`
        @keyframes testimonials-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-track {
          animation: testimonials-scroll 80s linear infinite;
          width: max-content;
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
 
export default TestimonialsSection;