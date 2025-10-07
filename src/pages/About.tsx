import { ArrowRight, Users, Award, Globe, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import teamHeroImage from "@/assets/team-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in every service we deliver, ensuring exceptional quality and client satisfaction."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Our practice is built on ethical foundations, transparency, and honest communication with all our stakeholders."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace technology and modern practices to provide efficient, cutting-edge solutions to our clients."
    },
    {
      icon: Clock,
      title: "Commitment",
      description: "We are dedicated to our clients' success and committed to building long-term, trusted partnerships."
    }
  ];

  const milestones = [
    { year: "2016", event: "Firm Established", description: "Founded with a clear vision to deliver comprehensive professional services that empower businesses to thrive." },
    { year: "2018", event: "100 Clients Milestone", description: "Reached our first major client milestone" },
    { year: "2020", event: "Service Expansion", description: "Expanded to include international taxation and transfer pricing" },
    { year: "2022", event: "Digital Transformation", description: "Fully digitized operations for enhanced client experience" },
    { year: "2025", event: "500+ Clients", description: "Serving over 500 satisfied clients across industries" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${teamHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 container-width text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About KPS Square Consulting Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
           Building trust through expertise and delivering excellence through experience — your trusted partner for complete professional and financial solutions.
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="heading-section">Founder's Story</h2>
              <p className="text-corporate text-lg mb-6 leading-relaxed">
                Founded in 2016 by Pawan Sharma, our firm was built on a clear vision — to deliver comprehensive, reliable, and ethical professional services that empower businesses to thrive in a dynamic and ever-changing regulatory environment.
              </p>
              <p className="text-corporate text-lg mb-6 leading-relaxed">
                With over two decades of experience in taxation, audit, and business advisory, our founder saw the need for a more personalized and client-focused approach — one that extends beyond compliance to provide meaningful strategic guidance.
              </p>
              <p className="text-corporate text-lg mb-8 leading-relaxed">
                Today, what started as a one-person practice has grown into a full-service firm 
                with a team of qualified professionals serving over 500 clients across various industries.
              </p>
              <Button asChild className="btn-corporate">
                <Link to="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <Card className="card-corporate p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">KPS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Pawan Sharma</h3>
                  <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                  <p className="text-corporate mb-6">
                    "Our mission is to be more than just service providers—we aim to be trusted 
                    advisors who contribute to our clients' long-term success."
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">20+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Funder & CEO</div>
                      <div className="text-sm text-muted-foreground">Businessman </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-corporate p-8 animate-slide-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-corporate leading-relaxed">
                  To deliver comprehensive, ethical, and forward-thinking professional services that enable businesses to grow sustainably while staying fully compliant. We aim to be trusted advisors who create meaningful value and support our clients’ long-term success.
                </p>
              </div>
            </Card>
            
            <Card className="card-corporate p-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-corporate leading-relaxed">
                  To be a leading professional services firm recognized for excellence, innovation, and client satisfaction. We aspire to empower businesses of all sizes to confidently navigate complex financial landscapes and achieve their strategic goals.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-section">Our Core Values</h2>
            <p className="text-corporate text-lg max-w-3xl mx-auto">
              These fundamental principles guide every aspect of our practice and define 
              our commitment to clients, staff, and the profession.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-service text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-corporate">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
  <div className="container-width">
    <div className="text-center mb-16">
      <h2 className="heading-section">Our Journey</h2>
      <p className="text-corporate text-lg max-w-3xl mx-auto">
        A timeline of key milestones that have shaped our firm's growth and success.
      </p>
    </div>

    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2 md:left-1/2 md:-translate-x-0.5"></div>

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center md:items-stretch md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } animate-fade-in`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`flex-1 md:flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mb-6 md:mb-0`}>
              <Card className="card-corporate p-6">
                <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h3>
                <p className="text-corporate">{milestone.description}</p>
              </Card>
            </div>

            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center md:left-1/2 md:-translate-x-4">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>

            <div className="flex-1"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Stats */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-white/90">
              Results that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "8+", label: "Years of Excellence" },
              { number: "500+", label: "Satisfied Clients" },
              { number: "25+", label: "Team Members" },
              { number: "98%", label: "Client Retention Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-width text-center">
          <h2 className="heading-section mb-6">Ready to Work with Us?</h2>
          <p className="text-corporate text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their financial and compliance needs. 
            Let's discuss how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-corporate text-lg px-8 py-4">
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-outline-corporate text-lg px-8 py-4">
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

export default About;