
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  GitMerge,
  Code2,
  ArrowRight,
  Check,
  Book,
  Rocket,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VerticalTimeline from '@/components/VerticalTimeline';
import {useLanguage} from '@/contexts/LanguageContext.tsx';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBgColor: string;
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  technologies: string[];
}

const DetailedServiceTabs = () => {
  const { t } = useLanguage();

  const serviceDetails: ServiceDetail[] = [
    {
      id: "automation",
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      icon: <Zap className="h-6 w-6 md:h-12 md:w-12" />,
      iconColor: "text-primary",
      iconBgColor: "bg-primary/10",
      benefits: [
        t('services.automation.benefit1'),
        t('services.automation.benefit2'),
        t('services.automation.benefit3'),
        t('services.automation.benefit4')
      ],
      process: [
        {
          title: t('services.automation.process1.title'),
          description: t('services.automation.process1.description')
        },
        {
          title: t('services.automation.process2.title'),
          description: t('services.automation.process2.description')
        },
        {
          title: t('services.automation.process3.title'),
          description: t('services.automation.process3.description')
        },
        {
          title: t('services.automation.process4.title'),
          description: t('services.automation.process4.description')
        }
      ],
      technologies: ["Python", "PowerAutomate", "Zapier", "Make", "n8n", "Node.js", "Bash", "PowerShell"],
    },
    {
      id: "integration",
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      icon: <GitMerge className="h-6 w-6 md:h-12 md:w-12" />,
      iconColor: "text-primary-light",
      iconBgColor: "bg-primary-light/10",
      benefits: [
        t('services.integration.benefit1'),
        t('services.integration.benefit2'),
        t('services.integration.benefit3'),
        t('services.integration.benefit4')
      ],
      process: [
        {
          title: t('services.integration.process1.title'),
          description: t('services.integration.process1.description')
        },
        {
          title: t('services.integration.process2.title'),
          description: t('services.integration.process2.description')
        },
        {
          title: t('services.integration.process3.title'),
          description: t('services.integration.process3.description')
        },
        {
          title: t('services.integration.process4.title'),
          description: t('services.integration.process4.description')
        }
      ],
      technologies: ["REST API", "GraphQL", "Webhooks", "SFTP", "OAuth", "JWT", "Message Queues", "ETL"]
    },
    {
      id: "software",
      title: t('services.software.title'),
      description: t('services.software.description'),
      icon: <Code2 className="h-6 w-6 md:h-12 md:w-12" />,
      iconColor: "text-purple-600",
      iconBgColor: "bg-purple-500/10",
      benefits: [
        t('services.software.benefit1'),
        t('services.software.benefit2'),
        t('services.software.benefit3'),
        t('services.software.benefit4')
      ],
      process: [
        {
          title: t('services.software.process1.title'),
          description: t('services.software.process1.description')
        },
        {
          title: t('services.software.process2.title'),
          description: t('services.software.process2.description')
        },
        {
          title: t('services.software.process3.title'),
          description: t('services.software.process3.description')
        },
        {
          title: t('services.software.process4.title'),
          description: t('services.software.process4.description')
        }
      ],
      technologies: ["React", "Angular", "Node.js", "Spring Boot", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
    }
  ];

  return (
    <section className="bg-gray-50">
      <div className="container pb-12">
        <Tabs defaultValue="automation" className="w-full">
          <div className="overflow-x-auto scroll-smooth" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <TabsList className="w-max mx-auto mb-12 bg-white p-1 rounded-full flex justify-between">
              <TabsTrigger
                value="automation"
                className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <Zap className="mr-2 h-4 w-4" />
              {t('services.automation.title')}
            </TabsTrigger>
            <TabsTrigger
              value="integration"
              className="flex items-center data-[state=active]:bg-primary-light data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <GitMerge className="mr-2 h-4 w-4" />
              {t('services.integration.title')}
            </TabsTrigger>
            <TabsTrigger
              value="software"
              className="flex items-center data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <Code2 className="mr-2 h-4 w-4" />
              {t('services.software.title')}
            </TabsTrigger>
          </TabsList>
          </div>

          {serviceDetails.map((service) => (
            <TabsContent key={service.id} value={service.id} className="focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-10">
                    <div className={`${service.iconBgColor} p-6 rounded-2xl md:w-auto w-max`}>
                      <div className={service.iconColor}>{service.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-lg text-text/80">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                    <div>
                      <h4 className="text-xl font-medium mb-4 flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-primary" />
                        {t('services.benefits')}
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className={`h-5 w-5 mr-2 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium mb-4 flex items-center">
                        <Layers className="mr-2 h-5 w-5 text-primary" />
                        {t('services.technologies')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-text/90 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium mb-4 flex items-center">
                        <Book className="mr-2 h-5 w-5 text-primary" />
                        {t('services.whyChooseUs')}
                      </h4>
                      <p className="text-text/80 mb-4">
                        {t('services.whyChooseUsDescription')}
                      </p>
                      <Button asChild className="rounded-full group">
                        <Link to="/contact">
                          {t('services.getStarted')}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <h4 className="text-xl font-medium mb-8 flex items-center">
                      <Rocket className="mr-2 h-5 w-5 text-primary" />
                      {t('services.implementationProcess')}
                    </h4>
                    <VerticalTimeline items={service.process} />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DetailedServiceTabs;
