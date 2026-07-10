import type { Project, ProjectCategory, SocialLink } from "./types";

export const CATEGORIES: ProjectCategory[] = [
  "events",
  "music",
  "commercial",
  "broadcasting",
];

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  events: "LIVE EVENTS & CONCERTS",
  music: "MUSIC VIDEOS",
  commercial: "COMMERCIAL & REAL ESTATE",
  broadcasting: "BROADCASTING",
};

export const projects: Project[] = [
  {
    id: "mikutavicius-arena-show",
    category: "live-events-and-concerts",
    title: "M. Mikutavičius — 360° Arena Show",
    tag: "ARENA · 2025",
    desc: "Full-arena FPV pass over the crowd at Vilniaus Arena, flown in tightly restricted airspace.",
    client: "M. Mikutavičius",
    gear: '5" freestyler, closed props (crowd-safe)',
    story:
      "A 360° arena show needs a camera that can circle the whole floor without ever becoming a hazard. The flight line was walked and rehearsed with production days out, then flown live to broadcast at Vilniaus Arena.",
  },
  {
    id: "armin-van-buuren-vingio-parkas",
    category: "live-events-and-concerts",
    title: "Armin van Buuren — Vingio Parkas",
    tag: "FESTIVAL · 2025",
    desc: "Stage and crowd flythroughs for a headline set at Vingio Parkas, coordinated with festival production.",
    client: "Vingio Parkas Festival",
    gear: '5" freestyler, open props (cleared airspace)',
    story:
      "A festival-scale headline set calls for shots that match the energy without becoming a hazard. Safe corridors above the crowd were mapped with festival security ahead of a live pass timed to the set.",
  },
  {
    id: "gjan-sirena",
    category: "live-events-and-concerts",
    title: "Gjan — Sirena",
    tag: "CONCERT · 2025",
    desc: "Live concert flythrough at Kalnų Parkas, capturing the crowd and stage in one continuous line.",
    client: "Gjan",
    gear: '5" freestyler, open props',
    story:
      'Shot live at Kalnų Parkas for the "Sirena" performance — a single flowing line from the crowd up onto the stage, timed to the track.',
  },
  {
    id: "vilnius-rytas-meet-and-greet",
    category: "live-events-and-concerts",
    title: "Vilnius Rytas — Meet & Greet",
    tag: "SPORT · 2026",
    desc: "Basketball team meet & greet at White Bridge, flown for broadcast and social content.",
    client: "Vilnius Rytas Basketball",
    gear: "Cinewhoop, closed props (crowd-safe)",
    story:
      "A public meet & greet at White Bridge with dense foot traffic — flown on a cinewhoop for close, safe passes through the crowd.",
  },
  {
    id: "ba-veidas",
    category: "music-videos",
    title: 'BA. — "Veidas" Music Video',
    tag: "MUSIC VIDEO · 2024",
    desc: "Shot entirely on a TinyWhoop for an intimate, immersive feel through tight interior spaces.",
    client: "BA.",
    gear: "Cinewhoop, closed props (indoor)",
    story:
      "The director wanted the camera to feel like a third performer moving through the space, not an observer. A cinewhoop threaded doorways and tight corridors no other camera system could reach.",
  },
  {
    id: "grupe-2-is-mano-sirdies",
    category: "music-videos",
    title: 'Grupė 2 — "Iš mano širdies"',
    tag: "MUSIC VIDEO · 2025",
    desc: "Live concert capture at Arena 2025, edited into the final music video with dynamic crowd B-roll.",
    client: "Karolis ir Donatas",
    gear: '5" freestyler, closed props',
    story:
      "Filmed and edited this one myself — the live show at Arena 2025 provided both the wide crowd energy and the close-up artist moments cut into the final video.",
  },
  {
    id: "sel-as-tik-noriu-remix",
    category: "music-videos",
    title: 'Sel — "Aš Tik Noriu" (Remix)',
    tag: "MUSIC VIDEO · 2025",
    desc: "High-energy live concert capture, flown hard at the artist's request.",
    client: "Sel",
    gear: '5" freestyler, open props',
    story:
      "The brief was simple: fly hard. Aggressive, close passes captured the energy of the live remix set for the video edit.",
  },
  {
    id: "cobalt-brand-film",
    category: "commercial-and-real-estate",
    title: "Cobalt — Brand Film",
    tag: "COMMERCIAL",
    desc: "High-speed product reveal shots built around a single unbroken FPV line.",
    client: "Cobalt",
    gear: '5" freestyler, open props',
    story:
      "A brand film built around momentum — one continuous FPV line carries the viewer from a wide establishing shot straight into the product reveal.",
  },
  {
    id: "zaha-hadid-vilnius",
    category: "commercial-and-real-estate",
    title: "Zaha Hadid — Vilnius",
    tag: "ARCHITECTURE",
    desc: "Architectural flythrough of the Zaha Hadid building in Vilnius.",
    client: "Private commission",
    gear: '5" freestyler, open props',
    story:
      "The building's curves called for a camera that could move like the architecture itself — a single sweeping FPV pass around and through the structure.",
  },
  {
    id: "construction-site-tour-vilnius",
    category: "commercial-and-real-estate",
    title: "Construction Site Tour — Vilnius",
    tag: "CONSTRUCTION",
    desc: "Recurring flythroughs documenting build progress for stakeholders and marketing.",
    client: "Gilesta",
    gear: '5" freestyler, open props',
    story:
      "Repeat flythroughs give stakeholders a consistent, comparable view of progress on an active Vilnius build.",
  },
  {
    id: "real-estate-juodkrante",
    category: "commercial-and-real-estate",
    title: "Real Estate — Juodkrantė",
    tag: "REAL ESTATE",
    desc: "Sweeping property and coastline tour showing scale and setting in one flowing shot.",
    client: "Private listing, Juodkrantė",
    gear: "Cinelifter, open props",
    story:
      "Buyers want to feel the scale of a property and its setting, not just see rooms. One flowing shot moved from the coastline, over the roofline, and into the garden.",
  },
  {
    id: "sostena-advertisement",
    category: "commercial-and-real-estate",
    title: "Sostena — Advertisement",
    tag: "COMMERCIAL · 2025",
    desc: "Dynamic product photography reimagined as a continuous FPV chase.",
    client: "Sostena",
    gear: '5" freestyler',
    story:
      "Static product photography got a second life as a chase sequence, turning a straightforward ad brief into something with real motion and energy.",
  },
  {
    id: "chasing-the-rocket",
    category: "broadcasting",
    title: "Chasing the Rocket",
    tag: "BTS · MILITARY SHOW",
    desc: "Behind-the-scenes chase shot of a rocket launch at a military show-off event.",
    client: "Military show-off event",
    gear: '5" freestyler, open props (cleared range)',
    story:
      "A live rocket launch gives one shot at a chase — positioned and timed in advance to track it off the pad.",
  },
  {
    id: "bts-arena-show",
    category: "broadcasting",
    title: "BTS — 360° Arena Show",
    tag: "BTS · CONCERT",
    desc: "Behind-the-scenes of the M. Mikutavičius 360° Arena Show setup and flight.",
    client: "M. Mikutavičius",
    gear: '5" freestyler, closed props',
    story:
      "A look at the planning and rehearsal behind the arena flythrough — walking the line, checking clearances, and the live flight itself.",
  },
  {
    id: "bts-christmas-tree-lighting",
    category: "broadcasting",
    title: "BTS — Christmas Tree Lighting",
    tag: "BTS · CIVIC EVENT",
    desc: "Behind-the-scenes of the Vilnius Christmas tree lighting broadcast, 2025.",
    client: "Vilnius City Municipality",
    gear: "Cinewhoop, closed props (crowd-safe)",
    story:
      "Rehearsing the live orbit ahead of the lighting moment, broadcast to the square and to television.",
  },
  {
    id: "bts-gjan-sirena",
    category: "broadcasting",
    title: 'BTS — Gjan "Sirena"',
    tag: "BTS · CONCERT",
    desc: "Behind-the-scenes at Kalnų Parkas for the Gjan \"Sirena\" performance.",
    client: "Gjan",
    gear: '5" freestyler, open props',
    story:
      'Setup and rehearsal footage from the Kalnų Parkas show, alongside the live flythrough used in the final edit.',
  },
];

export const marqueeItems: string[] = [
  "LIVE EVENTS",
  "MUSIC VIDEOS",
  "COMMERCIAL",
  "REAL ESTATE",
  "BROADCAST",
];


export const socialLinks: SocialLink[] = [
  { platform: "instagram", url: "https://www.instagram.com/vee_fpv/" },
  { platform: "youtube", url: "https://www.youtube.com/@VeeFPV" },
  { platform: "behance", url: "https://www.behance.net/vitarevaisnoraite" },
  { platform: "facebook", url: "https://www.facebook.com/profile.php?id=61555030289932" },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getRelatedProjects(project: Project): Project[] {
  return projects.filter((p) => p.category === project.category && p.id !== project.id);
}
