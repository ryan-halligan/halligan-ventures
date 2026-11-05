import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/content/site";
import { featured, projects } from "@/content/projects";
import { gallery } from "@/content/gallery";
import { asset } from "@/lib/assets";
import headshot from "@/assets/ryan-professional.jpg";

const pillars = [
  { to: "/engineering", label: "Engineering & AI", text: "Systems that pair language models with deterministic, testable code." },
  { to: "/analytics", label: "Data & Analytics", text: "SQL, Snowflake, and Power BI work that supports business decisions." },
  { to: "/design", label: "Creative & Design", text: "Original sports graphics, branding, and visual storytelling." },
];

const Home = () => {
  const items = featured.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);
  const designs = gallery.filter((g) => g.featured).slice(0, 6);
  return (
    <Layout>
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <p className="eyebrow text-accent">{site.identity.join(" • ")}</p>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">{site.headline}</h1>
            <p className="mt-6 max-w-xl text-lg text-ink-muted">{site.intro}</p>
            <p className="mt-6 font-mono text-xs text-ink-muted">{site.school} · {site.location}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/engineering" className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">
                Explore my work <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={site.resume} target="_blank" rel="noreferrer" className="rounded border border-ink-muted/50 px-5 py-3 text-sm font-medium hover:border-ink-foreground">
                View resume
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 hover:text-accent"><Github className="h-5 w-5" /></a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 hover:text-accent"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <img src={headshot} alt="Ryan Halligan" className="mx-auto w-full max-w-sm rounded-md" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <Link key={p.to} to={p.to} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h2 className="mt-4 text-3xl">{p.label}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <p className="eyebrow text-accent">Selected work</p>
        <h2 className="mt-3 text-5xl">Featured projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section className="border-t bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent">Design</p>
              <h2 className="mt-3 text-5xl">From the studio</h2>
            </div>
            <Link to="/design" className="text-sm font-medium hover:text-accent">Full gallery →</Link>
          </div>
          <div className="mt-10 columns-2 gap-4 md:columns-3">
            {designs.map((d) => (
              <Link key={d.file} to="/design" className="mb-4 block overflow-hidden rounded-md">
                <img src={asset(d.file)} alt={d.title} loading="lazy" className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
