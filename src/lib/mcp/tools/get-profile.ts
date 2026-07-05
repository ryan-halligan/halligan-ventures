import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Get a summary of John Ryan Halligan: background, current roles, and contact info.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "Name: John Ryan Halligan",
          "Education: Georgia Institute of Technology — Scheller College of Business, BSBA concentrating in Information Technology Management. Minors: Computing & Business (Denning T&M Program), Business of Sport & Entertainment.",
          "Current roles: Player Personnel Intern, Georgia Tech Football (Jan 2026 - Present).",
          "Previous: Scouting & Analytics Intern, Reel Analytics (Jan 2025 - Dec 2025).",
          "Focus: analytics, technology, and operations — especially in sports.",
          "Contact: rhalligan@gmail.com",
          "Website: https://halligan-ventures.lovable.app",
        ].join("\n"),
      },
    ],
  }),
});