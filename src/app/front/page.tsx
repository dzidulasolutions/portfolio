import { getProjects } from "@/lib/api/projects";

export default async function FrontPage() {
  const projects = await getProjects("front");

  return (
    <main>
      <h1>Profil Front-End</h1>
      <p>{projects.length} projet(s) trouvé(s)</p>
    </main>
  );
}