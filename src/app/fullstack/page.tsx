import { getProjects } from "@/lib/api/projects";

export default async function FullstackPage() {
  const projects = await getProjects("fullstack");

  return (
    <main>
      <h1>Profil Full-Stack</h1>
      <p>{projects.length} projet(s) trouvé(s)</p>
    </main>
  );
}