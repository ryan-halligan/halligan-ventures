// Illustrative only: invented numbers, not from any employer or real dataset.
const data = [
  { label: "Champions", value: 82 },
  { label: "Loyal", value: 64 },
  { label: "Promising", value: 47 },
  { label: "At risk", value: 31 },
  { label: "Dormant", value: 18 },
];

const SyntheticSegmentChart = () => (
  <figure className="mt-8 rounded-md border bg-card p-6">
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.label} className="grid grid-cols-[90px_1fr_32px] items-center gap-3 text-sm">
          <span className="text-muted-foreground">{d.label}</span>
          <div className="h-3 rounded-full bg-muted">
            <div className="h-3 rounded-full bg-accent" style={{ width: `${d.value}%` }} />
          </div>
          <span className="font-mono text-xs">{d.value}</span>
        </div>
      ))}
    </div>
    <figcaption className="mt-5 border-t pt-3 font-mono text-[11px] text-muted-foreground">
      Illustrative, synthetic data. Average engagement score by customer segment — a demonstration of format, not real results.
    </figcaption>
  </figure>
);

export default SyntheticSegmentChart;
