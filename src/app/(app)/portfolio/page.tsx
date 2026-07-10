import type { Metadata } from "next";
import { CategoryTabs } from "@/components/portfolio/CategoryTabs";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { getAllProjects, getCategories, getProjects } from "@/lib/payload";

export const metadata: Metadata = { title: "Portfolio" };

interface PortfolioPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const [params, categories] = await Promise.all([searchParams, getCategories()]);
  const activeCategory = categories.find((c) => c.slug === params.category);
  const activeProjects = activeCategory ? await getProjects(activeCategory.id) : await getAllProjects();

  return (
    <div className="px-4.5 pt-32.5 pb-20 md:px-10 md:pt-37.5 md:pb-27.5">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="text-display max-w-full text-[clamp(32px,11.5vw,104px)] leading-[0.9] wrap-break-word md:text-[clamp(56px,7vw,104px)]">
          Portfolio
        </h1>
        <div className="text-mono-label text-[11px] text-white/40">
          ({String(activeProjects.length).padStart(2, "0")} PROJECTS)
        </div>
      </div>
      <CategoryTabs active={activeCategory?.slug ?? ""} categories={categories} />
      <ProjectGrid projects={activeProjects} />
    </div>
  );
}
