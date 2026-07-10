import type { AboutMe } from "@/payload/payload-types";

const specRows: { key: keyof AboutMe["rigs"][number]; label: string }[] = [
  { key: "prop", label: "PROP" },
  { key: "speed", label: "MAX SPEED" },
  { key: "weight", label: "WEIGHT" },
  { key: "camera", label: "CAMERA" },
  { key: "flight", label: "FLIGHT TIME" },
  { key: "range", label: "RANGE" },
];

interface FleetProps {
  data: AboutMe;
}

export function Fleet({ data }: FleetProps) {
  return (
    <div className="mt-30">
      <div className="flex items-baseline justify-between">
        <h2 className="text-display text-[clamp(36px,4vw,60px)]">The Fleet</h2>
        <div className="text-mono-label text-[11px] text-white/40">(SPEC SHEET)</div>
      </div>
      <p className="mt-3.5 mb-10 max-w-140 text-[15px] leading-relaxed font-medium text-white/55">
        {data.intro}
      </p>
      <div className="grid grid-cols-1 gap-5.5 md:grid-cols-3">
        {data.rigs.map((rig, i) => (
          <div
            key={rig.id ?? rig.name}
            className="border border-white/12 bg-[#0e0f11] p-7 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-white/40"
            style={{ animation: `fadeUp .7s cubic-bezier(.16,1,.3,1) ${i * 0.08}s both` }}
          >
            <div className="text-mono-label text-accent text-[10.5px] font-medium">
              RIG {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-display mt-2.5 mb-5 text-[30px]">{rig.name}</div>
            <div className="flex flex-col font-mono text-[13px] leading-tight text-white/72">
              {specRows.map(({ key, label }) => (
                <div
                  key={key}
                  className="flex justify-between border-t border-white/10 py-2.25"
                >
                  <span className="text-white/38">{label}</span>
                  <span>{rig[key]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
