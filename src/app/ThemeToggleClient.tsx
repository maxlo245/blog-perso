"use client";
import { useEffect, useState } from "react";

export default function ThemeToggleClient() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) {
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
    <button onClick={toggle} style={{marginLeft:16, border:'2px solid #b1001a', background:theme==="dark"?'#b1001a':'#fff', color:theme==="dark"?'#fff':'#b1001a', borderRadius:6, padding:'6px 18px', fontWeight:'bold', cursor:'pointer', transition:'all .2s'}}>
      {theme === "dark" ? "Mode clair" : "Mode sombre"}
    </button>
  );
}
