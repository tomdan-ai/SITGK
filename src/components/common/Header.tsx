import React, { useState, useEffect } from 'react';
import { navItems } from '../../data';
import { Menu, X } from 'lucide-react';
import logoImage from '/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
            <img 
              src={logoImage}
              alt="SITGK International Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold text-white ml-3">SITGK International</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-gold transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/donate" 
            className="bg-flame text-white px-6 py-2 rounded-full font-bold hover:bg-flame/90 transition-colors"
          >
            Donate Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy border-t border-gray-700 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/donate" 
              className="bg-flame text-white px-6 py-2 rounded-full font-bold hover:bg-flame/90 transition-colors text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;