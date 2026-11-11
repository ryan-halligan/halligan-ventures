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
  logo?: string;
  caseStudySlug?: string;
}

export const featuredWork: AnalyticsWork[] = [
  {
    org: "PGA TOUR Superstore",
    role: "Business Intelligence Intern",
    dates: "Summer 2026",
    kind: "Experience",
    logo: "pga_logo_white_stacked.webp",
    caseStudySlug: "pga-tour-superstore",
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
    logo: "reel-analytics-logo-transparent.png",
    caseStudySlug: "reel-analytics",
    summary: "Structured research and comparative evaluation for a sports-technology company.",
    responsibilities: [
      "Combined film review, position-specific metrics, and public grading data into consistent player profiles.",
      "Checked data quality across sources and wrote comparisons that supported decision-makers.",
      "Produced recurring analytical reports on a weekly cadence.",
    ],
    tools: ["Excel", "Hudl", "Data visualization"],
  },
  {
    org: "Georgia Tech VIP: Sports Valuation & Analytics",
    role: "Undergraduate Researcher",
    dates: "Georgia Tech",
    kind: "Research",
    logo: "vip-logo.png",
    caseStudySlug: "vip",
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
  { step: "Measure & improve", text: "Interpret findings, test assumptions and limitations where supported, and identify how the analysis could improve.", seen: ["VIP Research"] },
];

export const toolkit: { group: string; tools: { name: string; where?: string }[] }[] = [
  { group: "Data querying", tools: [{ name: "SQL", where: "PGA TOUR Superstore" }, { name: "Snowflake", where: "PGA TOUR Superstore" }] },
  { group: "Programming & analysis", tools: [{ name: "TypeScript", where: "Ryan-OS" }] },
  { group: "Business intelligence", tools: [{ name: "Power BI", where: "PGA TOUR Superstore" }, { name: "Excel", where: "Reel Analytics" }] },
  { group: "Statistics & modeling", tools: [{ name: "Regression", where: "VIP Research" }, { name: "Segmentation & scoring", where: "PGA TOUR Superstore" }] },
  { group: "Data systems", tools: [{ name: "Postgres", where: "Ryan-OS" }, { name: "Data validation", where: "GT Football" }, { name: "Transformations", where: "PGA TOUR Superstore" }] },
  { group: "Communication", tools: [{ name: "Dashboards", where: "PGA TOUR Superstore" }, { name: "Data visualization", where: "Reel Analytics" }] },
];

export interface AnalyticsCaseStudy {
  slug: string;
  title: string;
  org: string;
  role: string;
  dates: string;
  logo: string;
  overview: string;
  problem: string;
  contribution: string;
  methods: string[];
  sections: [string, string][];
  results: string;
  limitations: string;
}

// Add real, public-safe case studies here. Empty = section hidden.
export const caseStudies: AnalyticsCaseStudy[] = [
  {
    slug: "pga-tour-superstore",
    title: "PGA TOUR Superstore",
    org: "PGA TOUR Superstore",
    role: "Business Intelligence Intern",
    dates: "Summer 2026",
    logo: "pga_logo_white_stacked.webp",
    overview: "During Summer 2026, I worked as a Business Intelligence Intern at PGA TOUR Superstore's headquarters on the Business Technology and Business Intelligence team. My internship centered on three initiatives involving customer analytics, store assignment, and business reporting.",
    problem: "The business needed consistent customer groupings, a practical primary-store assignment, and reporting that could be reviewed across fiscal periods and operating areas.",
    contribution: "I designed the customer-scoring framework, built SQL logic for primary-store assignment, and developed Power BI reporting.",
    methods: ["SQL", "Snowflake", "Power BI", "Data modeling"],
    sections: [
      ["Avid Customer Segmentation", "The business needed to understand its most avid customers, who represented an important share of customer value, and identify ways to develop stronger relationships with them. I worked with customer data using SQL and Snowflake to develop a framework for identifying and segmenting especially engaged customers. I explored opportunities for more personalized engagement, developed specific recommendations for targeting these customers, and supported a concierge-style concept intended to strengthen customer relationships and encourage repeat visits. These were analytical recommendations and concept development; I am not claiming that the concept launched or generated measured business outcomes."],
      ["Customer-to-Store Assignment", "I built SQL logic to assign each customer to a primary store using transaction frequency, geography, and recency signals. Reliable attribution creates a consistent foundation for downstream reporting and customer relationship analysis without exposing proprietary rules, code, schemas, or internal metrics."],
      ["Sales & Margin Reporting", "I developed Power BI reporting with fiscal-week logic, regional comparisons, and departmental views so stakeholders could review sales and margin information in a consistent structure for decision support."],
    ],
    results: "The work produced public-safe analytical frameworks and reporting structures for review. Internal customer counts, coverage rates, and improvement figures are withheld pending approval.",
    limitations: "This case study omits proprietary scoring thresholds, SQL, database structures, dashboards, customer records, and internal documentation.",
  },
  {
    slug: "reel-analytics",
    title: "Reel Analytics",
    org: "Reel Analytics",
    role: "Scouting & Data Analytics Intern",
    dates: "January–December 2025",
    logo: "reel-analytics-logo-transparent.png",
    overview: "Scouting research and comparative player evaluation for a sports-technology company.",
    problem: "Decision-makers needed repeatable player profiles that combined film review, position-specific context, and public grading data.",
    contribution: "I evaluated 250+ prospects, developed 200+ scouting profiles, checked source quality, and produced recurring scouting reports.",
    methods: ["Film analysis", "Comparative evaluation", "Excel", "Data visualization"],
    sections: [
      ["NFL Draft Guide", "I evaluated 250+ draft prospects and developed 200+ player profiles by combining film review, performance data, comparative evaluation, scouting research, and visualization to support preparation of an NFL Draft Guide."],
      ["In-Season Opponent Scouting Reports", "I produced recurring, data-driven scouting reports by analyzing future opponents' tendencies, strengths, and weaknesses. I combined film observations with football performance data to support preparation and decision-making for a collegiate football program."],
    ],
    results: "The work supported structured prospect research and recurring scouting communication. Specific reports, client identities, internal ratings, and private player data remain confidential.",
    limitations: "This public summary does not reproduce restricted scouting reports, proprietary models, or private evaluations.",
  },
  {
    slug: "vip",
    title: "Georgia Tech VIP: Sports Valuation & Analytics",
    org: "Georgia Tech VIP: Sports Valuation & Analytics",
    role: "Undergraduate Researcher",
    dates: "Georgia Tech",
    logo: "vip-logo.png",
    overview: "Our Georgia Tech Sports Valuation & Analytics research evolved from a question about whether basketball-focused Big East programs could gain an advantage under college athletics revenue sharing into a broader study of how college basketball programs construct competitive rosters.",
    problem: "We initially wanted to understand whether programs such as St. John's could gain a competitive advantage by focusing resources on basketball rather than allocating them across football and other sports. As available financial data proved insufficient to establish that advantage directly, our research team pivoted to how NIL, transfer rules, roster continuity, and revenue sharing have changed roster construction.",
    contribution: "I contributed to the faculty-led research team's public-data research, analytical preparation, interpretation of findings, and discussion of assumptions and limitations. The work described here reflects our team's research rather than a claim that I built every model.",
    methods: ["Team-season data", "Bart Torvik", "Performance metrics", "Regression analysis", "Research"],
    sections: [
      ["Roster-building strategies", "We compared four approaches: recruiting and developing highly rated freshmen, rebuilding through the transfer portal, retaining experienced returning players, and combining approaches in a hybrid strategy. Duke and St. John's provided useful examples of contrasting approaches, without assuming that every season follows exactly the same model."],
      ["Data and methodology", "Our research team used team-season data and basketball performance metrics from Bart Torvik and other documented research sources. We considered retained prior-season minutes, transfer minutes, adjusted efficiency, strength of schedule, and prior team performance. Where applicable, regression models included school and season controls. We separately considered regular-season performance, tournament qualification, and tournament advancement."],
      ["Preliminary quantitative findings", "In the tournament-qualification analysis, we examined 2,289 eligible team-seasons covering 2019 and 2021–2026. In a within-school model, an additional 10 percentage points of retained prior-season minutes was associated with an approximately 3.2-percentage-point higher likelihood of making the main NCAA tournament bracket after controls. In the tournament-advancement analysis, the estimated association beyond seed was approximately +0.01 wins, with a 95% confidence interval from −0.05 to +0.07, so no clear additional advantage was established. These are preliminary observational associations from group research, not causal effects."],
      ["Interpretation and ongoing work", "The main takeaway is nuanced: roster continuity appears associated with reaching the tournament, but our available analysis does not establish that it creates extra tournament wins beyond what seeding predicts. Related group research continues on player development, transfer behavior, and Bart Torvik's PORPAGATU! metric. The original Big East revenue-sharing advantage remains a research hypothesis, not a proven conclusion."],
    ],
    results: "Our preliminary results suggest that roster continuity may be associated with tournament qualification, while providing no clear evidence of additional tournament wins beyond seeding. The findings are observational and remain subject to further research.",
    limitations: "This public summary does not include private workbooks, presentation files, restricted datasets, model details beyond the high-level methodology, or unsupported causal claims. Financial data was not sufficient to directly prove the original Big East advantage hypothesis.",
  },
];
