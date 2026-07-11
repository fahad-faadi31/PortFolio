import { motion } from "framer-motion";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="container-custom py-24">
      <SectionHeading
        eyebrow="Experience"
        title="My journey so far"
        description="Still early in the journey — here's where my time and focus have gone."
      />

      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experience.map(({ icon: Icon, title, period, description, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="relative pl-14"
            >
              {/* Node */}
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-surface border border-accent/40 flex items-center justify-center">
                <Icon className="text-accent" size={18} />
              </div>

              <Card hover={false} className="!p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-text font-display">
                    {title}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {period}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
