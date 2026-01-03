import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
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

const Personal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${projectsBg})`, opacity: 0.15 }}
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
          <p className="text-xl text-muted-foreground mb-4">Design, Content Creation & Athletic Pursuits</p>
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
                  <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold h-full">
                    <CardContent className="p-6 text-center flex flex-col h-full min-h-[180px]">
                      <h3 className="text-xl font-semibold mb-2">News</h3>
                      <p className="text-sm text-muted-foreground flex-grow">College and pro football coverage and updates</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold h-full">
                    <CardContent className="p-6 text-center flex flex-col h-full min-h-[180px]">
                      <h3 className="text-xl font-semibold mb-2">Designs</h3>
                      <p className="text-sm text-muted-foreground flex-grow">Graphics built to strengthen brand identity</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold h-full">
                    <CardContent className="p-6 text-center flex flex-col h-full min-h-[180px]">
                      <h3 className="text-xl font-semibold mb-2">Analysis</h3>
                      <p className="text-sm text-muted-foreground flex-grow">Deep-dive breakdowns and player evaluations</p>
                    </CardContent>
                  </Card>
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
                  <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold h-full">
                    <CardContent className="p-6 text-center flex flex-col h-full min-h-[180px]">
                      <h3 className="text-xl font-semibold mb-2">Journey</h3>
                      <p className="text-sm text-muted-foreground flex-grow">Swim background, triathlons, and Ironman story</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold h-full">
                    <CardContent className="p-6 text-center flex flex-col h-full min-h-[180px]">
                      <h3 className="text-xl font-semibold mb-2">Training</h3>
                      <p className="text-sm text-muted-foreground flex-grow">PRs, metrics, race results, and current focus</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border hover-lift cursor-pointer transition-all hover:border-gold h-full">
                    <CardContent className="p-6 text-center flex flex-col h-full min-h-[180px]">
                      <h3 className="text-xl font-semibold mb-2">Goals</h3>
                      <p className="text-sm text-muted-foreground flex-grow">Achievements and what I'm chasing next</p>
                    </CardContent>
                  </Card>
                </div>
                
                <a 
                  href="https://docs.google.com/spreadsheets/d/1IASkJuFo7zypi9-kUkJ9ECdy_uJTtz6LSDaChbTA1_I/edit?gid=0#gid=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  View Training Plan <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
