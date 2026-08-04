import type { AboutFact, DomainCard } from "@/content/types";
import type { Profile } from "@/content/types";

interface AboutProps {
  profile: Profile;
  headline: { line1: string; line2: string };
  paragraph2: string;
  facts: AboutFact[];
  domainCards: DomainCard[];
}

function FactItem({ fact }: { fact: AboutFact }) {
  return (
    <li className="flex items-center gap-3 font-ui text-sm text-neutral-600 dark:text-neutral-300">
      <span className="w-5 text-center">{fact.icon || "•"}</span>
      {fact.text}
    </li>
  );
}

function DomainCardItem({ card }: { card: DomainCard }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-lg gradient-brand flex items-center justify-center text-white shrink-0" />
        <div>
          <h3 className="font-title text-lg font-bold text-foreground">{card.title}</h3>
          <p className="font-ui text-xs text-neutral-500 dark:text-neutral-400">{card.subtitle}</p>
        </div>
      </div>
      <p className="font-ui text-sm text-neutral-600 dark:text-neutral-400">{card.description}</p>
      <div className="flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="font-ui text-xs px-3 py-1 border border-accent-500/30 bg-accent-500/10 text-neutral-600 dark:text-neutral-400"
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Colonne gauche : texte */}
        <div className="flex flex-col gap-6">
          <h2 className="font-ui text-3xl sm:text-4xl font-bold leading-tight">
            <span className="text-foreground">{headline.line1}</span>
            <br />
            <span className="text-gradient">{headline.line2}</span>
          </h2>

          <p className="font-ui text-base text-neutral-600 dark:text-neutral-300">
            {profile.bio}
          </p>
          <p className="font-ui text-base text-neutral-600 dark:text-neutral-300">
            {paragraph2}
          </p>

          <ul className="flex flex-col gap-3 mt-2">
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