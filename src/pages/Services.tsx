
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cog, Terminal, GitBranch, ServerCog, CheckCircle, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../components/DevProcessLine.css';

const Services = () => {
  const { t } = useLanguage();
  const [activeProcess, setActiveProcess] = useState<number | null>(0);
  
  // Set up animation for staggered elements
  useEffect(() => {
    const elements = document.querySelectorAll('.vertical-timeline-element');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

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
    {
      id: 'takeover',
      icon: <Monitor className="h-6 w-6 text-primary" />,
      titleKey: 'services.takeover.title',
      descriptionKey: 'services.takeover.description',
      features: [
        'Website Management',
        'IT Support',
        'Systems Administration',
        'Help Desk Services',
        'Infrastructure Management',
        'Security Monitoring',
        'Complete IT Offshoring',
        'Ongoing Maintenance',
      ],
      technologies: ['IT Helpdesk', 'Website Management', 'System Administration', 'Network Management', 'Security Monitoring', 'Remote Support'],
    },
  ];

  const processSteps = [
    {
      title: 'dev.process.discovery',
      description: 'dev.process.discovery.desc',
      detailedDesc: 'dev.process.discovery.detailed',
      icon: '🔍'
    },
    {
      title: 'dev.process.planning',
      description: 'dev.process.planning.desc',
      detailedDesc: 'dev.process.planning.detailed',
      icon: '📝'
    },
    {
      title: 'dev.process.implementation',
      description: 'dev.process.implementation.desc',
      detailedDesc: 'dev.process.implementation.detailed',
      icon: '⚙️'
    },
    {
      title: 'dev.process.delivery',
      description: 'dev.process.delivery.desc',
      detailedDesc: 'dev.process.delivery.detailed',
      icon: '🚀'
    },
    {
      title: 'dev.process.support',
      description: 'dev.process.support.desc',
      detailedDesc: 'dev.process.support.detailed',
      icon: '🛠️'
    }
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
            <div className="mb-8 overflow-visible">
              <TabsList className="w-max flex flex-nowrap mb-8 p-1 bg-gray-100/50 rounded-lg animate-fade-up overflow-visible">
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
            </div>

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

                {/* Vertical Development Process Section */}
                <div className="mt-16">
                  <h3 className="text-2xl font-medium mb-8">{t('dev.process.title')}</h3>
                  
                  <div className="relative px-4">
                    {processSteps.map((phase, index) => (
                      <div 
                        key={index} 
                        className="vertical-timeline-element"
                        onMouseEnter={() => setActiveProcess(index)}
                        onMouseLeave={() => setActiveProcess(null)}
                      >
                        <div 
                          className="vertical-timeline-element-icon"
                          style={{
                            top: index === 0 ? '0' : 'calc(50% - 12px)'
                          }}
                        >
                          <span className="text-primary text-xs font-bold">{index + 1}</span>
                        </div>
                        
                        <div className="vertical-timeline-element-content">
                          <div className="flex items-center mb-3">
                            <span className="text-xl mr-2">{phase.icon}</span>
                            <h4 className="text-lg font-medium">{t(phase.title)}</h4>
                          </div>
                          <p className="text-text/80 mb-4">
                            {t(phase.description)}
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p className="text-text/70 text-sm">
                              {t(phase.detailedDesc)}
                            </p>
                          </div>
                        </div>
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
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-white shadow-sm transition-colors hover:bg-primary/90"
              >
                {t('contact.booking')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
