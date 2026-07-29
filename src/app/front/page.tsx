import { getProjects } from "@/lib/api/projects";
import { PageShell } from "@/components/layout/page-shell";

export default async function FrontPage() {
  const projects = await getProjects("front");

  return (

    <PageShell>
      <h1 id="accueil" className="font-title text-4xl pt-12">Profil Front-End</h1>
      <p className="font-body">{projects.length} projet(s) trouvé(s)</p>
    </PageShell>
  );
}