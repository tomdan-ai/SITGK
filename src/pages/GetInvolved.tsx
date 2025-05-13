import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { Heart, HandHelping, Users, Calendar } from 'lucide-react';
import { events } from '../data';

const GetInvolved: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-gray-200 mb-8">
              Join our mission to create positive change. There are many ways you can contribute and make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Ways to Help" 
            subtitle="Discover how you can contribute to our mission and make a difference."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Heart className="w-16 h-16 text-flame mx-auto mb-6" />
              <h3 className="text-xl font-bold text-navy mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Support our work financially. Your contribution helps fund our programs and initiatives.
              </p>
              <a 
                href="/donate" 
                className="inline-block bg-flame text-white px-6 py-2 rounded-full hover:bg-flame-dark transition-colors"
              >
                Make a Donation
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <HandHelping className="w-16 h-16 text-flame mx-auto mb-6" />
              <h3 className="text-xl font-bold text-navy mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Give your time and skills. Join our team of dedicated volunteers making a difference.
              </p>
              <a 
                href="#volunteer-form" 
                className="inline-block bg-flame text-white px-6 py-2 rounded-full hover:bg-flame-dark transition-colors"
              >
                Become a Volunteer
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="w-16 h-16 text-flame mx-auto mb-6" />
              <h3 className="text-xl font-bold text-navy mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Organizations can partner with us to create greater impact in communities.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-flame text-white px-6 py-2 rounded-full hover:bg-flame-dark transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Join us at our upcoming events and activities."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <Calendar className="w-8 h-8 text-flame mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.date}</p>
                    <p className="text-gray-600 mb-2">{event.time}</p>
                    <p className="text-gray-600 mb-4">{event.location}</p>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Become a Volunteer" 
            subtitle="Fill out the form below to join our volunteer team."
            centered
          />
          
          <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                  required 
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                required 
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                required 
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="interests">Areas of Interest</label>
              <select 
                id="interests" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                required
              >
                <option value="">Select an area</option>
                <option value="community">Community Outreach</option>
                <option value="education">Education Support</option>
                <option value="youth">Youth Programs</option>
                <option value="events">Event Organization</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-flame"
                placeholder="Tell us about yourself and why you'd like to volunteer..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-flame text-white py-3 rounded-md font-bold hover:bg-flame-dark transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;