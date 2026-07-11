import { motion } from "framer-motion";

/**
 * SectionHeading — the eyebrow-label + title + optional description pattern
 * repeated at the top of every section (About, Skills, Projects, etc).
 * Centralizing it means the type scale and spacing stay identical across
 * sections without copy-pasting heading markup nine times.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-2xl mb-12 ${alignment}`}
    >
      {eyebrow && (
        <span className="text-accent font-mono text-sm tracking-wide">
          // {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
