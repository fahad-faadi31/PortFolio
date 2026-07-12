import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import Button from "../components/ui/Button";
import CodeBackground from "../components/shared/CodeBackground";
import useTypingEffect from "../hooks/useTypingEffect";
import { roles } from "../data/roles";
import { siteConfig } from "../data/siteConfig";
import profileImg from "../assets/images/profile.jpg";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const typedRole = useTypingEffect(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <CodeBackground />

      <div className="container-custom relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
        {/* Photo column — shown first on mobile, second on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-br from-accent/60 via-accent/10 to-transparent">
              <img
                src={profileImg}
                alt={siteConfig.name}
                className="w-full h-full object-cover rounded-full border-4 border-background"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Text column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block font-mono text-sm text-accent border border-accent/30 bg-accent-soft rounded-full px-4 py-1.5 mb-6"
          >
            👋 Available for freelance work
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-text"
          >
            Hi, I'm {siteConfig.name}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-4 h-10 sm:h-12 flex items-center"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-accent">
              {typedRole}
              <span className="inline-block w-[2px] h-6 sm:h-7 bg-accent ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl mx-auto md:mx-0 text-text-secondary text-base sm:text-lg leading-relaxed"
          >
            I build intelligent web applications and solve real-world
            problems using AI, Python, and modern web technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <Button as="a" href={siteConfig.resumeUrl} variant="primary" icon={FiDownload}>
              Download Resume
            </Button>
            <Button as="a" href="#projects" variant="secondary" icon={FiArrowRight}>
              View Projects
            </Button>
            <Button as="a" href="#contact" variant="ghost">
              Hire Me
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center md:justify-start gap-5"
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
