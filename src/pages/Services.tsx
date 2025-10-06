import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      title: "International Taxation",
      description: "Expert guidance on cross-border tax planning, DTAA benefits, and international compliance.",
      features: [
        "Cross-border transaction structuring",
        "DTAA benefit optimization",
        "Transfer pricing documentation", 
        "FEMA compliance",
        "International tax planning",
        "NRI taxation services"
      ],
      icon: "🌐"
    },
    {
      title: "GST Services",
      description: "Comprehensive GST registration, compliance, and optimization services for all business types.",
      features: [
        "GST registration and cancellation",
        "Monthly/quarterly return filing",
        "Input tax credit optimization",
        "GST audit and assessment support",
        "E-way bill management",
        "GST refund processing"
      ],
      icon: "🧾"
    },
    {
      title: "Company & LLP Compliance",
      description: "Complete corporate compliance management for companies and LLPs of all sizes.",
      features: [
        "Annual ROC filings",
        "Board meeting compliance",
        "Secretarial services",
        "Share capital management",
        "Corporate restructuring",
        "Closure and strike-off services"
      ],
      icon: "🏢"
    },
    {
      title: "Transfer Pricing",
      description: "Specialized transfer pricing documentation and compliance for multinational entities.",
      features: [
        "Transfer pricing documentation",
        "Economic analysis and benchmarking",
        "APA assistance",
        "TP audit defense",
        "Country-by-country reporting",
        "Master file and local file preparation"
      ],
      icon: "📊"
    },
    {
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring transparency, compliance, and stakeholder confidence.",
      features: [
        "Statutory audits",
        "Internal audits",
        "Tax audits",
        "Management audits",
        "Due diligence services",
        "Forensic audits"
      ],
      icon: "🔍"
    },
    {
      title: "Accounting & Payroll",
      description: "End-to-end accounting and payroll management services for streamlined operations.",
      features: [
        "Bookkeeping and accounting",
        "Financial statement preparation",
        "Payroll processing",
        "TDS compliance",
        "PF and ESI management",
        "Management reporting"
      ],
      icon: "💼"
    },
    {
      title: "Tax Litigation",
      description: "Expert representation in tax disputes and litigation across all levels of tax authorities.",
      features: [
        "Income tax litigation",
        "GST dispute resolution",
        "ITAT representation",
        "High Court and Supreme Court matters",
        "Settlement commission proceedings",
        "Advance ruling applications"
      ],
      icon: "⚖️"
    },
    {
      title: "Business Advisory",
      description: "Strategic financial advisory services to drive business growth and operational efficiency.",
      features: [
        "Business restructuring",
        "Financial planning and analysis",
        "Merger and acquisition support",
        "Investment advisory",
        "Risk management",
        "Performance optimization"
      ],
      icon: "💡"
    },
    {
      title: "Startup Services",
      description: "Specialized services for startups including incorporation, compliance, and growth support.",
      features: [
        "Company incorporation",
        "Startup India registration",
        "DPIIT recognition",
        "Funding assistance",
        "Intellectual property support",
        "Regulatory compliance"
      ],
      icon: "🚀"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-width text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Professional Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            We deliver end-to-end financial and business solutions — from tax planning to strategic advisory — helping your business grow with clarity and confidence.
          </p>
          <Button asChild variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            <Link to="/contact">
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-section">Our Service Portfolio</h2>
            <p className="text-corporate text-lg max-w-3xl mx-auto">
              Each service is delivered with the highest standards of professionalism and expertise, 
              ensuring your business stays compliant and competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-service h-full animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-corporate mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-section">Our Service Process</h2>
            <p className="text-corporate text-lg max-w-3xl mx-auto">
              We follow a structured approach to ensure quality service delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Understanding your specific requirements and business objectives."
              },
              {
                step: "02", 
                title: "Service Planning",
                description: "Developing a customized service plan tailored to your needs."
              },
              {
                step: "03",
                title: "Expert Execution",
                description: "Professional service delivery with regular progress updates."
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous support and guidance for sustained compliance."
              }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                <p className="text-corporate">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-width text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert Chartered Accountancy Services?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let our experienced team handle your financial and compliance requirements 
            while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">
                Learn About Our Firm
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;