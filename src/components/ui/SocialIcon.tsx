import type { SocialPlatform } from "@/lib/types";

interface SocialIconProps {
  platform: SocialPlatform;
  className?: string;
}

export function SocialIcon({ platform, className }: SocialIconProps) {
  switch (platform) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="1.5" y="5.5" width="21" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 9l6 3-6 3V9z" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M13.8 8.6h-1.3c-.7 0-1.3.6-1.3 1.3v1.7h2.5l-.35 2h-2.15v5.4h-2v-5.4H9.6v-2h1.65V9.7c0-1.7 1.35-3.1 3.05-3.1h1.5v2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "behance":
      return (
        <span
          className={`text-mono-label flex items-center justify-center font-bold ${className ?? ""}`}
          aria-hidden="true"
        >
          Bē
        </span>
      );
  }
}
