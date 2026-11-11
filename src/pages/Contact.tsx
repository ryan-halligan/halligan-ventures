import { FileText, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Layout, { PageHeader } from "@/components/Layout";
import { site } from "@/content/site";
import headshot from "@/assets/HalliganRyan_April2026_01-transparent.png";

const links = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "in/ryanhalligan", href: site.linkedin },
  { icon: Github, label: "GitHub", value: "ryan-halligan", href: site.github },
  { icon: Instagram, label: "Instagram", value: "@ryan.halligan", href: site.instagram[0].href },
];

const Contact = () => (
  <Layout>
    <PageHeader eyebrow="Contact" title="Let's talk.">
      The fastest way to reach me is email. I'm happy to talk about projects, analytics, design, or opportunities.
    </PageHeader>
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_1.2fr] md:items-start">
        <img src={headshot} alt="Ryan Halligan" className="mx-auto w-full max-w-sm rounded-md" />
        <div className="grid gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="group flex items-center gap-5 bg-card p-8 transition-colors hover:bg-secondary">
              <Icon className="h-6 w-6 text-accent" />
              <div>
                <p className="eyebrow text-muted-foreground">{label}</p>
                <p className="mt-1 text-xl font-medium group-hover:underline">{value}</p>
              </div>
            </a>
          ))}
          <a
            href="/Ryan_Halligan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-5 bg-card p-8 transition-colors hover:bg-secondary sm:col-span-2"
          >
            <FileText className="h-6 w-6 text-accent" />
            <div>
              <p className="eyebrow text-muted-foreground">Résumé</p>
              <p className="mt-1 text-xl font-medium group-hover:underline">View Résumé</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
