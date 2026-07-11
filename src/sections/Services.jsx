import { motion } from "framer-motion";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { staggerContainer, staggerItem } from "../utils/motionVariants";
import { services } from "../data/services";

export default function Services() {
  return (
    <AnimatedSection id="services" className="container-custom py-24">
      <SectionHeading
        eyebrow="Services"
        title="What I can help you with"
        description="From cleaning a messy spreadsheet to shipping a full AI-powered web app — here's where I can add the most value."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map(({ icon: Icon, title, description, tags }) => (
          <motion.div key={title} variants={staggerItem}>
            <Card className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent-soft border border-accent/30 flex items-center justify-center mb-5">
                <Icon className="text-accent" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-text font-display mb-2">
                {title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
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
      </motion.div>
    </AnimatedSection>
  );
}
