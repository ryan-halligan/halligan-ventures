import { boxScoreAssets, projects } from "@/content/projects";

const BoxScoreCard = () => {
  const p = projects.find((x) => x.slug === "box-score")!;
  const assets = boxScoreAssets.filter((a) => a.image || a.link);
  return (
    <div id="box-score" className="scroll-mt-24 overflow-hidden rounded-md bg-ink text-ink-foreground">
      <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
        <div>
          <span className="eyebrow rounded bg-accent px-2 py-1 text-accent-foreground">Coming Soon</span>
          <h2 className="mt-6 text-6xl md:text-8xl leading-none">Box Score</h2>
          <p className="mt-6 max-w-lg text-ink-muted">{p.summary}</p>
        </div>
        <div className="flex flex-col justify-end gap-3 border-t border-ink-muted/30 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          {["Visual storytelling", "Football coverage", "Data-driven content experiments"].map((l) => (
            <p key={l} className="font-mono text-sm text-ink-muted">— {l}</p>
          ))}
          <p className="mt-4 text-xs text-ink-muted">In development. Not yet launched.</p>
        </div>
      </div>
      {assets.length > 0 && (
        <div className="grid gap-4 p-8 pt-0 sm:grid-cols-3">
          {assets.map((a, i) => a.image && <img key={i} src={a.image} alt={a.caption ?? "Box Score"} className="rounded" />)}
        </div>
      )}
    </div>
  );
};

export default BoxScoreCard;
