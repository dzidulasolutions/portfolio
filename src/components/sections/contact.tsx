// src/components/sections/contact.tsx
import type { Profile } from "@/content/types";
import type { SocialPlatform } from "@/content/types";
import { IconlyGithub, IconlyLinkedin, IconlyTwitter, IconlyEmail, IconlyExternalLink } from "@/components/ui/icons";
import identity from "@/content/data/identity.json";

interface ContactProps {
  profile: Profile;
}

const SOCIAL_ICONS: Record<SocialPlatform, React.ComponentType<{ size?: number; color?: string }>> = {
  github: IconlyGithub,
  linkedin: IconlyLinkedin,
  twitter: IconlyTwitter,
  email: IconlyEmail,
  other: IconlyExternalLink,
};

const SOCIAL_LABEL: Record<SocialPlatform, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "X / Twitter",
  email: "Email",
  other: "Autre",
};

export function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 px-6 py-16 sm:px-16 flex flex-col items-center text-center gap-6">
        <p className="font-ui text-accent-600 dark:text-accent-400 text-sm uppercase tracking-wide">
          Contact
        </p>
        <h2 className="font-title text-3xl sm:text-4xl font-bold text-foreground max-w-xl">
          Discutons de votre projet
        </h2>
        <p className="font-body text-neutral-600 dark:text-neutral-400 max-w-lg">
          {identity.availability}. N&apos;hésitez pas à me contacter directement.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {identity.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.platform as SocialPlatform];
            return (
              
                <a key={social.url}
                href={social.url}
                target={social.platform === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-ui inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-foreground hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors"
              >
                <Icon size={18} color="currentColor" />
                {SOCIAL_LABEL[social.platform as SocialPlatform]}
              </a>
            );
          })}
        </div>

        
          <a href={profile.cvUrl}
          download
          className="font-ui inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500 text-white hover:bg-accent-600 transition-colors mt-2"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}