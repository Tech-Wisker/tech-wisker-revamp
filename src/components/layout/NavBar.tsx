
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple">
              Tech Wisker
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({isActive}) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }>
              Home
            </NavLink>
            <NavLink to="/services" className={({isActive}) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={({isActive}) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }>
              Portfolio
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }>
              Blog
            </NavLink>
            <NavLink to="/contact" className="tech-btn-primary animate-fade-in">
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-[500px] opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <nav className="flex flex-col gap-4 px-4 pb-6 pt-2 bg-background/80 backdrop-blur-md animate-slide-down">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({isActive}) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({isActive}) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            className="tech-btn-primary w-full flex justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
