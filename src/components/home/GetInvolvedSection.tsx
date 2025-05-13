import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Calendar, Users, Heart, HandHelping } from 'lucide-react';

const GetInvolvedSection: React.FC = () => {
  const ways = [
    {
      icon: <HandHelping className="w-16 h-16 text-orange mb-4" />,
      title: "Volunteer",
      description: "Donate your time and skills to make a direct impact in our community projects."
    },
    {
      icon: <Heart className="w-16 h-16 text-orange mb-4" />,
      title: "Donate",
      description: "Your financial support enables us to continue and expand our community initiatives."
    },
    {
      icon: <Users className="w-16 h-16 text-orange mb-4" />,
      title: "Partner",
      description: "Organizations can partner with us on projects to create greater community impact."
    },
    {
      icon: <Calendar className="w-16 h-16 text-orange mb-4" />,
      title: "Attend Events",
      description: "Join our community events to connect, learn, and support our mission."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get Involved" 
          subtitle="There are many ways you can join our mission and make a difference in your community."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ways.map((way, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center">{way.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{way.title}</h3>
              <p className="text-gray-600 mb-4">{way.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/get-involved" size="lg">
            Learn How To Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;