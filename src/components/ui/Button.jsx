import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-hover shadow-[0_0_0_0_rgba(20,184,166,0)] hover:shadow-[0_0_24px_-4px_rgba(20,184,166,0.5)]",
  secondary:
    "bg-surface text-text border border-border hover:border-accent/50 hover:bg-surface-hover",
  ghost:
    "bg-transparent text-text-secondary hover:text-text hover:bg-surface/60",
};

/**
 * Button — the single interactive-action component used across the site
 * (Hero CTAs, project GitHub/demo links, form submit).
 * Keeping one component means every button shares the same tap/hover
 * physics instead of each section re-implementing its own.
 */
export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  as = "button",
  href,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      href={as === "a" ? href : undefined}
      type={as === "button" ? type : undefined}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-sm
        transition-colors duration-200 cursor-pointer
        ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </Component>
  );
}
