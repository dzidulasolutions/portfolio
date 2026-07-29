import Image from "next/image";
import type { Project, ProjectStatus } from "@/content/types";
import { IconlyCheck, IconlyGithub, IconlyExternalLink } from "@/components/ui/icons";

interface ProjectsProps {
  projects: Project[];
}

const STATUS_LABEL: Record<ProjectStatus, string> = {
  done: "Terminé",
  "in-progress": "En cours",
  "not-deployed": "Pas encore déployé",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 flex flex-col gap-4">
      <div className="relative w-full h-40 rounded-xl overflow-hidden">
        <Image
          src={project.media.thumbnail.url}
          alt={project.media.thumbnail.altText}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="font-title text-xl font-bold text-foreground">{project.name}</h3>
      <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">
        {project.description}
      </p>

      <ul className="flex flex-col gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="flex items-center gap-2 font-ui text-sm text-foreground">
            <IconlyCheck size={16} color="#0080C8" />
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 mt-2">
        {project.githubUrl && (
          
           <a href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le code de ${project.name} sur GitHub`}
            className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 transition-colors"
          >
            <IconlyGithub size={20} color="currentColor" />
          </a>
        )}
        {project.liveUrl && (
          
           <a href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir la démo de ${project.name}`}
            className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 transition-colors"
          >
            <IconlyExternalLink size={20} color="currentColor" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectInfo({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-title text-4xl font-bold text-neutral-300 dark:text-neutral-700">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="font-ui text-sm px-3 py-1 rounded-full w-fit bg-accent-500 text-white">
        {STATUS_LABEL[project.status]}
      </span>
      <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 italic max-w-xs">
        {project.highlight}
      </p>
      <div className="flex flex-wrap gap-2 mt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-ui text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects({ projects }: ProjectsProps) {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projets" className="py-20 sm:py-28 relative">
      <div className="flex flex-col gap-2 mb-16">
        <p className="font-ui text-accent-600 dark:text-accent-400 text-sm uppercase tracking-wide">
          Réalisations
        </p>
        <h2 className="font-title text-3xl sm:text-4xl font-bold text-foreground">
          Projets
        </h2>
      </div>

      <div className="relative">
        {/* Ligne verticale de la timeline */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-accent-500 via-accent-300 to-transparent md:-translate-x-1/2" />

        <div className="flex flex-col gap-16">
          {sortedProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.id} className="relative flex md:justify-between items-start">
                {/* Point sur la ligne */}
                <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-accent-500 -translate-x-1/2 z-10" />

                {isEven ? (
                  <>
                    <div className="pl-10 md:pl-0 md:w-[45%]">
                      <ProjectCard project={project} />
                    </div>
                    <div className="hidden md:block md:w-[45%] pl-12 pt-4">
                      <ProjectInfo project={project} index={index} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:w-[45%] pr-12 pt-4 text-right">
                      <ProjectInfo project={project} index={index} />
                    </div>
                    <div className="pl-10 md:pl-0 md:w-[45%]">
                      <ProjectCard project={project} />
                    </div>
                  </>
                )}

                {/* Sur mobile, l'info s'affiche toujours sous la carte (pas d'alternance) */}
                <div className="md:hidden absolute -bottom-14 left-10">
                  <ProjectInfo project={project} index={index} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}