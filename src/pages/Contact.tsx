
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    interests: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in a real app, this would send to an API)
    try {
      console.log('Form submission:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        interests: []
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const interests = [
    'Financial Automation (MonetX)',
    'Customer Support AI (SupportX)', 
    'Energy Management (GreenX)',
    'Mapping & Analytics (MapX)',
    'Cloud & Security Automation',
    'Network Automation',
    'Generative AI Solutions',
    'Consulting Services'
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-gray-50 via-white to-brand-light/5">
      {/* Hero Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-accent to-brand-light opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-medium text-sm mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Ready to Transform Your Business?
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with intelligent automation? We'd love to hear from you. 
              Let's discuss how our solutions can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-brand-light/20 sticky top-24">
                <h2 className="text-2xl font-bold text-brand-primary mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-neutral mb-2">Email</h3>
                      <p className="text-gray-600 hover:text-brand-primary transition-colors cursor-pointer">sales@techcorp.com</p>
                      <p className="text-gray-600 hover:text-brand-primary transition-colors cursor-pointer">support@techcorp.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-neutral mb-2">Phone</h3>
                      <p className="text-gray-600 hover:text-brand-primary transition-colors cursor-pointer">+1 (555) 123-4567</p>
                      <p className="text-gray-600 hover:text-brand-primary transition-colors cursor-pointer">+1 (555) 123-4568</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-brand-light rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-neutral mb-2">Office</h3>
                      <p className="text-gray-600">
                        123 Innovation Drive<br />
                        Tech Valley, CA 94301<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-neutral mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 4:00 PM PST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-brand-light/20">
                  <h3 className="font-semibold text-brand-neutral mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    {[1, 2, 3].map((i) => (
                      <a key={i} href="#" className="group">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-light/20 to-brand-primary/20 hover:from-brand-primary hover:to-brand-accent rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                          <div className="w-5 h-5 bg-brand-primary group-hover:bg-white rounded-sm transition-colors"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-brand-light/20">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-brand-primary mb-4">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-brand-neutral mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300 hover:border-brand-light"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-brand-neutral mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300 hover:border-brand-light"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-brand-neutral mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300 hover:border-brand-light"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-brand-neutral mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300 hover:border-brand-light"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brand-neutral mb-3">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300 hover:border-brand-light"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-brand-neutral mb-3">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300 hover:border-brand-light"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-neutral mb-4">
                      Areas of Interest
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center group cursor-pointer">
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                              className="sr-only"
                            />
                            <div className={`w-5 h-5 border-2 rounded transition-all duration-300 flex items-center justify-center ${
                              formData.interests.includes(interest)
                                ? 'bg-brand-primary border-brand-primary'
                                : 'border-gray-300 group-hover:border-brand-primary'
                            }`}>
                              {formData.interests.includes(interest) && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                          </div>
                          <span className="ml-3 text-sm text-gray-700 group-hover:text-brand-primary transition-colors">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-neutral mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your needs, goals, and how we can help..."
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300 hover:border-brand-light resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light/5 to-brand-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Visit Our Office
            </span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Located in the heart of Silicon Valley's innovation district
          </p>
          <div className="bg-gradient-to-br from-brand-light/20 to-brand-primary/20 h-96 rounded-2xl flex items-center justify-center border border-brand-light/30 shadow-xl">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-brand-primary mx-auto mb-4" />
              <p className="text-brand-primary text-lg font-semibold">Interactive Map</p>
              <p className="text-gray-600">Google Maps Integration Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
