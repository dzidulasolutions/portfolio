import { getProjects } from "@/lib/api/projects";
import { getProfile } from "@/lib/api/profiles";
import { PageShell } from "@/components/layout/page-shell";
import { Hero } from "@/components/sections/hero";

export default async function FullstackPage() {
  const profile = await getProfile("fullstack");
  const projects = await getProjects("fullstack");

  return (
    <PageShell>
      <Hero profile={profile} />
      <p className="font-body">{projects.length} projet(s) trouvé(s)</p>
    </PageShell>
  );
}