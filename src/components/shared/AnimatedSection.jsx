import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * AnimatedSection — wraps a <section> and fades/slides it up into view
 * once, the first time it crosses the viewport. Every top-level section
 * (Hero, About, Skills, Projects...) uses this instead of hand-rolling
 * its own useInView + motion.div boilerplate, so scroll-reveal timing
 * stays consistent site-wide and reduced-motion is respected in one place.
 */
export default function AnimatedSection({
  id,
  children,
  className = "",
  delay = 0,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
