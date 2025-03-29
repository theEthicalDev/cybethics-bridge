
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Code, Cog, Network, Terminal, GitBranch, Smartphone, Monitor } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const DetailedServiceTabs = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const serviceCategories = [
    {
      id: 'software',
      icon: <Smartphone className="h-5 w-5" />,
      title: 'Software Development',
      description: 'Custom web and mobile application development tailored to your business needs.',
      detailedDescription:
        'Our software development services cover everything from initial concept to deployment and maintenance. We build scalable, secure, and user-friendly applications using the latest technologies and best practices.',
      points: [
        'Custom Web Applications',
        'Progressive Web Apps (PWAs)',
        'Mobile App Development',
        'E-commerce Solutions',
        'Content Management Systems',
        'Backend Systems & Databases',
      ],
      icon2: <Code className="h-14 w-14 md:h-20 md:w-20 text-primary/50 mb-4" />,
    },
    {
      id: 'automation',
      icon: <Cog className="h-5 w-5" />,
      title: 'Process Automation',
      description: 'Streamline your business operations with custom automation solutions.',
      detailedDescription:
        'Our automation services help businesses eliminate repetitive tasks, reduce human error, and increase efficiency. We identify opportunities for automation and implement solutions that save time and resources.',
      points: [
        'Business Process Automation',
        'Workflow Optimization',
        'RPA (Robotic Process Automation)',
        'Microsoft Power Automate Solutions',
        'Zapier Integrations',
        'Custom Scripting for Automation',
      ],
      icon2: <Cog className="h-14 w-14 md:h-20 md:w-20 text-primary/50 mb-4" />,
    },
    {
      id: 'api',
      icon: <Network className="h-5 w-5" />,
      title: 'API Development',
      description:
        'Connect your systems and services with custom APIs for seamless integration.',
      detailedDescription:
        'Our API development services enable businesses to connect disparate systems, expose functionality, and integrate with third-party services. We build secure, scalable, and well-documented APIs that meet your integration needs.',
      points: [
        'RESTful API Development',
        'GraphQL APIs',
        'API Gateway Implementation',
        'System Integration Services',
        'Legacy System APIs',
        'API Documentation & Testing',
      ],
      icon2: <Network className="h-14 w-14 md:h-20 md:w-20 text-primary/50 mb-4" />,
    },
    {
      id: 'scripting',
      icon: <Terminal className="h-5 w-5" />,
      title: 'Scripting Solutions',
      description:
        'Custom scripts for data processing, file manipulation, and system tasks.',
      detailedDescription:
        'Our scripting services help businesses automate tasks, process data, and solve specific technical challenges. We develop scripts that can run on-demand or on schedule to handle various system operations.',
      points: [
        'Python Scripting',
        'Shell Scripting',
        'PowerShell Scripts',
        'Data Processing & Extraction',
        'System Maintenance Scripts',
        'Schedule & Task Automation',
      ],
      icon2: <Terminal className="h-14 w-14 md:h-20 md:w-20 text-primary/50 mb-4" />,
    },
    {
      id: 'cicd',
      icon: <GitBranch className="h-5 w-5" />,
      title: 'CI/CD Implementation',
      description:
        'Streamline development with automated build, test, and deployment pipelines.',
      detailedDescription:
        'Our CI/CD services help development teams automate the software delivery process. We set up pipelines that build, test, and deploy code changes automatically, ensuring faster and more reliable releases.',
      points: [
        'CI/CD Pipeline Setup',
        'Jenkins Configuration',
        'GitHub Actions Implementation',
        'Docker & Containerization',
        'Deployment Automation',
        'Quality Gate Integration',
      ],
      icon2: <GitBranch className="h-14 w-14 md:h-20 md:w-20 text-primary/50 mb-4" />,
    },
    {
      id: 'offshoring',
      icon: <Monitor className="h-5 w-5" />,
      title: 'IT Offshoring',
      description:
        'Comprehensive IT support and maintenance for your business infrastructure.',
      detailedDescription:
        'Our IT offshoring services provide businesses with reliable IT support and maintenance without the overhead of an in-house IT department. We handle everything from day-to-day support to strategic IT planning.',
      points: [
        'Help Desk Support',
        'Network Administration',
        'System Monitoring & Maintenance',
        'Security Management',
        'Backup & Recovery',
        'IT Infrastructure Planning',
      ],
      icon2: <Monitor className="h-14 w-14 md:h-20 md:w-20 text-primary/50 mb-4" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">{t('services.detailed.title')}</h2>
          <p className="text-lg text-text/80">
            {t('services.detailed.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="software" className="w-full">
          <div className="overflow-x-auto pb-4 scrollbar-none">
            <TabsList className="flex h-auto p-1 bg-gray-100/80 rounded-xl mb-12 mx-auto max-w-4xl">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 py-3 px-4 whitespace-nowrap rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
                >
                  {category.icon}
                  <span className="text-sm font-medium">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1 flex flex-col items-start lg:sticky lg:top-24 self-start">
                  <div className="mb-6 flex justify-center w-full lg:justify-start">
                    {category.icon2}
                  </div>
                  <h3 className="text-2xl font-medium mb-4 text-center lg:text-left w-full">
                    {category.title}
                  </h3>
                  <p className="text-text/80 mb-6 text-center lg:text-left">
                    {category.detailedDescription}
                  </p>
                  
                  {!isMobile && (
                    <div className="space-y-6 w-full">
                      <div>
                        <h4 className="text-lg font-medium mb-4">Our Implementation Process</h4>
                        <Card className="border-0 shadow-sm">
                          <CardContent className="p-6 space-y-4">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                                <span className="text-primary font-medium">1</span>
                              </div>
                              <div>
                                <h5 className="font-medium mb-1">Discovery & Planning</h5>
                                <p className="text-sm text-text/70">
                                  We analyze your requirements and develop a detailed implementation plan.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                                <span className="text-primary font-medium">2</span>
                              </div>
                              <div>
                                <h5 className="font-medium mb-1">Development & Testing</h5>
                                <p className="text-sm text-text/70">
                                  We build and test your solution using agile methodologies.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                                <span className="text-primary font-medium">3</span>
                              </div>
                              <div>
                                <h5 className="font-medium mb-1">Deployment & Support</h5>
                                <p className="text-sm text-text/70">
                                  We deploy your solution and provide ongoing maintenance and support.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.points.map((point, index) => (
                      <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium mb-1">{point}</h4>
                              <p className="text-sm text-text/70">
                                {t(`services.${category.id}.point${index + 1}`, {
                                  defaultValue: 'Professional implementation with focus on quality and efficiency.',
                                })}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
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
