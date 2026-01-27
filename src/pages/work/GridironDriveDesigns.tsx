import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gridironLogo from "@/assets/gridiron-drive-logo.jpg";
import projectsBg from "@/assets/projects-bg.png";
import gdNewStripes from "@/assets/gd-new-stripes.jpg";
import gdKylerSuperbowl from "@/assets/gd-kyler-superbowl.jpg";
import gdLogoDesign from "@/assets/gd-logo-design.jpg";
import gdBanner from "@/assets/gd-banner.jpg";
import gdLogoSplit from "@/assets/gd-logo-split.jpg";
import gdJustinFields from "@/assets/gd-justin-fields.jpg";
import gdOssaiDesign from "@/assets/gd-ossai-design.jpg";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const GridironDriveDesigns = () => {
  const navigate = useNavigate();
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const designs: Design[] = [
    { src: gdNewStripes, alt: "Bengals New Stripes", description: "Cincinnati Bengals new uniforms design featuring Joe Mixon, Tee Higgins, and Tyler Boyd" },
    { src: gdKylerSuperbowl, alt: "Kyler Murray Super Bowl", description: "Kyler Murray Arizona Cardinals Super Bowl celebration wallpaper" },
    { src: gdJustinFields, alt: "Justin Fields Draft", description: "Justin Fields Ohio State draft prospect graphic with stats" },
    { src: gdOssaiDesign, alt: "Joseph Ossai Fire Design", description: "Joseph Ossai Cincinnati Bengals fire effect design" },
    { src: gdLogoDesign, alt: "Gridiron Drive Logo", description: "Gridiron Drive brand logo design with background collage" },
    { src: gdBanner, alt: "Gridiron Drive Banner", description: "Gridiron Drive Twitter banner featuring top NFL prospects" },
    { src: gdLogoSplit, alt: "Gridiron Drive Split Logo", description: "Gridiron Drive logo with split color background" },
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${projectsBg})`, opacity: 0.30 }}
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
          <div className="flex items-center gap-4 mb-8">
            <img src={gridironLogo} alt="Gridiron Drive Logo" className="h-16 w-auto rounded" />
            <div className="w-px h-12 bg-gold"></div>
            <div>
              <h1 className="text-4xl font-bold">Gridiron Drive</h1>
              <p className="text-lg text-muted-foreground">Designs</p>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8">Graphics and branding work for Gridiron Drive NFL content page.</p>
          <div className="h-1 w-24 bg-gold mb-12"></div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {designs.map((design, index) => (
              <div key={index} className="break-inside-avoid group cursor-pointer" onClick={() => setSelectedDesign(design)}>
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

export default GridironDriveDesigns;
