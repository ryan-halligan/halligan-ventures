import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vipLogo from "@/assets/vip-logo.png";
import vipPoster from "@/assets/vip-poster.jpg";

const VIP = () => {
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
            <img src={vipLogo} alt="Vertically Integrated Projects" className="w-48 h-48 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Vertically Integrated Projects</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Sports Valuation & Analytics Team</p>
          </div>

          <div className="space-y-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <BarChart className="text-gold" />
                  Project Overview
                </CardTitle>
                <CardDescription>
                  Advanced research in collegiate athletics economics and performance analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Part of Georgia Tech's Vertically Integrated Projects program, focusing on data-driven analysis 
                  of collegiate sports economics, particularly examining the impact of NCAA revenue-sharing on 
                  competitive performance and strategic planning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Project Poster</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={vipPoster} alt="NCAA Basketball NIL Project Poster" className="w-full rounded-lg" />
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="text-gold" />
                  Key Research & Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Big East Revenue Sharing Impact Analysis</h3>
                  <p className="text-muted-foreground">
                    Analyzed athletic department spending and performance data across 11 Big East schools using 
                    Excel and SQL, evaluating how $5M–$12M in projected basketball revenue sharing impacts 
                    recruiting and win percentages
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Long-Term Program Success Evaluation</h3>
                  <p className="text-muted-foreground">
                    Compiled and interpreted 10+ years of NCAA financial and competitive data to assess how 
                    revenue allocation strategies influence long-term program success under the House v. NCAA settlement
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Skills & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Skills</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• SQL Database Management</li>
                      <li>• Excel Advanced Analytics</li>
                      <li>• Data Visualization</li>
                      <li>• Statistical Analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Domain Knowledge</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• NCAA Economics</li>
                      <li>• Revenue Sharing Models</li>
                      <li>• Athletic Performance Metrics</li>
                      <li>• Strategic Resource Allocation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                Note: Additional project poster and visualization materials can be provided upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIP;
