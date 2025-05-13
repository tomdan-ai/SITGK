import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { Users, Home, Book, Heart } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    { 
      icon: <Users className="w-12 h-12 text-orange mb-4" />, 
      number: "5,000+", 
      label: "People Helped" 
    },
    { 
      icon: <Home className="w-12 h-12 text-orange mb-4" />, 
      number: "25", 
      label: "Communities Served" 
    },
    { 
      icon: <Book className="w-12 h-12 text-orange mb-4" />, 
      number: "15", 
      label: "Educational Programs" 
    },
    { 
      icon: <Heart className="w-12 h-12 text-orange mb-4" />, 
      number: "300+", 
      label: "Regular Volunteers" 
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionHeading 
            title="Our Impact" 
            subtitle="Since 2015, SITGK has been making a measurable difference in communities across the nation."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <motion.div 
                  className="flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold text-navy mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;