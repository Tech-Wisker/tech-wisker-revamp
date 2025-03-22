
import React, { useEffect, useRef } from 'react';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  // No DOM manipulations in the component render cycle
  // to avoid "Cannot read properties of undefined (reading 'add')" errors
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} ref={gradientRef}>
      <div 
        className="absolute -inset-[10%] opacity-30 mask-radial-gradient"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4 bg-tech-blue rounded-full blur-3xl animate-blob-rotate mix-blend-normal opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 bg-tech-purple rounded-full blur-3xl animate-blob-rotate animation-delay-2000 mix-blend-normal opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2/3 h-2/3 bg-tech-blue rounded-full blur-3xl animate-pulse-slow animation-delay-4000 mix-blend-normal opacity-70"></div>
      </div>
    </div>
  );
};

export default AnimatedGradient;
