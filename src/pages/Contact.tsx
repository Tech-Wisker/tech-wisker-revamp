
import { Mail, Phone, MessageSquare, Users, ArrowRight } from 'lucide-react';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import ContactForm from '../components/ui/ContactForm';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us | Tech Wisker</title>
        <meta name="description" content="Get in touch with Tech Wisker for cutting-edge technology solutions. We're here to help with your web development, mobile app, DevOps, and AI services needs." />
        <meta name="keywords" content="tech wisker, contact us, technology services, remote tech company, web development, mobile app development" />
        <link rel="canonical" href="https://techwisker.com/contact" />
        <meta property="og:title" content="Contact Tech Wisker | Technology Solutions" />
        <meta property="og:description" content="Reach out to our team for innovative technology solutions and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techwisker.com/contact" />
      </Helmet>
      
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <AnimatedGradient />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-medium mb-2">
              Get In Touch
            </div>
            <h1 className="tech-heading max-w-3xl mx-auto">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re looking to discuss a project, ask a question, or explore how we can work together, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: <Mail size={24} className="text-tech-blue" />,
                title: 'Email Us',
                description: 'Our friendly team is here to help.',
                detail: 'techwisker@gmail.com',
                link: 'mailto:techwisker@gmail.com'
              },
              {
                icon: <Phone size={24} className="text-tech-blue" />,
                title: 'Call Us',
                description: 'Available during business hours.',
                detail: '+91 7310044004',
                link: 'tel:+917310044004'
              }
            ].map((item, index) => (
              <div key={index} className="tech-card text-center group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="rounded-full bg-tech-blue/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <a 
                  href={item.link} 
                  className="text-tech-blue font-medium group-hover:text-tech-lightBlue transition-colors"
                >
                  {item.detail}
                </a>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="tech-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            {/* Remote & Other Info */}
            <div className="space-y-8 animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="tech-card">
                <h3 className="text-xl font-semibold mb-4">We&apos;re Remote-First</h3>
                <p className="text-muted-foreground mb-4">
                  Tech Wisker operates as a fully remote company with team members across different time zones. 
                  This allows us to provide 24/7 service and tap into global talent to deliver the best solutions for our clients.
                </p>
                <p className="text-muted-foreground">
                  We leverage modern collaboration tools to ensure seamless communication and project management regardless of physical location.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Other Ways to Connect</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="tech-card flex items-start gap-4 group">
                    <div className="rounded-full bg-tech-blue/10 p-3 flex-shrink-0">
                      <MessageSquare size={20} className="text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Live Chat</h4>
                      <p className="text-sm text-muted-foreground mb-2">Talk to our support team in real-time.</p>
                      <a href="#" className="text-tech-blue text-sm font-medium group-hover:text-tech-lightBlue transition-colors inline-flex items-center">
                        Start a chat
                        <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="tech-card flex items-start gap-4 group">
                    <div className="rounded-full bg-tech-blue/10 p-3 flex-shrink-0">
                      <Users size={20} className="text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Support Portal</h4>
                      <p className="text-sm text-muted-foreground mb-2">Find answers to common questions.</p>
                      <a href="#" className="text-tech-blue text-sm font-medium group-hover:text-tech-lightBlue transition-colors inline-flex items-center">
                        Visit portal
                        <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="tech-card">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 mt-12 bg-tech-charcoal/30 relative">
        <AnimatedGradient className="opacity-40" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-purple/10 text-tech-purple text-sm font-medium">
              FAQs
            </div>
            <h2 className="tech-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How does your remote work process operate?',
                answer: 'We use a combination of collaborative tools like Slack, Zoom, and project management software to maintain constant communication. We schedule regular check-ins based on your time zone and provide progress updates throughout the project lifecycle.'
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We have experience working with clients across various industries, including fintech, healthcare, e-commerce, education, manufacturing, and more. Our diverse expertise allows us to understand the unique challenges and requirements of different sectors.'
              },
              {
                question: 'How long does a typical project take to complete?',
                answer: 'Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 4-6 weeks, while a comprehensive mobile app or enterprise solution could take 3-6 months or more. During our initial consultation, we\'ll provide a detailed timeline based on your project specifications.'
              },
              {
                question: 'Do you offer ongoing maintenance and support?',
                answer: 'Yes, we offer flexible maintenance and support packages to ensure your digital products continue to run smoothly after launch. Our support services include bug fixes, security updates, performance optimization, and feature enhancements. We can tailor a support plan that meets your specific needs and budget.'
              },
              {
                question: 'What technologies do you work with?',
                answer: 'We work with a wide range of modern technologies and frameworks. For frontend development, we use React, Angular, Vue.js, and Next.js. Backend technologies include Node.js, Python, Java, and .NET. For mobile app development, we utilize React Native, Flutter, Swift, and Kotlin. We also have expertise in cloud platforms like AWS, Azure, and Google Cloud.'
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="tech-card">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
