const NeuralHeadIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Head profile facing right */}
    <path
      d="M120 30 C150 35, 170 60, 172 90 C174 110, 168 130, 158 145 C150 158, 140 168, 135 180 L130 195 C128 200, 122 205, 115 205 L95 205 C90 205, 86 200, 88 195 L90 185 C70 180, 55 165, 48 145 C40 120, 45 90, 60 70 C75 50, 95 35, 120 30Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Forehead curve */}
    <path
      d="M120 30 C135 28, 155 40, 165 55"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    {/* Neural network nodes */}
    <circle cx="100" cy="70" r="5" fill="currentColor" />
    <circle cx="130" cy="60" r="4" fill="currentColor" />
    <circle cx="150" cy="85" r="5" fill="currentColor" />
    <circle cx="140" cy="115" r="4.5" fill="currentColor" />
    <circle cx="115" cy="100" r="6" fill="currentColor" />
    <circle cx="85" cy="95" r="4" fill="currentColor" />
    <circle cx="90" cy="130" r="5" fill="currentColor" />
    <circle cx="120" cy="145" r="4" fill="currentColor" />
    <circle cx="155" cy="130" r="3.5" fill="currentColor" />
    <circle cx="75" cy="115" r="3" fill="currentColor" />
    <circle cx="105" cy="165" r="3.5" fill="currentColor" />
    {/* Neural connections */}
    <line x1="100" y1="70" x2="130" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="130" y1="60" x2="150" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="100" y1="70" x2="115" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="115" y1="100" x2="150" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="115" y1="100" x2="140" y2="115" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="85" y1="95" x2="115" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="85" y1="95" x2="100" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="85" y1="95" x2="90" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="90" y1="130" x2="120" y2="145" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="140" y1="115" x2="155" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="140" y1="115" x2="120" y2="145" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="90" y1="130" x2="75" y2="115" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="120" y1="145" x2="105" y2="165" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="130" y1="60" x2="115" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="90" y1="130" x2="115" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Floating molecules left side */}
    <g opacity="0.5">
      <circle cx="35" cy="90" r="3" fill="currentColor" />
      <circle cx="25" cy="80" r="2" fill="currentColor" />
      <circle cx="45" cy="78" r="2" fill="currentColor" />
      <circle cx="30" cy="100" r="2" fill="currentColor" />
      <line x1="35" y1="90" x2="25" y2="80" stroke="currentColor" strokeWidth="1.5" />
      <line x1="35" y1="90" x2="45" y2="78" stroke="currentColor" strokeWidth="1.5" />
      <line x1="35" y1="90" x2="30" y2="100" stroke="currentColor" strokeWidth="1.5" />
    </g>
    <g opacity="0.35">
      <circle cx="45" cy="130" r="2.5" fill="currentColor" />
      <circle cx="35" cy="122" r="1.5" fill="currentColor" />
      <circle cx="55" cy="125" r="1.5" fill="currentColor" />
      <circle cx="40" cy="140" r="1.5" fill="currentColor" />
      <line x1="45" y1="130" x2="35" y2="122" stroke="currentColor" strokeWidth="1" />
      <line x1="45" y1="130" x2="55" y2="125" stroke="currentColor" strokeWidth="1" />
      <line x1="45" y1="130" x2="40" y2="140" stroke="currentColor" strokeWidth="1" />
    </g>
    <g opacity="0.25">
      <circle cx="55" cy="160" r="2" fill="currentColor" />
      <circle cx="48" cy="153" r="1.5" fill="currentColor" />
      <circle cx="63" cy="155" r="1.5" fill="currentColor" />
      <line x1="55" y1="160" x2="48" y2="153" stroke="currentColor" strokeWidth="1" />
      <line x1="55" y1="160" x2="63" y2="155" stroke="currentColor" strokeWidth="1" />
    </g>
  </svg>
);

export default NeuralHeadIcon;
