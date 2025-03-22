
import { useState, useEffect, useCallback } from 'react';
import { Search, Calendar, Loader2 } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import BlogCard from '../components/ui/BlogCard';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import { fetchTechNews, convertNewsToBlogPosts } from '../services/newsService';
import ShareButtons from '../components/ui/ShareButtons';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEOHelmet from '@/components/ui/SEOHelmet';
import { Skeleton } from '@/components/ui/skeleton';

// Default blog post data as fallback
const defaultBlogPosts = [
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is transforming the software development process, from code generation to automated testing and beyond.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'June 15, 2023',
    category: 'AI',
    author: 'Alex Johnson',
    link: '#',
    tags: ['AI', 'Software Development', 'Automation']
  },
  {
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'Learn about the best practices for designing, implementing, and maintaining microservices architectures that can scale with your business needs.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'May 28, 2023',
    category: 'DevOps',
    author: 'Michael Chen',
    link: '#',
    tags: ['Microservices', 'Architecture', 'Scalability']
  },
  {
    title: 'Mobile App Performance Optimization Techniques',
    excerpt: 'Discover advanced strategies for optimizing mobile app performance to provide smoother user experiences and reduce battery consumption.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'May 10, 2023',
    category: 'Mobile',
    author: 'Sarah Williams',
    link: '#',
    tags: ['Mobile', 'Performance', 'Optimization']
  },
  {
    title: 'The Rise of Passwordless Authentication',
    excerpt: 'An in-depth look at passwordless authentication methods and how they\'re improving security while enhancing the user experience.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'April 22, 2023',
    category: 'Security',
    author: 'David Martinez',
    link: '#',
    tags: ['Security', 'Authentication', 'UX']
  },
  {
    title: 'Using LLMs for Enhanced Application Experiences',
    excerpt: 'How large language models are revolutionizing user interactions and enabling new capabilities in modern applications.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'April 8, 2023',
    category: 'AI',
    author: 'Emily Zhang',
    link: '#',
    tags: ['AI', 'LLM', 'User Experience']
  },
  {
    title: 'Implementing CI/CD Pipelines with GitHub Actions',
    excerpt: 'A step-by-step guide to setting up efficient CI/CD pipelines using GitHub Actions to automate your development workflow.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'March 17, 2023',
    category: 'DevOps',
    author: 'Thomas Wilson',
    link: '#',
    tags: ['CI/CD', 'GitHub', 'Automation']
  },
  {
    title: 'Responsive Design Best Practices for 2023',
    excerpt: 'Stay updated with the latest responsive design techniques to ensure your websites look and perform great on all devices.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'March 5, 2023',
    category: 'Web',
    author: 'Jessica Lee',
    link: '#',
    tags: ['Design', 'Responsive', 'Web Development']
  },
  {
    title: 'Kotlin vs Swift: Mobile Development Comparison',
    excerpt: 'A detailed comparison of Kotlin and Swift for mobile app development, highlighting strengths, weaknesses, and use cases.',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'February 20, 2023',
    category: 'Mobile',
    author: 'Ryan Park',
    link: '#',
    tags: ['Kotlin', 'Swift', 'Mobile Development']
  },
  {
    title: 'Implementing Design Systems for Consistent UX',
    excerpt: 'How to create and maintain design systems that ensure consistency across your digital products while speeding up development.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'February 8, 2023',
    category: 'Design',
    author: 'Olivia Garcia',
    link: '#',
    tags: ['Design Systems', 'UX', 'Consistency']
  }
];

