import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import afcLogo from "@/assets/afc-logo.jpg";
import afcAnalysisAwards from "@/assets/afc-analysis-awards.jpg";
import afcAnalysisRidley from "@/assets/afc-analysis-ridley.jpg";
import afcAnalysisQuote from "@/assets/afc-analysis-quote.jpg";
import afcAnalysisMattryan from "@/assets/afc-analysis-mattryan.jpg";
import afcAnalysisQbs from "@/assets/afc-analysis-qbs.jpg";
import afcAnalysisPredictions from "@/assets/afc-analysis-predictions.jpg";
import afcAnalysisMadden from "@/assets/afc-analysis-madden.jpg";
import afcAnalysisPreview from "@/assets/afc-analysis-preview.jpg";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const AFCAnalysis = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<Design | null>(null);

  const analysisDesigns: Design[] = [
    { src: afcAnalysisAwards, alt: "NFL Award Predictions", description: "NFL Award Predictions including MVP, OPOY, DPOY, COY, and more" },
    { src: afcAnalysisRidley, alt: "Calvin Ridley Breakout", description: "Calvin Ridley 'Breakout Already?' analysis and discussion" },
    { src: afcAnalysisQuote, alt: "Julio Jones Quote", description: "Julio Jones quote graphic after Week 1 loss to the Seahawks" },
    { src: afcAnalysisMattryan, alt: "Matt Ryan Stats", description: "Matt Ryan 'Fastest, Most, Only' career statistics breakdown" },
    { src: afcAnalysisQbs, alt: "Favorite Falcons QB Poll", description: "Who is your favorite Falcons quarterback? Matt Ryan vs Michael Vick poll" },
    { src: afcAnalysisPredictions, alt: "Week 1 Game Predictions", description: "Week 1 Game Predictions results - 10-6 record" },
    { src: afcAnalysisMadden, alt: "Falcons Madden 21 Ratings", description: "Falcons Madden 21 Ratings - Julio Jones, Grady Jarrett, Alex Mack, Matt Ryan" },
    { src: afcAnalysisPreview, alt: "Falcons vs Packers Preview", description: "Atlanta Falcons vs Green Bay Packers game preview with stats comparison" },
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
              <h1 className="text-4xl font-bold">ATLFalconsCountry Analysis</h1>
              <p className="text-muted-foreground">Polls, predictions, and interactive content</p>
            </div>
          </div>
          
          <div className="h-1 w-24 bg-gold mb-8"></div>

          <p className="text-lg text-muted-foreground mb-8">
            Analysis graphics featuring player breakdowns, award predictions, game previews, 
            and interactive polls for Atlanta Falcons fans.
          </p>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {analysisDesigns.map((design, index) => (
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

export default AFCAnalysis;
