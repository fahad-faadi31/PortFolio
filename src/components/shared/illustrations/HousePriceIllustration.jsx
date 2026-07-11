export default function HousePriceIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="var(--color-surface)" />

      <g opacity="0.15" stroke="var(--color-accent)">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" strokeWidth="1" />
        ))}
      </g>

      {/* house icon */}
      <g fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.7">
        <polygon points="90,55 60,85 120,85" fill="var(--color-accent)" fillOpacity="0.2" />
        <rect x="65" y="85" width="50" height="42" fill="var(--color-accent)" fillOpacity="0.12" />
        <rect x="83" y="102" width="14" height="25" />
      </g>

      {/* trend line + price tag */}
      <polyline
        points="160,150 200,120 240,135 280,90 330,70"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2"
        opacity="0.6"
      />
      <g fill="var(--color-accent)">
        <circle cx="160" cy="150" r="3" opacity="0.7" />
        <circle cx="200" cy="120" r="3" opacity="0.7" />
        <circle cx="240" cy="135" r="3" opacity="0.7" />
        <circle cx="280" cy="90" r="3" opacity="0.7" />
        <circle cx="330" cy="70" r="4" opacity="0.9" />
      </g>

      <text x="160" y="185" fontFamily="'JetBrains Mono', monospace" fontSize="13" fill="var(--color-accent)" opacity="0.45">
        predict(price)
      </text>
    </svg>
  );
}
