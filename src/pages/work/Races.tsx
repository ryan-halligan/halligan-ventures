import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Target, Trophy, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
import raceDolomythsRunners from "@/assets/race-dolomyths-runners.jpg";
import raceDolomythsStart from "@/assets/race-dolomyths-start.jpg";
// Peachtree Road Race images
import racePeachtreeFamily from "@/assets/race-peachtree-family.jpg";
import racePeachtreeBrothers from "@/assets/race-peachtree-brothers.jpg";
import racePeachtreeStart from "@/assets/race-peachtree-start.jpg";
// IronKids images
import raceIronkidsMedals from "@/assets/race-ironkids-medals.jpg";
import raceIronkidsFamily from "@/assets/race-ironkids-family.jpg";
import raceIronkidsSolo from "@/assets/race-ironkids-solo.jpg";
import raceIronkidsPrerace from "@/assets/race-ironkids-prerace.jpg";
import raceIronkidsTeam from "@/assets/race-ironkids-team.jpg";
// 5K Races images
import race5kAdpi from "@/assets/race-5k-adpi.jpg";
import race5kResults from "@/assets/race-5k-results.jpg";
import race5kChristmas from "@/assets/race-5k-christmas.jpg";
import race5kHotchocolate from "@/assets/race-5k-hotchocolate.jpg";
// Goals cover
import atlantaMarathonFinish from "@/assets/atlanta-marathon-finish.jpg";

interface RaceImage {
  src: string;
  alt: string;
  description: string;
}

interface PRRecord {
  distance: string;
  time: string;
  goal: string;
  achieved: boolean;
}

