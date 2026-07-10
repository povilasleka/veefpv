"use client";

import { useState } from "react";
import { Placeholder } from "@/components/ui/Placeholder";
import { VideoLightbox } from "@/components/ui/VideoLightbox";

interface ProjectVideoButtonProps {
  videoUrl?: string | null;
  title: string;
  label: string;
  size?: "sm" | "lg";
}

const DEFAULT_RATIO = 16 / 9;
const LOADING_WIDTH = 280;

export function ProjectVideoButton({
  videoUrl,
  title,
  label,
  size = "lg",
}: ProjectVideoButtonProps) {
  const [open, setOpen] = useState(false);
  const [ratio, setRatio] = useState(DEFAULT_RATIO);
  const [ready, setReady] = useState(false);

  const handleMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const { videoWidth, videoHeight } = e.currentTarget;
    if (videoWidth && videoHeight) setRatio(videoWidth / videoHeight);
    setReady(true);
  };

  // Small fixed box while the real size is unknown, then grow into the largest box that
  // fits within 70vh × 88vw while preserving the real video aspect ratio — only the width
  // is animated; height keeps following it via aspect-ratio, so the resize stays smooth.
  const videoBoxStyle = {
    width: ready ? `min(88vw, calc(${ratio} * 70vh))` : `${LOADING_WIDTH}px`,
    height: "auto",
    aspectRatio: `${ratio}`,
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${title}`}
        className="group absolute inset-0 z-3 flex cursor-pointer items-center justify-center"
      >
        <span
          className={`flex items-center justify-center rounded-full border-[1.5px] border-white/90 bg-ink/50 backdrop-blur-sm transition-transform duration-200 group-hover:scale-[1.08] ${
            size === "sm" ? "h-16 w-16" : "h-20 w-20"
          }`}
        >
          <span
            className={`h-0 w-0 border-y-transparent border-l-white ${
              size === "sm" ? "ml-1.5 border-y-11 border-l-18" : "ml-2 border-y-13 border-l-21"
            }`}
          />
        </span>
      </button>

      {open && (
        <VideoLightbox
          label={label}
          title={title}
          headerReady={ready}
          onClose={() => {
            setOpen(false);
            setRatio(DEFAULT_RATIO);
            setReady(false);
          }}
        >
          {videoUrl ? (
            <div
              style={videoBoxStyle}
              className="relative block max-h-[70vh] max-w-[88vw] overflow-hidden border border-white/15 bg-black transition-[width] duration-300 ease-out"
            >
              {!ready && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="border-accent h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
                </div>
              )}
              <video
                src={videoUrl}
                controls
                autoPlay
                onLoadedMetadata={handleMetadata}
                onError={() => setReady(true)}
                className={`block h-full w-full object-contain transition-opacity duration-300 ${
                  ready ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ) : (
            <Placeholder
              label="NO VIDEO ADDED YET"
              labelPosition="center"
              className="block aspect-video h-[70vh] max-h-[70vh] max-w-[88vw] border border-white/15 bg-black"
            />
          )}
        </VideoLightbox>
      )}
    </>
  );
}
