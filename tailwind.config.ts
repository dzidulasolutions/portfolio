// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        title: ["var(--font-sora)", "sans-serif"],
        ui: ["var(--font-google-sans)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
};

export default config;