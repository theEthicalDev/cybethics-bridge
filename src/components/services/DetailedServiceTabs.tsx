
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
      id: "software",
      title: t('services.software.title'),
      description: t('services.software.description'),
      icon: <Code className="h-6 w-6 md:h-12 md:w-12 text-primary" />,
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
      technologies: ["Angular", "Spring Boot", "Java", "Python", "React", "PostgreSQL", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: "automation",
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      icon: <Cog className="h-6 w-6 md:h-12 md:w-12 text-primary" />,
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
      technologies: ["Workflow Engines", "Middleware", "Integration platforms", "Scripting", "API"],
    },
    {
      id: "integration",
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      icon: <Network className="h-6 w-6 md:h-12 md:w-12 text-primary" />,
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
      technologies: ["Development", "API", "Integration", "Middleware", "Data", "Batch"]
    },
    {
      id: "cicd",
      title: t('services.cicd.title'),
      description: t('services.cicd.description'),
      icon: <GitBranch className="h-6 w-6 md:h-12 md:w-12 text-primary" />,
      benefits: [
        t('services.cicd.benefit1'),
        t('services.cicd.benefit2'),
        t('services.cicd.benefit3'),
        t('services.cicd.benefit4')
      ],
      process: [
        {
          title: t('services.cicd.process1.title'),
          description: t('services.cicd.process1.description')
        },
        {
          title: t('services.cicd.process2.title'),
          description: t('services.cicd.process2.description')
        },
        {
          title: t('services.cicd.process3.title'),
          description: t('services.cicd.process3.description')
        },
        {
          title: t('services.cicd.process4.title'),
          description: t('services.cicd.process4.description')
        }
      ],
      technologies: ["GitHub Actions", "Jenkins", "GitLab CI", "Docker", "Kubernetes", "Terraform", "Ansible", "AWS/Azure DevOps"]
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

        <Tabs defaultValue="software" className="w-full">
          <div className="overflow-x-auto scroll-smooth" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <TabsList className="w-max mx-auto mb-12 bg-white p-1 rounded-full flex justify-between">
              <TabsTrigger
                value="software"
                className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <Code className="mr-2 h-4 w-4" />
              {t('services.software.title')}
            </TabsTrigger>
            <TabsTrigger
              value="automation"
              className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <Cog className="mr-2 h-4 w-4" />
              {t('services.automation.title')}
            </TabsTrigger>
            <TabsTrigger
              value="integration"
              className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <Network className="mr-2 h-4 w-4" />
              {t('services.integration.title')}
            </TabsTrigger>
            <TabsTrigger
              value="cicd"
              className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
            >
              <GitBranch className="mr-2 h-4 w-4" />
              {t('services.cicd.title')}
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
