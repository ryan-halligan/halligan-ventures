import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import rhxOssai from "@/assets/rhxvisuals-ossai.jpg";
import rhxBulls from "@/assets/rhxvisuals-bulls.jpg";
import rhxTimberwolves from "@/assets/rhxvisuals-timberwolves.jpg";
import rhxDadSuperbowl from "@/assets/rhxvisuals-dad-superbowl.jpg";
import rhLogo from "@/assets/rh-logo-main.png";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const JerseySwaps = () => {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const jerseySwaps: Design[] = [
    { src: rhxOssai, alt: "Joseph Ossai Bengals jersey swap", description: "Joseph Ossai Bengals jersey swap design" },
    { src: rhxBulls, alt: "Obi Toppin Bulls jersey swap", description: "Obi Toppin Chicago Bulls jersey swap design" },
    { src: rhxTimberwolves, alt: "Anthony Edwards Timberwolves jersey swap", description: "Anthony Edwards Minnesota Timberwolves jersey swap design" },
    { src: rhxDadSuperbowl, alt: "Dad Super Bowl trophy", description: "Custom Super Bowl champion celebration design" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center mb-8">
            <img src={rhLogo} alt="RH Logo" className="h-24 w-auto" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-center">Jersey Swaps</h1>
          <p className="text-xl text-muted-foreground mb-4 text-center">Professional athlete jersey swap designs</p>
          <div className="h-1 w-24 bg-gold mb-12 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jerseySwaps.map((design, index) => (
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

export default JerseySwaps;
