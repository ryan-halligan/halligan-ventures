import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tgcLogo from "@/assets/tgc-logo.png";
import dunwoodyPlanner from "@/assets/tgc-dunwoody-planner.jpg";
import dunwoodyTennessee from "@/assets/tgc-dunwoody-tennessee.jpg";
import logoNflFacts from "@/assets/tgc-logo-nfl-facts.jpg";
import logoPacers from "@/assets/tgc-logo-pacers.jpg";
import logoLonzopage from "@/assets/tgc-logo-lonzopage.jpg";
import logoGatorsallday from "@/assets/tgc-logo-gatorsallday.jpg";
import templateLonzopage from "@/assets/tgc-template-lonzopage-quote.jpg";
import templateItsOver from "@/assets/tgc-template-its-over.png";
import templateGatorsBreaking from "@/assets/tgc-template-gators-breaking.jpg";
import floridaGameday from "@/assets/tgc-florida-gameday.jpg";
import dfaRebrand from "@/assets/tgc-dfa-rebrand.jpg";
import lionsLogo from "@/assets/tgc-lions-logo.jpg";
import lionsDiscussion from "@/assets/tgc-lions-discussion.jpg";
import lionsBreaking from "@/assets/tgc-lions-breaking.jpg";
import burrowStory from "@/assets/tgc-burrow-story.jpg";
import branchesLogo from "@/assets/tgc-branches-logo.jpg";
import beastmodeLogo from "@/assets/tgc-beastmode-logo.jpg";

const TGCCustomWork = () => {
  const navigate = useNavigate();

  const dunwoodyWork = [
    { src: dunwoodyPlanner, title: "Soar Into Success Student Planner" },
  ];

  const templates = [
    { src: dunwoodyTennessee, title: "Tennessee Breaking News Template" },
    { src: templateLonzopage, title: "Lonzopage Quote Template" },
    { src: templateGatorsBreaking, title: "Gators Breaking News Template" },
    { src: floridaGameday, title: "Florida Gators Gameday Template" },
    { src: dfaRebrand, title: "DFA Basketball Rebrand Announcement" },
    { src: lionsDiscussion, title: "DetLionsDrive Discussion Template" },
    { src: lionsBreaking, title: "DetLionsDrive Breaking News Template" },
    { src: burrowStory, title: "BurrowsBackup Story Update Template" },
  ];

  const logos = [
    { src: templateItsOver, title: "It's Over Logo" },
    { src: logoNflFacts, title: "NFL Facts Now Logo" },
    { src: logoPacers, title: "Indiana Pacers Logo Concept" },
    { src: logoLonzopage, title: "Lonzopage Watermark" },
    { src: logoGatorsallday, title: "GatorsAllDay Logo" },
    { src: lionsLogo, title: "DetLionsDrive Logo" },
    { src: branchesLogo, title: "The Branches Club Logo" },
    { src: beastmodeLogo, title: "Beastmode YT Logo" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
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
            <img src={tgcLogo} alt="TheGRFXCommittee" className="w-24 h-24 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Custom Work</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">One-off commissioned pieces for teams, athletes, and creators</p>
          </div>

          {/* Dunwoody High School Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gold">Dunwoody High School</h2>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {dunwoodyWork.map((item, index) => (
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

          {/* Templates Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gold">Templates</h2>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {templates.map((item, index) => (
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

          {/* Logos Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gold">Logos</h2>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {logos.map((item, index) => (
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

export default TGCCustomWork;
