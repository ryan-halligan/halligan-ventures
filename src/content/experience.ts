// Professional experience, leadership, and education. Order = display order.
// Keep descriptions high-level: no confidential data, internal methods, or employer metrics.
export interface Role {
  org: string;
  title: string;
  dates: string;
  current?: boolean;
  status?: "Incoming";
  logo?: string; // file in src/assets
  summary: string;
  points: string[];
  tools?: string[];
}

export const roles: Role[] = [
  {
    org: "PwC",
    title: "Incoming Diligence Analytics Intern",
    dates: "Summer 2027",
    status: "Incoming",
    logo: "pwc-logo-transparent.png",
    summary: "Incoming internship with PwC Deals.",
    points: [],
  },
  {
    org: "PGA TOUR Superstore",
    title: "Business Intelligence Intern",
    dates: "Summer 2026",
    logo: "pga_logo_white_stacked.webp",
    summary: "Customer and sales analytics for a national golf and tennis retailer.",
    points: [
      "Designed the framework for a customer scoring model in Snowflake, using SQL to build segmented customer insights.",
      "Built a multi-step SQL model that assigns customers to a primary store using transaction, geographic, and recency signals.",
      "Created a sales and margin Power BI dashboard with fiscal-week logic and regional and department rankings.",
    ],
    tools: ["SQL", "Snowflake", "Power BI"],
  },
  {
    org: "Georgia Tech Football",
    title: "Player Personnel Intern",
    dates: "January 2026 – Present",
    current: true,
    logo: "gt-football-logo.png",
    summary: "Supporting recruiting operations and player evaluation.",
    points: [
      "Streamlining recruiting logistics for the personnel staff.",
      "Evaluating players with Catapult XOS, Hudl, and WARROOM while improving data accuracy.",
    ],
    tools: ["Catapult XOS", "Hudl", "WARROOM"],
  },
  {
    org: "Reel Analytics",
    title: "Scouting & Data Analytics Intern",
    dates: "January 2025 – December 2025",
    logo: "reel-analytics-logo-transparent.png",
    summary: "Football scouting and analytics for a sports-technology company.",
    points: [
      "Evaluated NFL Draft prospects using film, position-specific metrics, and public grading data to build player profiles.",
      "Produced weekly advanced scouting reports supporting a college program's game planning.",
    ],
    tools: ["Hudl", "Excel", "Data visualization"],
  },
  {
    org: "Georgia Tech Football",
    title: "Student Equipment Manager",
    dates: "July 2024 – April 2026",
    logo: "gt-football-logo.png",
    summary: "Daily equipment operations for a Power Four football program.",
    points: [
      "Managed equipment operations for 200+ players and staff across every practice and game.",
    ],
  },
];

export const leadership: Role[] = [
  {
    org: "Georgia Tech VIP: Sports Valuation & Analytics",
    title: "Undergraduate Researcher",
    dates: "Georgia Tech",
    logo: "vip-logo.png",
    summary: "Faculty-led research team studying the business and valuation of college sports.",
    points: [],
  },
  {
    org: "Georgia Tech Sports Business Club",
    title: "VP of Marketing, Project Team Lead",
    dates: "August 2024 – Present",
    logo: "sbc-logo.png",
    summary: "Leading marketing and student strategy teams in case competitions and projects.",
    points: [],
  },
  {
    org: "Sigma Nu Fraternity: Gamma Alpha",
    title: "Rush Chairman, Athletics Chairman",
    dates: "July 2024 – Present",
    logo: "sigma-nu-logo-transparent.png",
    summary: "Recruited 36 new members and managed 15+ intramural teams.",
    points: [],
  },
];

export const education = {
  school: "Georgia Institute of Technology: Scheller College of Business",
  degree: "B.S. Business Administration, Information Technology Management",
  dates: "2024 – Present",
  minors: ["Computing & Business (Denning T&M Program)", "Business of Sport & Entertainment"],
  honors: [
    "Dow Chemical – P.C. McCutcheon Prize for Outstanding Achievement in Business",
    "Dean's List & Faculty Honors",
    "Zell Miller Scholarship",
  ],
  programs: ["Denning Technology & Management Program", "Vertically Integrated Projects: Sports Valuation & Analytics", "GT Europe"],
};
