import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import rhLogo from "@/assets/rh-logo.png";
import ryanCasual from "@/assets/ryan-casual.png";
import ryanEurope from "@/assets/ryan-europe.jpg";

const Personal = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <img src={rhLogo} alt="RH Logo" className="w-32 h-32 object-contain mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Personal Projects</h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Design, Photography & Creative Work</p>
          </div>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">About My Creative Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Beyond my professional roles in sports analytics and business, I enjoy exploring 
                creative outlets through design and photography. My personal projects allow me to 
                combine technical skills with artistic expression, creating visual content that 
                tells compelling stories.
              </p>
              <p className="text-muted-foreground">
                From branding design to photography, I approach each project with the same attention 
                to detail and commitment to excellence that I bring to my professional work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Photography</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <img 
                  src={ryanCasual} 
                  alt="Beach photography" 
                  className="rounded-lg w-full h-64 object-cover hover-lift"
                />
                <img 
                  src={ryanEurope} 
                  alt="Europe photography" 
                  className="rounded-lg w-full h-64 object-cover hover-lift"
                />
              </div>
              <p className="text-muted-foreground">
                My photography captures moments from travels, events, and daily life. Each image 
                represents an opportunity to see the world from a unique perspective and share 
                that vision with others.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Adobe Photoshop", "Adobe Lightroom", "Canva", "Brand Design", "Photography", "Visual Storytelling"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-navy text-primary-foreground rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mt-6">
                These creative skills complement my analytical abilities, allowing me to present 
                data and insights in visually compelling ways that resonate with diverse audiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Personal;
