import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Trophy, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ironmanLogo from "@/assets/ironman-logo.png";
import projectsBg from "@/assets/projects-bg.png";
import raceDolomythsValley from "@/assets/race-dolomyths-valley.jpg";

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

const Training = () => {
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
              src={raceDolomythsValley} 
              alt="Training Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src={ironmanLogo} alt="Ironman Logo" className="h-16 w-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
                <Clock className="h-10 w-10 text-gold" />
                Training
              </h1>
              <p className="text-lg text-white/80 mt-2">PRs, metrics, race results, and current focus</p>
            </div>
          </div>

          {/* Current Training Focus */}
          <div className="mb-12 p-6 bg-card/50 rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-4 text-gold">Atlanta Publix Marathon</h2>
            <p className="text-muted-foreground mb-4">
              Training in progress for my first marathon on March 1st, 2025
            </p>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/20 text-gold font-medium text-sm mb-6">
              🏃 In Training
            </span>
            
            <div className="mt-6">
              <a 
                href="https://docs.google.com/spreadsheets/d/1IASkJuFo7zypi9-kUkJ9ECdy_uJTtz6LSDaChbTA1_I/edit?gid=0#gid=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View Training Plan
              </a>
            </div>
          </div>

          {/* Personal Records & Goals Table */}
          <div className="p-6 bg-card/50 rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-gold" />
              Personal Records & Goals
            </h2>
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
      </div>
    </div>
  );
};

export default Training;
