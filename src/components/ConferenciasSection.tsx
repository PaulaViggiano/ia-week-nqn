import { useState, useEffect } from "react";
import { useScrollReveal } from "./useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const auditorios = [
  {
    id: "main",
    label: "Auditorio Main",
    dias: [
      {
        label: "Jueves 14",
        fecha: "Jueves 14 de Mayo",
        imgs: [
          "/auditorioMain/jueves/alexander.webp",
          "/auditorioMain/jueves/roberto.webp",
          "/auditorioMain/jueves/matias.webp",
          "/auditorioMain/jueves/infotech.webp",
          "/auditorioMain/jueves/miguel.webp",
          "/auditorioMain/jueves/manfio.webp",
          "/auditorioMain/jueves/tecpetrol.webp",
          "/auditorioMain/jueves/nicolas.webp",
          "/auditorioMain/jueves/ene.webp",
          "/auditorioMain/jueves/geraldin.webp",
          "/auditorioMain/jueves/emiliano.webp",
          "/auditorioMain/jueves/esteban.webp",
          "/auditorioMain/jueves/sima.webp",
        ],
      },
      {
        label: "Viernes 15",
        fecha: "Viernes 15 de Mayo",
        imgs: [
          "/auditorioMain/viernes/vanesa.webp",
          "/auditorioMain/viernes/romero.webp",
          "/auditorioMain/viernes/gustavo.webp",
          "/auditorioMain/viernes/daniel.webp",
          "/auditorioMain/viernes/estefania.webp",
          "/auditorioMain/viernes/vista.webp",
          "/auditorioMain/viernes/microsoft.webp",
          "/auditorioMain/viernes/alitaware.webp",
          "/auditorioMain/viernes/carlos.webp",
        ],
      },
      {
        label: "Sábado 16",
        fecha: "Sábado 16 de Mayo",
        imgs: [
          "/auditorioMain/sabado/fabrizio.webp",
          "/auditorioMain/sabado/pozzi.webp",
          "/auditorioMain/sabado/pason.webp",
          "/auditorioMain/sabado/sfeir.webp",
          "/auditorioMain/sabado/slb.webp",
          "/auditorioMain/sabado/microsoft.webp",
          "/auditorioMain/sabado/ypf.webp",
          "/auditorioMain/sabado/ruben.webp",
        ],
      },
    ],
  },
  {
    id: "central",
    label: "Auditorio Central",
    dias: [
      {
        label: "Jueves 14",
        fecha: "Jueves 14 de Mayo",
        imgs: [
          "/auditorioCentral/jueves/alberto.webp",
          "/auditorioCentral/jueves/lucas.webp",
          "/auditorioCentral/jueves/pausa.webp",
          "/auditorioCentral/jueves/yas.webp",
          "/auditorioCentral/jueves/pablo.webp",
          "/auditorioCentral/jueves/ileana.webp",
          "/auditorioCentral/jueves/mariana.webp",
          "/auditorioCentral/jueves/ernesto.webp",
        ],
      },
      {
        label: "Viernes 15",
        fecha: "Viernes 15 de Mayo",
        imgs: [
          "/auditorioCentral/viernes/silvia.webp",
          "/auditorioCentral/viernes/rodrigo.webp",
          "/auditorioCentral/viernes/mariano.webp",
          "/auditorioCentral/viernes/yas.webp",
          "/auditorioCentral/viernes/analia.webp",
          "/auditorioCentral/viernes/pablo.webp",
          "/auditorioCentral/viernes/paolo.webp",
          "/auditorioCentral/viernes/tecnopatagonia.webp",
          "/auditorioCentral/viernes/fredi.webp",
        ],
      },
      {
        label: "Sábado 16",
        fecha: "Sábado 16 de Mayo",
        imgs: [
          "/auditorioCentral/sabado/pablo.webp",
          "/auditorioCentral/sabado/gonzalo.webp",
          "/auditorioCentral/sabado/alberto.webp",
          "/auditorioCentral/sabado/patricio.webp",
          "/auditorioCentral/sabado/facundo.webp",
          "/auditorioCentral/sabado/gustavo.webp",
          "/auditorioCentral/sabado/javier.webp",
          "/auditorioCentral/sabado/silvana.webp",
          "/auditorioCentral/sabado/santi.webp",
        ],
      },
    ],
  },
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

const ConferenciasSection = () => {
  const { ref, visible } = useScrollReveal();
  const [activeAuditorio, setActiveAuditorio] = useState(0);
  const [activeDia, setActiveDia] = useState(0);

  useEffect(() => {
    auditorios.forEach(a =>
      a.dias.forEach(d =>
        d.imgs.forEach(src => { new Image().src = src; })
      )
    );
  }, []);

  const auditorio = auditorios[activeAuditorio];
  const dia = auditorio.dias[activeDia];

  return (
    <section ref={ref} className="py-20">
      <div className="container max-w-6xl">
        {/* Título */}
        <h2
          className={`font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-3 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Conferencias
        </h2>
        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel text="IA Week 2025" />
        </div>

        {/* Tabs auditorios */}
        <div
          className={`flex justify-center gap-3 mb-6 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {auditorios.map((a, i) => (
            <button
              key={a.id}
              onClick={() => { setActiveAuditorio(i); setActiveDia(0); }}
              className={`px-5 py-2 font-heading font-bold text-sm transition-all ${
                activeAuditorio === i
                  ? "gradient-cta text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        {/* Tabs días */}
        <div
          className={`flex justify-center gap-2 mb-8 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {auditorio.dias.map((d, i) => (
            <button
              key={d.label}
              onClick={() => setActiveDia(i)}
              className={`px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-all border ${
                activeDia === i
                  ? "border-primary text-primary"
                  : "border-border/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Fecha activa */}
        <p
          className={`text-center text-muted-foreground text-sm mb-8 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {dia.fecha} — {auditorio.label}
        </p>

        {/* Carrusel */}
        <div
          className={`transition-all duration-700 delay-300 px-12 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {dia.imgs.map((src, i) => (
                <CarouselItem
                  key={`${src}-${i}`}
                  className="pl-3 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="glass-card overflow-hidden group hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(195_100%_50%/0.25)] transition-all duration-300">
                    <img
                      src={src}
                      alt={`Conferencista ${i + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/40 text-primary hover:bg-primary/10" />
            <CarouselNext className="border-primary/40 text-primary hover:bg-primary/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ConferenciasSection;
