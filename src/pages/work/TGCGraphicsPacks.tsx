import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tgcLogo from "@/assets/tgc-logo.png";
import tgcUltimatePack from "@/assets/tgc-ultimate-pack.jpg";
import tgcFanpagePack from "@/assets/tgc-fanpage-pack.png";
import tgcDeluxeFanpage from "@/assets/tgc-deluxe-fanpage.png";
import tgcFormatsPack from "@/assets/tgc-formats-pack.png";

const TGCGraphicsPacks = () => {
  const navigate = useNavigate();

  const packs = [
    { src: tgcUltimatePack, title: "The Ultimate Graphics Package" },
    { src: tgcFanpagePack, title: "Fanpage Pack" },
    { src: tgcDeluxeFanpage, title: "Deluxe Fanpage Pack" },
    { src: tgcFormatsPack, title: "Formats Pack" },
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
            <h1 className="text-5xl font-bold mb-4">Graphics Packages</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Complete visual packages built for consistent branding</p>
          </div>

          <div className="columns-1 md:columns-2 gap-4 space-y-4">
            {packs.map((pack, index) => (
              <div 
                key={index}
                className="break-inside-avoid rounded-lg overflow-hidden border border-border hover:border-gold transition-colors"
              >
                <img 
                  src={pack.src} 
                  alt={pack.title}
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

export default TGCGraphicsPacks;
