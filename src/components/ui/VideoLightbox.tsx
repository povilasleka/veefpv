"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface VideoLightboxProps {
  label: string;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  /** Fades the label/title in once true. Defaults to true (shown immediately). */
  headerReady?: boolean;
}

/** Fullscreen video dialog — shared by the reels strip and the project detail play button. */
export function VideoLightbox({
  label,
  title,
  onClose,
  children,
  headerReady = true,
}: VideoLightboxProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-ink/88 backdrop-blur-md"
      style={{ animation: "fadeIn .25s ease both" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative cursor-default"
        style={{ animation: "scaleIn .35s cubic-bezier(.16,1,.3,1) both" }}
      >
        <div className="mb-3.5 flex items-center justify-between gap-6">
          <div
            className={`transition-opacity duration-300 ${headerReady ? "opacity-100" : "opacity-0"}`}
          >
            <div className="text-mono-label text-accent text-[10px]">{label}</div>
            <div className="mt-1 text-[17px] font-bold text-white">{title}</div>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-10 w-10 flex-none items-center justify-center border border-white/35 text-[18px] text-white/85 transition-colors duration-200 hover:border-white hover:bg-white/10"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}
