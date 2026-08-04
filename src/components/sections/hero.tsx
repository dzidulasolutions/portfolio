import type { Profile } from "@/content/types";
import identity from "@/content/data/identity.json";
import { DEVELOPER_SNIPPETS } from "@/content/data/developer-snippet";
import { CodeWindow } from "@/components/ui/code-window";

export interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  profile: Profile;
  stats: HeroStat[];
}

export function Hero({ profile, stats }: HeroProps) {
  return (
    <section id="accueil" className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-15 relative min-h-screen flex flex-col lg:flex-row lg:items-start mt-8 gap-4">

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-wrap gap-3 mt-12 uppercase font-medium">

          <div className="flex items-center gap-2.5 h-9 px-4 border border-accent-500/30 bg-accent-500/10">
            <span className="h-2 w-2 rounded-full bg-accent-500 shrink-0" />
            <span className="font-ui text-sm font-medium text-accent-500">{identity.availability.status}</span>
            <span className="w-px h-4 bg-accent-500" />
            <span className="font-ui text-sm font-medium text-accent-500">{identity.availability.opportunities.join(" · ")}</span> 
          </div>

          <div className="flex items-center gap-2 h-9 px-4 border border-accent-300/30 dark:border-accent-700 bg-accent-500/10 dark:bg-accent-500/20">
            <i className="fi fi-sr-marker text-accent-500 dark:text-accent-500 text-xs" />
            <span className="font-ui text-sm text-accent-500 dark:text-accent-500">{identity.availability.workMode.join(" · ")}</span>
          </div>

        </div>

        <div className="flex flex-col gap-1 font-title text-4xl sm:text-5xl lg:text-5xl font-semibold text-start text-foreground leading-tight max-w-4xl">
          <h1 className="text-gradient font-malison">{identity.firstName}</h1>
          <h1 className="text-gradient font-malison">{identity.lastName}</h1>
          <p className="font-ui text-[1.2rem] mt-4 sm:text-lg uppercase text-neutral-500 dark:text-neutral-400 tracking-wide">{profile.title}</p>
        </div>

        <p className="font-ui mt-4 text-sm font-medium text-justify sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl">{profile.tagline}</p>

        <div className="flex flex-wrap w-full lg:w-auto justify-start items-center gap-6">
          <a href="#contact" className="w-full lg:w-auto bg-gradient hover:opacity-90 uppercase text-white font-ui text-sm inline-flex items-center font-medium justify-center px-6 py-4 transition-opacity">{profile.ctaLabel}</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-12 pt-8 mt-8 border-t border-neutral-200 dark:border-neutral-800 w-full max-w-3xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-start justify-center gap-1">
              <span className="font-malison text-center text-3xl sm:text-4xl font-bold text-gradient">
                {stat.value}
              </span>
              <span className="font-ui text-xs sm:text-sm uppercase text-neutral-500 dark:text-neutral-400 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Colonne capture de code (droite, cachée sur mobile) */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <CodeWindow fileName="developer.ts" lines={DEVELOPER_SNIPPETS[profile.type]} />
      </div>

    </section>
  );
}