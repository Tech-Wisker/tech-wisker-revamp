
import { ArrowRight, Code, Cpu, LayoutGrid, Smartphone } from 'lucide-react';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import ServiceCard from '../components/ui/ServiceCard';
import ProjectCard from '../components/ui/ProjectCard';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const Index = () => {
  // Featured services
  const services = [
    {
      icon: <Smartphone size={28} className="text-tech-blue" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks and seamless user experiences.'
    },
    {
      icon: <Code size={28} className="text-tech-blue" />,
      title: 'Web Development',
      description: 'Responsive web applications with cutting-edge frontend and backend technologies, focused on performance and usability.'
    },
    {
      icon: <LayoutGrid size={28} className="text-tech-blue" />,
      title: 'DevOps Solutions',
      description: 'Streamline your development workflow with CI/CD pipelines, container orchestration, and infrastructure automation.'
    },
    {
      icon: <Cpu size={28} className="text-tech-blue" />,
      title: 'Agentic AI Services',
      description: 'Leverage the power of AI with custom solutions, including LLM fine-tuning, AI automation, and intelligent assistants.'
    }
  ];

  // Featured projects
  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive financial analytics dashboard with real-time data visualization and predictive modeling.',
      link: '/portfolio'
    },
    {
      title: 'Health Tracker App',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A cross-platform mobile app for health monitoring with AI-powered insights and custom recommendations.',
      link: '/portfolio'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Platform',
      image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A scalable e-commerce solution with microservices architecture, advanced search, and payment integrations.',
      link: '/portfolio'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <AnimatedGradient />
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-medium mb-2">
              Leading Technology Service Provider
            </div>
            <h1 className="tech-heading lg:text-6xl max-w-3xl mx-auto">
              Transforming Ideas into 
              <span className="hero-text-gradient font-extrabold"> Exceptional Digital Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We build innovative software solutions that drive business growth and deliver remarkable user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/services" className="tech-btn-primary">
                Explore Our Services
                <ArrowRight size={18} />
              </a>
              <a href="/contact" className="tech-btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="mt-24 md:mt-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
              alt="Tech Workspace" 
              className="w-full h-[300px] md:h-[400px] object-cover object-center rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-3 py-1 rounded-full bg-tech-purple/10 text-tech-purple text-sm font-medium">
                About Tech Wisker
              </div>
              <h2 className="tech-heading">
                Pioneering the Future of Technology Solutions
              </h2>
              <p className="text-muted-foreground">
                At Tech Wisker, we combine technical expertise with creative thinking to deliver cutting-edge solutions that drive business success. Our team of passionate developers, designers, and strategists work collaboratively to transform complex challenges into elegant, efficient, and scalable solutions.
              </p>
              <ul className="space-y-3">
                {['Innovation-driven development', 'User-centric design approach', 'Scalable architecture', 'Performance optimization'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-tech-blue/10 p-1 mt-1">
                      <svg className="w-4 h-4 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/services" className="tech-btn-primary inline-flex">
                Our Expertise
                <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-charcoal/80 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-lg">Team Collaboration</p>
                      <p className="text-sm text-white/80">Our agile approach to development</p>
                    </div>
                    <div className="bg-tech-blue rounded-full p-2">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-tech-purple/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-tech-blue/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding relative bg-tech-charcoal/30">
        <AnimatedGradient className="opacity-40" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-medium">
              What We Offer
            </div>
            <h2 className="tech-heading">
              Our Comprehensive Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end technology solutions tailored to your specific business needs, helping you stay ahead in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="tech-btn-outline inline-flex">
              View All Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-purple/10 text-tech-purple text-sm font-medium">
              Recent Work
            </div>
            <h2 className="tech-heading">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent projects that demonstrate our technical expertise and creative problem-solving abilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/portfolio" className="tech-btn-primary inline-flex">
              View All Projects
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding relative bg-gradient-to-br from-tech-charcoal to-tech-darker overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80')] opacity-10 bg-cover bg-center"></div>
        <AnimatedGradient className="opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium">
              Ready to Start?
            </div>
            <h2 className="tech-heading">
              Let's Bring Your Ideas to Life
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, we're here to help you navigate every step of your digital journey. Reach out to discuss how we can collaborate on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/contact" className="tech-btn-primary">
                Contact Us Today
                <ArrowRight size={18} />
              </a>
              <a href="/services" className="tech-btn-outline">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
