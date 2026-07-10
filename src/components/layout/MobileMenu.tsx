import Link from "next/link";
import { navLinks } from "@/lib/site-config";

interface MobileMenuProps {
  pathname: string;
}

export function MobileMenu({ pathname }: MobileMenuProps) {
  return (
    <div
      className="fixed inset-0 top-18 z-40 flex flex-col gap-2 bg-ink p-6 md:hidden"
      style={{ animation: "fadeIn .25s ease both" }}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-display border-b border-white/12 px-1 py-[18px] text-[28px] ${
            pathname === link.href ? "text-white" : "text-white/55"
          }`}
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/contact"
        className="bg-accent text-ink mt-5 px-[18px] py-[18px] text-center text-[14px] font-bold"
      >
        BOOK A SHOOT
      </Link>
    </div>
  );
}
