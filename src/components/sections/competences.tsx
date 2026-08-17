import type { Competence } from "@/content/types";
import {
  IconlyResponsive,
  IconlyAccessibility,
  IconlyOffline,
  IconlyState,
  IconlyAuth,
  IconlyDataProtection,
  IconlyContainerization,
  IconlyMultiTenant,
  IconlyWebhooks,
  IconlyTransactions,
  IconlyInjection,
  IconlyCache,
  IconlyAsync,
  IconlyCiCd,
  IconlyApi,
  IconlyRBAC,
  
} from "@/components/ui/icons";

interface CompetencesProps {
  concepts: Competence[];
}
export const TECH_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  IconlyResponsive,
  IconlyAccessibility,
  IconlyOffline,
  IconlyState,
  IconlyDataProtection,
  IconlyContainerization,
  IconlyMultiTenant,
  IconlyWebhooks,
  IconlyTransactions,
  IconlyInjection,
  IconlyCache,
  IconlyAsync,
  IconlyCiCd,
  IconlyApi,
  IconlyRBAC,
  IconlyAuth
};

function CompetenceCard({ concept }: { concept: Competence }) {
  const Icon = TECH_ICONS[concept.icon];
  return (
    <div className="card flex flex-col gap-4 p-5 border rounded-xs border-gray-600/20 bg-neutral-700/10 dark:border-neutral-800"
      style={{ "--hover-color": concept.borderColor, } as React.CSSProperties}>
      <div className="w-11 h-11 flex items-center justify-center text-xl">
        {Icon ? <Icon size={22} color="currentColor" /> : concept.icon || "?"}
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="font-ui text-base font-bold text-foreground">{concept.name}</p>
        <p className="font-ui text-xs text-neutral-500 dark:text-neutral-400">{concept.description}</p>
      </div>

      <div className="w-full h-1 bg-neutral-700/30 dark:bg-neutral-800 overflow-hidden">
        <div
          className="h-full transition-all bg-foreground"
          style={{ width: `${concept.level}%`}}
        />
      </div>
    </div>
  );
}

export function Competences({ concepts }: CompetencesProps) {
  return (
    <section id="competences" className="pb-20 pt-16 sm:pb-28  max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 ">
      <div className="flex flex-col gap-2 mb-4">
        <p className="font-ui text-(--color-muted) text-xs uppercase tracking-wide">
          Notions transversales
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {concepts.map((concept) => (
          <CompetenceCard key={concept.name} concept={concept} />
        ))}
      </div>
    </section>
  );
}