
import { ArrowLeft } from 'lucide-react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedGradient from '../components/ui/AnimatedGradient';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-grow flex flex-col items-center justify-center relative overflow-hidden py-24">
        <AnimatedGradient />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="tech-btn-primary inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
