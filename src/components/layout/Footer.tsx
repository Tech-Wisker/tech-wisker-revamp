
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-darker border-t border-white/5">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple">
              Tech Wisker
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Cutting-edge technology solutions for forward-thinking businesses. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="text-muted-foreground hover:text-tech-blue transition-colors">
                Home
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-tech-blue transition-colors">
                Services
              </NavLink>
              <NavLink to="/portfolio" className="text-muted-foreground hover:text-tech-blue transition-colors">
                Portfolio
              </NavLink>
              <NavLink to="/blog" className="text-muted-foreground hover:text-tech-blue transition-colors">
                Blog
              </NavLink>
              <NavLink to="/contact" className="text-muted-foreground hover:text-tech-blue transition-colors">
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/services" className="text-muted-foreground hover:text-tech-blue transition-colors">
                Mobile App Development
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-tech-blue transition-colors">
                Web Development
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-tech-blue transition-colors">
                DevOps Solutions
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-tech-blue transition-colors">
                Agentic AI Services
              </NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:info@techwisker.com" className="flex items-center gap-2 text-muted-foreground hover:text-tech-blue transition-colors">
                <Mail size={18} /> info@techwisker.com
              </a>
              <a href="tel:+11234567890" className="flex items-center gap-2 text-muted-foreground hover:text-tech-blue transition-colors">
                <Phone size={18} /> +1 (123) 456-7890
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" /> 
                <span>1234 Innovation Drive, Tech City, TC 98765</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Tech Wisker. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-tech-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tech-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
