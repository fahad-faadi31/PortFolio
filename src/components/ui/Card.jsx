import { motion } from "framer-motion";

/**
 * Card — the base surface used by project cards, skill cards, and service
 * cards. One shared hover/border treatment keeps those three sections
 * feeling like the same product instead of three different UI kits.
 */
export default function Card({ children, className = "", hover = true }) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -6, borderColor: "var(--color-accent)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`rounded-2xl border border-border bg-surface p-6
        transition-shadow duration-300
        hover:shadow-[0_8px_30px_-8px_rgba(20,184,166,0.15)]
        ${className}`}
    >
      {children}
    </motion.div>
  );
}
