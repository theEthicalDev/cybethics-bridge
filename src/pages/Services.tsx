
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCategories from '@/components/services/ServiceCategories';
import DetailedServiceTabs from '@/components/services/DetailedServiceTabs';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <DetailedServiceTabs />
      <ServicesCTA />
    </div>
  );
};

export default Services;
