import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Dumbbell } from "lucide-react";
import { useState } from "react";
import rhxHalloween from "@/assets/rhxvisuals-halloween.jpg";
import rhxBulls from "@/assets/rhxvisuals-bulls.jpg";
import rhxSteelers from "@/assets/rhxvisuals-steelers.jpg";
import rhxTexans from "@/assets/rhxvisuals-texans.jpg";
import rhxTimberwolves from "@/assets/rhxvisuals-timberwolves.jpg";
import rhxFalcons from "@/assets/rhxvisuals-falcons.jpg";
import rhxShelton from "@/assets/rhxvisuals-shelton.jpg";
import rhxLebron from "@/assets/rhxvisuals-lebron.jpg";
import rhxOssai from "@/assets/rhxvisuals-ossai.jpg";
import rhxBijan from "@/assets/rhxvisuals-bijan.jpg";
import rhxDadSuperbowl from "@/assets/rhxvisuals-dad-superbowl.jpg";
import rhxKrips from "@/assets/rhxvisuals-krips.jpg";
import rhxSaintJoseph from "@/assets/rhxvisuals-saint-joseph.jpg";
import rhxSamHartman from "@/assets/rhxvisuals-sam-hartman.jpg";
import rhxScottRigsby from "@/assets/rhxvisuals-scott-rigsby.jpg";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const Personal = () => {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const jerseySwaps: Design[] = [
    { src: rhxOssai, alt: "Joseph Ossai Bengals jersey swap", description: "Joseph Ossai Bengals jersey swap design" },
    { src: rhxBulls, alt: "Obi Toppin Bulls jersey swap", description: "Obi Toppin Chicago Bulls jersey swap design" },
    { src: rhxTimberwolves, alt: "Anthony Edwards Timberwolves jersey swap", description: "Anthony Edwards Minnesota Timberwolves jersey swap design" },
    { src: rhxDadSuperbowl, alt: "Dad Super Bowl trophy", description: "Custom Super Bowl champion celebration design" },
  ];

  const compositions: Design[] = [
    { src: rhxFalcons, alt: "Atlanta Falcons composition", description: "Atlanta Falcons Super Bowl championship composition" },
    { src: rhxSteelers, alt: "Pittsburgh Steelers composition", description: "Pittsburgh Steelers dynamic composition design" },
    { src: rhxHalloween, alt: "Halloween themed sports design", description: "Halloween themed sports composition" },
    { src: rhxShelton, alt: "Ben Shelton tennis design", description: "Ben Shelton 'Dialed In' tennis composition" },
    { src: rhxTexans, alt: "JJ Watt Houston Texans design", description: "JJ Watt Houston Texans composition design" },
  ];

  const posters: Design[] = [
    { src: rhxLebron, alt: "LeBron James Lakers poster", description: "'Gimme A Bang' LeBron James Lakers poster design" },
    { src: rhxSaintJoseph, alt: "Saint Joseph of Cupertino", description: "Saint Joseph of Cupertino inspirational poster" },
    { src: rhxSamHartman, alt: "Sam Hartman Notre Dame poster", description: "Sam Hartman Notre Dame quarterback poster design" },
    { src: rhxScottRigsby, alt: "Scott Rigsby Ironman poster", description: "'Do The Unthinkable' Scott Rigsby Ironman inspirational poster" },
    { src: rhxKrips, alt: "KRIPS basketball gameday poster", description: "KRIPS vs Steele gameday basketball poster" },
    { src: rhxBijan, alt: "Bijan Robinson poster", description: "Bijan Robinson artistic poster design" },
  ];

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
                <p className="text-muted-foreground mb-6">
                  Personal portfolio showcasing graphic design work across sports, branding, and digital media. 
                  Creating custom designs using Adobe Photoshop, Lightroom, and Canva.
                </p>
                
                {/* Jersey Swaps */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Jersey Swaps</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {jerseySwaps.map((design, index) => (
                      <img 
                        key={index}
                        src={design.src} 
                        alt={design.alt} 
                        className="w-full h-auto object-cover rounded-lg hover-lift cursor-pointer"
                        onClick={() => setSelectedDesign(design)}
                      />
                    ))}
                  </div>
                </div>

                {/* Compositions */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Compositions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {compositions.map((design, index) => (
                      <img 
                        key={index}
                        src={design.src} 
                        alt={design.alt} 
                        className="w-full h-auto object-cover rounded-lg hover-lift cursor-pointer"
                        onClick={() => setSelectedDesign(design)}
                      />
                    ))}
                  </div>
                </div>

                {/* Posters */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Posters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {posters.map((design, index) => (
                      <img 
                        key={index}
                        src={design.src} 
                        alt={design.alt} 
                        className="w-full h-auto object-cover rounded-lg hover-lift cursor-pointer"
                        onClick={() => setSelectedDesign(design)}
                      />
                    ))}
                  </div>
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

      {/* Fullscreen Design Modal */}
      <Dialog open={!!selectedDesign} onOpenChange={() => setSelectedDesign(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          <div className="relative">
            <img 
              src={selectedDesign?.src} 
              alt={selectedDesign?.alt} 
              className="w-full h-auto"
            />
            <div className="p-6">
              <DialogTitle className="text-xl font-semibold mb-2">{selectedDesign?.alt}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedDesign?.description}
              </DialogDescription>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Personal;
