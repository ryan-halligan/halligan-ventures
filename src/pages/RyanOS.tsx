import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import Layout, { Tag } from "@/components/Layout";
import { RYAN_OS_DEMO_IMAGE, RYAN_OS_REPO, projects } from "@/content/projects";

const flow = [
  ["Capture", "Voice or text input; the original recording is preserved before transcription."],
  ["Review", "Transcribed text is shown for confirmation before anything is saved."],
  ["Classify", "A small language model with a structured schema labels it a task, note, journal entry, connection, or meal."],
  ["Organize", "Tasks are stored with urgency, due date, estimated effort, and manual order."],
  ["Find", "Natural-language requests select existing task IDs; code removes unknown IDs and duplicates and caps results at 20."],
  ["Plan", "Cached calendar events and open tasks appear together in a seven-day agenda (America/New_York boundaries)."],
];

const sections: [string, string][] = [
  ["The problem", "Capturing something and deciding what to do with it are different problems. A voice note is easy to record but can disappear into unstructured text, and keyword search doesn't answer “what can I finish in the next 30 minutes?” I wanted to learn whether an LLM could help with both steps while keeping saved data and task selections verifiable."],
  ["Why this approach", "The language model handles language: what kind of capture this is and what a request means. Deterministic code handles what must be exact — IDs, dates, duplicate prevention, and persistence. For a personal list capped at 300 active tasks, sending explicitly selected task fields gives the ranker enough context without building a separate ranking model. Page loads read cached data; model calls happen only on an explicit action or scheduled job."],
  ["Reliability & validation", "The calendar acceptance suite was rerun for the case study: 41 checks passed, using an in-memory database and stubbed fetches. The task-selection guards have a separate offline test suite. Historical capture checks exercised concurrent confirmation, repeated confirmation, a capture just before ET midnight, and a missing-name fallback. These checks establish specific software properties — they do not measure classification accuracy, ranking quality, or time saved."],
  ["Broader workspace", "Beyond the organizer, the private app includes a CRM, job tracking with tailored resumes, notes with offline sync, training plans from Coros data, and a read-only investment portfolio view. The public repository previews these with invented data only."],
  ["Results & limits", "I'm the only user, so broader usefulness and any time saved remain unmeasured. The next step is a labeled evaluation of capture classification and task ranking, followed by a small comparison against keyword search."],
];

const RyanOS = () => {
  const p = projects.find((x) => x.slug === "ryan-os")!;
  return (
    <Layout>
      <article>
        <header className="border-b">
          <div className="mx-auto max-w-4xl px-5 pb-12 pt-10">
            <Link to="/ai" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to AI
            </Link>
            <p className="eyebrow mt-10 text-accent">Flagship case study · Personal project</p>
            <h1 className="mt-4 text-6xl md:text-8xl leading-none">Ryan-OS</h1>
            <p className="mt-6 text-xl text-muted-foreground">From scattered commitments to a daily organizer — an AI application case study.</p>
            <div className="mt-6 flex flex-wrap gap-1.5">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            <a href={RYAN_OS_REPO} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:-translate-y-0.5 transition-transform">
              <Github className="h-4 w-4" /> Public case study on GitHub
            </a>
          </div>
        </header>

        <figure className="mx-auto max-w-5xl px-5 py-12">
          <img src={RYAN_OS_DEMO_IMAGE} alt="Ryan-OS public demo showing organizer, CRM, Jobs, Notes, Training, and Portfolio previews" className="w-full rounded-md border" />
          <figcaption className="mt-3 font-mono text-xs text-muted-foreground">Public demo · all content shown is synthetic. The private application stays private.</figcaption>
        </figure>

        <section className="mx-auto max-w-4xl px-5 pb-12">
          <h2 className="text-4xl">How it works</h2>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {flow.map(([t, d], i) => (
              <li key={t} className="bg-card p-6">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-sans text-base font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mx-auto max-w-3xl space-y-12 px-5 pb-24">
          {sections.map(([h, body]) => (
            <section key={h}>
              <h2 className="text-4xl">{h}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
            </section>
          ))}
          <p className="border-t pt-6 text-sm text-muted-foreground">
            Source excerpts, validation notes, and a runnable synthetic demo are in the{" "}
            <a href={RYAN_OS_REPO} target="_blank" rel="noreferrer" className="underline hover:text-foreground">ryan-os-case-study repository</a>.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default RyanOS;
