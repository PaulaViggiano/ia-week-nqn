import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const TARGET = new Date("2026-05-14T12:00:00Z"); // 09:00 ART = 12:00 UTC

const calc = () => {
  const diff = Math.max(0, TARGET.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

const CountdownSection = () => {
  const [time, setTime] = useState(calc);
  const { ref, visible } = useScrollReveal();

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Días", value: time.days },
    { label: "Horas", value: time.hours },
    { label: "Minutos", value: time.minutes },
    { label: "Segundos", value: time.seconds },
  ];

  return (
    <section ref={ref} className="gradient-dark-section py-16">
      <div
        className={`container text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
          Comienza en
        </h2>
        <div className="flex justify-center gap-4 md:gap-8">
          {units.map(u => (
            <div key={u.label} className="glass-card glow-cyan p-4 md:p-6 min-w-[70px] md:min-w-[100px]">
              <span className="block font-heading font-black text-3xl md:text-5xl text-primary">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
