
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="tech-card group h-full">
      <div className="flex flex-col h-full">
        <div className="p-3 mb-4 rounded-xl bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-blue transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground flex-grow">
          {description}
        </p>
        <div className="mt-6">
          <a 
            href="/services" 
            className="inline-flex items-center text-tech-blue font-medium hover:text-tech-lightBlue transition-colors"
          >
            Learn more
            <svg 
              className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
