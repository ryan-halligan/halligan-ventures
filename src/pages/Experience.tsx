import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import gtFootball from "@/assets/gt-football-logo.png";
import reelAnalytics from "@/assets/reel-analytics-logo.png";
import sbc from "@/assets/sbc-logo.png";
import sigmaNu from "@/assets/sigma-nu-logo.png";
import hawks from "@/assets/hawks-logo.png";
import swimAtlanta from "@/assets/swim-atlanta-logo.webp";
import saintJude from "@/assets/saint-jude-logo.png";
import ymsl from "@/assets/ymsl-logo.png";
import allSaints from "@/assets/all-saints-logo.png";

const Experience = () => {
  const experiences = [
    {
      title: "Student Equipment Manager",
      organization: "Georgia Tech Football Team",
      logo: gtFootball,
      location: "Atlanta, GA",
      period: "July 2024 - Present",
      responsibilities: [
        "Managing daily equipment operations for 200+ players and staff, ensuring gear is readily available for every practice and game",
        "Collaborating with coaches during practices by managing practice setup and takedown, improving efficiency of on-field drills, spotting footballs for scripted plays, and operating the scoreboard",
        "Supporting gameday operations as a ballboy, defensive signs operator",
      ],
    },
    {
      title: "Scouting & Data Analytics Intern",
      organization: "Reel Analytics",
      logo: reelAnalytics,
      location: "Atlanta, GA",
      period: "January 2025 - Present",
      responsibilities: [
        "Evaluating 250+ NFL Draft prospects by analyzing HUDL film, position specific metrics, PFF Grades, and personal information to create 200+ player profiles with NFL comparisons, predictive analytics, and data visualization for an NFL Draft Guide",
        "Supporting the University of Colorado's game planning by producing weekly, data-driven advanced scouting reports on future opponents, using Reel Analytics' IGA® score and PFF data to identify insightful player tendencies, strengths, and weaknesses",
      ],
    },
    {
      title: "Pool Manager, Lifeguard",
      organization: "Swim Atlanta Pool Management",
      logo: swimAtlanta,
      location: "Atlanta, GA",
      period: "June 2021 - August 2024",
      responsibilities: [
        "Managed daily pool operations, including staff training, scheduling, and site supervision for 15+ employees",
      ],
    },
  ];

  const leadership = [
    {
      title: "Rush Chairman, Athletics Chairman",
      organization: "Sigma Nu Fraternity — Gamma Alpha Chapter",
      logo: sigmaNu,
      location: "Georgia Institute of Technology, Atlanta, GA",
      period: "July 2024 - Present",
      responsibilities: [
        "Leading all fraternity recruitment operations as Rush Chair, after contributing to 40+ quality new members as an assistant",
        "As Athletics Chair, managing 15+ intramural teams and fraternity sporting events, driving competitiveness and brother engagement",
      ],
    },
    {
      title: "Atlanta Hawks Marketing Team – Team Lead",
      organization: "Georgia Tech Sports Business Club",
      logo: hawks,
      location: "Atlanta, GA",
      period: "January 2025 - November 2025",
      responsibilities: [
        "Leading team in a data-driven analysis to design and present social media and ticketing strategies to Hawks executives, solidifying interdisciplinary-team leadership and collaboration, while contributing to an increase in revenue, YouTube views, and fan interaction",
      ],
    },
    {
      title: "Georgia Tech Buzz Bowl Case Competition",
      organization: "Georgia Tech Sports Business Club",
      logo: sbc,
      location: "Atlanta, GA",
      period: "November 2024",
      responsibilities: [
        "Developed a strategic business proposal with the Sports Business Club using market research and data-driven insights to enhance visibility and revenue for Georgia Tech Men's Basketball, earning 3rd place from a panel of judges out of 40+ teams",
      ],
    },
    {
      title: "Master Server Emeritus – Altar Server Guild",
      organization: "Saint Jude The Apostle Catholic Church",
      logo: saintJude,
      location: "Sandy Springs, GA",
      period: "2016 - Present",
      responsibilities: [
        "Assisting priests and deacons by leading a team of 5-8 servers on the altar during mass, contributing 300+ volunteer hours",
      ],
    },
    {
      title: "Vice President Class of 2024, Philanthropy Chair",
      organization: "Young Men's Service League (YMSL)",
      logo: ymsl,
      location: "Dunwoody, GA",
      period: "2021 - 2024",
      responsibilities: [
        "Led and supported 25 members in 140+ hours of service initiatives, meetings, and leadership development",
        "Awards: Heart of YMSL, Senior Leadership, Most Philanthropies Served, Superior Service, and Spirit of Service",
      ],
    },
    {
      title: "Basketball Coach",
      organization: "All Saints Catholic Church",
      logo: allSaints,
      location: "Dunwoody, GA",
      period: "2021 - 2023",
      responsibilities: [
        "Led and instructed U12 and U14 players, implemented sporting strategies, built team bonds and developed player skills",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold mb-4">Experience</h1>
          <div className="h-1 w-24 bg-gold mb-12"></div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border-border hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        {exp.logo && (
                          <>
                            <img src={exp.logo} alt={exp.organization} className="h-12 w-auto flex-shrink-0" />
                            <div className="h-12 w-0.5 bg-gold flex-shrink-0"></div>
                          </>
                        )}
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                          <CardDescription className="text-lg">
                            <span className="font-semibold text-navy">{exp.organization}</span>
                            <span className="mx-2">•</span>
                            <span>{exp.location}</span>
                            <span className="mx-2">•</span>
                            <span>{exp.period}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Leadership & Involvement</h2>
              <div className="space-y-6">
                {leadership.map((exp, index) => (
                  <Card key={index} className="border-border hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        {exp.logo && (
                          <>
                            <img src={exp.logo} alt={exp.organization} className="h-12 w-auto flex-shrink-0" />
                            <div className="h-12 w-0.5 bg-gold flex-shrink-0"></div>
                          </>
                        )}
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                          <CardDescription className="text-lg">
                            <span className="font-semibold text-navy">{exp.organization}</span>
                            <span className="mx-2">•</span>
                            <span>{exp.location}</span>
                            <span className="mx-2">•</span>
                            <span>{exp.period}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
