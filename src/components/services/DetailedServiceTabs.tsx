
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Cog,
  Network,
  Monitor,
  ArrowRight,
  Check,
  Book,
  Rocket,
  Zap,
  Layers,
  GitBranch
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
      id: "automate",
      title: t('aid.automate.title'),
      description: t('aid.automate.description'),
      icon: <Cog className="h-6 w-6 md:h-12 md:w-12 text-aid-automate" />,
      benefits: [
        t('aid.automate.benefit1'),
        t('aid.automate.benefit2'),
        t('aid.automate.benefit3'),
        t('aid.automate.benefit4')
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
      technologies: ["Workflow Engines", "PowerAutomate", "Zapier", "Scripting", "Python", "AI Automation"],
    },
    {
      id: "integrate",
      title: t('aid.integrate.title'),
      description: t('aid.integrate.description'),
      icon: <Network className="h-6 w-6 md:h-12 md:w-12 text-aid-integrate" />,
      benefits: [
        t('aid.integrate.benefit1'),
        t('aid.integrate.benefit2'),
        t('aid.integrate.benefit3'),
        t('aid.integrate.benefit4')
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
      technologies: ["REST API", "GraphQL", "Middleware", "Data Sync", "Webhooks", "Event-Driven"]
    },
    {
      id: "develop",
      title: t('aid.develop.title'),
      description: t('aid.develop.description'),
      icon: <Code className="h-6 w-6 md:h-12 md:w-12 text-aid-develop" />,
      benefits: [
        t('aid.develop.benefit1'),
        t('aid.develop.benefit2'),
        t('aid.develop.benefit3'),
        t('aid.develop.benefit4')
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
      technologies: ["Angular", "Spring Boot", "React", "Node.js", "PostgreSQL", "Docker", "CI/CD", "DevOps"]
    }
  ];

  return (
    <section className="bg-gray-50">
      <div className="container pb-12">
        {/*<div className="text-center max-w-2xl mx-auto mb-16">*/}
        {/*  <h2 className="mb-4">{t('services.detailSubtitle')}</h2>*/}
        {/*  <p className="text-lg text-text/80">*/}
        {/*    {t('services.detailDescription')}*/}
        {/*  </p>*/}
        {/*</div>*/}

        <Tabs defaultValue="automate" className="w-full">
          <div className="overflow-x-auto scroll-smooth" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <TabsList className="w-max mx-auto mb-12 bg-white p-1 rounded-full flex justify-between">
              <TabsTrigger
                value="automate"
                className="flex items-center data-[state=active]:bg-aid-automate data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <Cog className="mr-2 h-4 w-4" />
              {t('aid.automate.title')}
            </TabsTrigger>
            <TabsTrigger
              value="integrate"
              className="flex items-center data-[state=active]:bg-aid-integrate data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <Network className="mr-2 h-4 w-4" />
              {t('aid.integrate.title')}
            </TabsTrigger>
            <TabsTrigger
              value="develop"
              className="flex items-center data-[state=active]:bg-aid-develop data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <Code className="mr-2 h-4 w-4" />
              {t('aid.develop.title')}
            </TabsTrigger>
          </TabsList>
          </div>

          {serviceDetails.map((service) => (
            <TabsContent key={service.id} value={service.id} className="focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-10">
                    <div className="bg-primary/10 p-6 rounded-2xl md:w-auto w-max">
                      {service.icon}
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
                            <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
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
