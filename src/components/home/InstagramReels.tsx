"use client";

import { useRef, useState } from "react";
import { Placeholder } from "@/components/ui/Placeholder";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Reel } from "@/payload/payload-types";

interface InstagramReelsProps {
  reels: Reel[];
}

// Movement past this many pixels counts as a drag rather than a click, so
// dragging across a card doesn't also open its lightbox.
const DRAG_CLICK_THRESHOLD = 5;

export function InstagramReels({ reels }: InstagramReelsProps) {
  const [activeShortcode, setActiveShortcode] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false });

  if (reels.length === 0) return null;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || e.pointerType !== "mouse") return;
    // Pointer capture is deferred until we know it's a drag (see handlePointerMove) —
    // capturing here unconditionally would redirect the click event for a plain
    // click to the scroller instead of the card button, breaking clicks entirely.
    drag.current = { active: true, startX: e.clientX, startScrollLeft: scroller.scrollLeft, moved: false };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || !drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(delta) > DRAG_CLICK_THRESHOLD) {
      drag.current.moved = true;
      scroller.setPointerCapture(e.pointerId);
    }
    if (drag.current.moved) {
      scroller.scrollLeft = drag.current.startScrollLeft - delta;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      scrollerRef.current?.releasePointerCapture(e.pointerId);
    }
    drag.current.active = false;
  };

  const handleCardClick = (shortcode: string) => {
    if (drag.current.moved) return;
    setActiveShortcode(shortcode);
  };

  return (
    <div className="pt-32.5">
      <div className="flex items-baseline justify-between px-4.5 pb-9 md:px-10">
        <h2 className="text-display text-[clamp(30px,8vw,68px)] md:text-[clamp(40px,4.5vw,68px)]">
          Instagram Reels
        </h2>
        <a
          href="https://www.instagram.com/vee_fpv/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mono-label hidden items-center gap-2 text-[11px] text-white/40 transition-colors duration-200 hover:text-white md:flex"
        >
          <SocialIcon platform="instagram" className="h-3.5 w-3.5" />
          @vee_fpv
        </a>
      </div>

      <div
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="scrollbar-none -mt-3 flex cursor-grab gap-4.5 overflow-x-auto px-4.5 pt-3 pb-2 select-none active:cursor-grabbing md:px-10"
      >
        {reels.map((reel) => (
          <button
            key={reel.id}
            type="button"
            aria-label="Play reel"
            onClick={() => handleCardClick(reel.shortcode)}
            className="group relative h-98 w-55 flex-none cursor-pointer overflow-hidden border border-white/12 bg-[#101114] text-left transition duration-300 ease-out hover:-translate-y-2 hover:border-white/40 md:h-133.5 md:w-75"
          >
            {reel.thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={reel.thumbnailUrl}
                alt=""
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Placeholder
                label="9:16 REEL"
                labelPosition="center"
                className="absolute inset-0"
              />
            )}
            <div className="absolute inset-0 z-3 flex items-center justify-center bg-ink/35 transition-colors duration-250 group-hover:bg-ink/15">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] border-white/90 bg-ink/50 backdrop-blur-sm transition-transform duration-200 group-hover:scale-[1.08]">
                <span className="ml-1.5 h-0 w-0 border-y-11 border-l-18 border-y-transparent border-l-white" />
              </span>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,10,.4),rgba(8,9,10,0)_35%,rgba(8,9,10,0)_60%,rgba(8,9,10,.85))]" />
          </button>
        ))}
      </div>

      {activeShortcode && (
        <VideoLightbox
          label="INSTAGRAM"
          title="@vee_fpv"
          onClose={() => setActiveShortcode(null)}
        >
          <iframe
            src={`https://www.instagram.com/reel/${activeShortcode}/embed`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="block aspect-9/16 h-[78vh] max-h-[78vh] max-w-[88vw] border border-white/15 bg-black"
          />
        </VideoLightbox>
      )}
    </div>
  );
}
