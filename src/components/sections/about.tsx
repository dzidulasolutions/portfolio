import type { AboutFact, DomainCard } from "@/content/types";
import type { Profile } from "@/content/types";
import {
  IconlyPin, IconlyBriefcase,
  IconlyGraduation,
  IconlyStar,
  IconlyLanguage, IconlyWebFront,
  IconlyWebBack,
} from "../ui/icons";

interface AboutProps {
  profile: Profile;
  headline: { line1: string; line2: string };
  paragraph2: string;
  facts: AboutFact[];
  domainCards: DomainCard[];
}

export const TECH_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  IconlyPin,
  IconlyBriefcase,
  IconlyGraduation,
  IconlyStar,
  IconlyLanguage,
  IconlyWebFront,
  IconlyWebBack,

}

function FactItem({ fact }: { fact: AboutFact }) {
  const Icon = TECH_ICONS[fact.icon];
  return (
    <li className="flex items-center gap-3 font-ui text-sm text-(--color-muted)">
      <span className="w-5 text-center"><Icon size={22} color="#737373" /></span>
      {fact.text}
    </li>
  );
}

function DomainCardItem({ card }: { card: DomainCard }) {
  const Icon = TECH_ICONS[card.icon];
  return (
    <div
      className="
    border border-(--color-border)
    bg-(--color-surface)
    p-6
    flex flex-col gap-4
    transition-colors duration-200
  "
    >
      <div className="flex items-start gap-3">
        <div
          className="
        w-11 h-11
        flex items-center justify-center
        bg-foreground
        shrink-0
      "
        >
          <Icon
            size={22}
            color="var(--color-background)"
          />
        </div>

        <div>
          <h3 className="font-ui text-lg font-bold text-foreground">
            {card.title}
          </h3>

          <p className="font-ui text-xs text-(--color-muted)">
            {card.subtitle}
          </p>
        </div>
      </div>

      <p className="font-ui text-sm text-(--color-muted)">
        {card.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="
          font-ui text-xs
          px-3 py-1
          border border-(--color-border)
          text-(--color-muted)
          hover:border-foreground
          hover:text-foreground
          transition-colors duration-200
        "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function About({ profile, headline, paragraph2, facts, domainCards }: AboutProps) {
  return (
    <section id="apropos" className="py-20 sm:py-28 max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
      <p className="font-ui text-accent-600 dark:text-accent-400 text-sm uppercase tracking-wide mb-4">
        À propos
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        {/* Colonne gauche : texte */}
        <div className="flex flex-col gap-6">
          <h2 className="font-malison text-foreground text-3xl sm:text-4xl font-bold max-w-xl">
            <span>{headline.line1}</span>
            <br />
            <span>{headline.line2}</span>
          </h2>

          <p className="font-ui text-(--color-muted) max-w-lg">
            {profile.bio}
          </p>
          <p className="font-ui text-(--color-muted) max-w-lg">
            {paragraph2}
          </p>

          <ul className="flex flex-col gap-2 text-sm mt-2">
            {facts.map((fact) => (
              <FactItem key={fact.text} fact={fact} />
            ))}
          </ul>
        </div>

        {/* Colonne droite : cartes domaines */}
        <div className="flex flex-col gap-6">
          {domainCards.map((card) => (
            <DomainCardItem key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}