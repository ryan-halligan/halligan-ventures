import ironmanFinish from "@/assets/ryan-ironman.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30 relative overflow-hidden mt-8">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%), url(${ironmanFinish})` 
        }}
      />
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground">
            I'm a Business Administration student at the Georgia Institute of Technology's 
            Scheller College of Business, concentrating in Information Technology 
            Management with a minor in Business of Sport and Entertainment. I'm competitive, 
            hard-working, and passionate about sports and efficiency. I currently work as a
            Scouting & Analytics Intern at Reel Analytics and as a Student Equipment Manager 
            for Georgia Tech Football, combining my love for sports with data analysis and 
            operational excellence.
          </p>
          <p className="text-lg leading-relaxed text-foreground mt-6">
            My background blends athletics, leadership, and analytics. Whether I'm evaluating 
            NFL prospects, managing equipment operations for 200+ players, or leading strategic 
            initiatives with the Sports Business Club, I bring consistency, attention to detail, 
            and a drive to improve outcomes through data-driven decision making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
