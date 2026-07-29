import type { ProfileType } from "@/content/types";

export const PROFILE_ROUTES: Record<ProfileType, string> = {
  front: "/front",
  back: "/back",
  fullstack: "/fullstack",
};

export const ROUTES = {
  home: "/",
  ...PROFILE_ROUTES,
} as const;