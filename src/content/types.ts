// src/content/types.ts

// ─────────────────────────────
// Profils
// ─────────────────────────────

export type ProfileType = "front" | "back" | "fullstack";

export interface Profile {
  type: ProfileType;
  title: string;          // ex: "Développeur Front-End"
  tagline: string;        // accroche du hero
  bio: string;
  ctaLabel: string;       // texte du bouton principal
  cvUrl: string;           // CV différent selon le profil
  seoDescription: string;  // meta description pour le référencement
}

// ─────────────────────────────
// Identité & réseaux sociaux
// ─────────────────────────────

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "twitter"
  | "email"
  | "other";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string; // utile si platform = "other"
}

export interface Identity {
  name: string;
  location?: string;
  availability: string; // ex: "Recherche active - Stage/Emploi"
  socials: SocialLink[];
}

// ─────────────────────────────
// Compétences (outils & concepts)
// ─────────────────────────────

export type SkillCategory = "tool" | "concept";
export type SkillLevel = "mastered" | "learning";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  profiles: ProfileType[]; // à quel(s) profil(s) cette compétence s'affiche
}

// ─────────────────────────────
// Projets
// ─────────────────────────────

export type ProjectStatus = "done" | "in-progress" | "not-deployed";

export interface ProjectImage {
  url: string;
  altText: string; // obligatoire — accessibilité
}

export interface ProjectMedia {
  thumbnail: ProjectImage;
  gallery?: ProjectImage[]; // optionnelle
  videoUrl?: string;         // optionnelle
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  highlight: string;
  status: ProjectStatus;
  profiles: ProfileType[];
  featured: boolean;
  order: number;
  tags: string[];
  media: ProjectMedia;
}