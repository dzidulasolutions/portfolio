import type { Project, ProfileType } from "@/content/types";
import projectsData from "@/content/data/projects.json";

export async function getProjects(profile?: ProfileType): Promise<Project[]> {
  const allProjects = projectsData as Project[];

  if (!profile) return allProjects;

  return allProjects.filter((project) => project.profiles.includes(profile));
}