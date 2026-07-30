// src/content/types.ts

// ─────────────────────────────
// Profils
// ─────────────────────────────

export type ProfileType = "front" | "back" | "fullstack";

export interface Profile {
  type: ProfileType;
  title: string;           // ex: "Développeur Front-End"
  tagline: string;         // accroche du hero
  bio: string;
  ctaLabel: string;        // texte du bouton principal
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
  | "phone"
  | "whatsapp"
  | "other";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string; // utile si platform = "other"
}

export interface Identity {
  initials: string;
  firstName: string;
  lastName: string;
  location: {
    city: string;
    country: string;
  };
  availability: {
    status: string;
    opportunities: string[];
    workMode: string[];
  };
  stats: {
    experienceYears: number;
    learningYears: number;
  };
  socials: SocialLink[];
}

// ─────────────────────────────
// Technos (stacks) — couleur de marque, pas de statut
// ─────────────────────────────

export interface TechStack {
  name: string;
  bgColor: string;
  borderColor: string;
}

// ─────────────────────────────
// Compétences (concepts) — statut, pas de couleur
// ─────────────────────────────

export type CompetenceStatus = "mastered" | "learning" | "planned";

export interface Competence {
  name: string;
  status: CompetenceStatus;
  description?: string;
}

// ─────────────────────────────
// Structure commune : groupé par profil
// ─────────────────────────────

export interface ByProfile<T> {
  front: T[];
  back: T[];
  fullstack: T[];
}

export type TechnosData = ByProfile<TechStack>;
export type CompetencesData = ByProfile<Competence>;

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
  videoUrl?: string;        // optionnelle
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
  mainFeatures?: string[];
  challenges?: string[];
  media: ProjectMedia;
}