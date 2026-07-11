export default function ForestPredictionIllustration() {
  const bars = [40, 90, 60, 130, 75, 100];
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="var(--color-surface)" />

      <g opacity="0.15" stroke="var(--color-accent)">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" strokeWidth="1" />
        ))}
      </g>

      {/* abstract tree cluster */}
      <g fill="var(--color-accent)">
        <polygon points="70,40 95,90 45,90" opacity="0.5" />
        <polygon points="70,60 100,110 40,110" opacity="0.7" />
        <rect x="65" y="108" width="10" height="18" opacity="0.8" />

        <polygon points="130,55 150,95 110,95" opacity="0.35" />
        <rect x="126" y="93" width="8" height="14" opacity="0.6" />
      </g>

      {/* classification bar chart */}
      <g>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={220 + i * 26}
            y={190 - h}
            width="16"
            height={h}
            rx="2"
            fill="var(--color-accent)"
            opacity={0.3 + i * 0.1}
          />
        ))}
      </g>

      <text
        x="220"
        y="35"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="14"
        fill="var(--color-accent)"
        opacity="0.4"
      >
        class_predict()
      </text>
    </svg>
  );
}
