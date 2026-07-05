import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getExperience from "./tools/get-experience";
import getProjects from "./tools/get-projects";
import getEducation from "./tools/get-education";

export default defineMcp({
  name: "halligan-ventures-mcp",
  title: "Halligan Ventures MCP",
  version: "0.1.0",
  instructions:
    "Portfolio tools for John Ryan Halligan. Use `get_profile` for a summary, `get_experience` for roles, `get_projects` for projects & collaborations, and `get_education` for education details.",
  tools: [getProfile, getExperience, getProjects, getEducation],
});