const NeuralDecos = () => (
  <>
    {/* Derecha */}
    <svg
      className="fixed right-0 top-1/2 -translate-y-1/2 w-[clamp(160px,25vw,340px)] opacity-[0.07] pointer-events-none z-[1] "
      viewBox="0 0 200 300"
      fill="none"
      stroke="rgba(0,229,255,0.6)"
      strokeWidth="0.5"
    >
      <circle cx="100" cy="30" r="6" fill="rgba(0,229,255,0.3)" />
      <circle cx="160" cy="90" r="5" fill="rgba(0,229,255,0.3)" />
      <circle cx="40" cy="90" r="5" fill="rgba(0,229,255,0.3)" />
      <circle cx="170" cy="180" r="4" fill="rgba(0,229,255,0.3)" />
      <circle cx="30" cy="180" r="4" fill="rgba(0,229,255,0.3)" />
      <circle cx="100" cy="150" r="6" fill="rgba(0,229,255,0.3)" />
      <circle cx="100" cy="250" r="5" fill="rgba(0,229,255,0.3)" />
      <circle cx="50" cy="270" r="4" fill="rgba(0,229,255,0.3)" />
      <circle cx="150" cy="270" r="4" fill="rgba(0,229,255,0.3)" />
      <line x1="100" y1="30" x2="160" y2="90" />
      <line x1="100" y1="30" x2="40" y2="90" />
      <line x1="160" y1="90" x2="170" y2="180" />
      <line x1="40" y1="90" x2="30" y2="180" />
      <line x1="160" y1="90" x2="100" y2="150" />
      <line x1="40" y1="90" x2="100" y2="150" />
      <line x1="170" y1="180" x2="100" y2="250" />
      <line x1="30" y1="180" x2="100" y2="250" />
      <line x1="100" y1="250" x2="50" y2="270" />
      <line x1="100" y1="250" x2="150" y2="270" />
      <line x1="170" y1="180" x2="150" y2="270" />
      <line x1="30" y1="180" x2="50" y2="270" />
    </svg>

    {/* Izquierda */}
    <svg
      className="fixed left-0 bottom-[15%] w-[clamp(120px,20vw,260px)] opacity-[0.05] pointer-events-none z-[1] "
      viewBox="0 0 200 250"
      fill="none"
      stroke="rgba(0,229,255,0.6)"
      strokeWidth="0.5"
    >
      <circle cx="100" cy="20" r="5" fill="rgba(0,229,255,0.3)" />
      <circle cx="50" cy="80" r="6" fill="rgba(0,229,255,0.3)" />
      <circle cx="150" cy="80" r="4" fill="rgba(0,229,255,0.3)" />
      <circle cx="30" cy="160" r="5" fill="rgba(0,229,255,0.3)" />
      <circle cx="170" cy="160" r="5" fill="rgba(0,229,255,0.3)" />
      <circle cx="100" cy="120" r="7" fill="rgba(0,229,255,0.3)" />
      <circle cx="80" cy="220" r="4" fill="rgba(0,229,255,0.3)" />
      <circle cx="140" cy="230" r="5" fill="rgba(0,229,255,0.3)" />
      <line x1="100" y1="20" x2="50" y2="80" />
      <line x1="100" y1="20" x2="150" y2="80" />
      <line x1="50" y1="80" x2="100" y2="120" />
      <line x1="150" y1="80" x2="100" y2="120" />
      <line x1="50" y1="80" x2="30" y2="160" />
      <line x1="150" y1="80" x2="170" y2="160" />
      <line x1="100" y1="120" x2="30" y2="160" />
      <line x1="100" y1="120" x2="170" y2="160" />
      <line x1="30" y1="160" x2="80" y2="220" />
      <line x1="170" y1="160" x2="140" y2="230" />
      <line x1="80" y1="220" x2="140" y2="230" />
    </svg>
  </>
);

export default NeuralDecos;