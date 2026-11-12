import Layout, { PageHeader } from "@/components/Layout";
import { Link } from "react-router-dom";
import personal from "@/assets/ryan-casual.png";
import europe from "@/assets/ryan-europe.jpg";
import { site } from "@/content/site";
import { asset } from "@/lib/assets";

const plaid = asset("IMG_7033.JPG");
const award = asset("award-with-dean-optimized.jpg");
const finish = asset("me finishing half ironman.JPG");

const About = () => (
  <Layout>
    <PageHeader eyebrow="About" title="Builder, analyst, designer." />
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.3fr]">
      <img src={personal} alt="Ryan Halligan at the beach" className="w-full rounded-md object-cover" />
      <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          I'm Ryan, a business and information technology student at Georgia Tech, in the Denning Technology & Management Program, with minors in Computing & Business and Business of Sport & Entertainment.
        </p>
        <p>
          Most of what I do lives where software, data, and design meet. I built Ryan-OS to organize my own life with language models and tested code. I've worked on customer analytics in Snowflake and Power BI, and spent two years inside Georgia Tech Football, where accurate information and fast execution matter every day.
        </p>
        <p>
          Design came first. Long before analytics, I was making sports graphics, logos, and templates under RHxVisuals. That eye for clear communication shapes how I build dashboards and interfaces today.
        </p>
      </div>
    </section>
    <section className="border-t bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="eyebrow text-accent">Endurance</p>
          <ul className="mt-3 space-y-2 text-lg">
            <li>Ironman 70.3</li>
            <li>Atlanta Publix Marathon</li>
            <li>DoloMyths Run 22K Sky Race</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-accent">Interests</p>
          <h2 className="mt-3 text-3xl">Off the clock</h2>
          <p className="mt-2 text-sm text-muted-foreground">You’ll usually find me playing pickup basketball, vibe coding a side project, or getting a game of chess in.</p>
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
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow text-accent">Personal</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <img src={finish} alt="Ryan Halligan finishing an Ironman 70.3" className="aspect-[4/3] w-full rounded-md object-cover object-[center_58%]" />
        <img src={europe} alt="Ryan Halligan in Europe" className="aspect-[4/3] w-full rounded-md object-cover object-[center_65%]" />
        <img src={plaid} alt="Ryan Halligan in a plaid shirt" className="aspect-[4/3] w-full rounded-md object-cover object-center" />
        <img src={award} alt="Ryan Halligan receiving the P.C. McCutcheon award at Georgia Tech" className="aspect-[4/3] w-full rounded-md object-cover object-[center_45%]" />
      </div>
    </section>
  </Layout>
);

export default About;
