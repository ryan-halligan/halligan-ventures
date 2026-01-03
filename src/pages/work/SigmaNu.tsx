import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import sigmaNuLogo from "@/assets/sigma-nu-logo.png";
import projectsBg from "@/assets/projects-bg.png";

const SigmaNu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${projectsBg})`, opacity: 0.15 }}
      />
      <Navigation />
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-muted"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="text-center mb-12">
            <img src={sigmaNuLogo} alt="Sigma Nu Fraternity" className="w-48 h-48 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Sigma Nu Fraternity</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Gamma Alpha Chapter, Georgia Institute of Technology</p>
          </div>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Leadership Positions</CardTitle>
              <CardDescription>July 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Serving in dual leadership roles within Sigma Nu Fraternity's Gamma Alpha Chapter, 
                I lead recruitment operations and manage athletic programs that foster brotherhood 
                and competitive excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold text-lg">Rush Chairman</p>
                    <p className="text-muted-foreground mt-1">
                      Elected to lead all fraternity recruitment operations. Previously contributed 
                      to bringing in 40+ quality new members as an assistant, demonstrating proven 
                      success in identifying and recruiting exceptional individuals who align with 
                      our fraternity's values.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold text-lg">Athletics Chairman</p>
                    <p className="text-muted-foreground mt-1">
                      Manage 15+ intramural teams and coordinate fraternity sporting events. Drive 
                      competitiveness and brother engagement through organized athletics, fostering 
                      camaraderie and healthy competition within the chapter.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Leadership Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                These leadership roles have developed my ability to manage large groups, coordinate 
                complex operations, and build strong communities. Leading recruitment and athletics 
                has taught me valuable lessons in organization, motivation, and strategic planning 
                that apply across all areas of my professional development.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Recruitment Strategy", "Event Management", "Team Coordination", "Leadership", "Community Building", "Strategic Planning"].map((skill) => (
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

export default SigmaNu;
