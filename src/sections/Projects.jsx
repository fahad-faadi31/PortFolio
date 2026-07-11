import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { staggerContainer, staggerItem } from "../utils/motionVariants";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="container-custom py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A mix of AI/ML experiments and practical tools — each one solving a specific, real problem."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {projects.map(({ title, description, illustration: Illustration, tags, github, demo }) => (
          <motion.div key={title} variants={staggerItem}>
            <Card className="h-full flex flex-col overflow-hidden !p-0">
              <div className="aspect-video overflow-hidden">
                <Illustration />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-text font-display mb-2">
                  {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    as="a"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    icon={FiGithub}
                    className="!px-4 !py-2 text-sm flex-1"
                  >
                    GitHub
                  </Button>
                  {demo && (
                    <Button
                      as="a"
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      icon={FiExternalLink}
                      className="!px-4 !py-2 text-sm flex-1"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
