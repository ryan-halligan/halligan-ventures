import Layout, { PageHeader } from "@/components/Layout";
import ironman from "@/assets/ryan-ironman.jpg";

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
        <p>
          Outside of work I train for endurance races; I finished an Ironman 70.3 in 6:49.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
