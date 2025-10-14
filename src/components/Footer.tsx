import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-corporate" >
      <div className="container-width py-16 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg ">KPS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">KPS</span>
                <span className="text-sm text-white/80">Square Consulting Services</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Whether it’s managing finances, ensuring compliance, or driving growth, we deliver all the services you need under one trusted name.
            </p>
            <p className="text-white/80 text-sm">Founder: Pawan Sharma</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Our Team", path: "/team" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Our Services</h3>
            <div className="space-y-2">
              {[
                "Tax Planning & Compliance",
                "GST Services",
                "Company Incorporation",
                "Audit & Assurance",
                "Transfer Pricing",
                "International Taxation",
              ].map((service) => (
                <div key={service} className="text-white/80 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  302 Third Floor Sidhartha Palace, Chandra Nagar<br />
                  Surya Nagar, Ghaziabad<br />
                  Uttar Pradesh 201011, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/80 flex-shrink-0" />
                <span className="text-white/80 text-sm">+91 83685 82883</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                <span className="text-white/80 text-sm">kpssquare@gmail.com
                     pawankps001@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ">
          <p className="text-white/80 text-sm">
            © {currentYear} KPS Square Consulting Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;