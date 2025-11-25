import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import sbcLogo from "@/assets/sbc-logo.png";

const SBC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <img src={sbcLogo} alt="GT Sports Business Club" className="w-48 h-48 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">GT Sports Business Club</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Atlanta Hawks Marketing Team Lead</p>
          </div>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Leadership Role</CardTitle>
              <CardDescription>January 2025 - Present</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                As Team Lead for the Atlanta Hawks Marketing Team within the Georgia Tech Sports 
                Business Club, I'm leading a data-driven initiative to enhance the Hawks' social 
                media presence and ticketing strategies. This role combines strategic thinking, 
                team leadership, and direct collaboration with professional sports executives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Key Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold text-lg">Hawks Marketing Strategy Project</p>
                    <p className="text-muted-foreground mt-1">
                      Leading a cross-functional team to design and present comprehensive social media 
                      and ticketing strategies to Atlanta Hawks executives. Our data-driven approach 
                      focuses on increasing revenue, YouTube views, and fan interaction.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold text-lg">Buzz Bowl Case Competition (3rd Place)</p>
                    <p className="text-muted-foreground mt-1">
                      Developed a strategic business proposal using market research and data-driven 
                      insights to enhance visibility and revenue for Georgia Tech Men's Basketball. 
                      Earned 3rd place out of 40+ teams from a panel of industry judges.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Leadership & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This experience has strengthened my ability to lead interdisciplinary teams, present 
                to senior executives, and drive measurable business outcomes. Working directly with 
                professional sports organizations has given me invaluable insights into the sports 
                business industry.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Team Leadership", "Strategic Planning", "Data Analysis", "Marketing Strategy", "Executive Presentations", "Cross-functional Collaboration"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-navy text-primary-foreground rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SBC;
