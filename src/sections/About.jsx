import { motion } from "framer-motion";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { staggerContainer, staggerItem } from "../utils/motionVariants";
import { aboutHighlights } from "../data/about";

export default function About() {
  return (
    <AnimatedSection id="about" className="container-custom py-24">
      <SectionHeading
        eyebrow="About Me"
        title="A bit about who I am"
      />

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        {/* Summary */}
        <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed sm:text-justify">
          <p>
            I'm a Software Engineering student at the{" "}
            <span className="text-text font-medium">
              University of Engineering and Technology (UET) Lahore
            </span>
            , currently focused on artificial intelligence, machine learning,
            and data-driven web development. I enjoy taking messy, real-world
            problems — data that needs cleaning, a process that needs
            automating, a model that needs training — and turning them into
            working software.
          </p>
          <p>
            Python and machine learning are where I spend most of my time,
            using tools like{" "}
            <span className="text-text font-medium">
              Scikit-learn, Pandas, and NumPy
            </span>{" "}
            to build and evaluate models, while I'm actively deepening my
            skills in deep learning with TensorFlow and PyTorch. On the web
            side, I'm learning React to pair that AI work with interfaces
            people can actually use — this very portfolio is part of that
            learning process, built from the ground up rather than pulled
            from a template.
          </p>
          <p>
            I care about writing clean, maintainable code and about
            understanding a problem properly before I start solving it. Off
            the back of freelance projects in data cleaning, automation, and
            AI-powered tools, I'm looking to keep taking on real problems
            that push my skills further.
          </p>
        </div>

        {/* Highlights */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {aboutHighlights.map(({ icon: Icon, label, value }) => (
            <motion.div key={label} variants={staggerItem}>
              <Card className="h-full">
                <Icon className="text-accent" size={22} />
                <p className="mt-4 text-xs uppercase tracking-wide text-text-secondary">
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium text-text leading-snug">
                  {value}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
