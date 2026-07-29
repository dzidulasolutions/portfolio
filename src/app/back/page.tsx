import { getProjects } from "@/lib/api/projects";

export default async function BackPage() {
  const projects = await getProjects("back");

  return (
    <main>
      <h1>Profil Back-End</h1>
      <p>{projects.length} projet(s) trouvé(s)</p>
    </main>
  );
}