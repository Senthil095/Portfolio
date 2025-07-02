import React, { useState } from 'react';
import { Mail, ArrowUp, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      
      // EmailJS configuration with your actual credentials
      const serviceId = 'service_1ines6y';
      const templateId = 'template_smt9m9n';
      const publicKey = 'QjTZEjuOXnFVnVH4h';

      console.log('Attempting to send email with EmailJS...');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Form data:', formData);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Senthil Kumar S',
        reply_to: formData.email,
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('EmailJS result:', result);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error details:', error);
      
      let errorMessage = "Please try again or contact me directly via email.";
      
      if (error instanceof Error) {
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        
        if (error.message.includes('Invalid template ID')) {
          errorMessage = "Email template configuration issue. Please contact me directly.";
        } else if (error.message.includes('Invalid service ID')) {
          errorMessage = "Email service configuration issue. Please contact me directly.";
        } else if (error.message.includes('Invalid user ID')) {
          errorMessage = "Email authentication issue. Please contact me directly.";
        } else if (error.message.includes('network')) {
          errorMessage = "Network error. Please check your connection and try again.";
        }
      }
      
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to work together? I'd love to hear from you. Send me a message and let's create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-lime-500 rounded-full flex items-center justify-center">
                    <Mail className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <a href="mailto:selvasenthil2006@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      selvasenthil2006@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <a href="tel:8667057371" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      +91 8667057371
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-lime-500 rounded-full flex items-center justify-center">
                    <Github className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">GitHub</h3>
                    <a 
                      href="https://github.com/Senthil095/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      github.com/Senthil095
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-lime-500/20">
              <h2 className="text-2xl font-bold text-lime-400 mb-4">Let's Connect!</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about technology. Whether you have a project in mind or want to say hello, 
                feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-900 font-semibold rounded-lg hover:from-cyan-400 hover:to-lime-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <ArrowUp className="rotate-45" size={20} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
