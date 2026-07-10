import Link from "next/link";
import type { ProjectCategory } from "@/lib/types";

const shootCategories: { num: string; title: string; desc: string; category: ProjectCategory }[] = [
  { num: "(01)", title: "Live Events & Concerts", desc: "Restricted airspace, above crowds, timed to the show.", category: "events" },
  { num: "(02)", title: "Music Videos", desc: "Artistic, immersive TinyWhoop-driven storytelling.", category: "music" },
  { num: "(03)", title: "Commercial & Real Estate", desc: "Dynamic tours for brands, builds and properties.", category: "commercial" },
  { num: "(04)", title: "Broadcasting", desc: "Behind-the-scenes from major shows and live broadcasts.", category: "broadcasting" },
];

export function WhatIShoot() {
  return (
    <div className="pt-32.5">
      <div className="flex items-baseline justify-between px-4.5 pb-10 md:px-10">
        <h2 className="text-display text-[clamp(30px,8vw,68px)] md:text-[clamp(40px,4.5vw,68px)]">
          What I Shoot
        </h2>
      </div>
      <div className="flex flex-col border-b border-white/12">
        {shootCategories.map((cat) => (
          <Link
            key={cat.category}
            href={`/portfolio?category=${cat.category}`}
            className="hover:bg-[#f2f3f0] hover:text-ink group flex flex-col gap-2 border-t border-white/12 px-4.5 py-6.5 transition-colors duration-250 md:grid md:grid-cols-[110px_minmax(0,1fr)_minmax(220px,380px)_70px] md:items-center md:gap-8 md:px-10 md:py-9"
          >
            <div className="font-mono text-[13px] tracking-wide opacity-[0.55]">{cat.num}</div>
            <div className="text-display text-[26px] leading-none md:text-[clamp(28px,3.2vw,46px)]">
              {cat.title}
            </div>
            <div className="text-[14px] leading-normal font-medium opacity-[0.68]">{cat.desc}</div>
            <div className="hidden justify-self-end text-[30px] md:block">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
