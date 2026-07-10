"use client";

import { useSyncExternalStore } from "react";

function formatUtc(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} UTC`;
}

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

function getSnapshot() {
  return formatUtc(new Date());
}

function getServerSnapshot() {
  return "--:--:-- UTC";
}

/** Live UTC clock, subscribed via useSyncExternalStore so the server/client mismatch is handled natively. */
export function Clock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <span className="tabular-nums">{time}</span>;
}
