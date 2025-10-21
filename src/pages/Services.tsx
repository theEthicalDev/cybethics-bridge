
import React from 'react';
import ServiceHero from '@/components/services/ServiceHero';
import AIDPillars from '@/components/aid/AIDPillars';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <AIDPillars />
      <ServicesCTA />
    </div>
  );
};

export default Services;
