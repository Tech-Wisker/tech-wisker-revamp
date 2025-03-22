
import { ArrowRight, Smartphone, Code, LayoutGrid, Cpu, Zap, Shield, Database, BarChart, Lightbulb, Bot, Cloud, Settings } from 'lucide-react';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceProps) => {
  return (
    <div className="tech-card group h-full">
      <div className="p-3 mb-4 rounded-xl bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-blue transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="rounded-full bg-tech-blue/10 p-1 mt-1 flex-shrink-0">
              <svg className="w-3 h-3 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const mainServices = [
    {
      icon: <Smartphone size={28} className="text-tech-blue" />,
      title: 'Mobile App Development',
      description: 'We build native and cross-platform mobile applications that provide exceptional user experiences across iOS and Android platforms.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions with React Native and Flutter',
        'Mobile UI/UX design and prototyping',
        'App performance optimization',
        'Ongoing maintenance and updates'
      ]
    },
    {
      icon: <Code size={28} className="text-tech-blue" />,
      title: 'Web Development',
      description: 'Our web development services deliver responsive, high-performance websites and applications using modern technologies and frameworks.',
      features: [
        'Full-stack development with MERN/MEAN stack',
        'Progressive Web Apps (PWAs)',
        'Responsive design and implementation',
        'E-commerce solutions',
        'CMS development and integration'
      ]
    },
    {
      icon: <LayoutGrid size={28} className="text-tech-blue" />,
      title: 'DevOps Solutions',
      description: 'We streamline your development workflow with comprehensive DevOps solutions that enhance collaboration, automation, and deployment efficiency.',
      features: [
        'CI/CD pipeline implementation',
        'Container orchestration with Kubernetes',
        'Infrastructure as Code (IaC)',
        'Cloud migration and optimization',
        'Monitoring and logging solutions'
      ]
    },
    {
      icon: <Cpu size={28} className="text-tech-blue" />,
      title: 'Agentic AI Services',
      description: 'Leverage the power of artificial intelligence with our customized AI solutions that automate processes and deliver valuable insights.',
      features: [
        'LLM fine-tuning and integration',
        'AI automation systems',
        'Intelligent virtual assistants',
        'Machine learning model development',
        'AI-powered data analytics'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Zap size={24} className="text-tech-blue" />,
      title: 'Performance Optimization',
      description: 'Enhance your application speed and responsiveness with our performance optimization services.',
      features: [
        'Frontend optimization techniques',
        'Database query optimization',
        'Server-side performance tuning',
        'Loading time reduction',
        'Resource usage optimization'
      ]
    },
    {
      icon: <Shield size={24} className="text-tech-blue" />,
      title: 'Security Auditing',
      description: 'Protect your digital assets with comprehensive security assessments and implementation of best practices.',
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Security code reviews',
        'Implementation of security best practices',
        'Compliance consulting (GDPR, HIPAA, etc.)'
      ]
    },
    {
      icon: <Database size={24} className="text-tech-blue" />,
      title: 'Database Solutions',
      description: 'Design, implement, and optimize database systems that efficiently store and manage your critical data.',
      features: [
        'Database architecture design',
        'SQL and NoSQL implementations',
        'Data migration services',
        'Scaling and sharding strategies',
        'Backup and recovery solutions'
      ]
    },
    {
      icon: <BarChart size={24} className="text-tech-blue" />,
      title: 'Data Analytics',
      description: 'Transform your raw data into actionable insights with our comprehensive data analytics services.',
      features: [
        'Business intelligence dashboards',
        'Data visualization solutions',
        'Predictive analytics models',
        'Real-time analytics implementation',
        'Custom reporting systems'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <AnimatedGradient />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-medium mb-2">
              Our Services
            </div>
            <h1 className="tech-heading max-w-3xl mx-auto">
              Comprehensive Technology Solutions for Modern Businesses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver end-to-end digital solutions that help businesses innovate, grow, and succeed in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-4 md:px-6 bg-tech-charcoal/30 relative">
        <AnimatedGradient className="opacity-40" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-purple/10 text-tech-purple text-sm font-medium">
              Our Approach
            </div>
            <h2 className="tech-heading">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven development process ensures transparent communication, quality deliverables, and on-time project completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb size={32} className="text-tech-blue" />,
                title: 'Discovery',
                description: 'We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.'
              },
              {
                icon: <Bot size={32} className="text-tech-blue" />,
                title: 'Planning',
                description: 'Our team creates detailed project specifications, wireframes, and development roadmaps tailored to your specific needs.'
              },
              {
                icon: <Cloud size={32} className="text-tech-blue" />,
                title: 'Development',
                description: 'We utilize agile methodologies to build your solution with regular updates, feedback integration, and quality assurance.'
              },
              {
                icon: <Settings size={32} className="text-tech-blue" />,
                title: 'Deployment & Support',
                description: 'After thorough testing, we deploy your solution and provide ongoing maintenance and support to ensure optimal performance.'
              }
            ].map((step, index) => (
              <div key={index} className="tech-card text-center animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="mx-auto p-4 mb-4 rounded-full bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 w-16 h-16 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-medium">
              Additional Services
            </div>
            <h2 className="tech-heading">
              Specialized Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized services to address specific technical challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-tech-charcoal to-tech-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80')] opacity-10 bg-cover bg-center"></div>
        <AnimatedGradient className="opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-purple/20 text-tech-purple text-sm font-medium">
              Get Started
            </div>
            <h2 className="tech-heading">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today to schedule a consultation with our team of experts. We're ready to help you transform your ideas into reality.
            </p>
            <a href="/contact" className="tech-btn-primary inline-flex">
              Contact Our Team
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
