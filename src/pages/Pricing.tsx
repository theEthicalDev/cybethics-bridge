
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PricingHero from '@/components/pricing/PricingHero';
import PricingInformation from '@/components/pricing/PricingInformation';
import ProjectCalculator from '@/components/pricing/ProjectCalculator';
import MaintenancePackages from '@/components/pricing/MaintenancePackages';

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <PricingHero />
      <PricingInformation />
      <ProjectCalculator />
      <MaintenancePackages />
    </div>
  );
};

export default Pricing;
