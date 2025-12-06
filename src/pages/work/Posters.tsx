import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import rhLogo from "@/assets/rh-logo-main.png";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
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
            <img src={rhLogo} alt="RH Logo" className="h-24 w-auto" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-center">Projects</h1>
          <p className="text-xl text-muted-foreground mb-4 text-center">Extended creative projects & collaborations</p>
          <div className="h-1 w-24 bg-gold mb-12 mx-auto"></div>

          <div className="text-center text-muted-foreground py-12">
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
