import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ theme, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative w-10 h-10 rounded-lg border border-border bg-surface hover:bg-surface-hover
        flex items-center justify-center text-text-secondary hover:text-accent
        transition-colors duration-200 cursor-pointer overflow-hidden ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {theme === "dark" ? <FiMoon size={17} /> : <FiSun size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
