const images = import.meta.glob("/src/assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

/** Resolve a filename in src/assets (or pass through an absolute URL). */
export const asset = (file?: string) => {
  if (!file) return undefined;
  if (/^https?:\/\//.test(file)) return file;
  return images[`/src/assets/${file}`];
};
