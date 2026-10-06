"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/fullstack");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center">
      {/* Theme */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute right-5 top-5"
      >
        <ThemeToggle />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center"
        >
          <motion.i
            className="fi fi-sr-incognito text-2xl"
          />
        </motion.div>

        {/* Loading */}
        <div className="mt-7 w-80">
          <div className="h-1 w-full overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              className="h-full origin-left bg-foreground"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] font-ui font-medium uppercase tracking-[0.2em] text-foreground/40">
            <span>PORTFOLIO</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              2026
            </motion.span>
          </div>
        </div>
      </div>

      {/* Subtle background glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/3 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </main>
  );
}