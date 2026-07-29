"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { IconlyMenu, IconlyClose } from "@/components/ui/icons";
import identity from "@/content/data/identity.json";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="font-title font-bold text-lg text-foreground">
            {identity.index}
          </span>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-6 font-ui text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-accent-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Bouton hamburger mobile */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IconlyClose /> : <IconlyMenu />}
          </button>
        </div>

        {/* Menu déroulant mobile */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 pb-6 font-ui text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-accent-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}