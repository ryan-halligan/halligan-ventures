import { Link } from "react-router-dom";
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/content/site";
import { featured, projects } from "@/content/projects";
import { gallery } from "@/content/gallery";
import { designCollections } from "@/content/design";
import { asset } from "@/lib/assets";
import rhLogo from "@/assets/rh-logo.png";
import stadium from "@/assets/Gc3GS0oaYAANSDt.jpeg";

const pillars = [
  { to: "/analytics", label: "Data & Analytics", text: "SQL, Snowflake, and Power BI work that supports business decisions." },
  { to: "/ai", label: "AI", text: "Systems that pair language models with deterministic, testable code." },
  { to: "/design", label: "Creative & Design", text: "Original sports graphics, branding, and visual storytelling." },
];

const featuredStudioTitles = [
  "Shelton",
  "Bijan",
  "Rising Stars",
  "Super Bowl AJC",
  "Kyler Murray Swap",
  "New Stripes",
  "LeBron",
  "Joseph Ossai Design",
];

const Home = () => {
  const items = featured.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);
  const designs = featuredStudioTitles
    .map((title) => gallery.find((g) => g.title === title))
    .filter((g): g is (typeof gallery)[number] => Boolean(g));
  return (
    <Layout>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={stadium} alt="" aria-hidden loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-20 md:object-[center_52%]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-6 px-5 py-10 md:grid-cols-2 md:gap-4 md:py-20">
          <div className="w-full min-w-0 max-w-2xl md:translate-x-3">
            <p className="eyebrow text-accent"><strong>RYAN HALLIGAN</strong> · ANALYTICS · AI · CREATIVE</p>
            <div className="mt-4 flex items-center gap-3 md:hidden">
              <p className="min-w-0 flex-1 text-3xl leading-[1.05]">{site.name}</p>
              <img src={rhLogo} alt="RH logo" className="h-[4.5rem] w-[4.5rem] shrink-0 object-contain md:hidden" />
            </div>
            <h1 className="mt-5 text-4xl leading-[1.05] md:mt-6 md:text-6xl">Building intelligent systems that turn data into decisions.</h1>
            <p className="mt-6 max-w-xl text-lg text-ink-muted">
              I'm a Georgia Tech business student concentrating in information technology management. My work spans data analytics, software, AI, and creative design.
            </p>
            <p className="mt-6 font-mono text-xs text-ink-muted">{site.school} · {site.location}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">
                Explore my work <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 hover:text-accent"><Github className="h-5 w-5" /></a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 hover:text-accent"><Linkedin className="h-5 w-5" /></a>
              <a href={site.instagram[0].href} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-3 hover:text-accent"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="hidden min-h-72 min-w-0 items-center justify-center md:flex">
            <img src={rhLogo} alt="RH logo" className="h-[26rem] w-[26rem] max-w-full scale-[1.15] object-contain lg:h-[32rem] lg:w-[32rem]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <Link key={p.to} to={p.to} className="group border-t-2 border-transparent bg-card p-8 transition-colors hover:border-accent hover:bg-secondary">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h2 className="mt-4 text-3xl">{p.label}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={stadium} alt="" aria-hidden loading="eager" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-15 grayscale md:object-[center_52%]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink/80" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-accent">Selected work</p>
            <h2 className="mt-3 text-5xl">Featured projects</h2>
          </div>
          <Link to="/projects" className="text-sm font-medium text-ink-foreground hover:text-accent">All projects →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
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
              <Link key={d.file} to={`/design/${designCollections.find((c) => c.name === d.collection)?.slug ?? "gallery"}`} className="mb-4 block overflow-hidden rounded-md">
                <img src={asset(d.file)} alt={d.title} loading="lazy" className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]" />
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/design/gallery" className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">
              Browse All Artwork
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
