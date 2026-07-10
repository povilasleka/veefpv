import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-[1100px] px-4.5 pt-32.5 pb-20 md:px-10 md:pt-37.5 md:pb-27.5">
      <div
        className="text-mono-label text-accent text-[12px] font-medium"
        style={{ animation: "fadeUp .7s cubic-bezier(.16,1,.3,1) both" }}
      >
        BOOKING — REPLIES WITHIN A DAY
      </div>
      <h1
        className="text-display mt-4 text-[clamp(38px,13vw,96px)] leading-[0.9] md:text-[clamp(48px,6.5vw,96px)]"
        style={{ animation: "fadeUp .7s cubic-bezier(.16,1,.3,1) .08s both" }}
      >
        Let&apos;s Make
        <br />
        It Move
      </h1>
      <p
        className="mt-5.5 max-w-150 text-[16px] leading-relaxed font-medium text-white/60"
        style={{ animation: "fadeUp .7s cubic-bezier(.16,1,.3,1) .16s both" }}
      >
        Tell me about the project — date, location and the kind of shot you&apos;re after.
      </p>

      <ContactForm />

      <Reveal>
        <ContactInfo />
      </Reveal>
    </div>
  );
}
