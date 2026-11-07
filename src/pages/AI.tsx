import Layout, { PageHeader } from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const strengths = [
  "AI-assisted workflows",
  "Structured model outputs",
  "Application architecture",
  "Data persistence",
  "Deterministic validation",
  "Reliability & testing",
  "Practical automation",
];

const AI = () => (
  <Layout>
    <PageHeader eyebrow="02 — AI" title="AI">
      I build tools where language models interpret messy input and deterministic code handles what must be exact: IDs, dates, persistence, and tests.
    </PageHeader>
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 flex flex-wrap gap-2">
        {strengths.map((s) => (
          <span key={s} className="rounded-full border border-accent/50 px-3 py-1 text-sm">{s}</span>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.filter((p) => p.pillar === "AI").map((p) => <ProjectCard key={p.slug} project={p} />)}
        <div className="flex flex-col justify-between rounded-md border border-dashed p-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="eyebrow text-muted-foreground">AI</span>
              <span className="eyebrow text-accent">In development</span>
            </div>
            <h3 className="mt-3 text-3xl">Box Score experiments</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Early experiments using AI to support data-driven content for the Box Score sports media project. Exploratory work only; nothing here is a launched product.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AI;
