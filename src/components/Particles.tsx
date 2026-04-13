import { useMemo } from "react";

const Particles = () => {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 15}s`,
      duration: `${Math.random() * 10 + 15}s`,
    })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;