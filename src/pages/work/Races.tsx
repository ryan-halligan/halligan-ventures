import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ironmanLogo from "@/assets/ironman-logo.png";
import projectsBg from "@/assets/projects-bg.png";
// Ironman 70.3 Augusta images
import raceIronmanFinish from "@/assets/race-ironman-finish.jpg";
import raceIronmanMedal from "@/assets/race-ironman-medal.jpg";
import raceIronmanFriends from "@/assets/race-ironman-friends.jpg";
import raceIronmanBike1 from "@/assets/race-ironman-bike-1.jpg";
import raceIronmanRun from "@/assets/race-ironman-run.jpg";
import raceIronmanBike2 from "@/assets/race-ironman-bike-2.jpg";
import raceIronmanScoreboard from "@/assets/race-ironman-scoreboard.jpg";
// Dolomyths 22K Skyrace images
import raceDolomythsSummit from "@/assets/race-dolomyths-summit.jpg";
import raceDolomythsFinish from "@/assets/race-dolomyths-finish.jpg";
import raceDolomythsTrail from "@/assets/race-dolomyths-trail.jpg";
import raceDolomythsMountain from "@/assets/race-dolomyths-mountain.jpg";
import raceDolomythsValley from "@/assets/race-dolomyths-valley.jpg";
import raceDolomythsAlpine from "@/assets/race-dolomyths-alpine.jpg";
import raceDolomythsPack from "@/assets/race-dolomyths-pack.jpg";
import raceDolomythsDescent from "@/assets/race-dolomyths-descent.jpg";
// IronKids images
import raceIronkidsMedals from "@/assets/race-ironkids-medals.jpg";
import raceIronkidsFamily from "@/assets/race-ironkids-family.jpg";
import raceIronkidsSolo from "@/assets/race-ironkids-solo.jpg";
import raceIronkidsPrerace from "@/assets/race-ironkids-prerace.jpg";
import raceIronkidsTeam from "@/assets/race-ironkids-team.jpg";

interface RaceImage {
  src: string;
  alt: string;
  description: string;
}

const Races = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<RaceImage | null>(null);

  const ironmanImages: RaceImage[] = [
    { src: raceIronmanFinish, alt: "Ironman 70.3 Finish", description: "Crossing the finish line at Ironman 70.3 Augusta with a victorious point to the sky" },
    { src: raceIronmanMedal, alt: "Finisher Medal", description: "Proudly wearing the Ironman 70.3 Augusta finisher medal after completing 70.3 miles" },
    { src: raceIronmanFriends, alt: "Race Weekend Friends", description: "With friends at the Ironman 70.3 Augusta expo before race day" },
    { src: raceIronmanBike1, alt: "Bike Course", description: "Pushing through the 56-mile bike course in the early morning light" },
    { src: raceIronmanRun, alt: "Run Course", description: "Running along the Augusta Riverwalk during the half marathon" },
    { src: raceIronmanBike2, alt: "T2 Transition", description: "Heading into the second transition after completing the bike leg" },
    { src: raceIronmanScoreboard, alt: "Official Results", description: "Official finish time of 6:49:01 displayed on the Ironman 70.3 Augusta scoreboard" },
  ];

  const dolomythsImages: RaceImage[] = [
    { src: raceDolomythsSummit, alt: "Mountain Summit", description: "Running through the snow at the summit of the Dolomyths 22K Skyrace" },
    { src: raceDolomythsFinish, alt: "Finish Line", description: "Crossing the Salomon finish line in the Italian Dolomites" },
    { src: raceDolomythsTrail, alt: "Forest Trail", description: "Running through the alpine forest trails of the Dolomites" },
    { src: raceDolomythsMountain, alt: "Mountain Vista", description: "Navigating the rocky terrain with stunning mountain peaks in the background" },
    { src: raceDolomythsValley, alt: "Alpine Valley", description: "Running through the misty mountain valleys of the Italian Dolomites" },
    { src: raceDolomythsAlpine, alt: "Alpine Meadow", description: "Pushing through the alpine meadows with dramatic Dolomite peaks rising behind" },
    { src: raceDolomythsPack, alt: "Running Pack", description: "Racing alongside fellow competitors on the mountain trails" },
    { src: raceDolomythsDescent, alt: "Rocky Descent", description: "Navigating the challenging rocky descent through the fog" },
  ];

  const ironkidsImages: RaceImage[] = [
    { src: raceIronkidsMedals, alt: "IronKids Finishers", description: "Celebrating with finisher medals at an IronKids triathlon" },
    { src: raceIronkidsFamily, alt: "Family Support", description: "Post-race celebration with family at IronKids Alpharetta" },
    { src: raceIronkidsSolo, alt: "Young Triathlete", description: "Proudly displaying the finisher medal at IronKids 2012" },
    { src: raceIronkidsPrerace, alt: "Pre-Race", description: "Ready to race with a friend at an IronKids triathlon" },
    { src: raceIronkidsTeam, alt: "Branches Triathlon Club", description: "The Branches Triathlon Club team at IronKids 2012" },
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
          <div className="flex items-center justify-center mb-8">
            <img src={ironmanLogo} alt="Ironman Logo" className="h-24 w-auto" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-center">Races</h1>
          <p className="text-xl text-muted-foreground mb-4 text-center">Endurance events and athletic achievements</p>
          <div className="h-1 w-24 bg-gold mb-12 mx-auto"></div>

          {/* Ironman 70.3 Augusta Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-2 text-gold">Ironman 70.3 Augusta</h2>
            <p className="text-muted-foreground mb-6">
              1.2-mile swim, 56-mile bike, 13.1-mile run • Augusta, Georgia • September 2024
            </p>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {ironmanImages.map((image, index) => (
                <div 
                  key={index}
                  className="break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full rounded-lg shadow-lg hover-lift"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dolomyths 22K Skyrace Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-2 text-gold">Dolomyths 22K Skyrace</h2>
            <p className="text-muted-foreground mb-6">
              22-kilometer mountain trail race with 1,500m elevation gain • Italian Dolomites • July 2025 • Finish time: 3:00:24
            </p>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {dolomythsImages.map((image, index) => (
                <div 
                  key={index}
                  className="break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full rounded-lg shadow-lg hover-lift"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Peachtree Road Race Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-2 text-gold">Peachtree Road Race</h2>
            <p className="text-muted-foreground mb-6">
              10K road race • Atlanta, Georgia • July 4th tradition
            </p>
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <p className="text-muted-foreground italic text-center">Photos coming soon</p>
            </div>
          </div>

          {/* IronKids Section */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gold">IronKids</h2>
            <p className="text-muted-foreground mb-6">
              Youth triathlon series • Where the journey began
            </p>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {ironkidsImages.map((image, index) => (
                <div 
                  key={index}
                  className="break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full rounded-lg shadow-lg hover-lift"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-auto">
          <div className="relative">
            <img 
              src={selectedImage?.src} 
              alt={selectedImage?.alt} 
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <div className="p-6">
              <DialogTitle className="text-xl font-semibold mb-2">{selectedImage?.alt}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedImage?.description}
              </DialogDescription>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Races;
