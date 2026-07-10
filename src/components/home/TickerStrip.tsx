import { Marquee } from "@/components/ui/Marquee";
import { marqueeItems } from "@/lib/data";

export function TickerStrip() {
  return (
    <div className="my-3.5 -mb-6 overflow-hidden py-6">
      <div className="bg-accent rotate-[-1.2deg] scale-[1.04] py-3.5">
        <Marquee durationS={20}>
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              className="text-ink pr-10 text-[24px] font-extrabold tracking-wide whitespace-nowrap uppercase"
              style={{ fontFamily: "var(--font-archivo)", fontStretch: "125%" }}
            >
              {item}&nbsp;&nbsp;✕
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
