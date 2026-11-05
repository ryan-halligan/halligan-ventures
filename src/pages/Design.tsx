import { useMemo, useState } from "react";
import Layout, { PageHeader } from "@/components/Layout";
import Gallery from "@/components/Gallery";
import BoxScoreCard from "@/components/BoxScoreCard";
import { gallery, galleryCategories } from "@/content/gallery";
import { cn } from "@/lib/utils";

const Design = () => {
  const [cat, setCat] = useState<string>("All");
  const cats = ["All", ...galleryCategories.filter((c) => gallery.some((g) => g.category === c))];
  const items = useMemo(() => (cat === "All" ? gallery : gallery.filter((g) => g.category === cat)), [cat]);

  return (
    <Layout>
      <PageHeader eyebrow="03 — Creative & Design" title="Original work, made by hand.">
        RHxVisuals and years of sports graphics, branding, and social content — every piece below is my own design.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 pt-12">
        <BoxScoreCard />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
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
        <Gallery key={cat} items={items} />
      </section>
    </Layout>
  );
};

export default Design;
