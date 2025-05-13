import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { Heart, BookOpen, Users, Globe, Handshake, School } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const programs = [
    {
      icon: <Heart className="w-12 h-12 text-flame" />,
      title: "Community Support",
      description: "Providing essential resources and support to communities in need through our outreach programs."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-flame" />,
      title: "Education Initiatives",
      description: "Supporting schools and educational programs to ensure better learning opportunities for children."
    },
    {
      icon: <Users className="w-12 h-12 text-flame" />,
      title: "Youth Development",
      description: "Mentoring and empowering young people through leadership and skill development programs."
    },
    {
      icon: <Globe className="w-12 h-12 text-flame" />,
      title: "Global Outreach",
      description: "Extending our impact internationally through partnerships and collaborative projects."
    },
    {
      icon: <Handshake className="w-12 h-12 text-flame" />,
      title: "Community Partnerships",
      description: "Building strong relationships with local organizations to create lasting positive change."
    },
    {
      icon: <School className="w-12 h-12 text-flame" />,
      title: "Educational Support",
      description: "Providing resources and infrastructure improvements to schools in need."
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h1>
            <p className="text-xl text-gray-200 mb-8">
              Learn about our programs and initiatives that create lasting positive change in communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Approach" 
                subtitle="We believe in sustainable development and empowering communities to create lasting change."
              />
              <p className="text-gray-600 mb-6">
                Our approach combines immediate assistance with long-term development strategies. We work closely with communities to understand their needs and implement solutions that create sustainable impact.
              </p>
              <p className="text-gray-600 mb-6">
                Through our various programs and partnerships, we focus on education, community development, and youth empowerment to build stronger, more resilient communities.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg"
                alt="Community outreach" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Programs" 
            subtitle="Discover the various ways we work to create positive change in communities."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-4">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Impact" 
            subtitle="See how our work makes a difference in communities around the world."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-flame mb-2">5,000+</p>
              <p className="text-gray-600">People Helped</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-flame mb-2">25+</p>
              <p className="text-gray-600">Communities Served</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-flame mb-2">15</p>
              <p className="text-gray-600">Active Programs</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-flame mb-2">300+</p>
              <p className="text-gray-600">Volunteers</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDo;