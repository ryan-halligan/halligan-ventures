import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import NotFound from "@/pages/NotFound";
import { collectionBySlug } from "@/content/design";
import { gallery } from "@/content/gallery";
import { asset } from "@/lib/assets";

const DesignCollection = () => {
  const { collection: slug } = useParams();
  const col = collectionBySlug(slug);
  if (!col) return <NotFound />;

  const items = gallery.filter((g) => g.collection === col.name);
  // Pieces assigned to folders are browsed through the folder pages.
  const loose = items.filter((g) => !g.folder);
  const logo = asset(col.logo);

  return (
    <Layout>
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/design" className="inline-flex items-center gap-2 hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Design
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">{col.name}</span>
          </nav>
          <div className="mt-10 flex items-center gap-6">
            {logo && <img src={logo} alt={`${col.name} logo`} className="h-16 w-16 rounded object-contain md:h-20 md:w-20" />}
            <div>
              <h1 className="text-4xl md:text-6xl leading-none">{col.name}</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">{col.description}</p>
            </div>
          </div>
        </div>
      </section>

      {col.folders && (
        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {col.folders.map((f) => {
              const count = items.filter((g) => f.groups.some((gr) => gr.key === g.folder)).length;
              const cover = items.find((g) => f.groups.some((gr) => gr.key === g.folder));
              return (
                <Link
                  key={f.slug}
                  to={`/design/${col.slug}/${f.slug}`}
                  className="group flex flex-col overflow-hidden rounded-md border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {cover && (
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img src={asset(cover.file)} alt="" loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="flex items-center gap-2 text-2xl">
                      {f.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{f.description}</p>
                    <p className="mt-4 font-mono text-xs text-muted-foreground">{count} pieces</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {loose.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12">
          {col.folders && <p className="eyebrow mb-6 text-muted-foreground">More from {col.name}</p>}
          <Gallery items={loose} />
        </section>
      )}
    </Layout>
  );
};

export default DesignCollection;
