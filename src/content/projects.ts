// Central project directory. Add, edit, or reorder entries here.
// pillar: "Analytics" | "AI" | "Design"
// status: "Completed" | "In progress" | "Coming Soon"
// date: ISO "YYYY-MM" only when verified (used by "Newest" sort).
// published: false hides a project everywhere until it has real, approved content.
import type { LogoCoverSettings } from "@/lib/logo";

export type Pillar = "Analytics" | "AI" | "Design";
export type Status = "Completed" | "In progress" | "Coming Soon";

export const pillarLabel: Record<Pillar, string> = {
  Analytics: "Data & Analytics",
  AI: "AI",
  Design: "Creative & Design",
};
export const pillarOrder: Pillar[] = ["Analytics", "AI", "Design"];

export interface Project {
  slug: string;
  name: string;
  pillar: Pillar;
  status: Status;
  summary: string;
  tags: string[];
  to?: string; // internal route
  href?: string; // external link
  image?: string;
  logo?: string;
  logoSettings?: LogoCoverSettings;
  date?: string;
  published?: boolean;
}

export const RYAN_OS_REPO = "https://github.com/ryan-halligan/ryan-os-case-study";
export const RYAN_OS_DEMO_IMAGE =
  "https://raw.githubusercontent.com/ryan-halligan/ryan-os-case-study/main/assets/demo.png";

const all: Project[] = [
  {
    slug: "pga-bi",
    name: "PGA TOUR Superstore: Business Intelligence",
    pillar: "Analytics",
    status: "Completed",
    summary: "Business intelligence internship: customer segmentation, store assignment modeling, and sales reporting.",
    tags: ["SQL", "Snowflake", "Data modeling", "Power BI"],
    to: "/analytics/pga-tour-superstore",
    logo: "pga_logo_white_stacked.webp",
    logoSettings: { logoScale: 1.18, backgroundColor: "#0b4a86" },
    date: "2026-06",
  },
  {
    slug: "ryan-os",
    name: "Ryan-OS",
    pillar: "AI",
    status: "In progress",
    summary:
      "A personal operating system that turns voice and text captures into structured tasks, ranked search results, and a combined calendar agenda.",
    tags: ["Next.js", "TypeScript", "Supabase/Postgres", "Claude", "Whisper", "GitHub Actions"],
    to: "/ai/ryan-os",
    image: RYAN_OS_DEMO_IMAGE,
  },
  {
    slug: "reel-analytics",
    name: "Scouting & Data Analytics",
    pillar: "Analytics",
    status: "Completed",
    summary: "Prospect research, comparative evaluation, and data-quality work at Reel Analytics.",
    tags: ["Research", "Data quality", "Data visualization"],
    to: "/analytics/reel-analytics",
    logo: "reel-analytics-logo.png",
    logoSettings: { logoScale: 1.05, backgroundColor: "#f8f8f8" },
    date: "2025-01",
  },
  {
    slug: "rhxvisuals",
    name: "RHxVisuals",
    pillar: "Design",
    status: "Completed",
    summary: "Original sports graphics, jersey concepts, and editorial compositions.",
    tags: ["Photoshop", "Sports graphics", "Branding"],
    to: "/design/rhxvisuals",
    logo: "rhxvisuals-logo.png",
    logoSettings: { logoScale: 1.65, backgroundColor: "#000000" },
  },
  {
    slug: "thegrfxcommittee",
    name: "TheGRFXCommittee",
    pillar: "Design",
    status: "Completed",
    summary: "A design collective I ran with other creators: client logos, commissioned templates, graphics packs, and giveaways.",
    tags: ["Client work", "Graphics packs", "Branding"],
    to: "/design/thegrfxcommittee",
    logo: "tgc-logo-cropped.png",
    logoSettings: { logoScale: 1.08, offsetY: "-2%", backgroundColor: "#171717" },
  },
  {
    slug: "box-score",
    name: "Box Score",
    pillar: "Design",
    status: "Coming Soon",
    summary: "A sports media project I'm developing around football coverage and original graphics.",
    tags: ["Sports media", "Visual storytelling", "Original graphics"],
    to: "/design#box-score",
    logo: "box-score-a-boxed-profile-1080.png",
    logoSettings: { logoScale: 1.35, backgroundColor: "#000000" },
  },
  {
    slug: "falcons-country",
    name: "ATLFalconsCountry",
    pillar: "Design",
    status: "Completed",
    summary: "Fan-account graphics, gameday content, and breaking-news templates for Atlanta Falcons coverage.",
    tags: ["Social media", "Templates", "Sports graphics"],
    to: "/design/atlfalconscountry",
    logo: "afc-logo.jpg",
    logoSettings: { logoScale: 1, backgroundColor: "#260000" },
  },
  {
    slug: "gridiron-drive",
    name: "Gridiron Drive",
    pillar: "Design",
    status: "Completed",
    summary: "Brand identity and NFL social content, from QB rankings to draft coverage.",
    tags: ["Branding", "Social media"],
    to: "/design/gridiron-drive",
    logo: "gridiron-drive-logo.jpg",
    logoSettings: { logoScale: 0.9, objectFit: "contain", backgroundColor: "#173a78" },
  },
];

export const projects = all.filter((p) => p.published !== false);

// Order used by the "Featured" sort and the home page.
export const featured = ["pga-bi", "ryan-os", "rhxvisuals", "box-score"];

// Future Box Score assets. Not shown publicly until filled in.
export const boxScoreAssets: { image?: string; link?: string; caption?: string }[] = [];
