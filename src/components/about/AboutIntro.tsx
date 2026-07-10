import Image from "next/image";
import { Placeholder } from "@/components/ui/Placeholder";
import type { AboutMe } from "@/payload/payload-types";

interface AboutIntroProps {
  data: AboutMe;
}

export function AboutIntro({ data }: AboutIntroProps) {
  const photo = typeof data.photo === "object" ? data.photo : null;
  const badges = data.badges ?? [];

  return (
    <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[400px_1fr] md:gap-16">
      <div
        className="relative"
        style={{ animation: "fadeUp .8s cubic-bezier(.16,1,.3,1) both" }}
      >
        <div className="relative aspect-4/3 w-full overflow-hidden md:aspect-4/5">
          {photo?.url ? (
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              sizes="(min-width: 860px) 400px, 100vw"
              className="object-cover object-top grayscale-[0.15] contrast-105"
            />
          ) : (
            <Placeholder label={`${data.name.toUpperCase()} — PORTRAIT`} className="h-full w-full" />
          )}
        </div>
        <div className="border-accent absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 md:-top-3 md:-left-3" />
        <div className="border-accent absolute right-0 bottom-0 h-6 w-6 border-r-2 border-b-2 md:-right-3 md:-bottom-3" />
      </div>

      <div style={{ animation: "fadeUp .8s cubic-bezier(.16,1,.3,1) .12s both" }}>
        <div className="text-mono-label text-accent mb-4.5 text-[12px] font-medium">
          {data.eyebrow}
        </div>
        <h1 className="text-display text-[clamp(38px,13vw,76px)] leading-[0.92] md:text-[clamp(44px,4.8vw,76px)]">
          {data.name}
        </h1>
        <p className="mt-6.5 max-w-160 text-[18px] leading-[1.7] font-medium text-white/72">
          {data.description}
        </p>
        {badges.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2.5">
            {badges.map((b, i) => (
              <div
                key={b.id ?? i}
                className="text-mono-label border border-white/25 px-3.5 py-2.25 text-[11px] font-medium text-white/75"
              >
                {b.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
