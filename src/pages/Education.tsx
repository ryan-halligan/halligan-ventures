import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Globe } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold mb-4">Education</h1>
          <div className="h-1 w-24 bg-gold mb-12"></div>

          <div className="space-y-8">
            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">Georgia Institute of Technology</CardTitle>
                    <CardDescription className="text-lg text-navy font-semibold">
                      Scheller College of Business
                    </CardDescription>
                  </div>
                  <GraduationCap className="text-gold" size={48} />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Business Administration</h3>
                  <p className="text-muted-foreground">June 2024 – Present | Class of 2028</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Academic Focus</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>Concentration: Information Technology Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>Minor: Business of Sport and Entertainment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>GPA: 4.0</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center">
                      <Award className="text-gold mr-2" size={20} />
                      Honors & Awards
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>Zell Miller Scholarship (full tuition, merit-based)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>Dean's List & Faculty Honors (4 consecutive semesters)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Special Programs</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                      <span>Vertically Integrated Projects: Sports Valuation & Analytics Team</span>
                    </li>
                    <li className="flex items-start">
                      <Globe className="text-gold mr-3 flex-shrink-0" size={16} />
                      <span>Study Abroad: Georgia Tech – Europe (Summer 2025)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">Dunwoody High School</CardTitle>
                    <CardDescription className="text-lg text-navy font-semibold">
                      Class of 2024
                    </CardDescription>
                  </div>
                  <GraduationCap className="text-gold" size={48} />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Academic Achievements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>GPA: 4.08</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>ACT: 35 Composite (Math 35, Science 35, English 34, Reading 36)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>12 AP courses + 2 Dual Enrollment courses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>AP Scholar 2022 and 2023</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Special Programs</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>Academy of Finance Pathway</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>Engineering Pathway</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                        <span>Fernbank Science Center: Scientific Tools & Techniques Program</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Athletics</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-2">Varsity Swim (4 years)</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 mt-1.5"></span>
                          <span>Captain 2023-24</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 mt-1.5"></span>
                          <span>State Team 2022-24</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 mt-1.5"></span>
                          <span>County Champions 2021-22</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Water Polo (7 years)</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 mt-1.5"></span>
                          <span>2023 DI State Runner-Up</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 mt-1.5"></span>
                          <span>2021 DII State Champions</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Varsity Tennis (2 years)</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 mt-1.5"></span>
                          <span>County Champion 2022</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Organizations</h4>
                  <div className="flex flex-wrap gap-2">
                    {["National Honor Society", "DECA", "Beta Club", "FCA", "Mu Alpha Theta", "Dunwoody Athletic Honor Society"].map((org) => (
                      <span key={org} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
