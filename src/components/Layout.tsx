import { ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { nav, site } from "@/content/site";
import rhLogo from "@/assets/rh-logo.png";
import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-3 focus:bg-card">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="Ryan Halligan, home">
            <img src={rhLogo} alt="" className="h-8 w-auto" />
            <span className="hidden sm:inline text-sm font-semibold tracking-tight">Ryan Halligan</span>
          </Link>
          <nav aria-label="Main" className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded px-3 py-2 text-sm transition-colors hover:text-foreground",
                    isActive ? "text-foreground font-medium" : "text-muted-foreground",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="lg:hidden p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav aria-label="Mobile" className="lg:hidden border-t bg-background px-5 pb-6 pt-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn("block border-b py-3 font-display text-2xl", isActive ? "text-foreground" : "text-muted-foreground")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main id="main" className="flex-1">{children}</main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">© {new Date().getFullYear()} Ryan Halligan · {site.location}</p>
          <div className="flex items-center gap-5">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent"><Github className="h-5 w-5" /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent"><Linkedin className="h-5 w-5" /></a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-accent"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const PageHeader = ({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) => (
  <section className="border-b">
    <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:pt-24">
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-5xl leading-[1.02] md:text-7xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </div>
  </section>
);

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="rounded border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{children}</span>
);

export default Layout;
