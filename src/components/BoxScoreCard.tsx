import { projects } from "@/content/projects";

/** Compact Coming Soon card for Box Score. No authentic logo asset exists yet — flagged for upload. */
const BoxScoreCard = () => {
  const p = projects.find((x) => x.slug === "box-score")!;
  return (
    <div id="box-score" className="scroll-mt-24 flex flex-col gap-4 rounded-md border border-dashed p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="text-2xl">Box Score</h2>
          <span className="eyebrow rounded bg-accent px-2 py-0.5 text-accent-foreground">Coming Soon</span>
        </div>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">{p.summary}</p>
      </div>
      <p className="shrink-0 font-mono text-xs text-muted-foreground">In development. Not yet launched.</p>
    </div>
  );
};

export default BoxScoreCard;
