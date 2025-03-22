
import ShareButtons from './ShareButtons';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  link: string;
  tags?: string[];
  source?: {
    name: string;
    url: string;
    icon?: string;
  };
}

const BlogCard = ({ title, excerpt, image, date, category, author, link, source }: BlogCardProps) => {
  return (
    <div className="tech-card h-full flex flex-col overflow-hidden group">
      <div className="h-48 overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-3 flex-grow">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{date}</span>
          <span className="px-2 py-1 bg-tech-blue/10 text-tech-blue rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-tech-blue transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {excerpt}
        </p>
      </div>
      <div className="flex justify-between items-center pt-4 mt-auto">
        <span className="text-sm text-muted-foreground">{author}</span>
        <div className="flex items-center gap-2">
          <ShareButtons 
            title={title}
            url={link}
            description={excerpt}
          />
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-tech-blue font-medium hover:text-tech-lightBlue transition-colors"
          >
            Read more
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
      {source && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center text-xs text-muted-foreground">
            <span>Source: </span>
            <a 
              href={source.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 hover:text-tech-blue transition-colors flex items-center"
            >
              {source.icon && (
                <img src={source.icon} alt={source.name} className="w-4 h-4 mr-1 rounded-sm" />
              )}
              {source.name}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
