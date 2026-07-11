import type { PayloadRequest } from "payload";

const RAPIDAPI_HOST = "instagram120.p.rapidapi.com";
const INSTAGRAM_USERNAME = "vee_fpv";

const REEL_LIMIT = 10;

interface InstagramMedia {
  code: string;
  image_versions2?: {
    candidates?: Array<{ url: string }>;
  };
}

interface InstagramReelsResponse {
  result?: {
    edges: Array<{ node: { media: InstagramMedia } }>;
    page_info: { end_cursor: string | null; has_next_page: boolean };
  };
}

// The reels feed above doesn't include the caption — it has to be looked up
// per-post via this separate endpoint, keyed by the reel's public URL.
type InstagramLinksResponse = Array<{ meta?: { title?: string } }>;

function fetchRapidApi<T>(path: string, body: unknown): Promise<T> {
  const apiKey = process.env.RAPIDAPI_KEY;
  if (!apiKey) {
    throw new Error("RAPIDAPI_KEY is not set");
  }

  return fetch(`https://${RAPIDAPI_HOST}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": RAPIDAPI_HOST,
      "x-rapidapi-key": apiKey,
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (!res.ok) {
      throw new Error(`Instagram API request to ${path} failed: ${res.status} ${res.statusText}`);
    }
    return res.json();
  });
}

function fetchReelsPage(maxId: string): Promise<InstagramReelsResponse> {
  return fetchRapidApi("/api/instagram/reels", { username: INSTAGRAM_USERNAME, maxId });
}

async function fetchReelTitle(shortcode: string, req: PayloadRequest): Promise<string | undefined> {
  try {
    const data = await fetchRapidApi<InstagramLinksResponse>("/api/instagram/links", {
      url: `https://www.instagram.com/reel/${shortcode}/`,
    });
    return data[0]?.meta?.title || undefined;
  } catch (err) {
    req.payload.logger.warn(`Failed to fetch title for reel ${shortcode}: ${err}`);
    return undefined;
  }
}

export interface SyncInstagramReelsResult {
  created: number;
}

/**
 * Fetches Instagram's newest reels and creates a "reels" doc for every
 * shortcode among the latest REEL_LIMIT that we haven't seen before.
 * Anything older is ignored — the site never shows more than REEL_LIMIT
 * reels anyway (see getReels()), so there's no reason to sync further back.
 */
export async function syncInstagramReels(req: PayloadRequest): Promise<SyncInstagramReelsResult> {
  const { payload } = req;

  const { docs: existing } = await payload.find({
    collection: "reels",
    limit: 0,
    req,
  });
  const knownShortcodes = new Set(existing.map((reel) => reel.shortcode));

  const data = await fetchReelsPage("");
  const edges = (data.result?.edges ?? []).slice(0, REEL_LIMIT);

  // New reels get a rank below (i.e. "newer than") every rank assigned so
  // far, in the order encountered (newest first). Basing it on the sync's
  // start time keeps new ranks below every previous sync's ranks too,
  // without having to read or renumber existing docs.
  const baseline = Date.now();
  let created = 0;

  for (const { node } of edges) {
    const { code: shortcode, image_versions2 } = node.media;

    if (knownShortcodes.has(shortcode)) {
      continue;
    }

    const title = await fetchReelTitle(shortcode, req);

    await payload.create({
      collection: "reels",
      req,
      data: {
        shortcode,
        title,
        thumbnailUrl: image_versions2?.candidates?.[0]?.url,
        rank: baseline - created,
      },
    });
    created++;
  }

  return { created };
}
