import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { pillarLabel, type Project } from "@/content/projects";
import { asset } from "@/lib/assets";
import LogoCover from "./LogoCover";
import { Tag } from "./Layout";

const ProjectCard = ({ project, flushLogo = false, directory = false }: { project: Project; flushLogo?: boolean; directory?: boolean }) => {
  const img = asset(project.image);
  const soon = project.status === "Coming Soon";
  return (
    <Link
      to={project.to ?? "/projects"}
      className="group flex flex-col overflow-hidden rounded-md border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {project.logo ? (
        <LogoCover file={project.logo} alt={`${project.name} logo`} settings={project.logoSettings} flush={flushLogo} scaleOverride={directory && project.slug === "pga-bi" ? 1.08 : undefined} />
      ) : img ? (
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img src={img} alt={`${project.name} preview`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
        </div>
      ) : (
        <div className="flex aspect-[16/10] flex-col justify-center gap-2 bg-ink p-6 text-ink-foreground">
          <span className="eyebrow text-accent">{pillarLabel[project.pillar]}</span>
          <span className="font-display text-2xl leading-snug md:text-3xl">{project.name}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-muted-foreground">{pillarLabel[project.pillar]}</span>
          <span className={soon ? "eyebrow rounded bg-accent px-2 py-0.5 text-accent-foreground" : "eyebrow text-accent"}>
            {project.status}
          </span>
        </div>
        <h3 className="mt-3 flex items-center gap-2 text-3xl">
          {project.name}
          <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
