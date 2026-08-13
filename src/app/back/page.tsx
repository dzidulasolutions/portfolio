import { getProjects } from "@/lib/api/projects";
import { getProfile } from "@/lib/api/profiles";
import { getTechnos } from "@/lib/api/technos";
import { getCompetences } from "@/lib/api/competences";
import { PageShell } from "@/components/layout/page-shell";
import { Hero, type HeroStat } from "@/components/sections/hero";
import { Technos } from "@/components/sections/technos";
import { Competences } from "@/components/sections/competences";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import identity from "@/content/data/identity.json";
import { About } from "@/components/sections/about";
import { getAbout } from "@/lib/api/about";

export default async function BackPage() {
  const profile = await getProfile("back");
  const projects = await getProjects("back");
  const technos = await getTechnos("back");
  const competences = await getCompetences("back");
  const about = await getAbout("back");
  const masteredCount = competences.filter((c) => c.status === "mastered").length + technos.length;

  const stats: HeroStat[] = [
    { value: `${projects.length}+`, label: "Projets" },
    { value: `${masteredCount}+`, label: "Compétences maîtrisées" },
    ...(identity.stats.experienceYears > 0
      ? [{ value: `${identity.stats.experienceYears}+`, label: "Ans d'expérience" }]
      : [{ value: `${identity.stats.learningYears || 1}+`, label: "Ans d'apprentissage" }]),
  ];

  return (
    <PageShell technos={technos}>
      <Hero profile={profile} stats={stats} />
      <Technos stacks={technos} />
      <Competences concepts={competences} />
      <Projects projects={projects} />
      <About
        profile={profile}
        headline={about.headline}
        paragraph2={about.paragraph2}
        facts={about.facts}
        domainCards={about.domainCards}
      />
      <Contact profile={profile} />
    </PageShell>
  );
}