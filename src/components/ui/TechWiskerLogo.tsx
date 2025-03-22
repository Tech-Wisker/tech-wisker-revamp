
import React from 'react';
import { NavLink } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const TechWiskerLogo: React.FC<LogoProps> = ({ 
  className = "", 
  size = "md", 
  withText = true 
}) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <NavLink to="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`rounded-lg ${sizeMap[size]} bg-gradient-to-br from-tech-blue to-tech-purple flex items-center justify-center text-white font-bold overflow-hidden`}>
        <span className="font-bold tracking-tighter">TW</span>
      </div>
      {withText && (
        <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple">
          Tech Wisker
        </span>
      )}
    </NavLink>
  );
};

export default TechWiskerLogo;
