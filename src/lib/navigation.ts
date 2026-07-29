export interface NavItem {
  label: string;
  href: string; // ancre, ex: "#about"
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Technos", href: "#technos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];