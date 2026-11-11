import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout, { PageHeader } from "@/components/Layout";
import BoxScoreCard from "@/components/BoxScoreCard";
import { designCollections } from "@/content/design";
import { gallery } from "@/content/gallery";
import { asset } from "@/lib/assets";
import LogoCover from "@/components/LogoCover";

const Design = () => (
  <Layout>
    <PageHeader eyebrow="03: Creative & Design" title="Original work, made by hand.">
      Sports graphics, logos, templates, and client work from RHxVisuals, TheGRFXCommittee, and my other creative projects.
    </PageHeader>

    <section className="mx-auto max-w-6xl px-5 pt-12">
      <BoxScoreCard />
    </section>

    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {designCollections.map((c) => {
          const count = gallery.filter((g) => g.collection === c.name).length;
          return (
            <Link
              key={c.slug}
              to={`/design/${c.slug}`}
              className="group flex flex-col overflow-hidden rounded-md border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {c.logo ? (
                <LogoCover file={c.logo} alt={`${c.name} logo`} settings={c.logoSettings} flush={c.name !== "Fit Bowl Diner"} />
              ) : <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={asset(c.cover)} alt={`${c.name} artwork`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="flex items-center gap-2 text-2xl">
                  {c.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.description}</p>
                <p className="mt-4 font-mono text-xs text-muted-foreground">{count} pieces</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Link to="/design/gallery" className="inline-flex items-center gap-2 rounded border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">
          Browse all artwork <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Design;
