import type { Skill } from "@/content/types";

interface TechnosProps {
  skills: Skill[];
}

function SkillBadge({ skill }: { skill: Skill }) {
  const isMastered = skill.level === "mastered";

  return (
    <span
      className={`font-ui text-sm px-4 py-2 rounded-full border transition-colors ${
        isMastered
          ? "bg-accent-500 text-white border-accent-500"
          : "bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700"
      }`}
    >
      {skill.name}
    </span>
  );
}

export function Technos({ skills }: TechnosProps) {
  const mastered = skills.filter((s) => s.level === "mastered");
  const learning = skills.filter((s) => s.level === "learning");

  return (
    <section id="technos" className="py-20 sm:py-28">
      <div className="flex flex-col gap-2 mb-12">
        <p className="font-ui text-accent-600 dark:text-accent-400 text-sm uppercase tracking-wide">
          Stack technique
        </p>
        <h2 className="font-title text-3xl sm:text-4xl font-bold text-foreground">
          Technos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="font-ui text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
            Maîtrisé
          </h3>
          <div className="flex flex-wrap gap-3">
            {mastered.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-ui text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
            En apprentissage
          </h3>
          <div className="flex flex-wrap gap-3">
            {learning.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}