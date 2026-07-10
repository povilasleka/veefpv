import { GlitchHeading } from "@/components/ui/GlitchHeading";

const HERO_VIDEO_SRC = "/assets/header-video.mp4";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[680px] overflow-hidden bg-ink">
      <video
        autoPlay
        muted
        loop
        playsInline
        src={HERO_VIDEO_SRC}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ animation: "fadeIn 1.6s ease both" }}
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,10,.55)_0%,rgba(8,9,10,0)_30%,rgba(8,9,10,0)_55%,rgba(8,9,10,.82)_100%)]" />

      {/* OSD corner brackets */}
      <div
        className="absolute top-[88px] left-10 hidden h-[26px] w-[26px] border-t-2 border-l-2 border-white/70 md:block"
        style={{ animation: "fadeIn 1s ease .4s both" }}
      />
      <div
        className="absolute top-[88px] right-10 hidden h-[26px] w-[26px] border-t-2 border-r-2 border-white/70 md:block"
        style={{ animation: "fadeIn 1s ease .4s both" }}
      />
      <div
        className="absolute bottom-7 left-10 hidden h-[26px] w-[26px] border-b-2 border-l-2 border-white/70 md:block"
        style={{ animation: "fadeIn 1s ease .4s both" }}
      />
      <div
        className="absolute right-10 bottom-7 hidden h-[26px] w-[26px] border-r-2 border-b-2 border-white/70 md:block"
        style={{ animation: "fadeIn 1s ease .4s both" }}
      />

      {/* OSD telemetry row */}
      <div
        className="text-mono-label absolute top-[100px] right-[88px] left-[88px] hidden items-center justify-between text-[11px] font-medium text-white/75 md:flex"
        style={{ animation: "fadeIn 1s ease .5s both" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full bg-[#ff3b30]"
            style={{ animation: "blink 1.3s steps(1) infinite" }}
          />
          REC — 4K/60
        </div>
        <div>ARMED · GPS 14 SAT · 54.6872°N 25.2797°E</div>
        <div>BAT 16.8V · LINK 100%</div>
      </div>

      {/* Headline */}
      <div className="absolute inset-x-0 bottom-24 z-[2] px-[18px] md:px-10">
        <div
          className="text-mono-label text-accent mb-5 text-[12px] font-medium"
          style={{ animation: "fadeUp 1s cubic-bezier(.16,1,.3,1) .2s both" }}
        >
          FPV DRONE CINEMATOGRAPHY — CONCERTS · SPORT · CREATIVE
        </div>
        <GlitchHeading
          text="ENERGY IN"
          className="text-display text-[clamp(46px,15vw,90px)] leading-[0.86] md:text-[clamp(72px,9.4vw,146px)]"
          style={{
            animation: "fadeUp 1.1s cubic-bezier(.16,1,.3,1) .3s both",
            fontWeight: 900,
            letterSpacing: "-0.015em",
          }}
        />
        <GlitchHeading
          text="EVERY FRAME"
          delayed
          className="text-display text-[clamp(46px,15vw,90px)] leading-[0.86] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,.92)] md:text-[clamp(72px,9.4vw,146px)]"
          style={{
            animation: "fadeUp 1.1s cubic-bezier(.16,1,.3,1) .42s both",
            fontWeight: 900,
            letterSpacing: "-0.015em",
          }}
        />
        <div
          className="mt-[34px] flex flex-wrap items-end justify-between gap-8"
          style={{ animation: "fadeUp 1s cubic-bezier(.16,1,.3,1) .55s both" }}
        >
          <p className="max-w-[460px] text-[16px] leading-[1.55] font-medium text-white/78">
            Unique perspectives for concerts, sport and creative projects — bold execution,
            flown responsibly by an A1/A3 licensed &amp; insured pilot.
          </p>
        </div>
      </div>

      <div
        className="text-mono-label absolute bottom-[34px] left-1/2 -translate-x-1/2 text-[10px] font-medium text-white/50"
        style={{ animation: "bob 2.4s ease-in-out infinite" }}
      >
        SCROLL ↓
      </div>
    </div>
  );
}
