import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_experience",
  title: "Get experience",
  description: "List John Ryan Halligan's professional experience with roles, organizations, and dates.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          [
            {
              role: "Player Personnel Intern",
              organization: "Georgia Tech Football",
              period: "January 2026 - Present",
              highlights: [
                "Streamline recruiting event logistics.",
                "Leverage specialized scouting systems to enhance data accuracy and workflow efficiency.",
              ],
            },
            {
              role: "Scouting & Analytics Intern",
              organization: "Reel Analytics",
              period: "January 2025 - December 2025",
              highlights: [
                "Analyzed 250+ NFL Draft prospects using HUDL film, PFF grades, and position-specific metrics.",
                "Produced weekly advanced scouting reports for the University of Colorado.",
              ],
            },
            {
              role: "Student Equipment Manager",
              organization: "Georgia Tech Football",
              period: "2023 - 2025",
            },
          ],
          null,
          2,
        ),
      },
    ],
  }),
});