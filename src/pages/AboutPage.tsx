import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { teamMembers } from '../data';
import Card from '../components/common/Card';
import { Mail } from 'lucide-react';
import director from '../../public/director.jpg'

const AboutPage: React.FC = () => {
  // Find Michael Carter in the team members array
  const programDirector = teamMembers.find(member => member.name === 'Michael Carter');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.main 
      className="pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200 mb-8">
              Learn about our mission, our story, and the people who make our work possible.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Mission" 
                subtitle="Stand In The Gap Kindred International exists to build stronger, more resilient communities through compassionate action and sustainable change."
              />
              <p className="text-gray-600 mb-6">
                We believe that by standing in the gap - stepping in where there is need - we can create meaningful, lasting change in our communities worldwide. Our approach is centered on kindness, respect, and the belief that everyone deserves dignity and opportunity.
              </p>
              <p className="text-gray-600 mb-6">
                Through our various programs and initiatives, we aim to address immediate needs while also working toward long-term solutions to community challenges across the globe.
              </p>
              <Button href="/what-we-do">
                Learn About Our Work
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg" 
                alt="SITGK International volunteers in action" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Story" 
            subtitle="Stand In The Gap Kindred International was founded with a simple mission: to create positive change through community service worldwide."
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-navy mb-4">The Beginning</h3>
              <p className="text-gray-600 mb-4">
                Stand In The Gap Kindred International began when a group of friends noticed growing needs in their community and decided to take action. What started as small, local volunteer efforts quickly grew into an international movement as more people joined the cause.
              </p>
              <p className="text-gray-600">
                Our founder, Sarah Johnson, had spent years working in social services and saw firsthand how small, targeted interventions could make a significant difference in people's lives. With this knowledge, she gathered a dedicated team to create an organization focused on effective, compassionate community support across borders.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Growth and Development</h3>
              <p className="text-gray-600 mb-4">
                Over the years, SITGK International has expanded from a small volunteer group to an established international non-profit organization with multiple programs and initiatives. We've built strong partnerships with local businesses, schools, government agencies, and other non-profits to maximize our impact globally.
              </p>
              <p className="text-gray-600">
                As we've grown, we've remained committed to our core values of compassion, respect, and sustainable change. Our approach has always been to work with communities, not just for them, ensuring that our efforts address real needs and create lasting positive outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">Looking Forward</h3>
              <p className="text-gray-600">
                Today, SITGK International continues to evolve and adapt to meet changing community needs worldwide. We're constantly developing new programs, refining our approaches, and finding innovative ways to create positive change. With the support of our donors, volunteers, and partners, we look forward to many more years of standing in the gap for those who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Now featuring only Michael Carter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={fadeIn}>
              <SectionHeading 
                title="Meet Our Program Director" 
                subtitle="The dedicated individual who leads our organization and drives our mission forward."
                centered
              />
            </motion.div>
            
            {programDirector && (
              <motion.div 
                className="max-w-md mx-auto"
                variants={fadeIn}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card>
                  <motion.div 
                    className="h-64 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={director} 
                      alt={programDirector.name} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-navy mb-1">{programDirector.name}</h3>
                    <p className="text-orange font-medium mb-4">{programDirector.role}</p>
                    <p className="text-gray-600 mb-4">{programDirector.bio}</p>
                    <motion.a 
                      href={`mailto:${programDirector.name.toLowerCase().replace(' ', '.')}@sitgk.org`} 
                      className="inline-flex items-center text-navy hover:text-orange transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </motion.a>
                  </motion.div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Global Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for passionate individuals and organizations worldwide to help us make a difference. Find out how you can be part of our story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-involved" variant="secondary" size="lg">
              Get Involved
            </Button>
            <Button href="/donate" variant="outline" size="lg">
              Support Our Work
            </Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutPage;