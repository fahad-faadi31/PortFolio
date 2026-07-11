export default function SpamDetectionIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="var(--color-surface)" />

      <g opacity="0.15" stroke="var(--color-accent)">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" strokeWidth="1" />
        ))}
      </g>

      {/* chat bubbles */}
      <g>
        <rect x="55" y="55" width="120" height="34" rx="10" fill="var(--color-accent)" fillOpacity="0.15" stroke="var(--color-accent)" strokeOpacity="0.5" />
        <text x="68" y="76" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="var(--color-accent)" opacity="0.6">
          "Hey, are we still on?"
        </text>

        <rect x="80" y="100" width="150" height="34" rx="10" fill="var(--color-accent)" fillOpacity="0.06" stroke="var(--color-accent)" strokeOpacity="0.3" />
        <text x="93" y="121" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="var(--color-accent)" opacity="0.35">
          "You won a free prize!"
        </text>
      </g>

      {/* filter / shield icon marking spam */}
      <g transform="translate(300,95)" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.7">
        <path d="M0,-30 L28,-20 L28,5 C28,25 12,38 0,42 C-12,38 -28,25 -28,5 L-28,-20 Z" fill="var(--color-accent)" fillOpacity="0.12" />
        <line x1="-10" y1="0" x2="10" y2="0" strokeWidth="3" />
      </g>

      <text x="55" y="185" fontFamily="'JetBrains Mono', monospace" fontSize="13" fill="var(--color-accent)" opacity="0.45">
        CountVectorizer → classify()
      </text>
    </svg>
  );
}
