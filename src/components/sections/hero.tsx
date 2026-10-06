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
        <>
            <section
                id="accueil"
                className="max-w-8xl flex justify-center mx-auto px-4 sm:px-6 lg:px-15 relative min-h-screen mt-8 gap-4"
            >
                <div className="w-full lg:w-1/2 flex flex-col gap-8">

                    <div className="w-full flex justify-start items-center flex-wrap gap-3 mt-4 uppercase font-medium">

                        <div className="flex items-center uppercase justify-center w-full md:w-auto gap-2.5 py-2 px-4 text-green-500 bg-green-500/10 border border-green-500/20">
                            <span className="h-2 w-2 rounded-full bg-green-500  shrink-0" />
                            <span className="font-ui text-sm font-medium">{identity.availability.status}</span>
                            <span className="w-px h-4 bg-green-500" />
                            <span className="font-ui text-sm font-medium">{identity.availability.opportunities.join(" · ")}</span>
                        </div>

                        <div className="flex items-center uppercase justify-center w-full md:w-auto gap-2.5 py-2 px-4 rounded-xs text-foreground bg-foreground/10 border border-foreground/20">
                            <i className="fi fi-sr-marker text-xs" />

                            <span className="font-ui text-sm">
                                {identity.availability.workMode.join(" · ")}
                            </span>
                        </div>

                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <h2 className="font-malison text-foreground text-3xl sm:text-5xl font-bold max-w-xl flex flex-col gap-2">
                            <span>{identity.firstName}</span>
                            <span>{identity.lastName}</span>
                        </h2>

                        <p className="font-ui text-[1.2rem] sm:text-lg uppercase text-(--color-muted) tracking-wide">
                            {profile.title}
                        </p>

                        <p className="font-ui text-(--color-muted) max-w-lg">
                            {profile.tagline}
                        </p>
                    </div>

                    <div className="flex flex-wrap w-full justify-start items-center gap-6">
                        <a href="#projets" className="text-sm font-medium uppercase gap-2 btn py-3 text-center font-ui w-auto px-4 rounded-xs">
                            {profile.ctaLabel}
                        </a>
                    </div>

                    <div className="w-full flex flex-col gap-12 pb-8 sm:flex-row justify-start items-center sm:gap-12 mt-8 dark:border-neutral-800">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="w-full flex flex-col gap-1 "
                            >
                                <span className="font-malison text-start text-3xl sm:text-4xl font-bold text-gradient">
                                    {stat.value}
                                </span>

                                <span className="font-ui text-xs sm:text-xs uppercase text-(--color-muted) tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
