import type { AboutData, DomainCard, ProfileType } from "@/content/types";
import aboutData from "@/content/data/about.json";

export async function getAbout(profile: ProfileType): Promise<{
  headline: AboutData["headline"];
  paragraph2: string;
  facts: AboutData["facts"];
  domainCards: DomainCard[];
}> {
  const data = aboutData as AboutData;
  return {
    headline: data.headline,
    paragraph2: data.paragraph2,
    facts: data.facts,
    domainCards: data.domainCards[profile],
  };
}