/**
 * Shared Framer Motion variants for grids of cards (skills, projects,
 * services). Importing one variant set keeps stagger timing consistent
 * instead of every section tuning its own numbers.
 */

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
