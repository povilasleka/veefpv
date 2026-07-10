import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/payload/payload-types";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5.5 md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))]">
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} delayS={i * 0.07} />
      ))}
    </div>
  );
}
