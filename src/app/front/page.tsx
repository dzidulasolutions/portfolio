// src/app/front/page.tsx
import { getProjects } from "@/lib/api/projects";
import { getProfile } from "@/lib/api/profiles";
import { getSkills } from "@/lib/api/skills";
import { PageShell } from "@/components/layout/page-shell";
import { Hero } from "@/components/sections/hero";
import { Technos } from "@/components/sections/technos";
import { Competences } from "@/components/sections/competences";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default async function FrontPage() {
  const profile = await getProfile("front");
  const projects = await getProjects("front");
  const tools = await getSkills("front", "tool");
  const concepts = await getSkills("front", "concept");

  return (
    <PageShell>
      <Hero profile={profile} />
      <Technos skills={tools} />
      <Competences concepts={concepts} />
      <Projects projects={projects} />
      <Contact profile={profile} />
    </PageShell>
  );
}