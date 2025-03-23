
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cog, Terminal, GitBranch, ServerCog, CheckCircle } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'software',
      icon: <Code className="h-6 w-6 text-primary" />,
      titleKey: 'services.software.title',
      descriptionKey: 'services.software.description',
      features: [
        'Web Applications',
        'Desktop Applications',
        'Mobile Applications',
        'Custom Software',
        'User Experience Design',
        'Responsive Interfaces',
        'Cross-platform Solutions',
        'Progressive Web Apps',
      ],
      technologies: ['Spring Boot', 'Angular', 'React', 'Node.js', 'Java', 'TypeScript', 'Flutter', 'Electron'],
    },
    {
      id: 'automation',
      icon: <Cog className="h-6 w-6 text-primary" />,
      titleKey: 'services.automation.title',
      descriptionKey: 'services.automation.description',
      features: [
        'Workflow Automation',
        'Business Process Optimization',
        'Task Automation',
        'Scheduled Processes',
        'Data Integration',
        'Custom Automation Flows',
        'Document Processing',
        'Approval Workflows',
      ],
      technologies: ['Microsoft PowerAutomate', 'Zapier', 'UiPath', 'Azure Logic Apps', 'Make (Integromat)', 'n8n'],
    },
    {
      id: 'scripting',
      icon: <Terminal className="h-6 w-6 text-primary" />,
      titleKey: 'services.scripting.title',
      descriptionKey: 'services.scripting.description',
      features: [
        'Maintenance Scripts',
        'Batch Processing',
        'Data Transformation',
        'Reporting Scripts',
        'System Scripts',
        'Monitoring Scripts',
        'Backup Solutions',
        'Deployment Scripts',
      ],
      technologies: ['PowerShell', 'Python', 'Bash', 'JavaScript', 'Ruby', 'Perl', 'Groovy', 'PHP'],
    },
    {
      id: 'cicd',
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      titleKey: 'services.cicd.title',
      descriptionKey: 'services.cicd.description',
      features: [
        'Continuous Integration',
        'Continuous Delivery',
        'Automated Testing',
        'Version Control',
        'Infrastructure as Code',
        'Automated Deployment',
        'Quality Assurance',
        'Release Management',
      ],
      technologies: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Azure DevOps', 'CircleCI', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      id: 'api',
      icon: <ServerCog className="h-6 w-6 text-primary" />,
      titleKey: 'services.api.title',
      descriptionKey: 'services.api.description',
      features: [
        'RESTful APIs',
        'GraphQL Endpoints',
        'SOAP Services',
        'API Gateway Solutions',
        'Third-party API Integration',
        'API Documentation',
        'API Security',
        'Webhook Implementation',
      ],
      technologies: ['REST', 'GraphQL', 'Swagger/OpenAPI', 'OAuth', 'WebSockets', 'gRPC', 'JSON:API', 'Postman'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{t('services.title')}</span>
            </div>
            <h1 className="mb-6">{t('services.title')}</h1>
            <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="software" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-nowrap mb-8 p-1 bg-gray-100/50 rounded-lg animate-fade-up">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md whitespace-nowrap"
                >
                  {service.icon}
                  <span>{t(`services.${service.id}.title`)}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
                className="mt-0 animate-fade-up"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card className="col-span-1 border-0 shadow-sm bg-gradient-to-br from-gray-50 to-white">
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                        {service.icon}
                      </div>
                      <CardTitle>{t(`services.${service.id}.title`)}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {t(`services.${service.id}.description`)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-text/70 px-2.5 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="col-span-1 lg:col-span-2 border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">Key Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Process Section */}
                <div className="mt-16">
                  <h3 className="text-2xl font-medium mb-8">Our Development Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {['Discovery', 'Planning', 'Implementation', 'Delivery'].map((phase, index) => (
                      <div key={phase} className="relative">
                        <div className="relative z-10">
                          <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 ${index === 0 ? 'border-primary' : 'border-primary/40'}`}>
                            <span className="text-primary font-medium">{index + 1}</span>
                          </div>
                          {index < 3 && (
                            <div className="absolute top-6 left-12 w-full h-0.5 bg-primary/20"></div>
                          )}
                        </div>
                        <h4 className="text-lg font-medium mb-2">{phase}</h4>
                        <p className="text-text/80">
                          {index === 0 && "We understand your requirements and business goals."}
                          {index === 1 && "We create a detailed plan with timeline and deliverables."}
                          {index === 2 && "We develop the solution with regular updates and testing."}
                          {index === 3 && "We deliver the finished product with support and training."}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gray-50 rounded-3xl p-12 text-center relative overflow-hidden border border-gray-100 animate-scale-in">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Ready to discuss your project?</h2>
              <p className="text-lg text-text/80 mb-8">Schedule a consultation with our experts to explore how we can help your business thrive with our services.</p>
              <a 
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-white shadow-sm transition-colors hover:bg-primary/90"
              >
                {t('contact.booking')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
