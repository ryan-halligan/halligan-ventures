// Projects shown across the site. Reorder `featured` to change the home page order.
// status: "Case study" | "In development" | "Coming Soon"
export type Pillar = "Engineering" | "Analytics" | "Design";

export interface Project {
  slug: string;
  name: string;
  pillar: Pillar;
  status: string;
  summary: string;
  tags: string[];
  to?: string; // internal route
  href?: string; // external link
  image?: string;
}

export const RYAN_OS_REPO = "https://github.com/ryan-halligan/ryan-os-case-study";
export const RYAN_OS_DEMO_IMAGE =
  "https://raw.githubusercontent.com/ryan-halligan/ryan-os-case-study/main/assets/demo.png";

export const projects: Project[] = [
  {
    slug: "ryan-os",
    name: "Ryan-OS",
    pillar: "Engineering",
    status: "Case study",
    summary:
      "A personal operating system that turns voice and text captures into structured tasks, ranked search results, and a combined calendar agenda.",
    tags: ["Next.js", "TypeScript", "Supabase/Postgres", "Claude", "Whisper", "GitHub Actions"],
    to: "/engineering/ryan-os",
    image: RYAN_OS_DEMO_IMAGE,
  },
  {
    slug: "pga-bi",
    name: "Customer & Sales Intelligence",
    pillar: "Analytics",
    status: "Experience",
    summary: "Business intelligence internship at PGA TOUR Superstore: customer segmentation, store assignment, and executive reporting.",
    tags: ["SQL", "Snowflake", "Power BI"],
    to: "/analytics",
  },
  {
    slug: "rhxvisuals",
    name: "RHxVisuals",
    pillar: "Design",
    status: "Portfolio",
    summary: "Original sports graphics, jersey concepts, and editorial compositions.",
    tags: ["Photoshop", "Sports graphics", "Branding"],
    to: "/design",
    image: "rhxvisuals-bijan.jpg",
  },
  {
    slug: "box-score",
    name: "Box Score",
    pillar: "Design",
    status: "Coming Soon",
    summary:
      "An emerging sports media and creative project combining visual storytelling, football coverage, and experimentation with data-driven content.",
    tags: ["Sports media", "Visual storytelling", "Data-driven content"],
    to: "/design#box-score",
  },
];

export const featured = ["ryan-os", "pga-bi", "rhxvisuals", "box-score"];

// Future Box Score assets. Not shown publicly until filled in.
export const boxScoreAssets: { image?: string; link?: string; caption?: string }[] = [];
