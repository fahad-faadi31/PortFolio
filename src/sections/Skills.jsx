import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { staggerContainer, staggerItem } from "../utils/motionVariants";
import { skills, skillCategories } from "../data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <AnimatedSection id="skills" className="container-custom py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="A mix of languages, frameworks, and tools I use to go from raw data to a working, deployed application."
      />

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
              activeCategory === category
                ? "text-background"
                : "text-text-secondary hover:text-text"
            }`}
          >
            {activeCategory === category && (
              <motion.span
                layoutId="skillTabBg"
                className="absolute inset-0 bg-accent rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      {/* Skill cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map(({ name, icon: Icon, learning }) => (
            <motion.div key={name} variants={staggerItem}>
              <Card className="flex flex-col items-center text-center gap-3 py-6 relative h-full">
                {learning && (
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wide text-accent bg-accent-soft border border-accent/30 rounded-full px-2 py-0.5">
                    Learning
                  </span>
                )}
                <Icon className="text-accent" size={32} />
                <span className="text-sm font-medium text-text">{name}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </AnimatedSection>
  );
}
