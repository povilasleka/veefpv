import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/data";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <div className="mt-auto flex flex-col items-center gap-4 border-t border-white/10 px-[18px] py-7 text-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-3.5 md:px-10 md:text-left">
      <div className="text-display justify-self-center text-[17px] md:justify-self-start">
        {siteConfig.pilotNameMain}
        <span className="text-accent">{siteConfig.pilotNameAccent}</span>
      </div>
      <div className="text-mono-label text-[10.5px] font-medium text-white/35">
        © 2026 VEEFPV — ALL RIGHTS RESERVED
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 md:justify-self-end">
        <Link
          href={`mailto:${siteConfig.email}`}
          className="font-mono text-[12.5px] text-white/50"
        >
          {siteConfig.email}
        </Link>
        <div className="flex gap-2.5">
          {socialLinks.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener"
              aria-label={s.platform}
              className="hover:text-accent hover:border-accent flex h-[34px] w-[34px] items-center justify-center border border-white/20 text-white/70 transition-colors duration-200"
            >
              <SocialIcon platform={s.platform} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
