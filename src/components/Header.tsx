"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggleWrapper from "../app/ThemeToggleWrapper";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/livre-dor", label: "Livre d'or" },
  { href: "/contact", label: "Contact" },
  { href: "/playlists", label: "Playlists" },
  { href: "/categories", label: "Catégories" },
  { href: "/app-vrchat", label: "App VRChat" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-brand-500 transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          Mon Blog Perso
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-[var(--color-text)] transition-colors hover:text-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggleWrapper />
        </div>

        {/* Bouton burger mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleWrapper />
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--color-border)] transition-colors hover:border-brand-500"
          >
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <div
        className={`grid overflow-hidden border-t border-[var(--color-border)] transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="flex min-h-0 flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-semibold text-[var(--color-text)] transition-colors hover:bg-brand-500/10 hover:text-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
