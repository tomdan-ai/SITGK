import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data';
import { Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Testimonials" 
            subtitle="Hear from those whose lives have been touched by our work."
            centered
            className="text-white"
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative bg-navy-light rounded-lg p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="absolute text-orange/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Quote className="w-24 h-24 -top-10 -left-10" />
            </motion.div>
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={currentIndex}
                  className="text-xl md:text-2xl italic mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  "{currentTestimonial.quote}"
                </motion.p>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`author-${currentIndex}`}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={currentTestimonial.imageUrl} 
                      alt={currentTestimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{currentTestimonial.author}</h4>
                    <p className="text-orange">{currentTestimonial.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? 'bg-orange' : 'bg-gray-500'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;