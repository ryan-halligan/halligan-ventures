import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gridironLogo from "@/assets/gridiron-drive-logo.jpg";
import projectsBg from "@/assets/projects-bg.png";
import gdMockDraft from "@/assets/gd-mock-draft.jpg";
import gdCardinalsSb from "@/assets/gd-cardinals-sb.jpg";
import gd49ersPick from "@/assets/gd-49ers-pick.jpg";
import gdQbRankings from "@/assets/gd-qb-rankings.jpg";
import gdFaWinners from "@/assets/gd-fa-winners.jpg";
import gdDraftFirsts from "@/assets/gd-draft-firsts.jpg";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const GridironDriveAnalysis = () => {
  const navigate = useNavigate();
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const designs: Design[] = [
    { src: gdMockDraft, alt: "2021 NFL Mock Draft", description: "Final 2021 NFL Mock Draft picks 17-24 featuring top prospects" },
    { src: gdCardinalsSb, alt: "Cardinals Super Bowl", description: "How the Arizona Cardinals Will Win the Super Bowl - YouTube thumbnail" },
    { src: gd49ersPick, alt: "49ers 3rd Pick Question", description: "Who should the 49ers pick with the 3rd pick? Justin Fields, Trey Lance, or Mac Jones" },
    { src: gdQbRankings, alt: "2021 NFL Draft QB Rankings", description: "2021 NFL Draft QB Rankings: Lawrence, Lance, Fields, Wilson, Jones" },
    { src: gdFaWinners, alt: "NFL Free Agency Winners", description: "NFL Free Agency Offseason Winners: Buccaneers, 49ers, WFT, Browns, Dolphins" },
    { src: gdDraftFirsts, alt: "NFL Draft Firsts", description: "Will these happen in the NFL Draft for the 1st time? Draft analysis graphic" },
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
              <p className="text-lg text-muted-foreground">Analysis</p>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8">Deep-dive breakdowns, mock drafts, rankings, and player evaluations.</p>
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

export default GridironDriveAnalysis;
