import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import afcLogo from "@/assets/afc-logo.jpg";
import afcBates from "@/assets/afc-bates.jpg";
import afcDeboDesign from "@/assets/afc-debo-design.jpg";
import afcDeboWallpaper from "@/assets/afc-debo-wallpaper.jpg";
import afcJulio from "@/assets/afc-julio.jpg";
import afcMadden from "@/assets/afc-madden.jpg";
import afcGamedayChargers from "@/assets/afc-gameday-chargers.jpg";
import afcGamedayBucs from "@/assets/afc-gameday-bucs.jpg";
import afcVictoryMonday from "@/assets/afc-victory-monday.jpg";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const AFCDesigns = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<Design | null>(null);

  const designs: Design[] = [
    { src: afcBates, alt: "Jessie Bates Just Believe", description: "Jessie Bates 'Just Believe' Atlanta Falcons wallpaper design" },
    { src: afcDeboDesign, alt: "Deion Jones DEBO", description: "Deion Jones 'DEBO' linebacker #45 player spotlight" },
    { src: afcDeboWallpaper, alt: "Deion Jones Wallpaper", description: "Deion Jones linebacker #45 phone wallpaper design" },
    { src: afcJulio, alt: "Julio Jones", description: "Julio Jones Falcons Media player design" },
    { src: afcMadden, alt: "Julio Jones Madden 96 Overall", description: "Julio Jones 96 Overall Madden ratings graphic" },
    { src: afcGamedayChargers, alt: "Falcons vs Chargers Gameday", description: "Falcons vs Chargers gameday graphic on FOX" },
    { src: afcGamedayBucs, alt: "Falcons vs Buccaneers Gameday", description: "Falcons vs Buccaneers gameday graphic at Mercedes-Benz Stadium" },
    { src: afcVictoryMonday, alt: "Victory Monday Raiders", description: "Victory Monday graphic - Beat the Raiders 43-6" },
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
          
          <div className="flex items-center gap-4 mb-8">
            <img src={afcLogo} alt="ATLFalconsCountry Logo" className="h-16 w-auto" />
            <div className="w-px h-16 bg-gold"></div>
            <div>
              <h1 className="text-4xl font-bold">ATLFalconsCountry Designs</h1>
              <p className="text-muted-foreground">Graphics and visuals for the Atlanta Falcons fan page</p>
            </div>
          </div>
          
          <div className="h-1 w-24 bg-gold mb-8"></div>

          <p className="text-lg text-muted-foreground mb-8">
            Custom graphics created for ATLFalconsCountry, featuring player spotlights, gameday graphics, 
            and victory celebrations for Atlanta Falcons content.
          </p>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {designs.map((design, index) => (
              <div 
                key={index}
                className="break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(design)}
              >
                <img 
                  src={design.src} 
                  alt={design.alt}
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a 
              href="https://www.instagram.com/atlfalconscountry/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:underline"
            >
              View on Instagram <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-4 rounded-b-lg">
                <p className="text-foreground">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AFCDesigns;
