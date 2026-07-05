import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_education",
  title: "Get education",
  description: "Get John Ryan Halligan's education details, minors, special programs, and honors.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "Georgia Institute of Technology — Scheller College of Business",
          "Degree: BSBA, concentration in Information Technology Management",
          "Minors: Computing & Business (Denning T&M Program), Business of Sport & Entertainment",
          "Special Programs: Denning Technology & Management Program",
          "Honors: Dow Chemical – P.C. McCutcheon Prize for Outstanding Achievement in Business",
          "High School: Dunwoody High School",
        ].join("\n"),
      },
    ],
  }),
});