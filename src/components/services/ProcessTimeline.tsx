
import React from 'react';
import VerticalProcessTimeline from '@/components/VerticalProcessTimeline';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessTimeline = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">{t('services.process.title')}</h2>
          <p className="text-lg text-text/80 mb-8">
            {t('services.process.subtitle')}
          </p>
          
          <VerticalProcessTimeline />
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
