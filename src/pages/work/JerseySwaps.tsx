import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import rhxOssai from "@/assets/rhxvisuals-ossai.jpg";
import rhxBulls from "@/assets/rhxvisuals-bulls.jpg";
import rhxTimberwolves from "@/assets/rhxvisuals-timberwolves.jpg";
import rhxDadSuperbowl from "@/assets/rhxvisuals-dad-superbowl.jpg";
import rhxAjcTshirt from "@/assets/rhxvisuals-ajc-tshirt.jpg";
import rhLogo from "@/assets/rh-logo-main.png";
import projectsBg from "@/assets/projects-bg.png";
// GT Basketball Jerseys
import gtMartaJersey from "@/assets/rhxvisuals-gt-marta-jersey.png";
import gtOlympicsJersey from "@/assets/rhxvisuals-gt-olympics-jersey.png";
import gtStateJersey from "@/assets/rhxvisuals-gt-state-jersey.png";
// Original + Swap pairs
import obiToppinOriginal from "@/assets/rhxvisuals-obi-toppin-original.jpg";
import obiToppinSwap from "@/assets/rhxvisuals-obi-toppin-swap.jpg";
import josephOssaiOriginal from "@/assets/rhxvisuals-joseph-ossai-original.jpg";
import josephOssaiSwap from "@/assets/rhxvisuals-joseph-ossai-swap.jpg";
import kylerMurrayOriginal from "@/assets/rhxvisuals-kyler-murray-original.webp";
import kylerMurraySwap from "@/assets/rhxvisuals-kyler-murray-swap.jpg";

interface Design {
  src: string;
  alt: string;
  description: string;
}

interface DesignPair {
  original: Design;
  swap: Design;
}

const JerseySwaps = () => {
  const navigate = useNavigate();
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const jerseySwaps: Design[] = [
    { src: rhxTimberwolves, alt: "Anthony Edwards Timberwolves jersey swap", description: "Anthony Edwards Minnesota Timberwolves jersey swap design" },
    { src: rhxDadSuperbowl, alt: "Dad Super Bowl trophy", description: "Custom Super Bowl champion celebration design" },
    { src: rhxAjcTshirt, alt: "AJC Peachtree Road Race T-Shirt", description: "Custom AJC Peachtree Road Race t-shirt design for Atlanta, GA July 4, 2024" },
  ];

  const gtBasketballJerseys: Design[] = [
    { src: gtMartaJersey, alt: "GT MARTA-Inspired Jersey", description: "Georgia Tech basketball jersey concept inspired by MARTA transit colors" },
    { src: gtOlympicsJersey, alt: "GT Olympics-Inspired Jersey", description: "Georgia Tech basketball jersey concept inspired by the 1996 Atlanta Olympics" },
    { src: gtStateJersey, alt: "GT State of Georgia Jersey", description: "Georgia Tech basketball jersey concept featuring the state of Georgia" },
  ];

  const swapPairs: DesignPair[] = [
    {
      original: { src: obiToppinOriginal, alt: "Obi Toppin at Dayton", description: "Original photo of Obi Toppin at Dayton" },
      swap: { src: obiToppinSwap, alt: "Obi Toppin Bulls jersey swap", description: "Obi Toppin Chicago Bulls jersey swap design" }
    },
    {
      original: { src: josephOssaiOriginal, alt: "Joseph Ossai at Texas", description: "Original photo of Joseph Ossai at Texas" },
      swap: { src: josephOssaiSwap, alt: "Joseph Ossai Bengals jersey swap", description: "Joseph Ossai Cincinnati Bengals jersey swap design" }
    },
    {
      original: { src: kylerMurrayOriginal, alt: "Kyler Murray at Oklahoma", description: "Original photo of Kyler Murray at Oklahoma" },
      swap: { src: kylerMurraySwap, alt: "Kyler Murray Cardinals Super Bowl", description: "Kyler Murray Arizona Cardinals Super Bowl celebration design" }
    },
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
            <img src={rhLogo} alt="RH Logo" className="h-24 w-auto" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-center">Jersey Swaps</h1>
          <p className="text-xl text-muted-foreground mb-4 text-center">Professional athlete jersey swap designs</p>
          <div className="h-1 w-24 bg-gold mb-12 mx-auto"></div>

          {/* GT Basketball Jerseys Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gold">Georgia Tech Basketball Jersey Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gtBasketballJerseys.map((design, index) => (
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

          {/* Original + Swap Pairs Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gold">Original & Swap Comparisons</h2>
            <div className="space-y-8">
              {swapPairs.map((pair, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group cursor-pointer" onClick={() => setSelectedDesign(pair.original)}>
                    <img 
                      src={pair.original.src} 
                      alt={pair.original.alt} 
                      className="w-full h-auto object-cover rounded-lg hover-lift shadow-lg"
                      loading="lazy"
                    />
                    <p className="text-center mt-4 text-muted-foreground group-hover:text-gold transition-colors">
                      {pair.original.alt}
                    </p>
                  </div>
                  <div className="group cursor-pointer" onClick={() => setSelectedDesign(pair.swap)}>
                    <img 
                      src={pair.swap.src} 
                      alt={pair.swap.alt} 
                      className="w-full h-auto object-cover rounded-lg hover-lift shadow-lg"
                      loading="lazy"
                    />
                    <p className="text-center mt-4 text-muted-foreground group-hover:text-gold transition-colors">
                      {pair.swap.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Jersey Swaps */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gold">Other Designs</h2>
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
