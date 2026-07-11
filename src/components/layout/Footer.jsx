import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import { navLinks, siteConfig } from "../../data/siteConfig";

const socialIcons = [
  { icon: FiGithub, href: siteConfig.social.github, label: "GitHub" },
  { icon: FiLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: SiFiverr, href: siteConfig.social.fiverr, label: "Fiverr" },
  { icon: FiMail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-custom py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="font-display font-semibold text-lg text-text"
          >
            {siteConfig.initials}
            <span className="text-accent">.</span>
          </a>
          <p className="text-sm text-text-secondary mt-1">
            {siteConfig.name} — AI & Machine Learning Developer
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-text-secondary">
          © {new Date().getFullYear()} {siteConfig.name}. Built with React,
          Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
