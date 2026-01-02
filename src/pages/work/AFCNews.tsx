import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import afcLogo from "@/assets/afc-logo.jpg";
import afcNewsBreaking from "@/assets/afc-news-breaking.jpg";
import afcNewsBreaking2 from "@/assets/afc-news-breaking-2.jpg";
import afcNewsFinalScore from "@/assets/afc-news-finalscore.jpg";
import afcNewsFinalScore2 from "@/assets/afc-news-finalscore-2.jpg";
import afcNewsPackers from "@/assets/afc-news-packers.jpg";
import afcNewsGameday from "@/assets/afc-news-gameday.jpg";
import afcFalconsWin from "@/assets/afc-falcons-win.jpg";
import afcNewsStory from "@/assets/afc-news-story.jpg";

interface Design {
  src: string;
  alt: string;
  description: string;
}

const AFCNews = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<Design | null>(null);

  const newsDesigns: Design[] = [
    { src: afcNewsBreaking, alt: "Breaking News - Head Coach", description: "Breaking news graphic - Falcons closing in on future head coach and general manager" },
    { src: afcNewsBreaking2, alt: "Breaking News - Player", description: "Breaking news graphic featuring ATL player update" },
    { src: afcNewsFinalScore, alt: "Final Score vs Saints", description: "Final score graphic - Falcons 20 vs Saints 20" },
    { src: afcNewsFinalScore2, alt: "Final Score vs Panthers", description: "Final score graphic - Falcons 25 vs Panthers 17, TNF revenge win" },
    { src: afcNewsPackers, alt: "Final Score vs Packers", description: "Final score graphic - Falcons upset the Packers 35-35 on the road" },
    { src: afcNewsGameday, alt: "Gameday vs Saints", description: "Gameday graphic - Falcons vs Saints matchup preview" },
    { src: afcFalconsWin, alt: "Falcons Win vs Chargers", description: "Falcons Win graphic - 39-30 vs Chargers, advance to 5-8" },
    { src: afcNewsStory, alt: "Story Update", description: "ATLFalconsCountry Instagram story update graphic" },
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
              <h1 className="text-4xl font-bold">ATLFalconsCountry News</h1>
              <p className="text-muted-foreground">Game recaps, breaking news, and score updates</p>
            </div>
          </div>
          
          <div className="h-1 w-24 bg-gold mb-8"></div>

          <p className="text-lg text-muted-foreground mb-8">
            Coverage of roster moves, injuries, game recaps, and breaking news for the Atlanta Falcons fan community.
          </p>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {newsDesigns.map((design, index) => (
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

export default AFCNews;
