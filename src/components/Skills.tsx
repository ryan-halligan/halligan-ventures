import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Laptop, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <BarChart3 className="w-8 h-8 text-gold" />,
      title: "Data Analysis",
      skills: ["Regression Analysis", "Data Visualization", "Player Evaluation", "Statistical Modeling"],
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Leadership",
      skills: ["Team Management", "Scheduling", "Operations", "Strategic Planning"],
    },
    {
      icon: <Laptop className="w-8 h-8 text-gold" />,
      title: "Technical",
      skills: ["Python", "SQL", "Excel", "Adobe Creative Suite", "Project Management"],
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-gold" />,
      title: "Interpersonal",
      skills: ["Communication", "Problem-Solving", "Teamwork", "Adaptability"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Skills & Expertise</h2>
        <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift border-border">
              <CardHeader>
                <div className="mb-4">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
