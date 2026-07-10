import type { PayloadRequest } from "payload";

const RAPIDAPI_HOST = "instagram120.p.rapidapi.com";
const INSTAGRAM_USERNAME = "vee_fpv";

// Safety cap on how many pages (~12 reels each) a single sync will walk
// through, in case the "stop at first already-seen reel" check below never
// triggers (e.g. on the very first run against a large account).
const MAX_PAGES = 40;

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

async function fetchReelsPage(maxId: string): Promise<InstagramReelsResponse> {
  const apiKey = process.env.RAPIDAPI_KEY;
  if (!apiKey) {
    throw new Error("RAPIDAPI_KEY is not set");
  }

  const res = await fetch(`https://${RAPIDAPI_HOST}/api/instagram/reels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": RAPIDAPI_HOST,
      "x-rapidapi-key": apiKey,
    },
    body: JSON.stringify({ username: INSTAGRAM_USERNAME, maxId }),
  });

  if (!res.ok) {
    throw new Error(`Instagram API request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export interface SyncInstagramReelsResult {
  created: number;
  pagesScanned: number;
}

/**
 * Walks the Instagram reels feed newest-first, one page at a time, and
 * creates a "reels" doc for every shortcode we haven't seen before.
 * Stops as soon as it hits a shortcode already in the database — everything
 * older than that was covered by a previous sync — so a routine click only
 * costs as many API calls as there are genuinely new reels.
 */
export async function syncInstagramReels(req: PayloadRequest): Promise<SyncInstagramReelsResult> {
  const { payload } = req;

  const { docs: existing } = await payload.find({
    collection: "reels",
    limit: 0,
    req,
  });
  const knownShortcodes = new Set(existing.map((reel) => reel.shortcode));

  // New reels get a rank below (i.e. "newer than") every rank assigned so
  // far, in the order encountered (page 1 first = newest). Basing it on the
  // sync's start time keeps new ranks below every previous sync's ranks too,
  // without having to read or renumber existing docs.
  const baseline = Date.now();
  let created = 0;
  let cursor = "";
  let page = 0;
  let reachedKnown = false;

  while (page < MAX_PAGES && !reachedKnown) {
    const data = await fetchReelsPage(cursor);
    const edges = data.result?.edges ?? [];
    if (edges.length === 0) break;

    for (const { node } of edges) {
      const { code: shortcode, image_versions2 } = node.media;

      if (knownShortcodes.has(shortcode)) {
        reachedKnown = true;
        break;
      }

      await payload.create({
        collection: "reels",
        req,
        data: {
          shortcode,
          thumbnailUrl: image_versions2?.candidates?.[0]?.url,
          rank: baseline - created,
        },
      });
      knownShortcodes.add(shortcode);
      created++;
    }

    page++;
    if (reachedKnown || !data.result?.page_info.has_next_page) break;

    cursor = data.result.page_info.end_cursor ?? "";
    if (!cursor) break;
  }

  return { created, pagesScanned: page };
}
