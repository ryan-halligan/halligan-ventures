import { useMemo, useState } from "react";
import Layout, { PageHeader } from "@/components/Layout";
import Gallery from "@/components/Gallery";
import BoxScoreCard from "@/components/BoxScoreCard";
import { gallery, galleryCategories, galleryCollections } from "@/content/gallery";
import { cn } from "@/lib/utils";

const Design = () => {
  const [cat, setCat] = useState<string>("All");
  const [col, setCol] = useState<string>("All");
  const cats = ["All", ...galleryCategories.filter((c) => gallery.some((g) => g.category === c))];
  const cols = ["All", ...galleryCollections.filter((c) => gallery.some((g) => g.collection === c))];
  const items = useMemo(
    () => gallery.filter((g) => (cat === "All" || g.category === cat) && (col === "All" || g.collection === col)),
    [cat, col],
  );
  const chip = (on: boolean) =>
    cn("rounded-full border px-4 py-1.5 text-sm transition-colors", on ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground");

  return (
    <Layout>
      <PageHeader eyebrow="03 — Creative & Design" title="Original work, made by hand.">
        RHxVisuals and years of sports graphics, branding, and social content — every piece below is my own design.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 pt-12">
        <BoxScoreCard />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <p className="eyebrow mb-2 text-muted-foreground">Collection</p>
        <div role="group" aria-label="Filter by collection" className="mb-5 flex flex-wrap gap-2">
          {cols.map((c) => (
            <button key={c} aria-pressed={col === c} onClick={() => setCol(c)} className={chip(col === c)}>{c}</button>
          ))}
        </div>
        <p className="eyebrow mb-2 text-muted-foreground">Category</p>
        <div role="tablist" aria-label="Filter designs" className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                cat === c ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        {items.length ? <Gallery key={cat + col} items={items} /> : <p className="text-muted-foreground">No pieces match both filters.</p>}
      </section>
    </Layout>
  );
};

export default Design;
