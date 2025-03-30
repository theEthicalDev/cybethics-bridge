
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {ArrowDown, Check} from 'lucide-react';
import { cn } from '@/lib/utils';
import {useIsMobile} from '@/hooks/use-mobile.tsx';

interface ProcessStep {
  titleKey: string;
  descriptionKey: string;
  icon?: React.ReactNode;
  iconMobile?: React.ReactNode;
}


const VerticalProcessTimeline: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const steps: ProcessStep[] = [
    { 
      titleKey: 'services.process.discovery.title', 
      descriptionKey: 'services.process.discovery.description',
      icon: <Check className="h-4 w-4 text-white" />,
      iconMobile: <ArrowDown className="h-4 w-4 text-white" />,
    },
    { 
      titleKey: 'services.process.planning.title', 
      descriptionKey: 'services.process.planning.description',
      icon: <Check className="h-4 w-4 text-white" />,
      iconMobile: <ArrowDown className="h-4 w-4 text-white" />,
    },
    { 
      titleKey: 'services.process.development.title', 
      descriptionKey: 'services.process.development.description',
      icon: <Check className="h-4 w-4 text-white" />,
      iconMobile: <ArrowDown className="h-4 w-4 text-white" />,
    },
    { 
      titleKey: 'services.process.testing.title', 
      descriptionKey: 'services.process.testing.description',
      icon: <Check className="h-4 w-4 text-white" />,
      iconMobile: <ArrowDown className="h-4 w-4 text-white" />,
    },
    { 
      titleKey: 'services.process.deployment.title', 
      descriptionKey: 'services.process.deployment.description',
      icon: <Check className="h-4 w-4 text-white" />,
      iconMobile: <ArrowDown className="h-4 w-4 text-white" />,
    },
    { 
      titleKey: 'services.process.maintenance.title', 
      descriptionKey: 'services.process.maintenance.description',
      icon: <Check className="h-4 w-4 text-white" />,
      iconMobile: <ArrowDown className="h-4 w-4 text-white" />,
    }
  ];

  return (
    <div className="max-w-4xl mx-auto relative py-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative z-10">
            {/* Circle on timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              {isMobile ? step.iconMobile : step.icon}
            </div>
            
            {/* Content box */}
            <div className={cn(
              "bg-white p-6 rounded-lg shadow-md w-full md:w-5/12 ml-auto animate-fade-up relative top-6",
              index % 2 === 0 ? "ml-0 mr-auto" : "ml-auto"
            )} style={{ animationDelay: `${index * 150}ms` }}>
              <h3 className="text-lg font-medium mb-2">{t(step.titleKey)}</h3>
              <p className="text-text/80 text-sm">{t(step.descriptionKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalProcessTimeline;
