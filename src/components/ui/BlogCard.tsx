
interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  link: string;
}

const BlogCard = ({ title, excerpt, image, date, category, author, link }: BlogCardProps) => {
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
        <a 
          href={link} 
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
  );
};

export default BlogCard;
