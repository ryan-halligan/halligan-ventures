import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import rhxFalcons from "@/assets/rhxvisuals-falcons.jpg";
import rhxSteelers from "@/assets/rhxvisuals-steelers.jpg";
import rhxHalloween from "@/assets/rhxvisuals-halloween.jpg";
import rhxShelton from "@/assets/rhxvisuals-shelton.jpg";
import rhxTexans from "@/assets/rhxvisuals-texans.jpg";
import rhxLebron from "@/assets/rhxvisuals-lebron.jpg";
import rhxSaintJoseph from "@/assets/rhxvisuals-saint-joseph.jpg";
import rhxSamHartman from "@/assets/rhxvisuals-sam-hartman.jpg";
import rhxScottRigsby from "@/assets/rhxvisuals-scott-rigsby.jpg";
import rhxKrips from "@/assets/rhxvisuals-krips.jpg";
import rhxBijan from "@/assets/rhxvisuals-bijan.jpg";
import rhxLastDance from "@/assets/rhxvisuals-last-dance.jpg";
import rhLogo from "@/assets/rh-logo-main.png";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const Compositions = () => {
  const navigate = useNavigate();
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const compositions: Design[] = [
    { src: rhxFalcons, alt: "Atlanta Falcons composition", description: "Atlanta Falcons Super Bowl championship composition" },
    { src: rhxSteelers, alt: "Pittsburgh Steelers composition", description: "Pittsburgh Steelers dynamic composition design" },
    { src: rhxHalloween, alt: "Halloween themed sports design", description: "Halloween themed sports composition" },
    { src: rhxShelton, alt: "Ben Shelton tennis design", description: "Ben Shelton 'Dialed In' tennis composition" },
    { src: rhxTexans, alt: "JJ Watt Houston Texans design", description: "JJ Watt Houston Texans composition design" },
    { src: rhxLebron, alt: "LeBron James Lakers poster", description: "'Gimme A Bang' LeBron James Lakers poster design" },
    { src: rhxSaintJoseph, alt: "Saint Joseph of Cupertino", description: "Saint Joseph of Cupertino inspirational poster" },
    { src: rhxSamHartman, alt: "Sam Hartman Notre Dame poster", description: "Sam Hartman Notre Dame quarterback poster design" },
    { src: rhxScottRigsby, alt: "Scott Rigsby Ironman poster", description: "'Do The Unthinkable' Scott Rigsby Ironman inspirational poster" },
    { src: rhxKrips, alt: "KRIPS basketball gameday poster", description: "KRIPS vs Steele gameday basketball poster" },
    { src: rhxBijan, alt: "Bijan Robinson poster", description: "Bijan Robinson artistic poster design" },
    { src: rhxLastDance, alt: "The Last Dance - KRIPS Revenge Tour", description: "The Last Dance - KRIPS Revenge Tour basketball composition" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-muted"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center justify-center mb-8">
            <img src={rhLogo} alt="RH Logo" className="h-24 w-auto" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-center">Compositions</h1>
          <p className="text-xl text-muted-foreground mb-4 text-center">Dynamic sports composition designs</p>
          <div className="h-1 w-24 bg-gold mb-12 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compositions.map((design, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => setSelectedDesign(design)}>
                <img 
                  src={design.src} 
                  alt={design.alt} 
                  className="w-full h-auto object-cover rounded-lg hover-lift shadow-lg"
                  loading="lazy"
                />
                <p className="text-center mt-4 text-muted-foreground group-hover:text-gold transition-colors">
                  {design.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Design Modal */}
      <Dialog open={!!selectedDesign} onOpenChange={() => setSelectedDesign(null)}>
        <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-auto">
          <div className="relative">
            <img 
              src={selectedDesign?.src} 
              alt={selectedDesign?.alt} 
              className="w-full h-auto object-contain max-h-[80vh]"
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

export default Compositions;
