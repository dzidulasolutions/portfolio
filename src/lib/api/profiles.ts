import type { Profile, ProfileType } from "@/content/types";
import profilesData from "@/content/data/profiles.json";

export async function getProfile(type: ProfileType): Promise<Profile> {
  const profiles = profilesData as Profile[];
  const profile = profiles.find((p) => p.type === type);

  if (!profile) {
    throw new Error(`Profil introuvable : ${type}`);
  }

  return profile;
}