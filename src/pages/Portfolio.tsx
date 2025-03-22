
import { useState } from 'react';
import { Search } from 'lucide-react';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import ProjectCard from '../components/ui/ProjectCard';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

// Project data with categories
const projects = [
  {
    title: 'MYT Rugs',
    category: 'Web Application',
    image: '/myt.png',
    description: 'Developed a high-end carpet emporium website for MYT Rugs, designed to showcase luxury carpets with a seamless user experience. The website emphasizes elegance, craftsmanship, and style, providing customers with an intuitive platform to explore and purchase carpets.',
    link: 'https://myt-rugs.com/',
    tags: ['React', 'Node.js', 'D3.js', 'MongoDB']
  },
  {
    title: 'Royal Rugs',
    category: 'Web Application',
    image: '/royal.png',
    description: 'Royal Rugs, a high-end carpet emporium, needed a digital presence as refined as their handcrafted collection. My goal was to design and develop a website that not only showcased their luxurious rugs but also provided an immersive browsing experience for their customers.',
    link: 'https://royalrugs.co.in/',
    tags: ['React', 'Node.js', 'D3.js', 'MongoDB']
  },
  {
    title: 'The Hetu',
    category: 'Web Application',
    image: '/hetu.png',
    description: 'The app that turns finding skilled workers into a hassle-free experience, Connecting you with trusted professionals in your area and making every job effortless.',
    link: 'https://thehetu.com/',
    tags: ['React', 'Node.js', 'D3.js', 'MongoDB']
  },
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive financial analytics dashboard with real-time data visualization, predictive modeling, and secure transaction management for a leading fintech company.',
    link: '#',
    tags: ['React', 'Node.js', 'D3.js', 'MongoDB']
  },
  {
    title: 'Health Tracker App',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A cross-platform mobile app for health monitoring with AI-powered insights, custom recommendations, and integration with wearable devices.',
    link: '#',
    tags: ['React Native', 'Firebase', 'TensorFlow Lite', 'HealthKit']
  },
  {
    title: 'E-commerce Platform',
    category: 'Web Platform',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A scalable e-commerce solution with microservices architecture, advanced search, payment integrations, and inventory management system.',
    link: '#',
    tags: ['Next.js', 'GraphQL', 'Stripe', 'Elasticsearch']
  },
  {
    title: 'Supply Chain Management',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An end-to-end supply chain management system with real-time tracking, predictive analytics, and blockchain-based verification for enhanced transparency.',
    link: '#',
    tags: ['Angular', 'ASP.NET Core', 'SQL Server', 'Hyperledger']
  },
  {
    title: 'Smart Home Controller',
    category: 'IoT Application',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An IoT solution for smart home control featuring voice commands, energy optimization, and seamless integration with multiple smart device ecosystems.',
    link: '#',
    tags: ['Flutter', 'Python', 'MQTT', 'AWS IoT']
  },
  {
    title: 'AI Content Generator',
    category: 'AI Tool',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An advanced AI content generation platform that creates high-quality articles, product descriptions, and marketing copy based on user inputs and preferences.',
    link: '#',
    tags: ['Python', 'OpenAI', 'TensorFlow', 'React']
  },
  {
    title: 'Logistics Fleet Management',
    category: 'Web Platform',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive fleet management solution with route optimization, real-time tracking, maintenance scheduling, and driver performance analytics.',
    link: '#',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Google Maps API']
  },
  {
    title: 'Education Learning Platform',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An interactive e-learning platform featuring video courses, progress tracking, certification management, and collaborative learning tools.',
    link: '#',
    tags: ['React', 'Express.js', 'PostgreSQL', 'WebRTC']
  },
  {
    title: 'AR Shopping Experience',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An augmented reality shopping app that allows users to visualize products in their own space before purchasing, enhancing the online shopping experience.',
    link: '#',
    tags: ['Swift', 'ARKit', 'Kotlin', 'ARCore']
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'Web Application', 'Mobile Application', 'Web Platform', 'IoT Application', 'AI Tool'];
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
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
              Our Work
            </div>
            <h1 className="tech-heading max-w-3xl mx-auto">
              Portfolio of Innovative Digital Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of projects that showcase our technical expertise and creative problem-solving approach.
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
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category 
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
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg bg-muted border border-white/5 focus:border-tech-blue/50 focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
              />
            </div>
          </div>
          
          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 md:px-6 mt-12 bg-gradient-to-br from-tech-charcoal to-tech-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')] opacity-10 bg-cover bg-center"></div>
        <AnimatedGradient className="opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-purple/20 text-tech-purple text-sm font-medium">
              Start Your Project
            </div>
            <h2 className="tech-heading">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your business goals with a tailored technology solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/contact" className="tech-btn-primary">
                Get in Touch
              </a>
              <a href="/services" className="tech-btn-outline">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
