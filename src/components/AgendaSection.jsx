import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const agenda = [
  {
    day: "Día 1",
    date: "14 de Mayo",
    events: [
      { time: "10:00 – 10:45", title: "Apertura Oficial del Evento", speaker: "" },
      { time: "11:00 – 11:45", title: "Los albores de la economía agéntica", speaker: "Alexander Ditzend" },
      { time: "12:00 – 12:45", title: "Cirion Technologies", speaker: "Cirion Technologies" },
      { time: "13:00 – 14:00", title: "Break almuerzo", speaker: "" },
      { time: "14:00 – 14:45", title: "Presentación: Diplomatura en IA del Balseiro", speaker: "Rubén Sosa & Mariano Cantero" },
      { time: "15:00 – 15:45", title: "ENEIALAB: El faro de referencia para las empresas de NQN en el mundo de la IA", speaker: "Diego Manfio & Gustavo Cabrera" },
      { time: "16:00 – 16:45", title: "Panel: IA aplicada a Marketing y Comercialización. Caso de uso ENE IA Lab", speaker: "Rodrigo Bustos, Fernando Acuña & Axel Entraigas" },
      { time: "17:00 – 17:45", title: "Título a confirmar", speaker: "ENDEAVOR" },
      { time: "17:45 – 18:00", title: "Cierre de la jornada", speaker: "" },
    ],
  },
  {
    day: "Día 2",
    date: "15 de Mayo",
    events: [
      { time: "9:30 – 10:15", title: "Compliance", speaker: "Vanesa Ruiz" },
      { time: "10:15 – 11:00", title: "Título a confirmar", speaker: "Maximiliano Romero — Thompson Reuters" },
      { time: "11:00 – 11:45", title: "Usar la IA con inteligencia", speaker: "Gustavo Cabrera" },
      { time: "11:45 – 12:30", title: "Restart IA", speaker: "Restart IA" },
      { time: "13:00 – 14:00", title: "Break almuerzo", speaker: "" },
      { time: "14:00 – 14:45", title: "De la ilusión de la IA...a la realidad cuántica", speaker: "Facundo Díaz Q99" },
      { time: "15:00 – 15:45", title: "Título a confirmar", speaker: "Microsoft" },
      { time: "16:00 – 16:45", title: "IA de Alta Exigencia: Lecciones sobre Calidad de Datos y Adopción Organizacional", speaker: "Marcelo Artigas & Gustavo Guaragna (Alitaware)" },
      { time: "17:00 – 17:45", title: "Título a confirmar", speaker: "Fredi Vivas" },
      { time: "17:45 – 18:00", title: "Cierre de la jornada", speaker: "" },
    ],
  },
  {
    day: "Día 3",
    date: "16 de Mayo",
    events: [
      { time: "9:30 – 10:15", title: "Título a confirmar", speaker: "AIONIX — Fabrizio Guaglianone" },
      { time: "10:15 – 11:00", title: "Panel: IA en Infraestructura y Energía", speaker: "Gloria Vailatti (Oracle) & Bruno Ruyu (Teramont) & representante YPF" },
      { time: "11:00 – 11:45", title: "Título a confirmar", speaker: "Justoken — Martin González Raskovsky" },
      { time: "11:45 – 12:30", title: "Título a confirmar", speaker: "Dr. Facundo Pereyra" },
      { time: "13:00 – 14:00", title: "Break almuerzo", speaker: "" },
      { time: "14:00 – 14:45", title: "Título a confirmar", speaker: "SIMA" },
      { time: "15:00 – 15:45", title: "Título a confirmar", speaker: "Balanz" },
      { time: "16:00 – 16:45", title: "Título a confirmar", speaker: "ABB" },
      { time: "17:00 – 17:45", title: "Título a confirmar", speaker: "Santi Siri" },
      { time: "17:45 – 18:00", title: "Cierre del evento", speaker: "" },
    ],
  },
];

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20">
      <div className="container max-w-3xl">
        <h2
          className={`font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Cronograma
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {agenda.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              className={`px-4 sm:px-6 py-2 font-heading font-bold text-sm sm:text-base transition-all ${
                activeDay === i
                  ? "gradient-cta text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="block">{d.day}</span>
              <span className="block text-xs font-body font-normal">{d.date}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {agenda[activeDay].events.map((ev, i) => (
            <div
              key={`${ev.time}-${i}`}
              className={`flex gap-4 py-4 border-b border-border/20 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-heading font-bold text-primary text-sm sm:text-base w-[110px] sm:w-[130px] flex-shrink-0">
                {ev.time}
              </span>
             <div className="flex-1">
                {ev.speaker && (
                   <p className="font-heading font-bold text-foreground text-sm sm:text-base">
                    {ev.speaker}
                  </p>
                )}
                <p className={`text-xs sm:text-sm mt-1 ${ev.speaker ? "text-muted-foreground" : "font-heading font-bold text-foreground text-sm sm:text-base"}`}>
                   {ev.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;