import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const CTA_TALKS = "https://tktevent.com/pass/conference/talks/login";

const agenda = [
  {
    day: "Día 1",
    date: "Jueves 14 de Mayo",
    events: [
      { time: "09:00 – 09:50", title: "Acto de Apertura y Recorrido — Conferencia de Prensa", speaker: "" },
      { time: "10:00 – 10:30", title: "IA aplicada a procesos administrativos: Menos fricción, más control", speaker: "Alberto Bressan | ESTRATEGIAS INTEGRALES CONSULTORES" },
      { time: "10:40 – 11:10", title: "Auditoría documental con IA para Oil & Gas", speaker: "Lucas Maidana & Francisco Teixido | ORBITIA" },
      { time: "11:20 – 11:50", title: "Cómo construir nuevas realidades de Gestión", speaker: "Santiago Cordone | PAUSA" },
      { time: "12:00 – 12:30", title: "IA para el futuro: Cómo prepararnos para el futuro del trabajo sin correr detrás de cada herramienta", speaker: "Yas García | JUMP! EDUCACIÓN" },
      { time: "13:00 – 14:00", title: "Break almuerzo", speaker: "" },
      { time: "14:00 – 14:30", title: "Operaciones que se auto-optimizan: El futuro del MES con inteligencia artificial", speaker: "Pablo Mellicovsky | CATIF" },
      { time: "14:40 – 15:10", title: "PatagónicaSTEM: IA que acorta la brecha de género en STEM en la Patagonia", speaker: "Ileana Temí, Natalia Garay & Irene Wietig | PATAGÓNICAS EN_TEC.>" },
      { time: "15:20 – 15:50", title: "RR.HH frente a la IA: De acompañar el cambio a liderar la transformación", speaker: "Mariana Sobisch & Belén Lombi | PRINCIPIA+LADOBETA" },
      { time: "16:00 – 16:30", title: "IA en Oil & Gas: Cómo identificar las iniciativas que realmente generan valor", speaker: "Ernesto Mislej | 7PUENTES" },
    ],
  },
  {
    day: "Día 2",
    date: "Viernes 15 de Mayo",
    events: [
      { time: "10:00 – 10:30", title: "La Brecha de Talento en la colaboración Humano-IA", speaker: "Silvia Anabitarte | SAIA" },
      { time: "10:40 – 11:10", title: "De 0 a un Agente IA — Lecciones de productos", speaker: "Rodrigo Arias | CATIF" },
      { time: "11:20 – 11:50", title: "Presentación: Diplomatura en IA del Balseiro", speaker: "Mariano Cantero | INSTITUTO BALSEIRO" },
      { time: "12:00 – 12:30", title: "La infraestructura invisible de la IA: Data centers, energía y soberanía digital", speaker: "Yas García | JUMP! EDUCACIÓN" },
      { time: "12:40 – 13:00", title: "Reinvención profesional para líderes y equipos en la era IA", speaker: "Analía Tarasiewicz & Hernán Gomez | ALIANZA TARGO HUMAN+TECH®" },
      { time: "13:00 – 14:00", title: "Break almuerzo", speaker: "" },
      { time: "14:00 – 14:30", title: "Operaciones que se auto-optimizan: El futuro del MES con inteligencia artificial II", speaker: "Pablo Mellicovsky | CATIF" },
      { time: "14:40 – 15:10", title: "De la inteligencia artificial al impacto operativo: Nuevos escenarios estratégicos para energía y logística", speaker: "Paolo Donizetti | ITBA" },
      { time: "15:20 – 15:50", title: "Fin de la intuición y de la informalidad. Decisiones y análisis basados en datos en la era de la IA", speaker: "Mariano de la Riestra & Maximiliano Arias | TECNOPATAGONIA" },
      { time: "16:00 – 17:30", title: "Mentalidad de Crecimiento en IA", speaker: "Fredi Vivas | FUNDACIÓN OSDE" },
    ],
  },
  {
    day: "Día 3",
    date: "Sábado 16 de Mayo",
    events: [
      { time: "10:00 – 10:30", title: "Pensando en IA", speaker: "Pablo Aristizabal | FLEXFLIX" },
      { time: "10:40 – 11:10", title: "IA aplicada a PyMEs: Herramientas esenciales para optimizar procesos y reducir costos", speaker: "Gonzalo Echegaray | BIZION ESCUELA DE NEGOCIOS" },
      { time: "11:20 – 11:50", title: "IA aplicada a procesos administrativos: Menos fricción, más control II", speaker: "Alberto Bressan | ESTRATEGIAS INTEGRALES CONSULTORES" },
      { time: "12:00 – 12:30", title: "Asistentes de IA y la nueva era de los agentes inteligentes", speaker: "Patricio Rouan | SAIA" },
      { time: "12:30 – 13:00", title: "Hábitos inteligentes en la era de la inteligencia artificial", speaker: "Dr. Facundo Pereyra" },
      { time: "13:00 – 14:00", title: "Break almuerzo", speaker: "" },
      { time: "14:00 – 14:30", title: "Claude: La IA del momento", speaker: "Gustavo Cabrera | IFES+ENE+IALAB" },
      { time: "14:30 – 15:00", title: "Tecnologías educativas e IA en la gestión de los residuos. Experiencia Recibot", speaker: "Javier Peña | RECIBOT" },
      { time: "15:00 – 15:30", title: "Oportunidades reales para PyMEs, empresas y profesionales en un entorno cada vez más digital, automatizado y competitivo", speaker: "Silvana Querci | QUERCI Y SOULÉS" },
      { time: "16:00 – 17:30", title: "Prompteo en vivo: El futuro se programa hablando", speaker: "Santi Siri | SIMA" },
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
          className={`font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-2 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Cronograma
        </h2>
        <p
          className={`text-center text-muted-foreground text-sm mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Auditorio Central — Planta Baja
        </p>

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

        {/* CTA Inscripción */}
        <div className="text-center mb-8">
          <a
            href={CTA_TALKS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gradient-cta font-heading font-bold text-sm px-6 py-3 text-primary-foreground hover:scale-105 transition-transform"
          >
            📝 Anotate en las charlas que quieras asistir
          </a>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {agenda[activeDay].events.map((ev, i) => (
            <div
              key={`${ev.time}-${i}`}
              className={`flex gap-3 sm:gap-4 py-4 border-b border-border/20 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-heading font-bold text-primary text-xs sm:text-sm w-[90px] sm:w-[120px] flex-shrink-0">
                {ev.time}
              </span>
              <div className="flex-1">
                {ev.speaker && (
                  <p className="font-heading font-bold text-foreground text-sm sm:text-base">
                    {ev.speaker}
                  </p>
                )}
                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    ev.speaker
                      ? "text-muted-foreground"
                      : "font-heading font-bold text-foreground text-sm sm:text-base"
                  }`}
                >
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