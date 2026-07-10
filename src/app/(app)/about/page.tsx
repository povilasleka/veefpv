import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/AboutIntro";
import { Fleet } from "@/components/about/Fleet";
import { RaceRecord } from "@/components/about/RaceRecord";
import { Reveal } from "@/components/ui/Reveal";
import { getAboutMe } from "@/lib/payload";

export const metadata: Metadata = { title: "About" };

export default async function AboutPage() {
  const aboutMe = await getAboutMe();

  return (
    <div className="px-4.5 pt-32.5 pb-20 md:px-10 md:pt-37.5 md:pb-27.5">
      <AboutIntro data={aboutMe} />
      <Reveal>
        <Fleet data={aboutMe} />
      </Reveal>
      <Reveal>
        <RaceRecord data={aboutMe} />
      </Reveal>
    </div>
  );
}
