import React from 'react';
import { navItems } from '../../data';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 mr-3">
                <img 
                  src="/logo.png" 
                  alt="SITGK International Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold">SITGK</span>
            </div>
            <p className="mb-4 text-gray-300">
              Stand In The Gap Kindred International is dedicated to creating meaningful change in communities through compassion, action, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-flame mt-1 mr-2" />
                <span className="text-gray-300">
                  123 Compassion Way<br />
                  Kindness City, KS 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-flame mr-2" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-gold transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-flame mr-2" />
                <a href="mailto:info@sitgk.org" className="text-gray-300 hover:text-gold transition-colors">
                  info@sitgk.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our work and ways to get involved.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-navy-light text-white px-4 py-2 rounded-l-md focus:outline-none border border-gray-700 mb-2 sm:mb-0 w-full"
              />
              <button 
                type="submit" 
                className="bg-flame text-white px-4 py-2 rounded-r-md font-medium hover:bg-flame/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Stand In The Gap Kindred International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;