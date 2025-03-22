
interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, category, image, description, link }: ProjectCardProps) => {
  return (
    <div className="tech-card overflow-hidden group">
      <div className="h-48 overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-2">
        <div className="text-xs font-medium px-2 py-1 bg-tech-blue/10 text-tech-blue rounded-full inline-block">
          {category}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-tech-blue transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <a 
          href={link} 
          className="inline-flex items-center text-tech-blue font-medium hover:text-tech-lightBlue transition-colors pt-2"
        >
          View Project
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
  );
};

export default ProjectCard;
