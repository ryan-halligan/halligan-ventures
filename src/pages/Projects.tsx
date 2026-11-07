import { useMemo, useState } from "react";
import Layout, { PageHeader } from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects, featured, pillarLabel, pillarOrder, type Pillar } from "@/content/projects";
import { cn } from "@/lib/utils";

type Sort = "Featured" | "Newest" | "A–Z";

const Projects = () => {
  const [filter, setFilter] = useState<Pillar | "All">("All");
  const [sort, setSort] = useState<Sort>("Featured");

  const items = useMemo(() => {
    const list = projects.filter((p) => filter === "All" || p.pillar === filter);
    const rank = (s: string) => (featured.indexOf(s) === -1 ? 99 : featured.indexOf(s));
    if (sort === "A–Z") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Newest") return [...list].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
    return [...list].sort((a, b) => rank(a.slug) - rank(b.slug));
  }, [filter, sort]);

  const chip = (active: boolean) =>
    cn("rounded-full border px-4 py-1.5 text-sm transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground");

  return (
    <Layout>
      <PageHeader eyebrow="Projects" title="Everything I've built, analyzed, and designed." />
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {(["All", ...pillarOrder] as const).map((f) => (
              <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)} className={chip(filter === f)}>
                {f === "All" ? "All" : pillarLabel[f]}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            Sort
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="rounded border bg-card px-3 py-1.5 text-foreground">
              <option>Featured</option>
              <option>Newest</option>
              <option>A–Z</option>
            </select>
          </label>
        </div>
        {sort === "Newest" && <p className="mb-6 text-xs text-muted-foreground">Projects without a verified date appear last.</p>}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
