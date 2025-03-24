
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import './DevProcessLine.css';

interface ProcessStepProps {
  number: number;
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  titleKey, 
  descriptionKey, 
  icon,
  isLast = false
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="vertical-timeline-element">
      <div className="vertical-timeline-element-icon">
        {icon}
      </div>
      <div className="vertical-timeline-element-content">
        <div className="flex items-center mb-2">
          <span className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-2">
            {number}
          </span>
          <h4 className="text-lg font-medium step-title">{t(titleKey)}</h4>
        </div>
        <p className="text-text/90">
          {t(descriptionKey)}
        </p>
      </div>
    </div>
  );
};

const DevProcessVertical: React.FC = () => {
  const { t } = useLanguage();
  
  const processSteps = [
    {
      titleKey: 'services.process.discovery.title', 
      descriptionKey: 'services.process.discovery.description',
      icon: <Check className="h-3 w-3 text-primary" />
    },
    {
      titleKey: 'services.process.planning.title', 
      descriptionKey: 'services.process.planning.description',
      icon: <Check className="h-3 w-3 text-primary" />
    },
    {
      titleKey: 'services.process.development.title', 
      descriptionKey: 'services.process.development.description',
      icon: <Check className="h-3 w-3 text-primary" />
    },
    {
      titleKey: 'services.process.testing.title', 
      descriptionKey: 'services.process.testing.description',
      icon: <Check className="h-3 w-3 text-primary" />
    },
    {
      titleKey: 'services.process.deployment.title', 
      descriptionKey: 'services.process.deployment.description',
      icon: <Check className="h-3 w-3 text-primary" />
    },
    {
      titleKey: 'services.process.maintenance.title', 
      descriptionKey: 'services.process.maintenance.description',
      icon: <Check className="h-3 w-3 text-primary" />
    }
  ];
  
  return (
    <div className="py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="mb-4">{t('services.process.title')}</h3>
        <p className="text-lg text-text/80">
          {t('services.process.subtitle')}
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto relative">
        <div className="vertical-timeline">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              titleKey={step.titleKey}
              descriptionKey={step.descriptionKey}
              icon={step.icon}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevProcessVertical;
