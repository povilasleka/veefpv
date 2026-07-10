import { siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/data";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function ContactInfo() {
  return (
    <div className="mt-24 grid grid-cols-1 gap-7 border-t border-white/12 pt-13 md:grid-cols-3">
      <div>
        <div className="text-display text-[20px]">Safety &amp; Licensing</div>
        <p className="mt-3 text-[14px] leading-relaxed font-medium text-white/58">
          A1/A3 licensed pilot, fully insured for injury and property damage on every shoot.
        </p>
      </div>
      <div>
        <div className="text-display text-[20px]">Direct Contact</div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-accent mt-3 block font-mono text-[15px] font-semibold"
        >
          {siteConfig.email}
        </a>
      </div>
      <div>
        <div className="text-display text-[20px]">Follow the Footage</div>
        <div className="mt-4 flex gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener"
              aria-label={s.platform}
              className="hover:border-accent hover:text-accent flex h-11 w-11 items-center justify-center border border-white/25 text-white/80 transition-colors duration-200"
            >
              <SocialIcon platform={s.platform} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
