import type { Competence, CompetencesData, ProfileType } from "@/content/types";
import skillsData from "@/content/data/skills.json";

export async function getCompetences(profile: ProfileType): Promise<Competence[]> {
  const data = skillsData as CompetencesData;
  return data[profile];
}