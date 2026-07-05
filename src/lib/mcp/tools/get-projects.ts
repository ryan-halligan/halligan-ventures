import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_projects",
  title: "Get projects",
  description: "List John Ryan Halligan's projects and collaborations with short descriptions and site links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const base = "https://halligan-ventures.lovable.app";
    const items = [
      { name: "Personal Projects", description: "Design & Analysis", url: `${base}/work/personal` },
      { name: "Georgia Tech Football", description: "Player Personnel Intern", url: `${base}/work/gt-football` },
      { name: "Reel Analytics", description: "Scouting & Analytics Intern (Jan 2025 - Dec 2025)", url: `${base}/work/reel-analytics` },
      { name: "GT Sports Business Club", description: "Atlanta Hawks Marketing Team Lead", url: `${base}/work/sbc` },
      { name: "Sigma Nu Fraternity", description: "Rush Chairman & Athletics Chairman", url: `${base}/work/sigma-nu` },
      { name: "Vertically Integrated Projects", description: "Sports Valuation & Analytics Team", url: `${base}/work/vip` },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});