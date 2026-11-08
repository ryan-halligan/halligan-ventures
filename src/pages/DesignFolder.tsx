import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import NotFound from "@/pages/NotFound";
import { collectionBySlug } from "@/content/design";
import { gallery } from "@/content/gallery";
import { asset } from "@/lib/assets";

const DesignFolder = () => {
  const { collection: colSlug, folder: folderSlug } = useParams();
  const col = collectionBySlug(colSlug);
  const folder = col?.folders?.find((f) => f.slug === folderSlug);
  if (!col || !folder) return <NotFound />;

  const logo = asset(col.logo);

  return (
    <Layout>
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-10">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/design" className="inline-flex items-center gap-2 hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Design
            </Link>
            <span aria-hidden>/</span>
            <Link to={`/design/${col.slug}`} className="hover:text-foreground">{col.name}</Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">{folder.name}</span>
          </nav>
          <div className="mt-10 flex items-center gap-6">
            {logo && <img src={logo} alt={`${col.name} logo`} className="h-14 w-14 rounded object-contain md:h-16 md:w-16" />}
            <div>
              <h1 className="text-4xl md:text-6xl leading-none">{folder.name}</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">{folder.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-14 px-5 py-12">
        {folder.groups.map((gr) => {
          const items = gallery.filter((g) => g.collection === col.name && g.folder === gr.key);
          if (!items.length) return null;
          return (
            <div key={gr.key}>
              {folder.groups.length > 1 && <h2 className="mb-6 text-3xl">{gr.label}</h2>}
              <Gallery items={items} />
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default DesignFolder;
