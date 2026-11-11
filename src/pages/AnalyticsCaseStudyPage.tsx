import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { caseStudies } from "@/content/analytics";
import { asset } from "@/lib/assets";
import { Tag } from "@/components/Layout";
import NotFound from "@/pages/NotFound";

const AnalyticsCaseStudyPage = () => {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return <NotFound />;
  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const previous = caseStudies[(index + caseStudies.length - 1) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];
  return (
    <Layout>
      <section className="border-b bg-ink text-ink-foreground">
        <div className="mx-auto max-w-5xl px-5 pb-14 pt-12 md:pb-20 md:pt-20">
          <Link to="/analytics" className="text-sm text-ink-muted hover:text-accent">← Analytics overview</Link>
          <div className="mt-10 flex items-start gap-5">
            <img src={asset(study.logo)} alt={`${study.org} logo`} className="h-16 w-28 object-contain object-left md:h-20 md:w-36" />
            <div>
              <p className="eyebrow text-accent">{study.dates}</p>
              <h1 className="mt-3 text-4xl leading-tight md:text-6xl">{study.title}</h1>
              <p className="mt-3 text-ink-muted">{study.role}</p>
            </div>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="eyebrow text-accent">Overview</p>
            <p className="mt-4 text-xl leading-relaxed">{study.overview}</p>
          </div>
          <div className="rounded border bg-secondary p-5">
            <p className="eyebrow text-muted-foreground">Tools & methods</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{study.methods.map((method) => <Tag key={method}>{method}</Tag>)}</div>
          </div>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <section><p className="eyebrow text-accent">The problem</p><p className="mt-3 text-muted-foreground">{study.problem}</p></section>
          <section><p className="eyebrow text-accent">My contribution</p><p className="mt-3 text-muted-foreground">{study.contribution}</p></section>
        </div>
        <div className="mt-14 space-y-10 border-t pt-10">
          {study.sections.map(([heading, text]) => <section key={heading}><h2 className="text-3xl">{heading}</h2><p className="mt-3 max-w-3xl text-muted-foreground">{text}</p></section>)}
        </div>
        <div className="mt-14 grid gap-8 border-t pt-10 md:grid-cols-2">
          <section><p className="eyebrow text-accent">Takeaways</p><p className="mt-3 text-muted-foreground">{study.results}</p></section>
          <section><p className="eyebrow text-accent">Confidentiality & limits</p><p className="mt-3 text-muted-foreground">{study.limitations}</p></section>
        </div>
        <nav className="mt-14 flex flex-wrap justify-between gap-4 border-t pt-6 text-sm">
          <Link to={`/analytics/${previous.slug}`} className="hover:text-accent">← {previous.title}</Link>
          <Link to={`/analytics/${next.slug}`} className="hover:text-accent">{next.title} →</Link>
        </nav>
      </main>
    </Layout>
  );
};

export default AnalyticsCaseStudyPage;