// Pre-defined query categories
const predefinedQueries = [
  { label: 'AI', query: 'artificial intelligence' },
  { label: 'Development', query: 'software development' },
  { label: 'Web3', query: 'blockchain' },
  { label: 'Cloud', query: 'cloud computing' },
  { label: 'Mobile', query: 'mobile app' },
  { label: 'DevOps', query: 'devops' },
  { label: 'UX/UI', query: 'user experience' },
  { label: 'Cybersecurity', query: 'cybersecurity' },
  { label: 'Data Science', query: 'data science' },
  { label: 'AR/VR', query: 'augmented reality' },
];

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '');
  const [blogPosts, setBlogPosts] = useState(defaultBlogPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { toast } = useToast();
  
  // Generate page title based on active filters
  const generatePageTitle = useCallback(() => {
    if (activeCategory !== 'All' && searchTerm) {
      return `${activeCategory} Articles about "${searchTerm}" | TechWisker Blog`;
    } else if (activeCategory !== 'All') {
      return `${activeCategory} Articles | TechWisker Blog`;
    } else if (searchTerm) {
      return `Articles about "${searchTerm}" | TechWisker Blog`;
    }
    return 'TechWisker Blog | Latest Technology News & Insights';
  }, [activeCategory, searchTerm]);

  // Load news data with better error handling
  useEffect(() => {
    const loadNews = async (q) => {
      setLoading(true);
      setError(false);
      try {
        const newsArticles = await fetchTechNews(q);
        if (newsArticles.length > 0) {
          const formattedPosts = convertNewsToBlogPosts(newsArticles);
          setBlogPosts(formattedPosts);
          // Cache the fetched posts in localStorage with expiration
          localStorage.setItem('cachedBlogPosts-'+q, JSON.stringify({
            timestamp: Date.now(),
            data: formattedPosts
          }));
        } else {
          // Check for cached posts if API returns empty
          const cachedData = localStorage.getItem('cachedBlogPosts-'+q);
          if (cachedData) {
            const { timestamp, data } = JSON.parse(cachedData);
            // Use cache if less than 1 hour old
            if (Date.now() - timestamp < 3600000) {
              setBlogPosts(data);
            }
          }
        }
      } catch (error) {
        console.error('Failed to load news:', error);
        setError(true);
        
        // Try to load from cache on error
        const cachedData = localStorage.getItem('cachedBlogPosts-'+q);
        if (cachedData) {
          const { timestamp, data } = JSON.parse(cachedData);
          // Use cache if less than 12 hours old
          if (Date.now() - timestamp < 43200000) {
            setBlogPosts(data);
            toast({
              title: "Using cached content",
              description: "Showing previously loaded articles due to connection issues.",
              variant: "default",
            });
          } else {
            toast({
              title: "Error loading news",
              description: "Could not load the latest technology news. Using default articles instead.",
              variant: "destructive",
              duration: 5000,
            });
          }
        } else {
          toast({
            title: "Error loading news",
            description: "Could not load the latest technology news. Using default articles instead.",
            variant: "destructive",
            duration: 5000,
          });
        }
      } finally {
        setLoading(false);
      }
    };
    const q = searchParams.get('search')
    loadNews(q);
  }, [toast,searchParams]);

  // Update URL parameters when search or category changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (activeCategory !== 'All') {
      params.set('category', activeCategory);
    }
    if (searchTerm) {
      params.set('search', searchTerm);
    }
    
    setSearchParams(params);
    
    // Track pageview with URL params for analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore - gtag might not be defined in TS
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: window.location.pathname + '?' + params.toString(),
        page_title: generatePageTitle()
      });
    }
  }, [activeCategory, searchTerm, setSearchParams, generatePageTitle]);

  // Apply predefined query
  const handlePredefinedQuery = (query: string) => {
    setSearchTerm(query);
    setInputValue(query);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };
  
  // Extract unique categories from the blog posts
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = [...blogPosts];

  // Handle newsletter submission
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    
    if (emailInput && emailInput.value) {
      // In production, this would call an API endpoint
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        duration: 5000,
      });
      emailInput.value = '';
    }
  };

  // Generate structured data for SEO
  const generateStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "headline": generatePageTitle(),
      "description": "Explore our articles, tutorials, and insights on the latest technology trends and development practices.",
      "url": `https://techwisker.com${window.location.pathname}${window.location.search}`,
      "author": {
        "@type": "Organization",
        "name": "TechWisker",
        "url": "https://techwisker.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TechWisker",
        "logo": {
          "@type": "ImageObject",
          "url": "https://techwisker.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://techwisker.com${window.location.pathname}`
      },
      "blogPost": filteredPosts.slice(0, 5).map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": new Date(post.date).toISOString(),
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "image": post.image,
        "url": post.link
      }))
    };
    
    return JSON.stringify(structuredData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHelmet 
        title={generatePageTitle()}
        description="Explore our articles, tutorials, and insights on the latest technology trends and development practices."
        canonicalUrl="/blog"
        keywords={`tech blog, technology news, ${activeCategory !== 'All' ? activeCategory + ', ' : ''}${searchTerm ? searchTerm + ', ' : ''}software development, programming, artificial intelligence`}
      />
      
      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateStructuredData() }} />
      
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <AnimatedGradient />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-medium mb-2">
              Tech Insights
            </div>
            <h1 className="tech-heading max-w-3xl mx-auto">
              Latest from Our Tech Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our articles, tutorials, and insights on the latest technology trends and development practices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter, Prewritten Queries and Search */}
      <section className="py-8 px-4 md:px-6" aria-labelledby="filter-heading">
        <div className="container mx-auto">
          <h2 id="filter-heading" className="sr-only">Filter and search articles</h2>
          <div className="flex flex-col gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center w-full">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-tech-blue text-white' 
                      : 'bg-muted text-muted-foreground hover:bg-tech-blue/10 hover:text-tech-blue'
                  }`}
                  aria-current={activeCategory === category ? 'page' : undefined}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Predefined Query Buttons */}
            <div className="flex flex-wrap gap-3 justify-center w-full">
              {predefinedQueries.map((queryItem, index) => (
                <Button 
                  key={index}
                  variant="outline"
                  className={`rounded-full text-sm ${
                    searchTerm === queryItem.query 
                      ? 'bg-tech-purple/10 text-tech-purple border-tech-purple' 
                      : ''
                  }`}
                  onClick={() => handlePredefinedQuery(queryItem.query)}
                  aria-pressed={searchTerm === queryItem.query}
                >
                  {queryItem.label}
                </Button>
              ))}
            </div>
            
            {/* Search */}
            <div className="w-full max-w-lg mx-auto">
              <form onSubmit={handleSearchSubmit} className="flex gap-2" role="search">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-muted-foreground" aria-hidden="true" />
                  </div>
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full"
                    aria-label="Search articles"
                  />
                </div>
                <Button type="submit" className="bg-tech-blue hover:bg-tech-blue/90">
                  Search
                </Button>
              </form>
            </div>
          </div>
          
          {/* Loading State */}
          {loading && (
            <div className="space-y-8" aria-live="polite" aria-busy="true">
              <Skeleton className="h-64 w-full rounded-lg" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Error State */}
          {!loading && error && filteredPosts.length === 0 && (
            <div className="text-center py-16" aria-live="polite">
              <h3 className="text-xl font-semibold mb-2">Unable to load articles</h3>
              <p className="text-muted-foreground mb-6">We're having trouble connecting to our servers. Please try again later.</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-tech-blue hover:bg-tech-blue/90"
              >
                Retry
              </Button>
            </div>
          )}
          
          {/* Featured Post */}
          {!loading && filteredPosts.length > 0 && (
            <div className="mb-12 animate-fade-in">
              <article className="tech-card overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto overflow-hidden rounded-lg">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                      width="800"
                      height="450"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <time dateTime={new Date(filteredPosts[0].date).toISOString()} className="flex items-center gap-1">
                        <Calendar size={14} aria-hidden="true" />
                        {filteredPosts[0].date}
                      </time>
                      <span className="px-2 py-1 bg-tech-blue/10 text-tech-blue rounded-full">
                        {filteredPosts[0].category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-tech-blue transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-sm text-muted-foreground">{filteredPosts[0].author}</span>
                      <div className="flex items-center gap-2">
                        <ShareButtons 
                          title={filteredPosts[0].title}
                          url={filteredPosts[0].link}
                          description={filteredPosts[0].excerpt}
                        />
                        <a 
                          href={filteredPosts[0].link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-tech-blue font-medium hover:text-tech-lightBlue transition-colors"
                        >
                          Read full article
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
                  </div>
                </div>
              </article>
            </div>
          )}
          
          {/* Blog Grid */}
          {!loading && filteredPosts.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          ) : !loading && filteredPosts.length === 0 && !error && (
            <div className="text-center py-16" aria-live="polite">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setActiveCategory('All');
                  setSearchTerm('');
                  setInputValue('');
                }} 
                variant="outline"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-6 mt-12 bg-gradient-to-br from-tech-charcoal to-tech-darker relative overflow-hidden">
        <AnimatedGradient className="opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-purple/20 text-tech-purple text-sm font-medium">
              Stay Updated
            </div>
            <h2 className="tech-heading">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the latest tech insights, tutorials, and industry news delivered directly to your inbox.
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-2" 
              onSubmit={handleNewsletterSubmit}
              aria-labelledby="newsletter-heading"
            >
              <Input 
                type="email" 
                name="email"
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-muted border border-white/5 focus:border-tech-blue/50 focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                required
                aria-label="Email address"
              />
              <Button 
                type="submit" 
                className="tech-btn-primary whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground pt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
