import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { projects } from '../data';
import { Calendar, Users } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our ongoing and completed projects that are making a difference in communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Current Projects" 
            subtitle="Learn about our active initiatives and their impact on communities."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-500 mb-4 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.date}</span>
                    <div className="mx-2 h-1 w-1 rounded-full bg-gray-300"></div>
                    <Users className="w-4 h-4 mr-1" />
                    <span>{project.impact}</span>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-flame text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Help?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in making a difference. There are many ways you can contribute to our projects and help create positive change.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/get-involved" 
              className="bg-white text-flame px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </a>
            <a 
              href="/donate" 
              className="bg-navy text-white px-8 py-3 rounded-full font-bold hover:bg-navy-dark transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;