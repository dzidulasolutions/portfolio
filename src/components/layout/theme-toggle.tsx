"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconlySun, IconlyMoon } from "@/components/ui/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // placeholder pour éviter un décalage de layout
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