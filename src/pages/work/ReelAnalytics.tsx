import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import reelAnalyticsLogo from "@/assets/reel-analytics-logo.png";

const ReelAnalytics = () => {
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
            <img src={reelAnalyticsLogo} alt="Reel Analytics" className="w-64 h-32 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Reel Analytics</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Scouting & Data Analytics Intern</p>
          </div>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Role Overview</CardTitle>
              <CardDescription>January 2025 - Present</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                At Reel Analytics, I combine my passion for sports with advanced data analytics to 
                evaluate talent and support game planning. This role allows me to work at the intersection 
                of sports and technology, using data to drive strategic decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Key Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold text-lg">NFL Draft Guide Development</p>
                    <p className="text-muted-foreground mt-1">
                      Evaluated 250+ NFL Draft prospects by analyzing HUDL film, position-specific 
                      metrics, PFF Grades, and personal information. Created 200+ comprehensive player 
                      profiles featuring NFL comparisons, predictive analytics, and data visualizations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                  <div>
                    <p className="font-semibold text-lg">University of Colorado Game Planning Support</p>
                    <p className="text-muted-foreground mt-1">
                      Produce weekly, data-driven advanced scouting reports on future opponents using 
                      Reel Analytics' IGA® score and PFF data. Identify key player tendencies, strengths, 
                      and weaknesses to inform strategic game planning.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This role has deepened my expertise in sports analytics, player evaluation, and 
                data visualization. I've developed proficiency in using industry-standard tools and 
                methodologies to extract actionable insights from complex datasets.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Film Analysis", "Data Visualization", "Player Evaluation", "Predictive Analytics", "PFF Metrics", "Scouting Reports", "Strategic Analysis"].map((skill) => (
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

export default ReelAnalytics;
