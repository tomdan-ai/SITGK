import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import bgImage from '/bg.png';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-navy">
      {/* Background image with overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center 30%"
        }}
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-navy/80"></div>
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <motion.div 
          className="max-w-3xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Standing In The Gap<br />
            <motion.span 
              className="text-gold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              For Communities
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Building stronger communities through compassion, action, and sustainable change. Join us in making a difference today.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button href="/donate" size="lg">
              Donate Now
            </Button>
            <Button href="/get-involved" variant="outline" size="lg">
              Get Involved
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;