'use client'
import Image from "next/image";
import type { Project, ProjectStatus } from "@/content/types";
import { IconlyCheck, IconlyGithub, IconlyExternalLink } from "@/components/ui/icons";
import { useState } from "react";

interface ProjectsProps {
  projects: Project[];
}

const STATUS_LABEL: Record<ProjectStatus, string> = {
  done: "Terminé",
  "in-progress": "En cours",
  "not-deployed": "Pas encore déployé",
};



function ProjectCard({ project, index }: { project: Project, index: number }) {
  const [showAllStack, setShowAllStack] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);
  return (
    <>


      <div className="w-full rounded-xs h-auto border border-(--color-border) bg-(--color-surface) transition-colors duration-200 p-6 flex flex-col gap-4">

        <span className="font-malison text-4xl font-bold text-(--color-muted)">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="w-full flex justify-between items-center">
          
          <div className={`flex w-fit self-start justify-start items-center gap-2 px-3 py-1 rounded-xs border ${STATUS_LABEL[project.status] === "Terminé" ? "bg-green-500/10 border-green-500/20" : "bg-yellow-500/10 border-yellow-500/20"}`}>
            <span className={`h-2 w-2 rounded-full shrink-0 ${STATUS_LABEL[project.status] === "Terminé" ? "bg-green-500" : "bg-yellow-500"}`} />

            <span className={`font-ui text-sm ${STATUS_LABEL[project.status] === "Terminé" ? "text-green-500" : "text-yellow-500"}`}>
              {STATUS_LABEL[project.status]}
            </span>
          </div>

          <div className="flex items-center justify-start gap-4">

            <span className="px-3 py-1 rounded-xs btn flex justify-center items-center">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Voir le code de ${project.name} sur GitHub`} className="transition-colors">
                  <IconlyGithub size={20} color="currentColor" />
                </a>
              )}
            </span>

            <span className="px-3 py-1 rounded-xs btn flex justify-center items-center">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Voir la démo de ${project.name}`} className="transition-colors">
                  <IconlyExternalLink size={20} color="currentColor" />
                </a>
              )}
            </span>

          </div>

        </div>

        <div className="relative w-full h-40 bg-white overflow-hidden">
          <Image src={project.media.thumbnail.url} alt={project.media.thumbnail.altText} fill className="object-cover"/>
        </div>

        <h3 className="font-ui text-xl font-bold text-foreground">{project.name}</h3>
        <p className="font-ui text-sm text-(--color-muted)">{project.description}</p>

        <div className="flex flex-col gap-2">
          <p className="font-ui text-foreground text-xs uppercase tracking-wide">Stack technologique</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => {
              const isHiddenOnMobile = index >= 3;

              return (
                <li key={tech} className={` border border-(--color-border) text-(--color-muted) hover:border-foreground/50 hover:text-foreground rounded-xs transition-colors py-1 px-3 items-center gap-2 font-ui text-xs  ${isHiddenOnMobile ? "hidden md:flex" : "flex"} ${isHiddenOnMobile && showAllStack ? "flex!" : ""}`}>
                  <IconlyCheck size={16} color="#0080C8" />
                  {tech}
                </li>
              );
            })}

            {project.stack.length > 3 && (
              <button type="button" onClick={() => setShowAllStack((prev) => !prev)}
                className="md:hidden border border-(--color-border) text-(--color-muted) hover:border-foreground/50 hover:text-foreground rounded-xs transition-colors py-1 px-3 font-ui text-xs  cursor-pointer" aria-expanded={showAllStack}>
                {showAllStack
                  ? "−"
                  : `+${project.stack.length - 3}`}
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <p className="font-ui text-foreground text-xs uppercase tracking-wide">Features</p>
          <p className="font-ui text-sm text-(--color-muted)">{project.highlight}</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((tag, index) => {
              const isHiddenOnMobile = index >= 3;
              return (
                <span key={tag} className={` font-ui text-xs border border-(--color-border)
          text-(--color-muted)
          hover:border-foreground/50
          hover:text-foreground transition-colors rounded-xs  py-1 px-3 ${isHiddenOnMobile ? "hidden md:block" : "block"} ${isHiddenOnMobile && showAllTags ? "block!" : ""}`}>
                  {tag}
                </span>
              );
            })}

            {project.tags.length > 3 && (
              <button
                type="button"
                onClick={() => setShowAllTags((prev) => !prev)}
                className="md:hidden font-ui text-xs border border-(--color-border)
          text-(--color-muted)
          hover:border-foreground/50
          hover:text-foreground transition-colors rounded-xs  py-1 px-3 cursor-pointer"
                aria-expanded={showAllTags}
              >
                {showAllTags
                  ? "−"
                  : `+${project.tags.length - 3}`}
              </button>
            )}
          </div>
        </div>

      </div>
    </>
  );
}


export function Projects({ projects }: ProjectsProps) {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projets" className="py-20 sm:py-28 max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 relative">

      <div className="flex flex-col gap-2 mb-16">
        <h2 className="font-ui text-(--color-muted) text-xs uppercase tracking-wide">Projets</h2>
        <div className="font-malison text-foreground text-[2.5rem] tracking-wide">
          Réalisations
          <span> </span>
          <span className="text-foreground"> récentes</span>
        </div>
      </div>

      <div className="w-full relative flex justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {sortedProjects.map((project, index) => {

            return (
              <div key={project.id} className="relative flex md:justify-between items-start">
                
                  <>
                    <div className="w-full ">
                      <ProjectCard project={project} index={index} />
                    </div>
                  </>

              </div>
            );

          })}
        </div>
      </div>
    </section>
  );
}