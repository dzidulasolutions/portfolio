// src/components/layout/navbar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS, type NavItem } from "@/lib/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { IconlyMenu, IconlyClose } from "@/components/ui/icons";
import { useActiveSection } from "@/hooks/use-active-section";

function NavLink({ item, isActive, onClick }: { item: NavItem; isActive: boolean; onClick?: () => void }) {
  return (
    
      <a href={item.href}
      onClick={onClick}
      className="relative inline-block w-fit text-foreground hover:text-accent-600 transition-colors py-1"
    >
      {item.label}
      <motion.span
        className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-accent-500 origin-left"
        initial={false}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </a>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="font-title font-bold text-2xl text-foreground flex items-center gap-1">
            <i className="fi fi-sr-incognito"></i>
          </span>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-6 font-ui text-sm">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={activeId === item.href.replace("#", "")}
              />
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
              <NavLink
                key={item.href}
                item={item}
                isActive={activeId === item.href.replace("#", "")}
                onClick={() => setIsMenuOpen(false)}
              />
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