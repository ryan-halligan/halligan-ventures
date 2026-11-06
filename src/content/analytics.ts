// Analytics page content. Public-safe, high-level only: no employer metrics, customer counts,
// internal methods, client names, or proprietary grades.

export interface AnalyticsWork {
  org: string;
  role: string;
  dates: string;
  summary: string;
  responsibilities: string[];
  tools: string[];
  kind: "Experience" | "Research" | "Independent";
}

export const featuredWork: AnalyticsWork[] = [
  {
    org: "PGA TOUR Superstore",
    role: "Business Intelligence Intern",
    dates: "Summer 2026",
    kind: "Experience",
    summary: "Customer and sales analytics inside a national retailer's Snowflake environment.",
    responsibilities: [
      "Designed the framework for a customer scoring model, writing SQL in Snowflake to build customer segments.",
      "Built a multi-step SQL model that assigns each customer to a primary store using transaction, geographic, and recency signals.",
      "Created a sales and margin Power BI report with fiscal-week logic and regional and department rankings.",
    ],
    tools: ["SQL", "Snowflake", "Data modeling", "Power BI"],
  },
  {
    org: "Reel Analytics",
    role: "Scouting & Data Analytics Intern",
    dates: "Jan – Dec 2025",
    kind: "Experience",
    summary: "Structured research and comparative evaluation for a sports-technology company.",
    responsibilities: [
      "Combined film review, position-specific metrics, and public grading data into consistent player profiles.",
      "Checked data quality across sources and wrote comparisons that supported decision-makers.",
      "Produced recurring analytical reports on a weekly cadence.",
    ],
    tools: ["Excel", "Hudl", "Data visualization"],
  },
  {
    org: "Georgia Tech VIP — Sports Valuation & Analytics",
    role: "Undergraduate Researcher",
    dates: "Georgia Tech",
    kind: "Research",
    summary: "Faculty-led team studying the business and valuation of college sports.",
    responsibilities: [
      "Researching how revenue, media, and market factors relate to the value of athletic programs.",
      "Working with public data sources and team-defined analytical frameworks.",
    ],
    tools: ["Excel", "Research", "Regression"],
  },
];

// Independently publishable analysis. Entries with published: false stay hidden.
export const independentProjects: (AnalyticsWork & { published: boolean })[] = [];

export const approach = [
  { step: "Define the question", text: "Pin down the decision someone actually needs to make.", seen: ["PGA TOUR Superstore", "Reel Analytics"] },
  { step: "Collect & understand", text: "Find the sources, learn their grain and their gaps.", seen: ["PGA TOUR Superstore", "VIP Research"] },
  { step: "Clean & validate", text: "Reconcile sources and check accuracy before analysis.", seen: ["Reel Analytics", "GT Football"] },
  { step: "Model & visualize", text: "Segment, rank, compare, and chart what matters.", seen: ["PGA TOUR Superstore"] },
  { step: "Translate to decisions", text: "Present findings as clear recommendations.", seen: ["PGA TOUR Superstore", "Reel Analytics"] },
  { step: "Measure & improve", text: "Revisit results and refine the method.", seen: [] },
];

export const toolkit: { group: string; tools: { name: string; where?: string }[] }[] = [
  { group: "Data querying", tools: [{ name: "SQL", where: "PGA TOUR Superstore" }, { name: "Snowflake", where: "PGA TOUR Superstore" }] },
  { group: "Programming & analysis", tools: [{ name: "Python" }, { name: "TypeScript", where: "Ryan-OS" }] },
  { group: "Business intelligence", tools: [{ name: "Power BI", where: "PGA TOUR Superstore" }, { name: "Excel", where: "Reel Analytics" }] },
  { group: "Statistics & modeling", tools: [{ name: "Regression", where: "VIP Research" }, { name: "Segmentation & scoring", where: "PGA TOUR Superstore" }] },
  { group: "Data systems", tools: [{ name: "Postgres", where: "Ryan-OS" }, { name: "Data validation", where: "GT Football" }, { name: "Transformations", where: "PGA TOUR Superstore" }] },
  { group: "Communication", tools: [{ name: "Dashboards", where: "PGA TOUR Superstore" }, { name: "Data visualization", where: "Reel Analytics" }] },
];

export interface AnalyticsCaseStudy {
  slug: string;
  title: string;
  problem: string;
  dataset: string;
  contribution: string;
  preparation: string;
  methodology: string;
  tools: string[];
  visualization?: string;
  results: string;
  limitations: string;
  lessons: string;
}

// Add real, public-safe case studies here. Empty = section hidden.
export const caseStudies: AnalyticsCaseStudy[] = [];
