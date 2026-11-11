import { projects } from "@/content/projects";
import LogoCover from "./LogoCover";

const BoxScoreCard = () => {
  const p = projects.find((x) => x.slug === "box-score")!;
  return (
    <div id="box-score" className="scroll-mt-24 overflow-hidden rounded-md border border-dashed sm:flex sm:items-center">
      <div className="sm:w-56">
        <LogoCover file="box-score-a-boxed-profile-1080.png" alt="Box Score logo" settings={{ logoScale: 1.35, backgroundColor: "#000000" }} />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl">Box Score</h2>
            <span className="eyebrow rounded bg-accent px-2 py-0.5 text-accent-foreground">Coming Soon</span>
          </div>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">{p.summary}</p>
        </div>
        <p className="shrink-0 font-mono text-xs text-muted-foreground">In development. Not yet launched.</p>
      </div>
    </div>
  );
};

export default BoxScoreCard;
