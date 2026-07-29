import Image from "next/image";
import type { Profile } from "@/content/types";
import identity from "@/content/data/identity.json";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden"
    >
      {/* Zone de texte */}
      <div className="relative z-10 w-full md:w-1/2 px-4 sm:px-6 lg:px-8 pt-28 md:pt-0 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        {/* Photo mobile : avatar rond au-dessus du texte */}
        <div className="md:hidden relative w-36 h-36 rounded-full overflow-hidden">
          <Image
            src="/images/profile-photo.png"
            alt={`Photo de ${identity.name}`}
            fill
            priority
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-accent-900 mix-blend-color" />
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-ui text-accent-600 dark:text-accent-400 text-sm uppercase tracking-wide">
            {identity.availability}
          </p>
          <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {identity.name}
          </h1>
          <p className="font-ui text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300">
            {profile.title}
          </p>
          <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
            {profile.tagline}
          </p>
        </div>

        
          <a href="#contact"
          className="font-ui inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent-500 text-white hover:bg-accent-600 transition-colors"
        >
          {profile.ctaLabel}
        </a>
      </div>

      {/* Photo desktop en arrière-plan à droite */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 h-full">
        <Image
          src="/images/profile-photo.png"
          alt={`Photo de ${identity.name}`}
          fill
          priority
          className="object-cover grayscale"
        />
        {/* Superposition duotone teintée accent */}
        <div className="absolute inset-0 bg-accent-900 mix-blend-color" />
        {/* Fondu vers le fond de la page (bord gauche) */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/40 to-transparent" />
      </div>
    </section>
  );
}