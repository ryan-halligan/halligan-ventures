import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ironmanLogo from "@/assets/ironman-logo.png";
import projectsBg from "@/assets/projects-bg.png";
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

const Goals = () => {
  const navigate = useNavigate();

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
              src={atlantaMarathonFinish} 
              alt="Goals Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src={ironmanLogo} alt="Ironman Logo" className="h-16 w-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
                <Target className="h-10 w-10 text-gold" />
                Goals
              </h1>
              <p className="text-lg text-white/80 mt-2">Achievements and what I'm chasing next</p>
            </div>
          </div>

          {/* The Journey to Ironman */}
          <div className="mb-12 p-6 bg-card/50 rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gold">The Journey to Ironman</h2>
            <p className="text-muted-foreground mb-6">
              My ultimate goal is to become an Ironman — completing the full 140.6-mile triathlon consisting of a 2.4-mile swim, 
              112-mile bike, and 26.2-mile run. Every race is a stepping stone toward this dream.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <img src={scottRigsby} alt="Scott Rigsby" className="h-16 w-16 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold">Inspiration: Scott Rigsby</h3>
                <p className="text-sm text-muted-foreground">The first double amputee to complete an Ironman triathlon</p>
              </div>
            </div>
          </div>

          {/* Next Milestone */}
          <div className="mb-12 p-6 bg-card/50 rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-4">Next Milestone</h2>
            <p className="text-gold font-medium text-xl mb-2">Atlanta Publix Marathon — March 1st, 2025</p>
            <p className="text-muted-foreground">My first full marathon, building endurance for the Ironman run leg</p>
          </div>

          {/* Race Distance Progression */}
          <div className="p-6 bg-card/50 rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-6">Race Distance Progression</h2>
            
            <div className="space-y-4">
              {prRecords.map((record, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-40 text-sm font-medium">{record.distance}</div>
                  <div className="flex-1 bg-muted rounded-full h-8 overflow-hidden">
                    <div 
                      className={`h-full rounded-full flex items-center justify-end pr-3 text-sm font-medium ${
                        record.achieved ? 'bg-gold text-background' : 'bg-muted-foreground/30 text-muted-foreground'
                      }`}
                      style={{ width: record.achieved ? '100%' : '30%' }}
                    >
                      {record.time !== "—" ? record.time : record.goal}
                    </div>
                  </div>
                  <div className="w-24 text-right">
                    {record.achieved ? (
                      <span className="text-green-500 text-sm font-medium">✓ Complete</span>
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
  );
};

export default Goals;
