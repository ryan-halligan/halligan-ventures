import type { AnalyticsCaseStudy as Study } from "@/content/analytics";
import { Tag } from "./Layout";

const AnalyticsCaseStudy = ({ study }: { study: Study }) => {
  return (
    <article id={study.slug} className="rounded-md border bg-card p-8">
      <h3 className="text-3xl">{study.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{study.role} · {study.dates}</p>
      <p className="mt-4">{study.overview}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">{study.methods.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      <dl className="mt-6 divide-y">
        {[
          ["Problem", study.problem],
          ["My contribution", study.contribution],
          ["Takeaways", study.results],
          ["Limitations", study.limitations],
        ].map(([k, v]) => (
          <div key={k} className="grid gap-2 py-3 md:grid-cols-[180px_1fr]">
            <dt className="eyebrow text-accent">{k}</dt>
            <dd className="text-sm text-muted-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
};

export default AnalyticsCaseStudy;
