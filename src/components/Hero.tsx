import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ryanProfessional from "@/assets/ryan-professional.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ryan Halligan
            </h1>
            <div className="h-1 w-24 bg-gold"></div>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Business Administration Student at Georgia Tech
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Trusted by programs and organizations that value excellence—Georgia Tech Football, 
              Reel Analytics, Georgia Tech Sports Business Club, and the Atlanta Hawks. 
              Consistent, detail-oriented, and thriving in fast-paced, competitive environments 
              where data improves outcomes.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-navy hover:bg-navy-dark text-primary-foreground"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gold text-foreground hover:bg-gold hover:text-accent-foreground"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-lg transform rotate-3"></div>
              <img
                src={ryanProfessional}
                alt="Ryan Halligan"
                className="relative rounded-lg shadow-2xl w-full max-w-md object-cover hover-lift"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-fade-in">
          <button
            onClick={scrollToAbout}
            className="text-gold hover:text-gold-light transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
