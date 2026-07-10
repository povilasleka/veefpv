import Link from "next/link";

export function BigCta() {
  return (
    <Link
      href="/contact"
      className="hover:bg-[#f2f3f0] hover:text-ink block border-t border-white/12 px-4.5 py-[70px] text-center transition-colors duration-300 md:px-10 md:py-30"
    >
      <div className="text-mono-label mb-5.5 text-[12px] opacity-55">
        GOT A DATE, A VENUE, AN IDEA?
      </div>
      <div className="text-display text-[clamp(38px,13vw,80px)] leading-[0.9] md:text-[clamp(56px,8.5vw,132px)]">
        Let&apos;s Make
        <br />
        It Move ↗
      </div>
    </Link>
  );
}
