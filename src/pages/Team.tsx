import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import pawan from "../assets/pawan1.png"
import amit from "..//assets/amit.png"
import ankit from "..//assets/ankit.png"
import harish from "..//assets/harish.png"

const Team = () => {
  const teamMembers = [
    {
      name: "Pawan Sharma",
      role: "Founder & Managing Partner",
      expertise: "International Taxation, Corporate Law, Business Advisory",
      experience: "20+ years",
      qualifications: "FCA, DISA",
      description: "Specialist in international taxation and corporate restructuring with extensive experience in cross-border transactions.",
      email: "pawankps001@gmail.com",
      phone: "+91 83685 82883",
      linkedin: "#",
      image: pawan
    },
    {
      name: "Amit Pal",
      role: "Partner - Audit & Assurance",
      expertise: "Statutory Audits, Internal Audits, Risk Management",
      experience: "15+ years",
      qualifications: "FCA, DISA, CIA",
      description: "Expert in audit and assurance services with deep expertise in risk management and internal controls.",
      email: "kpssquare@gmail.com",
      phone: "+91 83685 82883",
      linkedin: "#",
      image: amit
    },
    {
      name: "Kusum Bhardwaj",
      role: "Senior Manager - Tax & Compliance",
      expertise: "GST, Income Tax, Transfer Pricing",
      experience: "12+ years",
      qualifications: "ACA, LL.B",
      description: "Specializes in complex tax planning and compliance with expertise in GST and transfer pricing matters.",
      email: "kpssquare@gmail.com",
      phone: "+91 79063 53294",
      linkedin: "#",
      image: "👨‍💻"
    },
    {
      name: "Ankit Pal",
      role: "Manager - Corporate Services",
      expertise: "Company Law, LLP Compliance, Secretarial Services",
      experience: "10+ years",
      qualifications: "ACA, CS",
      description: "Expert in corporate compliance and secretarial services with comprehensive knowledge of company law.",
      email: "kpssquare@gmail.com",
      phone: "+91 83685 82883",
      linkedin: "#",
      image: ankit
    },
    {
      name: "Harish Bhardwaj",
      role: "Senior Associate - Advisory",
      expertise: "Financial Planning, Business Valuation, M&A",
      experience: "8+ years",
      qualifications: "ACA, CFA",
      description: "Focuses on business advisory services including valuations, financial planning, and M&A transactions.",
      email: "kpssquare@gmail.com",
      phone: "+91 83685 82883",
      linkedin: "#",
      image: harish
    },
    {
      name: "Rajni Bhardwaj",
      role: "Associate - Startup Services",
      expertise: "Startup Compliance, Funding, DPIIT Registration",
      experience: "6+ years",
      qualifications: "ACA",
      description: "Specializes in startup ecosystem with expertise in funding, compliance, and growth strategies.",
      email: "rajnibhardwaj4535@gmail.com",
      phone: "+91 63986 13387",
      linkedin: "#",
      image: "👩‍🚀"
    }
  ];

  const departments = [
    {
      name: "Tax & Compliance",
      description: "Comprehensive tax planning and compliance services",
      teamSize: "8 professionals",
      icon: "📊"
    },
    {
      name: "Audit & Assurance",
      description: "Statutory and internal audit services",
      teamSize: "6 professionals", 
      icon: "🔍"
    },
    {
      name: "Corporate Services",
      description: "Company incorporation and compliance management",
      teamSize: "5 professionals",
      icon: "🏢"
    },
    {
      name: "Advisory Services",
      description: "Business advisory and financial planning",
      teamSize: "4 professionals",
      icon: "💡"
    },
    {
      name: "Operations & Support",
      description: "Administrative and client support services",
      teamSize: "6 professionals",
      icon: "⚙️"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-width text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Our team of qualified chartered accountants and professionals bring together 
            decades of experience to deliver exceptional service and expertise.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-section">Leadership Team</h2>
            <p className="text-corporate text-lg max-w-3xl mx-auto">
              Our leadership team combines deep technical expertise with strategic vision 
              to guide our firm and serve our clients with distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-corporate p-6 h-full animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                     <div className="mb-4">
                <img src={member.image} alt={member.name} className="w-32 h-40 mx-auto rounded-full" />
              </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <div className="text-sm text-muted-foreground mb-4">
                      {member.experience} • {member.qualifications}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
                      <p className="text-sm text-corporate">{member.expertise}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-corporate leading-relaxed">{member.description}</p>
                    </div>
                    
                    <div className="flex space-x-4 pt-4 border-t border-border">
                      <a href={`mailto:${member.email}`} className="text-primary hover:text-primary-dark transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a href={`tel:${member.phone}`} className="text-primary hover:text-primary-dark transition-colors">
                        <Phone className="h-5 w-5" />
                      </a>
                      <a href={member.linkedin} className="text-primary hover:text-primary-dark transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-section">Our Departments</h2>
            <p className="text-corporate text-lg max-w-3xl mx-auto">
              Our firm is organized into specialized departments, each focused on delivering 
              expert services in their respective domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="card-service animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{dept.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{dept.name}</h3>
                  <p className="text-corporate mb-4">{dept.description}</p>
                  <div className="text-primary font-semibold">{dept.teamSize}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="heading-section">Our Team Culture</h2>
              <p className="text-corporate text-lg mb-6 leading-relaxed">
                We believe that our people are our greatest asset. Our team culture is built on 
                collaboration, continuous learning, and professional excellence.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Continuous professional development and training",
                  "Collaborative work environment promoting knowledge sharing",
                  "Work-life balance with flexible working arrangements",
                  "Merit-based career advancement opportunities",
                  "Regular team building and networking events"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-corporate">{point}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="btn-corporate">
                <Link to="/contact">
                  Join Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <Card className="card-corporate p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Team Statistics</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">25+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Qualified CAs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">200+</div>
                      <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-corporate text-sm italic">
                      "Our team's collective expertise and dedication to client service 
                      is what sets us apart in the industry."
                    </p>
                    <p className="text-primary font-semibold text-sm mt-2">- CA Rajesh Sharma, Managing Partner</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-width text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Connect with our qualified professionals and experience the difference 
            that expert guidance can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;