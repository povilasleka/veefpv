"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Clock } from "./Clock";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on navigation. Adjusting state during render (rather than in an
  // effect) avoids an extra committed render with the stale menu still open.
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setMenuOpen(false);
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex h-18 items-center justify-between border-b border-white/10 bg-ink/78 px-[18px] backdrop-blur-md md:px-10">
        <Link href="/" className="flex min-w-0 items-baseline gap-2.5">
          <span className="text-display text-[19px] whitespace-nowrap">
            {siteConfig.pilotNameMain}
            <span className="text-accent">{siteConfig.pilotNameAccent}</span>
          </span>
          <span className="text-mono-label hidden text-[10px] font-medium whitespace-nowrap text-white/40 md:inline">
            {siteConfig.tagline}
          </span>
        </Link>

        <div className="hidden items-center gap-[34px] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-underline text-mono-label text-[13.5px] font-medium ${
                pathname === link.href ? "text-white" : "text-white/55"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <div className="text-mono-label border-l border-white/15 pl-7 text-[11px] font-medium text-white/35">
            <Clock />
          </div>
          <Link
            href="/contact"
            className="bg-accent text-ink px-5 py-2.5 text-[12px] font-bold whitespace-nowrap transition-transform duration-200 ease-out hover:scale-[1.04] active:scale-[0.97]"
          >
            BOOK A SHOOT
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-none flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-[22px] bg-white" />
          <span className="h-0.5 w-[22px] bg-white" />
          <span className="h-0.5 w-[22px] bg-white" />
        </button>
      </div>

      {menuOpen && <MobileMenu pathname={pathname} />}
    </>
  );
}
