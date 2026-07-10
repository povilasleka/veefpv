import Image from "next/image";
import { Placeholder } from "@/components/ui/Placeholder";
import { ProjectVideoButton } from "@/components/portfolio/ProjectVideoButton";
import type { Project } from "@/payload/payload-types";

interface ProjectCardProps {
  project: Project;
  delayS?: number;
}

export function ProjectCard({ project, delayS = 0 }: ProjectCardProps) {
  const media = typeof project.media === "object" ? project.media : null;
  const uploadedVideo = typeof project.video === "object" ? project.video : null;

  return (
    <div
      className="group block border border-white/12 bg-[#0e0f11] transition duration-300 ease-out hover:-translate-y-2 hover:border-white/40"
      style={{ animation: `fadeUp .6s cubic-bezier(.16,1,.3,1) ${delayS}s both` }}
    >
      <div className="relative h-57.5 overflow-hidden">
        {media?.url ? (
          <Image
            src={media.url}
            alt={media.alt}
            fill
            sizes="(min-width: 768px) 380px, 100vw"
            className="object-cover"
          />
        ) : (
          <Placeholder label={`${project.title.toUpperCase()} — PHOTO/CLIP`} className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-ink/20" />
        <ProjectVideoButton
          videoUrl={uploadedVideo?.url}
          title={project.title}
          label={project.tag}
          size="sm"
        />
      </div>
      <div className="p-6">
        <div className="text-mono-label text-accent text-[10.5px] font-medium">{project.tag}</div>
        <div className="text-display mt-3 text-[23px] leading-[1.08] tracking-normal">
          {project.title}
        </div>
        <div className="mt-3 text-[14px] leading-relaxed font-medium text-white/58">
          {project.desc}
        </div>
      </div>
    </div>
  );
}
