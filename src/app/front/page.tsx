import { getProjects } from "@/lib/api/projects";
import { getProfile } from "@/lib/api/profiles";
import { PageShell } from "@/components/layout/page-shell";
import { Hero } from "@/components/sections/hero";

export default async function FrontPage() {
  const profile = await getProfile("front");
  const projects = await getProjects("front");

  return (
    <PageShell>
      <Hero profile={profile} />
      <p className="font-body">{projects.length} projet(s) trouvé(s)</p>
    </PageShell>
  );
}