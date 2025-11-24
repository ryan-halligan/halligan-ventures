import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      
      <footer className="bg-navy py-8 text-center text-primary-foreground">
        <p>&copy; 2025 Ryan Halligan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
