// Design collections and folders. Slugs drive the /design/<collection> and
// /design/thegrfxcommittee/<folder> routes. Folder membership lives on each
// gallery item's `folder` field in gallery.ts — never guessed from filenames.
import type { GalleryFolder } from "./gallery";

export interface DesignFolder {
  slug: string;
  name: string;
  description: string;
  /** Gallery folder keys that belong to this page, in display order. */
  groups: { key: GalleryFolder; label: string }[];
}

export interface DesignCollection {
  slug: string;
  name: string;
  description: string;
  /** Representative artwork (file in src/assets). */
  cover: string;
  /** Authentic logo, shown on the collection page when available. */
  logo?: string;
  folders?: DesignFolder[];
}

export const designCollections: DesignCollection[] = [
  {
    slug: "rhxvisuals",
    name: "RHxVisuals",
    description: "My personal design account — original sports graphics, jersey concepts, and player edits.",
    cover: "rhxvisuals-bijan.jpg",
    logo: "rhxvisuals-logo.png",
  },
  {
    slug: "thegrfxcommittee",
    name: "TheGRFXCommittee",
    description: "A design collective I ran with other creators — commissioned client work, graphics packs, and free giveaways.",
    cover: "tgc-ultimate-pack.jpg",
    logo: "tgc-logo.png",
    folders: [
      {
        slug: "client-work",
        name: "Client Work",
        description: "One-off commissioned pieces for teams, athletes, and creators — logos, templates, and school work.",
        groups: [
          { key: "client-logos", label: "Logos" },
          { key: "client-templates", label: "Templates" },
          { key: "client-dunwoody", label: "Dunwoody" },
        ],
      },
      {
        slug: "graphics-packs",
        name: "Graphics Packs & Specs",
        description: "Complete visual packages built for consistent branding.",
        groups: [{ key: "graphics-packs", label: "Packs" }],
      },
      {
        slug: "giveaways",
        name: "Giveaways",
        description: "Free packs and templates released to followers.",
        groups: [{ key: "giveaways", label: "Giveaways" }],
      },
    ],
  },
  {
    slug: "atlfalconscountry",
    name: "ATLFalconsCountry",
    description: "Fan-account graphics, gameday content, and breaking-news templates for Atlanta Falcons coverage.",
    cover: "afc-debo-design.jpg",
    logo: "afc-logo.jpg",
  },
  {
    slug: "gridiron-drive",
    name: "Gridiron Drive",
    description: "Brand identity and NFL social content, from QB rankings to draft coverage.",
    cover: "gd-qb-rankings.jpg",
    logo: "gridiron-drive-logo.jpg",
  },
  {
    slug: "omaha-owls",
    name: "Omaha Owls",
    description: "Sports graphics and breaking-news designs for the Omaha Owls account.",
    cover: "omaha-owls-mahomes.png",
  },
  {
    slug: "xstrike",
    name: "XStrike",
    description: "Brand identity and concept design exploration.",
    cover: "xstrike-logo.jpg",
  },
  {
    slug: "fit-bowl-diner",
    name: "Fit Bowl Diner",
    description: "Logo and menu design for a local restaurant.",
    cover: "fitbowl-logo.jpg",
  },
];

export const collectionBySlug = (slug?: string) => designCollections.find((c) => c.slug === slug);
