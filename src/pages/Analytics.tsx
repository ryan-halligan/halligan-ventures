import Layout, { Tag } from "@/components/Layout";
import { featuredWork, independentProjects, approach, toolkit, caseStudies } from "@/content/analytics";
import AnalyticsCaseStudy from "@/components/AnalyticsCaseStudy";
import SyntheticSegmentChart from "@/components/SyntheticSegmentChart";

const FlowMotif = () => (
  <svg aria-hidden viewBox="0 0 600 300" className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/3 opacity-30" fill="none">
    {[0, 1, 2, 3, 4].map((i) => (
      <path key={i} d={`M0 ${60 + i * 45} C 200 ${20 + i * 50}, 380 ${260 - i * 40}, 600 ${150}`} stroke="hsl(var(--accent))" strokeWidth="1" />
    ))}
    {[120, 300, 480].map((x) => <circle key={x} cx={x} cy={150} r="4" fill="hsl(var(--accent))" />)}
  </svg>
);

const Analytics = () => {
  const indie = independentProjects.filter((p) => p.published);
  return (
    <Layout>
      <section className="relative overflow-hidden border-b bg-ink text-ink-foreground">
        <FlowMotif />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pt-24">
          <p className="eyebrow text-accent">01 — Data & Analytics</p>
          <h1 className="mt-4 max-w-4xl text-5xl leading-[1.02] md:text-7xl">Turning complex data into better decisions.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            From customer intelligence and business reporting to research and player evaluation, I focus on transforming raw information into reliable insights that support real decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow text-accent">Featured analytics work</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[...featuredWork, ...indie].map((w) => (
            <article key={w.org} className="flex flex-col rounded-md border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg motion-reduce:transform-none">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-muted-foreground">{w.kind}</span>
                <span className="eyebrow text-accent">{w.dates}</span>
              </div>
              <h2 className="mt-3 text-2xl">{w.org}</h2>
              <p className="text-sm text-muted-foreground">{w.role}</p>
              <p className="mt-4 font-medium">{w.summary}</p>
              <ul className="mt-3 flex-1 space-y-2 text-sm text-muted-foreground">
                {w.responsibilities.map((r) => <li key={r} className="border-l-2 border-accent pl-3">{r}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">{w.tools.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Employer data, internal methods, metrics, and deliverables are confidential and intentionally not shown.</p>
      </section>

      <section className="border-y bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-accent">My analytical approach</p>
          <h2 className="mt-3 text-4xl">From question to decision.</h2>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((a, i) => (
              <li key={a.step} className="bg-card p-6">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-2 text-2xl">{a.step}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                {a.seen.length > 0 && <p className="mt-3 font-mono text-[11px] text-muted-foreground">Applied at: {a.seen.join(" · ")}</p>}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-muted-foreground">A general description of how I work; not every project used every step.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow text-accent">Technical toolkit</p>
          <h2 className="mt-3 text-4xl">Tools, and where I've used them.</h2>
          <dl className="mt-8 divide-y border-y">
            {toolkit.map((g) => (
              <div key={g.group} className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="eyebrow text-muted-foreground">{g.group}</dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  {g.tools.map((t) => (
                    <span key={t.name}>
                      <span className="font-medium">{t.name}</span>
                      {t.where && <span className="text-muted-foreground"> — {t.where}</span>}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="eyebrow text-accent">Visual proof</p>
          <h2 className="mt-3 text-4xl">How I present a segmentation.</h2>
          <SyntheticSegmentChart />
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="mx-auto max-w-6xl space-y-10 px-5 pb-16">
          <p className="eyebrow text-accent">Case studies</p>
          {caseStudies.map((c) => <AnalyticsCaseStudy key={c.slug} study={c} />)}
        </section>
      )}
    </Layout>
  );
};

export default Analytics;
