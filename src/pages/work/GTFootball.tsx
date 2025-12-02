import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gtFootballLogo from "@/assets/gt-football-logo.png";
import gtBarstoolFeature from "@/assets/gt-barstool-feature.jpg";
import espnFeature from "@/assets/espn-broadcast-feature.jpg";
import gtAthleticsFeature from "@/assets/gt-athletics-feature.jpg";
import cbsSportsFeature from "@/assets/cbs-sports-feature.png";
import atlantaBowlFeature from "@/assets/atlanta-bowl-feature.jpg";

const GTFootball = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
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
            <img src={gtFootballLogo} alt="Georgia Tech Football" className="w-48 h-48 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Georgia Tech Football</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Student Equipment Manager</p>
          </div>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Role Overview</CardTitle>
              <CardDescription>July 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                As a Student Equipment Manager for Georgia Tech Football, I play a critical role in the 
                daily operations that keep the team running smoothly. Managing equipment for over 200 
                players and staff requires precision, organization, and the ability to thrive under pressure.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold">Equipment Operations Management</p>
                    <p className="text-muted-foreground">Ensure all gear is readily available and properly maintained for every practice and game day</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold">Practice Support</p>
                    <p className="text-muted-foreground">Collaborate with coaches to manage practice setup and takedown, spot footballs for scripted plays, and operate the scoreboard</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold">Game Day Operations</p>
                    <p className="text-muted-foreground">Support game day as a ballboy and defensive signs operator, contributing to the team's success</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Impact & Skills Developed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This role has strengthened my operational excellence, attention to detail, and ability 
                to perform in high-pressure, fast-paced environments. Working with Georgia Tech Football 
                has taught me the importance of consistency, reliability, and teamwork in achieving 
                excellence.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Operations Management", "Time Management", "Teamwork", "Attention to Detail", "High-Pressure Performance"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-navy text-primary-foreground rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Industry Recognition & Media Features</CardTitle>
              <CardDescription>
                Professional media appearances showcasing behind-the-scenes contributions to collegiate athletics operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <img 
                    src={gtBarstoolFeature} 
                    alt="Featured on GT Barstool following team victory" 
                    className="w-full h-40 object-cover rounded-lg border border-border hover-lift"
                    loading="lazy"
                  />
                  <p className="text-xs text-muted-foreground">GT Barstool</p>
                </div>
                <div className="space-y-2">
                  <img 
                    src={espnFeature} 
                    alt="ESPN broadcast coverage showing sideline operations" 
                    className="w-full h-40 object-cover rounded-lg border border-border hover-lift"
                    loading="lazy"
                  />
                  <p className="text-xs text-muted-foreground">ESPN</p>
                </div>
                <div className="space-y-2">
                  <img 
                    src={cbsSportsFeature} 
                    alt="CBS Sports international broadcast coverage in Dublin, Ireland" 
                    className="w-full h-40 object-cover rounded-lg border border-border hover-lift"
                    loading="lazy"
                  />
                  <p className="text-xs text-muted-foreground">CBS Sports: Dublin</p>
                </div>
                <div className="space-y-2">
                  <img 
                    src={gtAthleticsFeature} 
                    alt="Georgia Tech Athletics official game day coverage" 
                    className="w-full h-40 object-cover rounded-lg border border-border hover-lift"
                    loading="lazy"
                  />
                  <p className="text-xs text-muted-foreground">GT Athletics</p>
                </div>
                <div className="space-y-2 col-span-2">
                  <img 
                    src={atlantaBowlFeature} 
                    alt="Mercedes-Benz Stadium bowl game experience" 
                    className="w-full h-40 object-cover rounded-lg border border-border hover-lift"
                    loading="lazy"
                  />
                  <p className="text-xs text-muted-foreground">Bowl Game: Mercedes-Benz Stadium</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                These professional media features demonstrate direct involvement in Division I collegiate athletics operations, 
                reflecting a commitment to pursuing a career in sports management and athletic operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GTFootball;
