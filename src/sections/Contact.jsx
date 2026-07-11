import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { siteConfig } from "../data/siteConfig";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "View my repositories",
    href: siteConfig.social.github,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: siteConfig.social.linkedin,
  },
  {
    icon: SiFiverr,
    label: "Fiverr",
    value: "Hire me for a gig",
    href: siteConfig.social.fiverr,
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [sent, setSent] = useState(false);

  // No backend on a static site, so this opens the visitor's email client
  // with a pre-filled message addressed to me — a real, working handoff
  // without needing a form-submission service.
  const onSubmit = (data) => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n— ${data.name} (${data.email})`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <AnimatedSection id="contact" className="container-custom py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a project in mind, or just want to say hi? I'd love to hear from you."
      />

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8">
        {/* Direct links */}
        <div className="space-y-4">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
            >
              <Card className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-soft border border-accent/30 flex items-center justify-center shrink-0">
                  <Icon className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-text">{value}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Form */}
        <Card hover={false} className="!p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Name
              </label>
              <input
                {...register("name", { required: "Please enter your name" })}
                type="text"
                placeholder="Your name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:border-accent transition-colors outline-none"
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="you@example.com"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:border-accent transition-colors outline-none"
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Please add a short message",
                })}
                rows={5}
                placeholder="Tell me a bit about your project..."
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:border-accent transition-colors outline-none resize-none"
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              icon={sent ? FiCheck : FiSend}
              className="w-full sm:w-auto"
            >
              {sent ? "Opening your email app..." : "Send Message"}
            </Button>

            <motion.p
              initial={false}
              animate={{ opacity: sent ? 1 : 0, height: sent ? "auto" : 0 }}
              className="text-xs text-text-secondary overflow-hidden"
            >
              This opens your default email app with the message pre-filled —
              just hit send there.
            </motion.p>
          </form>
        </Card>
      </div>
    </AnimatedSection>
  );
}
