
import { useState } from 'react';
import { Search, Calendar } from 'lucide-react';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import BlogCard from '../components/ui/BlogCard';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

// Blog post data
const blogPosts = [
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
    excerpt: 'An in-depth look at passwordless authentication methods and how they're improving security while enhancing the user experience.',
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

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'AI', 'DevOps', 'Mobile', 'Web', 'Security', 'Design'];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
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
      
      {/* Filter and Search */}
      <section className="py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full md:w-auto">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-tech-blue text-white' 
                      : 'bg-muted text-muted-foreground hover:bg-tech-blue/10 hover:text-tech-blue'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg bg-muted border border-white/5 focus:border-tech-blue/50 focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
              />
            </div>
          </div>
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12 animate-fade-in">
              <div className="tech-card overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto overflow-hidden rounded-lg">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {filteredPosts[0].date}
                      </span>
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
                      <a 
                        href={filteredPosts[0].link} 
                        className="inline-flex items-center text-tech-blue font-medium hover:text-tech-lightBlue transition-colors"
                      >
                        Read full article
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
              </div>
            </div>
          )}
          
          {/* Blog Grid */}
          {filteredPosts.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
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
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-muted border border-white/5 focus:border-tech-blue/50 focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                required
              />
              <button type="submit" className="tech-btn-primary whitespace-nowrap">
                Subscribe
              </button>
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
