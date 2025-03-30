
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const ServiceTab = ({ 
  value, 
  icon, 
  title 
}: { 
  value: string; 
  icon: React.ReactNode; 
  title: string; 
}) => {
  return (
    <TabsTrigger 
      value={value}
      className="py-3 px-4 flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-white"
    >
      <span className="hidden md:inline mr-2">{icon}</span>
      <span>{title}</span>
    </TabsTrigger>
  );
};

const ServiceDetail = ({
  title,
  description,
  benefits,
  process,
  icon
}: {
  title: string;
  description: string;
  benefits: string;
  process: string;
  icon: React.ReactNode;
}) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                {icon}
              </div>
              <div>
                <CardTitle className="text-2xl">{title}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-lg">{description}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">{t('detailed.benefits')}</h4>
              <p>{benefits}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">{t('detailed.approach')}</h4>
              <p>{process}</p>
            </div>
            
            <div className="pt-4">
              <Button asChild className="group">
                <Link to="/contact" className="flex items-center">
                  {t('contact.start')}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {!isMobile && (
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{t('detailed.process.title')}</CardTitle>
              <CardDescription>{t('detailed.process.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <h4 className="text-sm font-medium">{t('services.process.discovery.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('services.process.discovery.description').split('.')[0]}.</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <h4 className="text-sm font-medium">{t('services.process.planning.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('services.process.planning.description').split('.')[0]}.</p>
                </div>
                <div className="border-l-2 border-primary/50 pl-4 py-2">
                  <h4 className="text-sm font-medium">{t('services.process.development.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('services.process.development.description').split('.')[0]}.</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <h4 className="text-sm font-medium">{t('services.process.testing.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('services.process.testing.description').split('.')[0]}.</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <h4 className="text-sm font-medium">{t('services.process.deployment.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('services.process.deployment.description').split('.')[0]}.</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <h4 className="text-sm font-medium">{t('services.process.maintenance.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('services.process.maintenance.description').split('.')[0]}.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

const DetailedServiceTabs = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const services = [
    {
      value: "software",
      icon: <Code className="h-5 w-5 text-primary" />,
      titleKey: 'detailed.services.software.title',
      descriptionKey: 'detailed.services.software.description',
      benefitsKey: 'detailed.services.software.benefits',
      processKey: 'detailed.services.software.process',
    },
    {
      value: "automation",
      icon: <Cog className="h-5 w-5 text-primary" />,
      titleKey: 'detailed.services.automation.title',
      descriptionKey: 'detailed.services.automation.description',
      benefitsKey: 'detailed.services.automation.benefits',
      processKey: 'detailed.services.automation.process',
    },
    {
      value: "api",
      icon: <ServerCog className="h-5 w-5 text-primary" />,
      titleKey: 'detailed.services.api.title',
      descriptionKey: 'detailed.services.api.description',
      benefitsKey: 'detailed.services.api.benefits',
      processKey: 'detailed.services.api.process',
    },
    {
      value: "scripting",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      titleKey: 'detailed.services.scripting.title',
      descriptionKey: 'detailed.services.scripting.description',
      benefitsKey: 'detailed.services.scripting.benefits',
      processKey: 'detailed.services.scripting.process',
    },
    {
      value: "cicd",
      icon: <GitBranch className="h-5 w-5 text-primary" />,
      titleKey: 'detailed.services.cicd.title',
      descriptionKey: 'detailed.services.cicd.description',
      benefitsKey: 'detailed.services.cicd.benefits',
      processKey: 'detailed.services.cicd.process',
    },
    {
      value: "offshoring",
      icon: <Monitor className="h-5 w-5 text-primary" />,
      titleKey: 'detailed.services.offshoring.title',
      descriptionKey: 'detailed.services.offshoring.description',
      benefitsKey: 'detailed.services.offshoring.benefits',
      processKey: 'detailed.services.offshoring.process',
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="detailed-services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">{t('services.title')}</h2>
          <p className="text-lg text-text/80">
            {t('services.subtitle')}
          </p>
        </div>
        
        <Tabs defaultValue="software" className="w-full">
          <div className={`bg-white rounded-xl p-6 mb-8 overflow-x-auto ${isMobile ? 'w-full' : 'w-fit mx-auto'}`}>
            <TabsList className={`${isMobile ? 'flex overflow-x-auto pb-2 w-max' : ''} bg-gray-100`}>
              {services.map((service) => (
                <ServiceTab 
                  key={service.value}
                  value={service.value}
                  icon={service.icon}
                  title={t(service.titleKey)}
                />
              ))}
            </TabsList>
          </div>
          
          {services.map((service) => (
            <TabsContent key={service.value} value={service.value} className="mt-0">
              <ServiceDetail 
                title={t(service.titleKey)}
                description={t(service.descriptionKey)}
                benefits={t(service.benefitsKey || "")}
                process={t(service.processKey || "")}
                icon={service.icon}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DetailedServiceTabs;
