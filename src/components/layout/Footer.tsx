
import { NavLink } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import TechWiskerLogo from '../ui/TechWiskerLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-darker border-t border-white/5">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <TechWiskerLogo />
            <p className="text-muted-foreground max-w-xs">
              Cutting-edge technology solutions for forward-thinking businesses. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors" aria-label="Instagram">
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:techwisker@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-tech-blue transition-colors">
                <Mail size={18} /> techwisker@gmail.com
              </a>
              <a href="tel:+917310044004" className="flex items-center gap-2 text-muted-foreground hover:text-tech-blue transition-colors">
                <Phone size={18} /> +91 7310044004
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                We are a remote-first company with team members working across different time zones.
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
