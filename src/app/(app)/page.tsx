import { Hero } from "@/components/home/Hero";
import { TickerStrip } from "@/components/home/TickerStrip";
import { WhatIShoot } from "@/components/home/WhatIShoot";
import { ProofStats } from "@/components/home/ProofStats";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { InstagramReels } from "@/components/home/InstagramReels";
import { BigCta } from "@/components/home/BigCta";
import { Reveal } from "@/components/ui/Reveal";
import { getWorkedWith, getReels, getHero } from "@/lib/payload";

export default async function HomePage() {
  const [workedWith, reels, hero] = await Promise.all([getWorkedWith(), getReels(), getHero()]);
  const videoUrl = typeof hero.video === "object" ? hero.video.url : null;

  return (
    <div>
      {videoUrl && <Hero videoUrl={videoUrl} />}
      <TickerStrip />
      <Reveal>
        <WhatIShoot />
      </Reveal>
      <Reveal>
        <InstagramReels reels={reels} />
      </Reveal>
      <Reveal>
        <ProofStats />
      </Reveal>
      <Reveal>
        <BrandsMarquee data={workedWith} />
      </Reveal>
      <BigCta />
    </div>
  );
}
