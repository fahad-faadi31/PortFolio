export default function RestaurantSystemIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="var(--color-surface)" />

      <g opacity="0.15" stroke="var(--color-accent)">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" strokeWidth="1" />
        ))}
      </g>

      {/* terminal window */}
      <g>
        <rect
          x="50"
          y="45"
          width="180"
          height="120"
          rx="8"
          fill="var(--color-background)"
          stroke="var(--color-accent)"
          strokeOpacity="0.4"
        />
        <rect x="50" y="45" width="180" height="22" rx="8" fill="var(--color-accent)" opacity="0.15" />
        <circle cx="65" cy="56" r="3" fill="var(--color-accent)" opacity="0.5" />
        <circle cx="77" cy="56" r="3" fill="var(--color-accent)" opacity="0.35" />
        <circle cx="89" cy="56" r="3" fill="var(--color-accent)" opacity="0.35" />

        <text x="62" y="90" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="var(--color-accent)" opacity="0.6">
          &gt; Table 4: Order #12
        </text>
        <text x="62" y="108" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="var(--color-accent)" opacity="0.45">
          &gt; Add item...
        </text>
        <text x="62" y="126" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="var(--color-accent)" opacity="0.45">
          &gt; Bill: $24.50
        </text>
        <text x="62" y="144" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="var(--color-accent)" opacity="0.75">
          &gt; _
        </text>
      </g>

      {/* plate / menu icon accent */}
      <g stroke="var(--color-accent)" fill="none" strokeWidth="2" opacity="0.5">
        <circle cx="320" cy="110" r="42" />
        <circle cx="320" cy="110" r="26" />
      </g>
    </svg>
  );
}
