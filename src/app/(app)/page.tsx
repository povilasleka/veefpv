import { Hero } from "@/components/home/Hero";
import { TickerStrip } from "@/components/home/TickerStrip";
import { WhatIShoot } from "@/components/home/WhatIShoot";
import { ProofStats } from "@/components/home/ProofStats";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { InstagramReels } from "@/components/home/InstagramReels";
import { BigCta } from "@/components/home/BigCta";
import { Reveal } from "@/components/ui/Reveal";
import { getWorkedWith, getReels } from "@/lib/payload";

export default async function HomePage() {
  const [workedWith, reels] = await Promise.all([getWorkedWith(), getReels()]);

  return (
    <div>
      <Hero />
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
