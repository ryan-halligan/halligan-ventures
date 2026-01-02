import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, GraduationCap, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:rhalligan@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your message is ready to send.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, and conversations. 
          Whether you're looking to connect professionally or just want to chat about 
          sports analytics, feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Let's connect and create something great together</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gold" size={20} />
                  <span>Atlanta, GA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-gold" size={20} />
                  <a href="mailto:rhalligan@gmail.com" className="hover:text-gold transition-colors">
                    rhalligan@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-gold" size={20} />
                  <span>Georgia Institute of Technology</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ryanhalligan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-navy rounded-lg hover:bg-navy-dark transition-colors hover-scale"
                  >
                    <Linkedin className="text-primary-foreground" size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/ryan.halligan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-navy rounded-lg hover:bg-navy-dark transition-colors hover-scale"
                  >
                    <Instagram className="text-primary-foreground" size={24} />
                  </a>
                  <a
                    href="https://www.strava.com/athletes/137518273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-navy rounded-lg hover:bg-navy-dark transition-colors hover-scale"
                  >
                    <svg className="text-primary-foreground" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"></path>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll respond as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-navy hover:bg-navy-dark text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
