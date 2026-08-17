import type { TechStack } from "@/content/types";
import {
  IconlyTailwind,
  IconlyReact,
  IconlyNext,
  IconlyGit,
  IconlyGithub,
  IconlyResponsive,
  IconlyAccessibility,
  IconlyOffline,
  IconlyState,
  IconlyCode,
  IconlyNode,
  IconlyNest,
  IconlyMongo,
  IconlyPrisma,
  IconlyPostgres,
  IconlyRedis,
  IconlySocketIo,
  IconlyDocker,
  IconlyGithubActions,
} from "@/components/ui/icons";

interface TechnosProps {
  stacks: TechStack[];
}

export const TECH_ICONS: Record <string, React.ComponentType<{ size?: number; color?: string }>> = {
  IconlyTailwind,
  IconlyReact,
  IconlyNext,
  IconlyGit,
  IconlyGithub,
  IconlyResponsive,
  IconlyAccessibility,
  IconlyOffline,
  IconlyState, 
  IconlyCode,
  IconlyNode, 
  IconlyNest, 
  IconlyMongo,
  IconlyPrisma,
  IconlyPostgres,
  IconlyRedis,
  IconlySocketIo,
  IconlyDocker,
  IconlyGithubActions,
  
};

function TechCard({ tech }: { tech: TechStack }) {
  const Icon = TECH_ICONS[tech.icon];

  return (
    <div className="card flex flex-col gap-4 p-5 border rounded-xs border-gray-600/20 bg-neutral-700/10 dark:border-neutral-800"
      style={{ "--hover-color": tech.borderColor, } as React.CSSProperties}
    >
      {/* Case icône */}
      <div  className="w-11 h-11 flex items-center justify-center text-xl">
        {Icon ? <Icon size={22} color="currentColor" /> : "?"}
      </div>

      {/* Nom + description */}
      <div className="flex flex-col gap-0.5">
        <p className="font-ui text-sm font-bold text-foreground">{tech.name}</p>
        <p className="font-ui text-xs text-neutral-500 dark:text-neutral-400">{tech.description}</p>
      </div>

      {/* Barre de progression */}
      <div className="w-full h-1 bg-neutral-700/30 dark:bg-neutral-800 overflow-hidden">
        <div className="h-full transition-all bg-foreground"
          style={{ width: `${tech.level}%` }}
        />
      </div>
    </div>
  );
}

export function Technos({ stacks }: TechnosProps) {
  return (
    <section id="technos" className="pt-20 sm:pt-28 max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 ">
      <div className="flex flex-col gap-2 mb-4">
        <p className="font-ui text-(--color-muted) text-xs uppercase tracking-wide">
          Stack technologique
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stacks.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
}