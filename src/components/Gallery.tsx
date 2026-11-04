import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/content/gallery";
import { asset } from "@/lib/assets";

/** Masonry gallery (natural aspect ratios) with keyboard-accessible lightbox. */
const Gallery = ({ items }: { items: GalleryItem[] }) => {
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const step = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx, close, step]);

  const current = idx !== null ? items[idx] : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <button
            key={item.file}
            onClick={() => setIdx(i)}
            className="group relative mb-4 block w-full overflow-hidden rounded-md bg-muted text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            aria-label={`Open ${item.title}`}
          >
            <img src={asset(item.file)} alt={item.title} loading="lazy" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="block text-sm font-medium text-ink-foreground">{item.title}</span>
              <span className="eyebrow text-ink-muted">{item.collection}</span>
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.title} className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-ink-foreground" onClick={close}>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium">{current.title}</p>
              <p className="eyebrow text-ink-muted">{current.collection} · {current.category}</p>
            </div>
            <button onClick={close} aria-label="Close" className="p-2 hover:text-accent"><X className="h-6 w-6" /></button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 min-h-0">
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-2 p-3 hover:text-accent"><ChevronLeft className="h-8 w-8" /></button>
            <img src={asset(current.file)} alt={current.title} className="max-h-full max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
            <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-2 p-3 hover:text-accent"><ChevronRight className="h-8 w-8" /></button>
          </div>
          {current.description && <p className="mx-auto max-w-2xl px-4 pb-6 text-center text-sm text-ink-muted">{current.description}</p>}
        </div>
      )}
    </>
  );
};

export default Gallery;
