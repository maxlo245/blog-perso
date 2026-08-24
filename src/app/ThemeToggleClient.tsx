"use client";
import { useEffect, useState } from "react";

export default function ThemeToggleClient() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Lecture ponctuelle du thème sauvegardé (localStorage / préférence système) au montage :
    // volontaire, ne dépend d'aucun état React et ne provoque pas de rendus en cascade.
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
      }
    }
  }, []);

  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  if (!theme) return null;
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-lg transition-all hover:border-brand-500 hover:text-brand-500"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
