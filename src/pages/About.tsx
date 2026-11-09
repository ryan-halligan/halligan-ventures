import Layout, { PageHeader } from "@/components/Layout";
import { Link } from "react-router-dom";
import ironman from "@/assets/ryan-ironman.jpg";
import { site } from "@/content/site";

const About = () => (
  <Layout>
    <PageHeader eyebrow="About" title="Builder, analyst, designer." />
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.3fr]">
      <img src={ironman} alt="Ryan Halligan after an Ironman 70.3" className="w-full rounded-md" />
      <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          I'm Ryan — a business and information technology student at Georgia Tech, in the Denning Technology & Management Program, with minors in Computing & Business and Business of Sport & Entertainment.
        </p>
        <p>
          Most of what I do lives where software, data, and design meet. I built Ryan-OS to organize my own life with language models and tested code. I've worked on customer analytics in Snowflake and Power BI, and spent two years inside Georgia Tech Football, where accurate information and fast execution matter every day.
        </p>
        <p>
          Design came first. Long before analytics, I was making sports graphics, logos, and templates under RHxVisuals — and that eye for clear communication shapes how I build dashboards and interfaces today.
        </p>
      </div>
    </section>
    <section className="border-t bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="eyebrow text-accent">Endurance</p>
          <h2 className="mt-3 text-3xl">Ironman 70.3</h2>
          <p className="mt-2 text-sm text-muted-foreground">Finished in 6:49.</p>
        </div>
        <div>
          <p className="eyebrow text-accent">Interests</p>
          <h2 className="mt-3 text-3xl">Off the clock</h2>
          <p className="mt-2 text-sm text-muted-foreground">Football, triathlon, building personal tools, and following how technology changes the business of sport.</p>
        </div>
        <div>
          <p className="eyebrow text-accent">Creative projects</p>
          <h2 className="mt-3 text-3xl">Made by me</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {site.instagram.map((i) => (
              <li key={i.href}><a href={i.href} target="_blank" rel="noreferrer" className="hover:text-accent">@{i.href.split("/").filter(Boolean).pop()} <span className="text-muted-foreground">· {i.label}</span></a></li>
            ))}
            <li><Link to="/design" className="text-accent">See the gallery →</Link></li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
