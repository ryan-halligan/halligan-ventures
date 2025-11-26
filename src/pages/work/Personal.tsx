import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Dumbbell } from "lucide-react";
import rhxHalloween from "@/assets/rhxvisuals-halloween.jpg";
import rhxBulls from "@/assets/rhxvisuals-bulls.jpg";
import rhxSteelers from "@/assets/rhxvisuals-steelers.jpg";
import rhxTexans from "@/assets/rhxvisuals-texans.jpg";
import rhxTimberwolves from "@/assets/rhxvisuals-timberwolves.jpg";
import rhxFalcons from "@/assets/rhxvisuals-falcons.jpg";
import rhxShelton from "@/assets/rhxvisuals-shelton.jpg";
import rhxLebron from "@/assets/rhxvisuals-lebron.jpg";
import rhxOssai from "@/assets/rhxvisuals-ossai.jpg";

const Personal = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Personal Projects</h1>
          <p className="text-xl text-muted-foreground mb-4">Design, Content Creation & Athletic Pursuits</p>
          <div className="h-1 w-24 bg-gold mb-12"></div>

          <div className="space-y-6">
            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">RHxVisuals</CardTitle>
                    <CardDescription>Personal Design Work</CardDescription>
                  </div>
                  <ExternalLink className="text-gold" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Personal portfolio showcasing graphic design work across sports, branding, and digital media. 
                  Creating custom designs using Adobe Photoshop, Lightroom, and Canva.
                </p>
                
                {/* Design Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <img src={rhxHalloween} alt="Halloween themed sports design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                  <img src={rhxBulls} alt="Chicago Bulls design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                  <img src={rhxSteelers} alt="Pittsburgh Steelers design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                  <img src={rhxTexans} alt="Houston Texans design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                  <img src={rhxTimberwolves} alt="Minnesota Timberwolves design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                  <img src={rhxFalcons} alt="Atlanta Falcons design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                  <img src={rhxShelton} alt="Ben Shelton tennis design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                  <img src={rhxLebron} alt="LeBron James Lakers design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                  <img src={rhxOssai} alt="Joseph Ossai Bengals design" className="w-full h-48 object-cover rounded-lg hover-lift" />
                </div>
                
                <a 
                  href="https://www.instagram.com/rhxvisuals/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  View on Instagram <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">ATLFalconsCountry</CardTitle>
                    <CardDescription>Atlanta Falcons Fan Page</CardDescription>
                  </div>
                  <ExternalLink className="text-gold" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fan-driven content page dedicated to Atlanta Falcons news, updates, and community engagement.
                </p>
                <a 
                  href="https://www.instagram.com/atlfalconscountry/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  View on Instagram <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">Gridiron Drive</CardTitle>
                    <CardDescription>NFL Content Page</CardDescription>
                  </div>
                  <ExternalLink className="text-gold" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Previously managed NFL-focused social media page covering league news, analysis, and fan engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">TheGRFXCommittee</CardTitle>
                    <CardDescription>Design Shop & Community</CardDescription>
                  </div>
                  <ExternalLink className="text-gold" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Founded design shop connecting designers with teams and brands. Collaborative platform for 
                  sports graphics and branding projects.
                </p>
                <a 
                  href="https://www.instagram.com/thegrfxcommittee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  View on Instagram <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Dumbbell className="text-gold" size={28} />
                      Ironman 70.3 Augusta Training
                    </CardTitle>
                    <CardDescription>Endurance Sports & Athletic Development</CardDescription>
                  </div>
                  <ExternalLink className="text-gold" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive training program for Ironman 70.3 Augusta, featuring structured workouts, 
                  performance tracking, and progressive overload methodology across swimming, cycling, and running.
                </p>
                <a 
                  href="https://docs.google.com/spreadsheets/d/1IASkJuFo7zypi9-kUkJ9ECdy_uJTtz6LSDaChbTA1_I/edit?gid=0#gid=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  View Training Plan <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
