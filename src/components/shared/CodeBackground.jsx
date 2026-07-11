import { motion } from "framer-motion";

// Floating glyphs: symbol, position (%), size, drift distance, duration, delay
const glyphs = [
  { char: "{ }", top: "6%", left: "30%", size: "text-4xl", range: 18, duration: 7, delay: 0 },
  { char: "</>", top: "68%", left: "12%", size: "text-2xl", range: 14, duration: 9, delay: 1 },
  { char: "01", top: "12%", left: "88%", size: "text-3xl", range: 16, duration: 8, delay: 0.5 },
  { char: "( )", top: "80%", left: "85%", size: "text-3xl", range: 20, duration: 10, delay: 1.5 },
  { char: "AI", top: "45%", left: "92%", size: "text-2xl", range: 12, duration: 6.5, delay: 0.8 },
  { char: "10", top: "85%", left: "45%", size: "text-xl", range: 10, duration: 7.5, delay: 2 },
  { char: "[ ]", top: "8%", left: "45%", size: "text-2xl", range: 14, duration: 8.5, delay: 1.2 },
];

/**
 * CodeBackground — decorative layer behind the Hero: a faint grid,
 * floating code-flavored glyphs, and a soft accent glow. Isolated from
 * Hero.jsx so the hero markup stays focused on real content, and this
 * can be reused behind other sections later if desired.
 */
export default function CodeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Radial glow behind main content */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />

      {/* Floating glyphs */}
      {glyphs.map((g, i) => (
        <motion.span
          key={i}
          className={`absolute font-mono font-medium text-accent/20 ${g.size}`}
          style={{ top: g.top, left: g.left }}
          animate={{ y: [0, -g.range, 0] }}
          transition={{
            duration: g.duration,
            delay: g.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {g.char}
        </motion.span>
      ))}
    </div>
  );
}
