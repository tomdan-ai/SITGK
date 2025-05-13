import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/home/Hero';
import Impact from '../components/home/Impact';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TestimonialSection from '../components/home/TestimonialSection';
import GetInvolvedSection from '../components/home/GetInvolvedSection';
import NewsletterSignup from '../components/home/NewsletterSignup';

const HomePage: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Impact />
        <FeaturedProjects />
        <TestimonialSection />
        <GetInvolvedSection />
        <NewsletterSignup />
      </motion.main>
    </AnimatePresence>
  );
};

export default HomePage;