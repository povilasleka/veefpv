"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, toast } from "@payloadcms/ui";

export function SyncReelsButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/reels/sync", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Sync failed");
      }

      toast.success(
        data.created > 0
          ? `Found ${data.created} new reel${data.created === 1 ? "" : "s"}.`
          : "No new reels found.",
      );
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Sync failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "var(--base)" }}>
      <Button onClick={handleClick} disabled={loading} buttonStyle="secondary" size="medium">
        {loading ? "Syncing reels…" : "Sync reels from Instagram"}
      </Button>
    </div>
  );
}
