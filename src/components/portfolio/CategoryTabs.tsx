import Link from "next/link";
import type { Category } from "@/payload/payload-types";

interface CategoryTabsProps {
  active: string;
  categories: Category[];
}

/** Server-rendered tabs — filtering happens via the `category` search param, no client JS needed. */
export function CategoryTabs({ active, categories }: CategoryTabsProps) {
  return (
    <div className="my-11 flex flex-col border border-white/18 md:my-12 md:flex-row">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/portfolio?category=${cat.slug}`}
          scroll={false}
          className={`text-mono-label border-b border-white/18 px-6 py-3.5 text-center text-[11.5px] font-medium transition-colors duration-200 md:flex-none md:border-r md:border-b-0 ${
            active === cat.slug ? "bg-accent text-ink" : "text-white/65"
          }`}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}
