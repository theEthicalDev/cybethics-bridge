
import React from 'react';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCategories from '@/components/services/ServiceCategories';
import DetailedServiceTabs from '@/components/services/DetailedServiceTabs';
import ServiceCards from '@/components/services/ServiceCards';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <ServiceCategories />
      <DetailedServiceTabs />
      <ServiceCards />
      <ProcessTimeline />
      <ServicesCTA />
    </div>
  );
};

export default Services;
