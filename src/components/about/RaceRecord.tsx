import type { AboutMe } from "@/payload/payload-types";

interface RaceRecordProps {
  data: AboutMe;
}

export function RaceRecord({ data }: RaceRecordProps) {
  return (
    <div className="mt-30">
      <div className="mb-9 flex items-baseline justify-between">
        <h2 className="text-display text-[clamp(36px,4vw,60px)]">Race Record</h2>
        <div className="text-mono-label text-[11px] text-white/40">(2023 — 2025)</div>
      </div>
      <div className="flex flex-col border-b border-white/12">
        {(data.achievements ?? []).map((a) => (
          <div
            key={a.id ?? `${a.year}-${a.title}`}
            className="hover:bg-white/4 flex flex-col gap-1 border-t border-white/12 px-2 py-4 transition-colors duration-200 md:grid md:grid-cols-[90px_1fr_auto] md:items-baseline md:gap-7 md:py-5"
          >
            <div className="text-accent font-mono text-[13px]">{a.year}</div>
            <div className="text-[16px] font-semibold">{a.title}</div>
            <div className="text-left font-mono text-[12.5px] text-white/50 md:text-right">
              {a.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
