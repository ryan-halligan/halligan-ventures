import type { AnalyticsCaseStudy as Study } from "@/content/analytics";
import { Tag } from "./Layout";

const AnalyticsCaseStudy = ({ study }: { study: Study }) => {
  const rows: [string, string | undefined][] = [
    ["Problem", study.problem],
    ["Dataset & source", study.dataset],
    ["My contribution", study.contribution],
    ["Data preparation", study.preparation],
    ["Methodology", study.methodology],
    ["Visualization", study.visualization],
    ["Results", study.results],
    ["Limitations", study.limitations],
    ["Lessons learned", study.lessons],
  ];
  return (
    <article id={study.slug} className="rounded-md border bg-card p-8">
      <h3 className="text-3xl">{study.title}</h3>
      <div className="mt-3 flex flex-wrap gap-1.5">{study.tools.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      <dl className="mt-6 divide-y">
        {rows.filter(([, v]) => v).map(([k, v]) => (
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
