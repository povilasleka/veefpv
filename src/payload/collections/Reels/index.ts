import type { CollectionConfig } from "payload";
import { syncInstagramReels } from "@/lib/instagram";
import { revalidatePaths } from "../../hooks/revalidatePaths";

export const Reels: CollectionConfig = {
  slug: "reels",
  labels: {
    singular: "Reel",
    plural: "Reels",
  },
  hooks: {
    afterChange: [revalidatePaths(["/"])],
    afterDelete: [revalidatePaths(["/"])],
  },
  admin: {
    useAsTitle: "shortcode",
    defaultColumns: ["shortcode", "thumbnailUrl", "title", "disabled", "rank", "createdAt"],
    description:
      'Synced from Instagram via the "Sync reels" button below. Only "Disabled" is editable by hand — everything else is managed by the sync.',
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
      name: "title",
      type: "text",
      admin: {
        readOnly: true,
        description: "The reel's Instagram caption, pulled in at sync time. Not all reels have one.",
      },
    },
    {
      name: "thumbnailUrl",
      type: "text",
      admin: {
        readOnly: true,
        description: "Instagram CDN thumbnail. Refreshed on every sync — the URL expires after a while.",
        components: {
          Cell: "/collections/Reels/ThumbnailCell#ThumbnailCell",
        },
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
    {
      name: "disabled",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Hide this reel from the public site without deleting it.",
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
