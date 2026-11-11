import Layout, { PageHeader, Tag } from "@/components/Layout";
import { education, leadership, roles, type Role } from "@/content/experience";
import { asset } from "@/lib/assets";

const RoleRow = ({ r }: { r: Role }) => (
  <li className="grid gap-4 border-t py-8 md:grid-cols-[200px_1fr]">
    <div className="flex flex-col items-center gap-2 text-center md:gap-3">
      <p className="font-mono text-xs text-muted-foreground">{r.dates}</p>
      {r.current && <span className="eyebrow text-accent">Current</span>}
      {r.status && <span className="eyebrow text-accent">{r.status}</span>}
      {r.logo && <img src={asset(r.logo)} alt="" className="mt-1 h-20 w-32 object-contain md:h-24 md:w-36" />}
    </div>
    <div>
      <div className="flex items-center gap-3">
        <div>
          <h3 className="font-sans text-lg font-semibold">{r.title}</h3>
          <p className="text-sm text-muted-foreground">{r.org}</p>
        </div>
      </div>
      <p className="mt-3">{r.summary}</p>
      {r.points.length > 0 && (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {r.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      )}
      {r.tools && <div className="mt-3 flex flex-wrap gap-1.5">{r.tools.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
    </div>
  </li>
);

const ExperiencePage = () => (
  <Layout>
    <PageHeader eyebrow="Experience" title="Where I've worked and led." />
    <section className="mx-auto max-w-5xl px-5 py-12">
      <h2 className="text-4xl">Professional</h2>
      <ul className="mt-6">{roles.map((r) => <RoleRow key={r.org + r.title} r={r} />)}</ul>
    </section>
    <section className="mx-auto max-w-5xl px-5 py-12">
      <h2 className="text-4xl">Leadership & research</h2>
      <ul className="mt-6">{leadership.map((r) => <RoleRow key={r.org} r={r} />)}</ul>
    </section>
    <section className="border-t bg-secondary">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="eyebrow text-accent">Education · {education.dates}</p>
        <h2 className="mt-3 text-4xl">{education.school}</h2>
        <p className="mt-2 text-muted-foreground">{education.degree}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[["Minors", education.minors], ["Honors", education.honors], ["Programs", education.programs]].map(([h, list]) => (
            <div key={h as string}>
              <p className="eyebrow text-muted-foreground">{h as string}</p>
              <ul className="mt-3 space-y-2 text-sm">{(list as string[]).map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ExperiencePage;
