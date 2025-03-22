
import { Mail, Phone, MapPin, MessageSquare, Users, ArrowRight } from 'lucide-react';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import ContactForm from '../components/ui/ContactForm';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to discuss a project, ask a question, or explore how we can work together, we're here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Mail size={24} className="text-tech-blue" />,
                title: 'Email Us',
                description: 'Our friendly team is here to help.',
                detail: 'info@techwisker.com',
                link: 'mailto:info@techwisker.com'
              },
              {
                icon: <Phone size={24} className="text-tech-blue" />,
                title: 'Call Us',
                description: 'Mon-Fri from 8am to 5pm.',
                detail: '+1 (123) 456-7890',
                link: 'tel:+11234567890'
              },
              {
                icon: <MapPin size={24} className="text-tech-blue" />,
                title: 'Visit Us',
                description: 'Come say hello at our office.',
                detail: '1234 Innovation Drive, Tech City, TC 98765',
                link: '#'
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
            
            {/* Map & Other Info */}
            <div className="space-y-8 animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe 
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-122.41941550000001!3d37.77492950000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1623772783194!5m2!1sen!2s" 
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
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
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
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
                question: 'What industries do you specialize in?',
                answer: 'We have experience working with clients across various industries, including fintech, healthcare, e-commerce, education, manufacturing, and more. Our diverse expertise allows us to understand the unique challenges and requirements of different sectors.'
              },
              {
                question: 'How long does a typical project take to complete?',
                answer: 'Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 4-6 weeks, while a comprehensive mobile app or enterprise solution could take 3-6 months or more. During our initial consultation, we'll provide a detailed timeline based on your project specifications.'
              },
              {
                question: 'Do you offer ongoing maintenance and support?',
                answer: 'Yes, we offer flexible maintenance and support packages to ensure your digital products continue to run smoothly after launch. Our support services include bug fixes, security updates, performance optimization, and feature enhancements. We can tailor a support plan that meets your specific needs and budget.'
              },
              {
                question: 'How do you handle project management and communication?',
                answer: 'We follow agile methodologies with regular sprint cycles and standups. You'll have access to a dedicated project manager who serves as your main point of contact. We use collaboration tools like Jira, Slack, and Figma to maintain transparent communication and provide regular updates on project progress.'
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
