// src/components/layout/footer.tsx
import type { SocialPlatform, TechStack } from "@/content/types";
import {
  IconlyGithub, IconlyLinkedin, IconlyTwitter, IconlyEmail, IconlyWork,
  IconlyExternalLink, IconlyPin
} from "@/components/ui/icons";
import { NAV_ITEMS } from "@/lib/navigation";
import identity from "@/content/data/identity.json";

interface FooterProps {
  technos?: TechStack[];
}

const SOCIAL_ICONS: Record<SocialPlatform, React.ComponentType<{ size?: number; color?: string }>> = {
  github: IconlyGithub,
  linkedin: IconlyLinkedin,
  twitter: IconlyTwitter,
  email: IconlyEmail,
  phone: IconlyExternalLink,
  whatsapp: IconlyExternalLink,
  other: IconlyExternalLink,
};

export function Footer({ technos = [] }: FooterProps) {
  return (
    <footer className="pt-12 border-t border-neutral-300/30 dark:border-neutral-800 mt-24">
      <div className="sm:py-28 max-w-8xl mx-auto px-4 sm:px-6 lg:px-15 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Colonne marque */}
        <div className="flex flex-col gap-4 md:col-span-1 pb-12">
          <p className="font-ui text-xl font-bold text-foreground">
          <span className="font-title font-bold text-lg text-foreground flex items-center gap-1">
            <i className="fi fi-sr-incognito text-gradient"></i>
          </span>
          </p>
          <p className="font-ui text-sm text-(--color-muted) max-w-xs">
            Développeur Web passionné, basé à {identity.location.city}, {identity.location.country}.
          </p>
          <div className="flex items-center gap-3 mt-2">
            {identity.socials
              .filter((s) => ["github", "linkedin", "email"].includes(s.platform))
              .map((social) => {
                const Icon = SOCIAL_ICONS[social.platform as SocialPlatform];
                return (
                  
                   <a key={social.url}
                    href={social.url}
                    target={social.platform === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-9 h-9 flex items-center justify-center border border-neutral-300/30 dark:border-neutral-700/30  hover:border-neutral-500 hover:text-neutral-500 transition-colors text-(--color-muted)"
                  >
                    <Icon size={16} color="currentColor" />
                  </a>
                );
              })}
          </div>
        </div>

        {/* Colonne Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="font-ui text-sm font-bold text-foreground uppercase tracking-wide"> Navigation</h3>
          {NAV_ITEMS.map((item) => (
            
             <a key={item.href}
              href={item.href}
              className="font-ui text-sm text-(--color-muted) hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Colonne Technologies */}
        <div className="flex flex-col gap-3">
          <h3 className="font-ui text-sm font-bold text-foreground uppercase tracking-wide">Technologies</h3>
          {technos.slice(0, 5).map((tech) => (
            <span key={tech.name} className="font-ui text-sm text-(--color-muted)">
              {tech.name}
            </span>
          ))}
        </div>

        {/* Colonne Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-ui text-sm font-bold text-foreground uppercase tracking-wide">Contact</h3>
          <div className="flex items-center justify-start gap-2 text-sm text-(--color-muted)">
            <span><IconlyPin size={16} color="currentColor" /></span>
            <span>{identity.location.city}, {identity.location.country}</span>
          </div>

          {identity.socials
            .filter((s) => s.platform === "email")
            .map((social) => (
              
              <a key={social.url} href={social.url} className="flex items-center gap-2 text-sm text-(--color-muted) hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">
                 <span><IconlyEmail size={16} color="currentColor" /></span>
                {social.url.replace("mailto:", "")}
              </a>
            ))}

          <div className="flex items-center gap-2 text-sm text-(--color-muted)">
            <span><IconlyWork size={16} color="currentColor" /></span>
            {identity.availability.workMode.join(" · ")}
          </div>

        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-neutral-300/30 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-ui text-neutral-500 dark:text-neutral-500">
          <p>
            © {new Date().getFullYear()} {identity.firstName} {identity.lastName}. Tous droits réservés.
          </p>
          <p>
            Construit avec{" "}
            <span className="text-(--color-muted) font-medium">Next.js</span>{" "}
            &{" "}
            <span className="text-(--color-muted) font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>

    </footer>
  );
}