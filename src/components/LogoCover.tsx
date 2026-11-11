import { asset } from "@/lib/assets";
import type { LogoCoverSettings } from "@/lib/logo";

const LogoCover = ({ file, alt, settings, flush = false, scaleOverride }: { file: string; alt: string; settings?: LogoCoverSettings; flush?: boolean; scaleOverride?: number }) => {
  const scale = scaleOverride ?? settings?.logoScale ?? 1;
  const offsetX = settings?.offsetX ?? "0";
  const offsetY = settings?.offsetY ?? "0";
  return (
    <div
      className={`flex aspect-[16/10] items-center justify-center overflow-hidden ${flush ? "p-0" : "p-8"}`}
      style={{ backgroundColor: settings?.backgroundColor ?? "hsl(var(--ink))" }}
    >
      <img
        src={asset(file)}
        alt={alt}
        loading="lazy"
        className="max-h-full max-w-full w-full"
        style={{
          objectFit: settings?.objectFit ?? "contain",
          objectPosition: settings?.objectPosition ?? "center",
          transform: `translate(${offsetX}, ${offsetY}) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default LogoCover;
