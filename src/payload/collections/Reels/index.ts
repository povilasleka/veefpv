import type { CollectionConfig } from "payload";
import { syncInstagramReels } from "@/lib/instagram";

export const Reels: CollectionConfig = {
  slug: "reels",
  labels: {
    singular: "Reel",
    plural: "Reels",
  },
  admin: {
    useAsTitle: "shortcode",
    defaultColumns: ["shortcode", "rank", "createdAt"],
    description: 'Synced from Instagram via the "Sync reels" button below — not editable by hand.',
    components: {
      beforeListTable: ["/collections/Reels/SyncReelsButton#SyncReelsButton"],
    },
  },
  defaultSort: "-rank",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "shortcode",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        readOnly: true,
        description: 'The id from the reel URL, e.g. "DaU6hPmCnBp" in instagram.com/vee_fpv/reel/DaU6hPmCnBp/.',
      },
    },
    {
      name: "thumbnailUrl",
      type: "text",
      admin: {
        readOnly: true,
        description: "Instagram CDN thumbnail. Refreshed on every sync — the URL expires after a while.",
      },
    },
    {
      name: "rank",
      type: "number",
      required: true,
      index: true,
      admin: {
        readOnly: true,
        description: "Sort order (newest first). Assigned automatically during sync.",
      },
    },
  ],
  endpoints: [
    {
      path: "/sync",
      method: "post",
      handler: async (req) => {
        if (!req.user) {
          return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        try {
          const result = await syncInstagramReels(req);
          return Response.json(result);
        } catch (err) {
          return Response.json(
            { error: err instanceof Error ? err.message : "Sync failed" },
            { status: 502 },
          );
        }
      },
    },
  ],
};
