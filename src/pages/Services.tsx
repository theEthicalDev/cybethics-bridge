
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Cog, 
  Terminal, 
  GitBranch, 
  ServerCog, 
  Monitor, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import DevProcessVertical from '@/components/DevProcessVertical';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      titleKey: 'services.software.title',
      descriptionKey: 'services.software.description',
    },
    {
      icon: <Cog className="h-6 w-6 text-primary" />,
      titleKey: 'services.automation.title',
      descriptionKey: 'services.automation.description',
    },
    {
      icon: <Terminal className="h-6 w-6 text-primary" />,
      titleKey: 'services.scripting.title',
      descriptionKey: 'services.scripting.description',
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      titleKey: 'services.cicd.title',
      descriptionKey: 'services.cicd.description',
    },
    {
      icon: <ServerCog className="h-6 w-6 text-primary" />,
      titleKey: 'services.api.title',
      descriptionKey: 'services.api.description',
    },
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      titleKey: 'services.takeover.title',
      descriptionKey: 'services.takeover.description',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">{t('services.hero.title')}</h1>
            <p className="text-lg md:text-xl text-text/80 mb-8">
              {t('services.hero.subtitle')}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
              <Link to="/contact">
                {t('contact.booking')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">{t('services.title')}</h2>
            <p className="text-lg text-text/80">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <DevProcessVertical />
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">{t('services.cta.title')}</h2>
            <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full group">
              <Link to="/contact">
                {t('contact.start')}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
