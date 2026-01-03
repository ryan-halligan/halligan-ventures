import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tgcLogo from "@/assets/tgc-logo.png";
import tgcGiveawayV8 from "@/assets/tgc-giveaway-v8.png";
import tgcGiveawayV7 from "@/assets/tgc-giveaway-v7.png";
import tgcPackV6 from "@/assets/tgc-pack-v6.png";
import tgcPackV5 from "@/assets/tgc-pack-v5.png";
import tgcFreeTemplate from "@/assets/tgc-free-template.png";
import tgcGiveawayV3 from "@/assets/tgc-giveaway-v3.png";
import tgcPackV2 from "@/assets/tgc-pack-v2.png";
import tgcDebutPack from "@/assets/tgc-debut-pack.png";
import projectsBg from "@/assets/projects-bg.png";

const TGCGiveaways = () => {
  const navigate = useNavigate();

  const giveaways = [
    { src: tgcGiveawayV8, title: "TGC Giveaway V8" },
    { src: tgcGiveawayV7, title: "TGC Giveaway V7" },
    { src: tgcPackV6, title: "TGC Pack V6" },
    { src: tgcPackV5, title: "TGC V5 Pack" },
    { src: tgcFreeTemplate, title: "Free Template Pack" },
    { src: tgcGiveawayV3, title: "Giveaway V3" },
    { src: tgcPackV2, title: "TGC Pack V2" },
    { src: tgcDebutPack, title: "TGC Debut Pack" },
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
            <img src={tgcLogo} alt="TheGRFXCommittee" className="w-24 h-24 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Giveaways</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Free templates and assets for the community</p>
          </div>

          <div className="columns-1 md:columns-2 gap-4 space-y-4">
            {giveaways.map((giveaway, index) => (
              <div 
                key={index}
                className="break-inside-avoid rounded-lg overflow-hidden border border-border hover:border-gold transition-colors"
              >
                <img 
                  src={giveaway.src} 
                  alt={giveaway.title}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TGCGiveaways;
