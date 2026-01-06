import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gridiron from "@/assets/gridiron-drive-logo.jpg";
import projectsBg from "@/assets/projects-bg.png";
import gdFranchiseTagged from "@/assets/gd-franchise-tagged.jpg";
import gdThomasDavis from "@/assets/gd-thomas-davis.jpg";
import gdCommitted from "@/assets/gd-committed.jpg";
import gdZachWilson from "@/assets/gd-zach-wilson.jpg";
import gdDraftShakeup from "@/assets/gd-draft-shakeup.jpg";
import gdEdelmanRetiring from "@/assets/gd-edelman-retiring.jpg";
import gdClemsonUpdate from "@/assets/gd-clemson-update.jpg";
import gdClemsonBreaking from "@/assets/gd-clemson-breaking.jpg";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const GridironDriveNews = () => {
  const navigate = useNavigate();
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const newsDesigns: Design[] = [
    { src: gdFranchiseTagged, alt: "Dak Prescott Franchise Tagged", description: "Dallas Cowboys franchise tag Dak Prescott at $37.7M" },
    { src: gdThomasDavis, alt: "Thomas Davis Retirement Quote", description: "Thomas Davis on Carolina: 'This place for me, man, it changed my whole life.'" },
    { src: gdCommitted, alt: "5-Star Clemson Commit", description: "5-Star DT, 10th nationally ranked player commits to Clemson" },
    { src: gdZachWilson, alt: "Zach Wilson Drafted", description: "Zach Wilson drafted 2nd overall to the New York Jets" },
    { src: gdDraftShakeup, alt: "NFL Draft Order Shakeup", description: "NFL Draft order shakeup involving 49ers, Dolphins, and Eagles" },
    { src: gdEdelmanRetiring, alt: "Julian Edelman Retiring", description: "Julian Edelman retirement graphic - 3x Super Bowl Champion, SB 53 MVP" },
    { src: gdClemsonUpdate, alt: "Clemson Update", description: "Trevor Lawrence and Clemson Tigers update graphic" },
    { src: gdClemsonBreaking, alt: "Clemson Breaking News", description: "Clemson Tigers breaking news graphic" },
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${projectsBg})`, opacity: 0.15 }}
      />
      <Navigation />
      <div className="pt-32 pb-20 px-4 relative z-10">
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
            <img src={gridiron} alt="Gridiron Drive Logo" className="h-24 w-auto rounded-lg" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-center">Gridiron Drive News</h1>
          <p className="text-xl text-muted-foreground mb-4 text-center">College and pro football coverage and updates</p>
          <div className="h-1 w-24 bg-gold mb-12 mx-auto"></div>

          <div className="columns-2 md:columns-3 gap-6 space-y-6">
            {newsDesigns.map((design, index) => (
              <div 
                key={index} 
                className="break-inside-avoid group cursor-pointer" 
                onClick={() => setSelectedDesign(design)}
              >
                <img 
                  src={design.src} 
                  alt={design.alt} 
                  className="w-full h-auto object-cover rounded-lg hover-lift shadow-lg"
                  loading="lazy"
                />
                <p className="text-center mt-4 text-muted-foreground group-hover:text-gold transition-colors text-sm">
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

export default GridironDriveNews;
