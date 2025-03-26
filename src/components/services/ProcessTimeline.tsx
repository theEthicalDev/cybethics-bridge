
import React from 'react';
import VerticalTimeline from '@/components/VerticalTimeline';

const ProcessTimeline = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Development Process</h2>
          <p className="text-lg text-text/80 mb-12">
            We follow a proven methodology to deliver successful projects
          </p>
          
          <VerticalTimeline items={[
            { 
              title: "Discovery", 
              description: "We work closely with you to understand your business needs, goals, and challenges."
            },
            { 
              title: "Planning", 
              description: "Our team develops a detailed project plan with clear milestones and deliverables."
            },
            { 
              title: "Development", 
              description: "We implement the solution using agile methodologies with regular client feedback."
            },
            { 
              title: "Testing", 
              description: "Rigorous testing ensures the solution meets all requirements and quality standards."
            },
            { 
              title: "Deployment", 
              description: "We ensure smooth deployment with minimal disruption to your business."
            },
            { 
              title: "Support", 
              description: "Ongoing support and maintenance keep your solution running optimally."
            }
          ]} />
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
