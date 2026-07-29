"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { IconlySun, IconlyMoon } from "@/components/ui/icons";

// Ces fonctions ne changent jamais après le montage : pas besoin de "subscribe" réel
function subscribe() {
  return () => {};
}
function getClientSnapshot() {
  return true; // vrai côté navigateur, une fois le composant monté
}
function getServerSnapshot() {
  return false; // toujours faux côté serveur (pas de navigateur = pas encore "monté")
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
    >
      {isDark ? <IconlySun color="#F8F7F9" /> : <IconlyMoon color="#1D2128" />}
    </button>
  );
}