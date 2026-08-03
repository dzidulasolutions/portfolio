// src/components/layout/footer.tsx
import type { SocialPlatform, TechStack } from "@/content/types";
import {
  IconlyGithub, IconlyLinkedin, IconlyTwitter, IconlyEmail,
  IconlyExternalLink, IconlyPin, IconlyBriefcase,
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
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Colonne marque */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <p className="font-ui text-xl font-bold text-foreground">
          <span className="font-title font-bold text-lg text-foreground flex items-center gap-1">
            <i className="fi fi-sr-incognito text-gradient"></i>
          </span>
          </p>
          <p className="font-ui text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
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
                    className="w-9 h-9 flex items-center justify-center border border-neutral-300/30 dark:border-neutral-700/30 text-neutral-600 dark:text-neutral-400 hover:border-accent-500 hover:text-accent-500 transition-colors"
                  >
                    <Icon size={16} color="currentColor" />
                  </a>
                );
              })}
          </div>
        </div>

        {/* Colonne Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="font-ui text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wide">
            Navigation
          </h3>
          {NAV_ITEMS.map((item) => (
            
             <a key={item.href}
              href={item.href}
              className="font-ui text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Colonne Technologies */}
        <div className="flex flex-col gap-3">
          <h3 className="font-ui text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wide">
            Technologies
          </h3>
          {technos.slice(0, 5).map((tech) => (
            <span key={tech.name} className="font-ui text-sm text-neutral-600 dark:text-neutral-400">
              {tech.name}
            </span>
          ))}
        </div>

        {/* Colonne Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-ui text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wide">
            Contact
          </h3>
          <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <IconlyPin size={16} color="#0080C8" />
            {identity.location.city}, {identity.location.country}
          </div>
          {identity.socials
            .filter((s) => s.platform === "email")
            .map((social) => (
              
               <a key={social.url}
                href={social.url}
                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                <IconlyEmail size={16} color="#0080C8" />
                {social.url.replace("mailto:", "")}
              </a>
            ))}
          <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <IconlyBriefcase size={16} color="#0080C8" />
            {identity.availability.workMode.join(" · ")}
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-ui text-neutral-500 dark:text-neutral-500">
          <p>
            © {new Date().getFullYear()} {identity.firstName} {identity.lastName}. Tous droits réservés.
          </p>
          <p>
            Construit avec{" "}
            <span className="text-accent-600 dark:text-accent-400 font-medium">Next.js</span>{" "}
            &{" "}
            <span className="text-accent-600 dark:text-accent-400 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}