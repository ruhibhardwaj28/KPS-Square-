import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    preferredTime: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      preferredTime: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["201011,HIG Flats, Chandra Nagar, Surya Nagar, Ghaziabad, Uttar Pradesh 201011, India"],
      link: "#"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 83685 82883", "+91 79063 53294"],
      link: "tel:+918368582883"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["kpssquare@gmail.com", "pawankps001@gmail.com"],
      link: "mailto: kpssquare@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 10:00 AM - 6:00 PM", "Sat: 10:00 AM - 5:00 PM", "Sun: Appointment Only"],
      link: "#"
    }
  ];

  const services = [
    "Tax Planning & Compliance",
    "GST Services", 
    "Company Incorporation",
    "Audit & Assurance",
    "Transfer Pricing",
    "International Taxation",
    "Business Advisory",
    "Startup Services",
    "Other"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-width text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Schedule a free consultation 
            with our expert chartered accountants and discover tailored solutions for your needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-section">Contact Information</h2>
            <p className="text-corporate text-lg max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the most convenient option for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-service text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-corporate text-sm">{detail}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <Card className="card-corporate">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Request a Consultation</CardTitle>
                  <p className="text-corporate">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Required *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (10:00 AM - 12:00 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4:00 PM - 6:00 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="btn-corporate w-full text-lg py-3">
                      Submit Request
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="animate-slide-in space-y-8" style={{ animationDelay: "0.2s" }}>
              <Card className="card-corporate">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      "Free initial consultation to understand your needs",
                      "Experienced team of qualified chartered accountants",
                      "Transparent pricing with no hidden costs",
                      "Dedicated relationship manager for ongoing support",
                      "Quick turnaround time for all services",
                      "100% confidentiality and data security"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-corporate">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-corporate">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-corporate mb-4">
                    Need urgent assistance? We provide emergency support for critical compliance deadlines and urgent matters.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-corporate">Emergency Hotline: +91 83685 82883, +91 79063 53294</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-corporate">pawankps001@gmai.com , kpssquare@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-corporate">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Office Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Ghaziabad (Head Office)</h4>
                      <p className="text-corporate text-sm">201011,HIG Flats, Chandra Nagar, Surya Nagar, Ghaziabad, Uttar Pradesh 201011, India</p>
                    </div>
                    {/* <div>
                      <h4 className="font-semibold text-foreground">Delhi (Branch Office)</h4>
                      <p className="text-corporate text-sm">Dhjjb</p>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      


    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-section">Find Our Office</h2>
          <p className="text-corporate text-lg">
            Located in the heart of Mumbai's business district for easy accessibility.
          </p>
        </div>

        <div className="bg-muted rounded-xl p-8 text-center">
          <div className="w-full h-64 bg-gradient-secondary rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">Interactive Map</p>
              <p className="text-corporate">
                201011, HIG Flats, Chandra Nagar, Surya Nagar, Ghaziabad, Uttar Pradesh 201011, India
              </p>

              {/* ✅ Button that opens Google Maps for directions */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=201011,HIG+Flats,+Chandra+Nagar,+Surya+Nagar,+Ghaziabad,+Uttar+Pradesh+201011,+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-secondary-corporate mt-4">
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  


      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-section">Frequently Asked Questions</h2>
            <p className="text-corporate text-lg max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you respond to consultation requests?",
                answer: "We typically respond to all consultation requests within 2-4 hours during business hours and within 24 hours for requests received outside business hours."
              },
              {
                question: "Do you offer services for small businesses and startups?",
                answer: "Yes, we specialize in providing comprehensive services for businesses of all sizes, from startups to large enterprises, with tailored solutions for each."
              },
              {
                question: "What are your consultation charges?",
                answer: "Initial consultations are complimentary. We provide transparent pricing for all services after understanding your specific requirements."
              },
              {
                question: "Do you provide ongoing support after service completion?",
                answer: "Absolutely. We offer ongoing support and maintenance services to ensure continued compliance and address any queries that may arise."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-service animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-corporate">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;