import { ArrowRight, CheckCircle, Users, Award, Clock, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import heroFallback1 from "@/assets/pawan5.png";
import heroFallback2 from "@/assets/teampic.png";
import heroFallback3 from "@/assets/teampic1.png";
import pawan from "../assets/pawan4.png";
import amit from "..//assets/amit1.png";
import ankit from "..//assets/ankit1.png";
import harish from "..//assets/harish.png";
import kusum from "..//assets/kusum.png";
import rajni from "..//assets/rajni.png";

const Index = () => {
  const services = [
    {
      title: "Tax Planning & Compliance",
      description: "Comprehensive tax strategies to minimize liabilities and ensure full compliance with regulations.",
      icon: "📊"
    },
    {
      title: "GST Services",
      description: "Complete GST registration, return filing, and compliance management for businesses.",
      icon: "🧾"
    },
    {
      title: "Company Incorporation",
      description: "End-to-end company registration and LLP formation services with regulatory compliance.",
      icon: "🏢"
    },
    {
      title: "Audit & Assurance",
      description: "Statutory audits, internal audits, and financial assurance services for transparency.",
      icon: "🔍"
    },
    {
      title: "Transfer Pricing",
      description: "International transfer pricing documentation and compliance for multinational entities.",
      icon: "🌐"
    },
    {
      title: "Financial Advisory",
      description: "Strategic financial planning and advisory services for business growth and optimization.",
      icon: "💡"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support Available", icon: TrendingUp }
  ];

  const heroImages = [
    heroFallback1,
    heroFallback2,
    heroFallback3,
    "/pbg.png",
    "/teampic.png",
    "/teampic1.png",
    "/pbg.png",
  ];

  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const intervalId = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [heroImages.length, isPaused]);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden group bg-cover bg-center high-10"
        style={{ backgroundImage: `url(${heroFallback1})` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides */}
        <div className="absolute inset-0">
          {heroImages.map((src, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
              style={{
                backgroundImage: `url(${src})`,
                opacity: activeHeroIndex === index ? 1 : 0,
              }}
            />
          ))}
        </div>
        {/* Arrows */}
        <button
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          onClick={() => setActiveHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          onClick={() => setActiveHeroIndex((prev) => (prev + 1) % heroImages.length)}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        <div className="relative z-10 container-width text-center text-white">
          <div className="animate-fade-in">
            <h1 className="heading-hero text-white mb-6">
              Your Success, Our Commitment
              <br />
              {/* <span className="text-accent">For Your Business Success</span> */}

            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              We are committed to empowering businesses and individuals with expert financial solutions. Together, we unlock opportunities, drive sustainable growth, and build a brighter financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-corporate text-lg px-8 py-4">
                <Link to="/contact"> 
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline-corporate text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-section">Our Professional Services</h2>
            <p className="text-corporate text-lg max-w-3xl mx-auto">
              Comprehensive financial and business services tailored to meet your specific needs. 
              From startups to established enterprises, we provide expert solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-service animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-corporate mb-4">{service.description}</p>
                  <Button asChild variant="ghost" className="text-primary hover:text-primary-dark">
                    <Link to="/services">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="section-padding bg-muted">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="heading-section">Why Choose KPS?</h2>
              <p className="text-corporate text-lg mb-6">
               We provide all types of services under one roof, ensuring convenience, professionalism, and quality in everything we do. Our goal is to simplify your journey by offering reliable solutions tailored to your unique needs, helping you focus on what truly matters — growth and success.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Comprehensive tax planning and compliance",
                  "Expert guidance on regulatory requirements", 
                  "Personalized service with dedicated support",
                  "Proven track record with 500+ satisfied clients"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-corporate">{point}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="btn-corporate">
                <Link to="/about">
                  Learn About KPS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <Card className="card-corporate p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Trusted Excellence</h3>
                  <p className="text-corporate mb-6">
                    Our commitment to excellence and integrity has established us as a trusted and respected name in the industry.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section id="team" className="section-padding bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Experienced professionals committed to your success.
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { name: "Kusum Bhardwaj", role: "Owner - CEO", img: kusum},
        { name: "Pawan Bhardwaj", role: "Founder & Legal Consultant", img: pawan},
        { name: "Amit Pal", role: "Cost Analyst & Tax Planner", img: amit },
        { name: "Ankit Pal", role: "Senior Accountant", img: ankit },
        { name: "Harish Bhardwaj", role: "Operation & Finace Head", img: harish },
        { name: "Rajni Bhardwaj", role: "Software Engineer – Java & Full Stack Development", img: rajni },
      ].map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden text-center p-8"
        >
          {/* Image */}
          <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-primary overflow-hidden">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
          <p className="text-gray-600 text-sm mt-2">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Contact Preview Section */}
      <section id="contact" className="section-padding bg-muted">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="heading-section">Get In Touch</h2>
            <p className="text-corporate text-lg max-w-2xl mx-auto">We'd love to learn about your needs.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="card-corporate">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input className="w-full px-4 py-3 rounded-md border border-border bg-background" placeholder="Your Name" />
                  <input className="w-full px-4 py-3 rounded-md border border-border bg-background" placeholder="Email" />
                  <input className="w-full px-4 py-3 rounded-md border border-border bg-background md:col-span-2" placeholder="Phone" />
                  <textarea className="w-full px-4 py-3 rounded-md border border-border bg-background md:col-span-2" rows={4} placeholder="How can we help?" />
                </div>
                <div className="mt-6 text-right">
                  <Button className="btn-corporate">Send Message</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section (Consultation) */}
      <section id="consultation" className="section-padding bg-gradient-primary">
        <div className="container-width text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule a free consultation with our expert chartered accountants and discover 
            how we can help optimize your business finances.
          </p>
          <Button asChild variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;