const Races = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<RaceImage | null>(null);

  const prRecords: PRRecord[] = [
    { distance: "5K", time: "18:26", goal: "Sub 18:00", achieved: true },
    { distance: "10K", time: "—", goal: "Sub 40:00", achieved: false },
    { distance: "Half Marathon", time: "—", goal: "Sub 1:45:00", achieved: false },
    { distance: "Marathon", time: "—", goal: "Sub 4:00:00", achieved: false },
    { distance: "Half Ironman (70.3)", time: "6:49:01", goal: "Sub 6:30:00", achieved: true },
    { distance: "Full Ironman (140.6)", time: "—", goal: "Finish", achieved: false },
  ];

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
    { src: raceDolomythsRunners, alt: "Trail Runners", description: "Runners navigating the rocky mountain terrain with valley views below" },
    { src: raceDolomythsStart, alt: "Race Start", description: "The start line at the Salomon-sponsored Dolomyths Skyrace with mountains in the background" },
  ];

  const peachtreeImages: RaceImage[] = [
    { src: racePeachtreeFamily, alt: "Family Race Day", description: "Race day with the family at the AJC Peachtree Road Race on July 4th" },
    { src: racePeachtreeBrothers, alt: "Brothers Celebrating", description: "Celebrating with my brother in the official Peachtree Road Race finisher shirts" },
    { src: racePeachtreeStart, alt: "Race Start", description: "The iconic start of the Peachtree Road Race with American flag flying overhead" },
  ];

  const ironkidsImages: RaceImage[] = [
    { src: raceIronkidsMedals, alt: "IronKids Finishers", description: "Celebrating with finisher medals at an IronKids triathlon" },
    { src: raceIronkidsFamily, alt: "Family Support", description: "Post-race celebration with family at IronKids Alpharetta" },
    { src: raceIronkidsSolo, alt: "Young Triathlete", description: "Proudly displaying the finisher medal at IronKids 2012" },
    { src: raceIronkidsPrerace, alt: "Pre-Race", description: "Ready to race with a friend at an IronKids triathlon" },
    { src: raceIronkidsTeam, alt: "Branches Triathlon Club", description: "The Branches Triathlon Club team at IronKids 2012" },
  ];

  const fiveKImages: RaceImage[] = [
    { src: race5kChristmas, alt: "Christmas in July 5K", description: "Celebrating with finisher medals at the Christmas in July 5K" },
    { src: race5kHotchocolate, alt: "Hot Chocolate 5K", description: "Pre-race at the Hot Chocolate 5K with my brother" },
    { src: race5kAdpi, alt: "ADPI RMHC Charity 5K", description: "Running the ADPI RMHC charity 5K at Georgia Tech" },
    { src: race5kResults, alt: "5K Results", description: "Race results showing 2nd place finish with a PR chip time of 18:26.48" },
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

          {/* Hero Section with Cover Image */}
          <div className="relative rounded-xl overflow-hidden mb-12 h-64 md:h-80">
            <img 
              src={raceIronmanFinish} 
              alt="Races Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src={ironmanLogo} alt="Ironman Logo" className="h-16 w-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Races</h1>
              <p className="text-lg text-white/80 mt-2">Endurance events and athletic achievements</p>
            </div>
          </div>

          {/* Ironman 70.3 Augusta Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-2 text-gold">Ironman 70.3 Augusta</h2>
            <p className="text-muted-foreground mb-2">
              My first 70.3 • 1.2-mile swim, 56-mile bike, 13.1-mile run • Augusta, Georgia • September 2024
            </p>
            <p className="text-lg font-semibold text-gold mb-6">
              Total Finish Time: 6:49:01
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
            <p className="text-muted-foreground mb-2">
              22-kilometer mountain trail race with 1,500m elevation gain • Italian Dolomites • July 2025
            </p>
            <p className="text-lg font-semibold text-gold mb-6">
              Finish Time: 3:00:24
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
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {peachtreeImages.map((image, index) => (
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

          {/* 5K Races Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-2 text-gold">5K Races</h2>
            <p className="text-muted-foreground mb-2">
              A compilation of 5Ks including Christmas in July, Hot Chocolate, and ADPI RMHC Charity
            </p>
            <p className="text-lg font-semibold text-gold mb-6">
              PR: 18:26.48
            </p>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {fiveKImages.map((image, index) => (
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

          {/* IronKids Section */}
          <div className="mb-16">
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

          {/* Training Section */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden mb-8 h-48 md:h-64">
              <img 
                src={raceDolomythsValley} 
                alt="Training Cover" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Clock className="h-8 w-8 text-gold" />
                  Training
                </h2>
              </div>
            </div>

            {/* Atlanta Publix Marathon */}
            <div className="bg-card/50 rounded-xl p-6 border border-border mb-6">
              <h3 className="text-xl font-bold mb-2 text-gold">Atlanta Publix Marathon</h3>
              <p className="text-muted-foreground mb-4">
                Training in progress for my first marathon on March 1st, 2025
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/20 text-gold font-medium">
                  🏃 In Training
                </span>
              </div>
            </div>

            {/* Training Plan Link */}
            <a 
              href="https://www.trainingpeaks.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-lg transition-colors mb-8"
            >
              <ExternalLink className="h-4 w-4" />
              View Training Plan
            </a>

            {/* PR Table */}
            <div className="bg-card/50 rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gold" />
                Personal Records & Goals
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Distance</TableHead>
                    <TableHead>Current PR</TableHead>
                    <TableHead>Goal</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {prRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{record.distance}</TableCell>
                      <TableCell className={record.time !== "—" ? "text-gold font-semibold" : "text-muted-foreground"}>
                        {record.time}
                      </TableCell>
                      <TableCell>{record.goal}</TableCell>
                      <TableCell className="text-center">
                        {record.achieved ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-medium">
                            ✓ Achieved
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                            In Progress
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden mb-8 h-48 md:h-64">
              <img 
                src={atlantaMarathonFinish} 
                alt="Goals Cover" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Target className="h-8 w-8 text-gold" />
                  Goals
                </h2>
              </div>
            </div>

            <div className="bg-card/50 rounded-xl p-6 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-gold">The Journey to Ironman</h3>
              <p className="text-muted-foreground mb-6">
                My ultimate goal is to become an Ironman — completing the full 140.6-mile triathlon consisting of a 2.4-mile swim, 
                112-mile bike, and 26.2-mile run. Every race is a stepping stone toward this dream.
              </p>
              
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">Next Milestone</h4>
                <p className="text-gold font-medium">Atlanta Publix Marathon — March 1st, 2025</p>
                <p className="text-sm text-muted-foreground">My first full marathon, building endurance for the Ironman run leg</p>
              </div>

              {/* Visual Progress Graphic */}
              <div className="space-y-4">
                <h4 className="font-semibold mb-4">Race Distance Progression</h4>
                
                {prRecords.map((record, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium">{record.distance}</div>
                    <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                      <div 
                        className={`h-full rounded-full flex items-center justify-end pr-2 text-xs font-medium ${
                          record.achieved ? 'bg-gold text-background' : 'bg-muted-foreground/30 text-muted-foreground'
                        }`}
                        style={{ width: record.achieved ? '100%' : '30%' }}
                      >
                        {record.time !== "—" ? record.time : record.goal}
                      </div>
                    </div>
                    <div className="w-20 text-right">
                      {record.achieved ? (
                        <span className="text-green-500 text-sm">✓</span>
                      ) : (
                        <span className="text-muted-foreground text-sm">→ {record.goal}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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
