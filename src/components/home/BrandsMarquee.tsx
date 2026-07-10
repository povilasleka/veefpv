import { Marquee } from "@/components/ui/Marquee";
import type { WorkedWith } from "@/payload/payload-types";

interface BrandsMarqueeProps {
  data: WorkedWith;
}

export function BrandsMarquee({ data }: BrandsMarqueeProps) {
  return (
    <div className="overflow-hidden pb-[110px]">
      <div className="text-mono-label px-4.5 pb-6.5 text-[11px] font-medium text-white/40 md:px-10">
        WORKED WITH —
      </div>
      <Marquee durationS={26}>
        <div className="flex gap-16 pr-16">
          {data.brands.map((b) => (
            <div
              key={b.id ?? b.name}
              className="text-[34px] font-extrabold tracking-wide whitespace-nowrap text-transparent uppercase [-webkit-text-stroke:1px_rgba(255,255,255,.45)]"
              style={{ fontFamily: "var(--font-archivo)", fontStretch: "125%" }}
            >
              {b.name}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
