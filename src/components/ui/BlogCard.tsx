
import { memo } from 'react';
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

// Using memo to prevent unnecessary re-renders
const BlogCard = memo(({ title, excerpt, image, date, category, author, link, source }: BlogCardProps) => {
  return (
    <article className="tech-card h-full flex flex-col overflow-hidden group">
      <div className="h-48 overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width="400"
          height="225"
        />
      </div>
      <div className="space-y-3 flex-grow">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <time dateTime={new Date(date).toISOString()}>{date}</time>
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
            aria-label={`Read more about ${title}`}
          >
            Read more
            <svg 
              className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
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
              aria-label={`Visit source: ${source.name}`}
            >
              {source.icon && (
                <img src={source.icon} alt="" className="w-4 h-4 mr-1 rounded-sm" aria-hidden="true" />
              )}
              {source.name}
            </a>
          </div>
        </div>
      )}
    </article>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;
