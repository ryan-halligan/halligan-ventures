import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight, Trophy, Target, Clock } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import rhLogo from "@/assets/rh-logo-main.png";
import jerseySwapsBg from "@/assets/jersey-swaps-bg.jpg";
import benSheltonBg from "@/assets/rhxvisuals-shelton.jpg";
import omariOwlBg from "@/assets/omaha-owls-omari.png";
import afcLogo from "@/assets/afc-logo.jpg";
import tgcLogo from "@/assets/tgc-logo.png";
import gridiron from "@/assets/gridiron-drive-logo.jpg";
import ironmanLogo from "@/assets/ironman-logo.png";
import tgcUltimatePack from "@/assets/tgc-ultimate-pack.jpg";
import tgcGiveawayV7 from "@/assets/tgc-giveaway-v7.png";
import tgcLionsLogo from "@/assets/tgc-lions-logo.jpg";
import afcFalconsWin from "@/assets/afc-falcons-win.jpg";
import afcDeboDesign from "@/assets/afc-debo-design.jpg";
import afcAnalysisRisingStars from "@/assets/afc-analysis-rising-stars.jpg";
import projectsBg from "@/assets/projects-bg.png";
import gdZachWilson from "@/assets/gd-zach-wilson.jpg";
import gdNewStripes from "@/assets/gd-new-stripes.jpg";
import gdMockDraft from "@/assets/gd-mock-draft.jpg";
// Personal Athletics covers
import raceIronmanFinish from "@/assets/race-ironman-finish.jpg";
import raceDolomythsValley from "@/assets/race-dolomyths-valley.jpg";
import atlantaMarathonFinish from "@/assets/atlanta-marathon-finish.jpg";
import scottRigsby from "@/assets/rhxvisuals-scott-rigsby.jpg";

interface PRRecord {
  distance: string;
  time: string;
  goal: string;
  achieved: boolean;
}

const prRecords: PRRecord[] = [
  { distance: "5K", time: "18:26", goal: "Sub 18:00", achieved: true },
  { distance: "10K", time: "—", goal: "Sub 40:00", achieved: false },
  { distance: "Half Marathon", time: "—", goal: "Sub 1:45:00", achieved: false },
  { distance: "Marathon", time: "—", goal: "Sub 4:00:00", achieved: false },
  { distance: "Half Ironman (70.3)", time: "6:49:01", goal: "Sub 6:30:00", achieved: true },
  { distance: "Full Ironman (140.6)", time: "—", goal: "Finish", achieved: false },
];

