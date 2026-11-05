import Layout, { PageHeader, Tag } from "@/components/Layout";
import { roles, leadership } from "@/content/experience";

const toolkit = ["SQL", "Snowflake", "Power BI", "Python", "Excel", "Data cleaning", "Data visualization", "Hudl", "Catapult XOS"];

const Analytics = () => {
  const analyticsRoles = roles.filter((r) => ["PGA TOUR Superstore", "Reel Analytics"].includes(r.org) || r.title === "Player Personnel Intern");
  const vip = leadership[0];
  return (
    <Layout>
      <PageHeader eyebrow="02 — Data & Analytics" title="Data work that supports a decision.">
        From customer segmentation in Snowflake to player evaluation, my analytics work starts with the decision someone needs to make.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-16 space-y-6">
        {analyticsRoles.map((r) => (
          <article key={r.org + r.title} className="grid gap-6 rounded-md border bg-card p-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow text-accent">{r.dates}</p>
              <h2 className="mt-2 text-3xl">{r.org}</h2>
              <p className="text-sm text-muted-foreground">{r.title}</p>
            </div>
            <div>
              <p className="font-medium">{r.summary}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {r.points.map((pt) => <li key={pt} className="border-l-2 border-accent pl-3">{pt}</li>)}
              </ul>
              {r.tools && <div className="mt-4 flex flex-wrap gap-1.5">{r.tools.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
            </div>
          </article>
        ))}
        <p className="text-xs text-muted-foreground">Employer data, internal methods, and deliverables are confidential and intentionally not shown.</p>
      </section>

      <section className="border-t bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Research</p>
            <h2 className="mt-3 text-4xl">{vip.org}</h2>
            <p className="mt-4 text-muted-foreground">{vip.summary}</p>
          </div>
          <div>
            <p className="eyebrow text-accent">Toolkit</p>
            <div className="mt-4 flex flex-wrap gap-2">{toolkit.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Analytics;
