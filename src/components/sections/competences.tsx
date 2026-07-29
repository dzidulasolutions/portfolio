import type { Skill } from "@/content/types";

interface CompetencesProps {
  concepts: Skill[];
}

function ConceptCard({ concept }: { concept: Skill }) {
  const isMastered = concept.level === "mastered";

  return (
    <div
      className={`rounded-2xl border p-6 flex flex-col justify-between gap-4 ${
        isMastered
          ? "col-span-2 row-span-1 bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
          : "col-span-1 row-span-1 bg-transparent border-neutral-200 dark:border-neutral-800"
      }`}
    >
      <p className="font-title text-lg sm:text-xl font-medium text-foreground">
        {concept.name}
      </p>
      <span
        className={`font-ui text-xs w-fit px-3 py-1 rounded-full ${
          isMastered
            ? "bg-accent-500 text-white"
            : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
        }`}
      >
        {isMastered ? "Maîtrisé" : "En apprentissage"}
      </span>
    </div>
  );
}

export function Competences({ concepts }: CompetencesProps) {
  return (
    <section id="competences" className="py-20 sm:py-28">
      <div className="flex flex-col gap-2 mb-12">
        <p className="font-ui text-accent-600 dark:text-accent-400 text-sm uppercase tracking-wide">
          Notions transversales
        </p>
        <h2 className="font-title text-3xl sm:text-4xl font-bold text-foreground">
          Compétences
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-35 gap-4">
        {concepts.map((concept) => (
          <ConceptCard key={concept.name} concept={concept} />
        ))}
      </div>
    </section>
  );
}