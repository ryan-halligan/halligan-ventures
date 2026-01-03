import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import rhLogo from "@/assets/rh-logo-main.png";
import omahaOwlsMerch from "@/assets/omaha-owls-merch.png";
import omahaOwlsBreakingManning from "@/assets/omaha-owls-breaking-manning.png";
import omahaOwlsSigned from "@/assets/omaha-owls-signed.png";
import omahaOwlsBreakingKelce from "@/assets/omaha-owls-breaking-kelce.png";
import omahaOwlsTigersweek from "@/assets/omaha-owls-tigersweek.png";
import omahaOwlsOmari from "@/assets/omaha-owls-omari.png";
import omahaOwlsMahomes from "@/assets/omaha-owls-mahomes.png";
import omahaOwlsUniforms from "@/assets/omaha-owls-uniforms.png";
import omahaOwlsIntro from "@/assets/omaha-owls-intro.png";
import fitbowlLogo from "@/assets/fitbowl-logo.jpg";
import fitbowlMenuFront from "@/assets/fitbowl-menu-front.jpg";
import fitbowlMenuBack from "@/assets/fitbowl-menu-back.jpg";
import xstrikeLogo from "@/assets/xstrike-logo.jpg";
import xstrikeStarlink from "@/assets/xstrike-starlink.jpg";
import xstrikeMilitary from "@/assets/xstrike-military.jpg";
import xstrikeBudget from "@/assets/xstrike-budget.jpg";
import xstrikeSatellite from "@/assets/xstrike-satellite.jpg";
import xstrikeShield from "@/assets/xstrike-shield.jpg";
import projectsBg from "@/assets/projects-bg.png";

const RHxVisualsProjects = () => {
  const navigate = useNavigate();

  const omahaOwlsImages = [
    { src: omahaOwlsIntro, title: "Introducing Omaha Owls" },
    { src: omahaOwlsOmari, title: "Omari The Owl Mascot" },
    { src: omahaOwlsUniforms, title: "Team Uniforms" },
    { src: omahaOwlsMahomes, title: "Welcome Patrick Mahomes" },
    { src: omahaOwlsSigned, title: "OBJ & Jarvis Landry Signed" },
    { src: omahaOwlsBreakingKelce, title: "Breaking News - Kelce" },
    { src: omahaOwlsBreakingManning, title: "Breaking News - Manning" },
    { src: omahaOwlsTigersweek, title: "Tigers Week Gameday" },
    { src: omahaOwlsMerch, title: "Merchandise Promo" },
  ];

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
          <div className="text-center mb-12">
            <img src={rhLogo} alt="RHxVisuals" className="w-24 h-24 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Extended creative projects & collaborations</p>
          </div>

          {/* Omaha Owls Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gold">Omaha Owls</h2>
              <a 
                href="https://www.instagram.com/om_owls/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:underline text-sm"
              >
                View on Instagram <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-muted-foreground mb-6">
              Complete branding and design package for a fictional NFL expansion team concept.
            </p>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {omahaOwlsImages.map((item, index) => (
                <div 
                  key={index}
                  className="break-inside-avoid rounded-lg overflow-hidden border border-border hover:border-gold transition-colors"
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fitbowl Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gold">Fitbowl</h2>
            <p className="text-muted-foreground mb-6">
              Menu design and branding for a local healthy food restaurant.
            </p>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {[
                { src: fitbowlLogo, title: "Fitbowl Logo" },
                { src: fitbowlMenuFront, title: "Menu Front" },
                { src: fitbowlMenuBack, title: "Menu Back" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="break-inside-avoid rounded-lg overflow-hidden border border-border hover:border-gold transition-colors"
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* X Strike Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gold">X Strike</h2>
            <p className="text-muted-foreground mb-6">
              Branding and infographic design for defense and aerospace concepts.
            </p>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {[
                { src: xstrikeLogo, title: "X Strike Logo" },
                { src: xstrikeSatellite, title: "X Strike Satellite" },
                { src: xstrikeShield, title: "X Shield" },
                { src: xstrikeStarlink, title: "Starlink Graphic" },
                { src: xstrikeMilitary, title: "Military Spending Infographic" },
                { src: xstrikeBudget, title: "Space Force Budget" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="break-inside-avoid rounded-lg overflow-hidden border border-border hover:border-gold transition-colors"
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RHxVisualsProjects;
