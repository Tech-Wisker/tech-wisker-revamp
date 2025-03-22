
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formElement = e.target as HTMLFormElement;
      const formAction = "https://formsubmit.co/dfdeaeaba4e96b09109295e24ee65773";
      
      const formData = new FormData(formElement);
      
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" target='blank' action="https://formsubmit.co/dfdeaeaba4e96b09109295e24ee65773" method="POST">
      <input type="hidden" name="_subject" value="New contact from Tech Wisker website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={window.location.href} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-muted border border-white/5 focus:border-tech-blue/50 focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-muted border border-white/5 focus:border-tech-blue/50 focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
            placeholder="john.doe@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-muted border border-white/5 focus:border-tech-blue/50 focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
          placeholder="How can we help you?"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-muted border border-white/5 focus:border-tech-blue/50 focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all resize-none"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="tech-btn-primary w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"/>
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
