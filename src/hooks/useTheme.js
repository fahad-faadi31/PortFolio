import { useEffect, useState } from "react";

/**
 * useTheme — toggles a `.light` class on <html>, which flips every color
 * in the site because all components read from the CSS variables defined
 * in index.css rather than hardcoded colors. Defaults to dark (the
 * site's original design) unless the visitor previously chose light.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