const Personal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${projectsBg})`, opacity: 0.30 }}
      />
      <Navigation />
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-muted"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-5xl font-bold mb-4">Personal Projects</h1>
          <p className="text-xl text-muted-foreground mb-4">Design, Analysis & Athletic Pursuits</p>
          <div className="h-1 w-24 bg-gold mb-12"></div>

          <div className="space-y-6">
            {/* RHxVisuals */}
            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={rhLogo} alt="RH Logo" className="h-12 w-auto" />
                  <div className="w-px h-12 bg-gold"></div>
                  <div>
                    <CardTitle className="text-2xl">RHxVisuals</CardTitle>
                    <CardDescription>Personal Design Work</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Personal portfolio showcasing graphic design work across sports, branding, and digital media. 
                  Creating custom designs using Adobe Photoshop, Lightroom, and Canva.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Link to="/work/jersey-swaps">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-top opacity-15"
                        style={{ backgroundImage: `url(${jerseySwapsBg})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Jersey Swaps</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Professional athlete jersey swap designs</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/work/compositions">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-top opacity-15"
                        style={{ backgroundImage: `url(${benSheltonBg})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Compositions</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Dynamic sports composition designs</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/work/rhxvisuals-projects">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${omariOwlBg})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Projects</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Extended creative projects & collaborations</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                </div>
                
                <a 
                  href="https://www.instagram.com/rhxvisuals/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  View on Instagram <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>

            {/* TheGRFXCommittee */}
            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={tgcLogo} alt="TheGRFXCommittee Logo" className="h-12 w-auto" />
                  <div className="w-px h-12 bg-gold"></div>
                  <div>
                    <CardTitle className="text-2xl">TheGRFXCommittee</CardTitle>
                    <CardDescription>Design Shop & Community</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Founded design shop connecting designers with teams and brands. Collaborative platform for 
                  sports graphics and branding projects.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Link to="/work/tgc-graphics-packs">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${tgcUltimatePack})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Graphics Packs</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Complete visual packages for consistent branding</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/work/tgc-giveaways">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${tgcGiveawayV7})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Giveaways</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Free templates and assets for community growth</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/work/tgc-custom-work">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${tgcLionsLogo})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Custom Work</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Commissioned pieces for teams and creators</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                </div>
                
                <a 
                  href="https://www.instagram.com/thegrfxcommittee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  View on Instagram <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>

            {/* ATLFalconsCountry */}
            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={afcLogo} alt="ATLFalconsCountry Logo" className="h-12 w-auto" />
                  <div className="w-px h-12 bg-gold"></div>
                  <div>
                    <CardTitle className="text-2xl">ATLFalconsCountry</CardTitle>
                    <CardDescription>Atlanta Falcons Fan Page</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Fan-driven content page dedicated to Atlanta Falcons news, updates, and community engagement.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Link to="/work/afc-analysis">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${afcAnalysisRisingStars})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Analysis</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Polls, predictions, and interactive content</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/work/afc-news">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${afcFalconsWin})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">News</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Coverage of roster moves, injuries, and game recaps</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/work/afc-designs">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${afcDeboDesign})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Designs</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Graphics and visuals to elevate team storytelling</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                </div>
                
                <a 
                  href="https://www.instagram.com/atlfalconscountry/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  View on Instagram <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>

            {/* Gridiron Drive */}
            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={gridiron} alt="Gridiron Drive Logo" className="h-12 w-auto" />
                  <div className="w-px h-12 bg-gold"></div>
                  <div>
                    <CardTitle className="text-2xl">Gridiron Drive</CardTitle>
                    <CardDescription>NFL Content Page</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Previously managed NFL-focused social media page covering league news, analysis, and fan engagement.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/work/gridiron-drive-analysis">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${gdMockDraft})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Analysis</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Deep-dive breakdowns and player evaluations</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/work/gridiron-drive-news">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${gdZachWilson})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">News</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">College and pro football coverage and updates</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/work/gridiron-drive-designs">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${gdNewStripes})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Designs</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Graphics built to strengthen brand identity</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Personal Athletics */}
            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={ironmanLogo} alt="Ironman Logo" className="h-12 w-auto" />
                  <div className="w-px h-12 bg-gold"></div>
                  <div>
                    <CardTitle className="text-2xl">Personal Athletics</CardTitle>
                    <CardDescription>Endurance Sports & Athletic Development</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Comprehensive training and athletic pursuits, featuring structured workouts, 
                  performance tracking, and progressive development across swimming, cycling, and running.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Link to="/work/races">
                    <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: `url(${raceIronmanFinish})` }}
                      />
                      <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                        <h3 className="text-xl font-semibold mb-2">Races</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">Ironman 70.3, Dolomyths 22K, Peachtree Road Race, and IronKids</p>
                        <ChevronRight className="mx-auto text-gold" size={24} />
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-15"
                      style={{ backgroundImage: `url(${raceDolomythsValley})` }}
                    />
                    <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                      <h3 className="text-xl font-semibold mb-2">Training</h3>
                      <p className="text-sm text-muted-foreground flex-grow">PRs, metrics, race results, and current focus</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold relative overflow-hidden h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-15"
                      style={{ backgroundImage: `url(${atlantaMarathonFinish})` }}
                    />
                    <CardContent className="p-6 text-center relative z-10 flex flex-col h-full min-h-[180px]">
                      <h3 className="text-xl font-semibold mb-2">Goals</h3>
                      <p className="text-sm text-muted-foreground flex-grow">Achievements and what I'm chasing next</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Training Section */}
                <div className="mb-8 p-6 bg-card/50 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold" />
                    Training
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gold">Atlanta Publix Marathon</h4>
                    <p className="text-muted-foreground mb-4">
                      Training in progress for my first marathon on March 1st, 2025
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/20 text-gold font-medium text-sm">
                      🏃 In Training
                    </span>
                  </div>
                  
                  <a 
                    href="https://docs.google.com/spreadsheets/d/1IASkJuFo7zypi9-kUkJ9ECdy_uJTtz6LSDaChbTA1_I/edit?gid=0#gid=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-lg transition-colors mb-6"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Training Plan
                  </a>
                  
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-gold" />
                    Personal Records & Goals
                  </h4>
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

                {/* Goals Section */}
                <div className="p-6 bg-card/50 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold" />
                    Goals
                  </h3>
                  
                  <h4 className="text-lg font-bold mb-2 text-gold">The Journey to Ironman</h4>
                  <p className="text-muted-foreground mb-4">
                    My ultimate goal is to become an Ironman — completing the full 140.6-mile triathlon consisting of a 2.4-mile swim, 
                    112-mile bike, and 26.2-mile run. Every race is a stepping stone toward this dream.
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                    <img src={scottRigsby} alt="Scott Rigsby" className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h5 className="font-semibold">Inspiration: Scott Rigsby</h5>
                      <p className="text-sm text-muted-foreground">The first double amputee to complete an Ironman triathlon</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 mb-6">
                    <h5 className="font-semibold mb-2">Next Milestone</h5>
                    <p className="text-gold font-medium">Atlanta Publix Marathon — March 1st, 2025</p>
                    <p className="text-sm text-muted-foreground">My first full marathon, building endurance for the Ironman run leg</p>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-semibold">Race Distance Progression</h5>
                    
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
