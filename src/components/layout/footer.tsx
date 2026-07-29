import { IconlyGithub, IconlyLinkedin, IconlyTwitter, IconlyEmail } from "@/components/ui/icons";
import identity from "@/content/data/identity.json";
import type { SocialPlatform } from "@/content/types";

const SOCIAL_ICONS: Record<SocialPlatform, React.ComponentType<{ size?: number; color?: string }>> = {
  github: IconlyGithub,
  linkedin: IconlyLinkedin,
  twitter: IconlyTwitter,
  email: IconlyEmail,
  other: IconlyGithub, // fallback, à ajuster si besoin
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} {identity.name}. Tous droits réservés.
        </p>

        <div className="flex items-center gap-4">
          {identity.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.platform as SocialPlatform];
            return (
              <a 
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 transition-colors"
              >
                <Icon size={20} color="currentColor" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}