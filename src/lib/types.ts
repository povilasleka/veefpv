export type ProjectCategory = "events" | "music" | "commercial" | "broadcasting";

export interface Project {
  id: string;
  category: string;
  title: string;
  tag: string;
  desc: string;
  client: string;
  gear: string;
  story: string;
}

export type SocialPlatform = "instagram" | "youtube" | "behance" | "facebook";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}
