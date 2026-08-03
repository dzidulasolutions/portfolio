import type { TechStack, TechnosData, ProfileType } from "@/content/types";
import technosData from "@/content/data/technos.json";

export async function getTechnos(profile: ProfileType): Promise<TechStack[]> {
  const data = technosData as TechnosData;
  return data[profile];
}