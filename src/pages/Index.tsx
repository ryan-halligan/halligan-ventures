import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase } from "lucide-react";
import techTower from "@/assets/tech-tower.png";
import ryanSidelineCrowd from "@/assets/ryan-sideline-crowd.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      
      {/* Experience & Education Navigation */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/experience" className="group">
              <div className="relative bg-card border border-border rounded-lg p-8 hover-lift transition-all hover:border-gold overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
                  style={{ backgroundImage: `url(${ryanSidelineCrowd})` }}
                />
                <div className="relative z-10">
                  <Briefcase className="text-gold mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    View my professional experience and leadership roles
                  </p>
                  <Button variant="outline" className="group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all">
                    View Experience →
                  </Button>
                </div>
              </div>
            </Link>
            
            <Link to="/education" className="group">
              <div className="relative bg-card border border-border rounded-lg p-8 hover-lift transition-all hover:border-gold overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
                  style={{ backgroundImage: `url(${techTower})` }}
                />
                <div className="relative z-10">
                  <GraduationCap className="text-gold mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">Education</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore my academic background and achievements
                  </p>
                  <Button variant="outline" className="group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all">
                    View Education →
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Work />
      <Skills />
      <Contact />
      
      <footer className="bg-navy py-8 text-center text-primary-foreground">
        <p>&copy; 2025 Ryan Halligan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
