import React from 'react';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="py-16 bg-flame">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated With Our Work</h2>
          <p className="text-white text-lg mb-8">
            Join our mailing list to receive updates on our projects, events, and ways you can help.
          </p>
          
          <form className="flex flex-col md:flex-row max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-md mb-3 md:mb-0 focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-navy text-white px-6 py-3 rounded-r-md font-medium hover:bg-navy-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-white text-sm mt-4 opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;