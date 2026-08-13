import type { Profile, SocialPlatform } from "@/content/types";
import { IconlyGithub, Iconlydownload,IconlyLinkedin, IconlyWhatsapp, IconlyCall, IconlyTwitter, IconlyEmail, IconlyExternalLink } from "@/components/ui/icons";
import identity from "@/content/data/identity.json";

interface ContactProps {
  profile: Profile;
}

const SOCIAL_ICONS: Record<SocialPlatform, React.ComponentType<{ size?: number; color?: string }>> = {
  github: IconlyGithub,
  linkedin: IconlyLinkedin,
  twitter: IconlyTwitter,
  email: IconlyEmail,
  phone: IconlyCall,
  whatsapp: IconlyWhatsapp,
  other: IconlyExternalLink,
};

const SOCIAL_LABEL: Record<SocialPlatform, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "X / Twitter",
  email: "Email",
  phone: "Téléphone",
  whatsapp: "WhatsApp",
  other: "Autre",
};

export function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="py-12 sm:py-28 max-w-8xl mx-auto px-4 sm:px-6 lg:px-15">
      <div className="px-6 py-16 sm:px-16 flex flex-col items-center text-center gap-6 border border-foreground/10 bg-foreground/5">
        <p className="font-ui text-accent-600 dark:text-accent-400 text-sm uppercase tracking-wide">Contact</p>
        <h2 className="font-malison text-foreground text-3xl sm:text-4xl font-bold max-w-xl">Prêt à collaborer ?</h2>
        <p className="font-ui text-neutral-600 dark:text-neutral-400 max-w-lg">
          Que vous ayez un projet web ou mobile, je suis disponible pour en discuter et vous accompagner de l&apos;idée au déploiement.
        </p>

        <div className="flex items-center uppercase justify-center w-full md:w-auto gap-2.5 py-2 px-4 border border-foreground/30 bg-foreground/10">
          <span className="h-2 w-2 rounded-full bg-foreground shrink-0" />
          <span className="font-ui text-sm font-medium text-foreground">{identity.availability.status}</span>
          <span className="w-px h-4 bg-foreground" />
          <span className="font-ui text-sm font-medium text-foreground">{identity.availability.opportunities.join(" · ")}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {identity.socials
            .filter(
              (s) =>
                s.platform === "email" ||
                s.platform === "whatsapp" ||
                s.platform === "github" ||
                s.platform === "linkedin"
            )
            .map((social) => {
              const Icon = SOCIAL_ICONS[social.platform as SocialPlatform];

              return (
                <a key={social.url} href={social.url} target={social.platform === "email" ? undefined : "_blank"} rel={social.platform === "email" ? undefined : "noopener noreferrer"} className="
                  font-ui text-xs
                  w-[calc(50%-0.375rem)] md:w-auto
                  inline-flex items-center justify-center gap-2
                  px-4 py-2
                  border border-foreground/30
                  bg-foreground/5
                  text-foreground
                  hover:bg-foreground
                  hover:text-background
                  hover:border-foreground
                  transition-colors duration-200"
                >
                  <Icon size={18} color="currentColor" />
                  {SOCIAL_LABEL[social.platform as SocialPlatform]}
                </a>
              );
            })}
        </div>

        <a href={profile.cvUrl} download className="font-ui font-medium uppercase inline-flex items-center gap-2 px-6 py-2 mt-6 bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors">
          Télécharger mon CV
          <Iconlydownload size={18} color="currentColor" />
        </a>
      </div>
    </section>
  );
}