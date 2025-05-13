import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with us. We're here to answer your questions and hear your feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get In Touch" 
                subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-flame mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Compassion Way<br />
                      Kindness City, KS 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-flame mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-flame transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-flame mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@sitgk.org" className="hover:text-flame transition-colors">
                        info@sitgk.org
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-flame mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="lastName">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-flame text-white py-3 rounded-md font-bold hover:bg-flame-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;