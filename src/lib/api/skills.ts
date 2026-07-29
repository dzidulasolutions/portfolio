import type { Skill, ProfileType, SkillCategory } from "@/content/types";
import skillsData from "@/content/data/skills.json";

export async function getSkills(profile: ProfileType, category?: SkillCategory): Promise<Skill[]> {
  const allSkills = skillsData as Skill[];

  return allSkills.filter(
    (skill) => skill.profiles.includes(profile) && (!category || skill.category === category)
  );
}