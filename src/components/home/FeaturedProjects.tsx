import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import Button from '../common/Button';
import { projects } from '../../data';
import { Calendar, Users } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  // Just show the first 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3);

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
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading 
              title="Our Projects" 
              subtitle="Explore some of our recent initiatives that are making a difference in communities."
              centered
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
              >
                <Card>
                  <motion.div 
                    className="h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-500 mb-4 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.date}</span>
                      <div className="mx-2 h-1 w-1 rounded-full bg-gray-300"></div>
                      <Users className="w-4 h-4 mr-1" />
                      <span>{project.impact}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button href={`/projects#${project.id}`} variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <Button href="/projects">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;