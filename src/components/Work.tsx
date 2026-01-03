import { Link } from "react-router-dom";
import gtFootball from "@/assets/gt-football-logo.png";
import reelAnalytics from "@/assets/reel-analytics-logo.png";
import sbc from "@/assets/sbc-logo.png";
import sigmaNu from "@/assets/sigma-nu-logo.png";
import rhLogo from "@/assets/rh-logo.png";
import vipLogo from "@/assets/vip-logo.png";
import projectsBg from "@/assets/projects-bg.png";

const Work = () => {
  const organizations = [
    {
      name: "Personal Projects",
      logo: rhLogo,
      path: "/work/personal",
      description: "Design & Photography",
    },
    {
      name: "Georgia Tech Football",
      logo: gtFootball,
      path: "/work/gt-football",
      description: "Student Equipment Manager",
    },
    {
      name: "Reel Analytics",
      logo: reelAnalytics,
      path: "/work/reel-analytics",
      description: "Scouting & Analytics Intern",
    },
    {
      name: "GT Sports Business Club",
      logo: sbc,
      path: "/work/sbc",
      description: "Atlanta Hawks Marketing Team Lead",
    },
    {
      name: "Sigma Nu Fraternity",
      logo: sigmaNu,
      path: "/work/sigma-nu",
      description: "Rush Chairman & Athletics Chairman",
    },
    {
      name: "Vertically Integrated Projects",
      logo: vipLogo,
      path: "/work/vip",
      description: "Sports Valuation & Analytics Team",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectsBg})`, opacity: 0.20 }}
      />
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">Projects & Collaborations</h2>
        <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {organizations.map((org, index) => (
            <Link
              key={index}
              to={org.path}
              className="group"
            >
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border transition-all duration-300 hover:border-gold hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-full h-32 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-sm font-semibold text-center mb-2 group-hover:text-gold transition-colors duration-300">
                  {org.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center">
                  {org.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
