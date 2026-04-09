
import React from 'react';
import SEOHelmet from '@/components/SEOHelmet';
import { useLanguage } from '@/contexts/LanguageContext';
import PricingHero from '@/components/pricing/PricingHero';
import PricingInformation from '@/components/pricing/PricingInformation';
import ProjectCalculator from '@/components/pricing/ProjectCalculator';
import MaintenancePackages from '@/components/pricing/MaintenancePackages';

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEOHelmet
        titleDe="Preise – Transparente Kosten für Digitalisierung | Cybethics"
        titleEn="Pricing – Transparent Costs for Digitalization | Cybethics"
        descriptionDe="Transparente Preise für Automatisierung, Integration und Softwareentwicklung. Interaktiver Projektkalkulator für Euer KMU."
        descriptionEn="Transparent pricing for automation, integration and software development. Interactive project calculator for your SME."
        path="/pricing"
      />
      <PricingHero />
      <PricingInformation />
      <ProjectCalculator />
      <MaintenancePackages />
    </div>
  );
};

export default Pricing;
