import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import useTheme from "../../hooks/useTheme";
import { navLinks, siteConfig } from "../../data/siteConfig";

/**
 * Navbar — fixed header that stays transparent over the Hero and gains
 * a solid blurred background once the user scrolls past it. Mobile gets
 * a slide-down menu instead of squeezing all links into a small width.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Android Chrome can cancel a pending hash-navigation if the link's
  // container unmounts in the same tick as the click (which happens here,
  // since the mobile menu closes on tap). Scrolling manually sidesteps
  // that race condition entirely, on every platform.
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-18 py-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display font-semibold text-lg text-text hover:text-accent transition-colors"
        >
          {siteConfig.initials}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            as="a"
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            variant="primary"
            className="!px-5 !py-2.5 text-sm"
          >
            Hire Me
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          {/* Mobile toggle */}
          <button
            className="md:hidden text-text p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <ul className="container-custom flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-3 text-text-secondary hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  as="a"
                  href="#contact"
                  variant="primary"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full"
                >
                  Hire Me
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
