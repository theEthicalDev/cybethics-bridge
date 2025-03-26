
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
  ArrowRight, 
  Check,
  Book,
  Rocket,
  Zap,
  HardDrive,
  Layers,
  Network
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VerticalTimeline from '@/components/VerticalTimeline';

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
      titleKey: 'services.offshoring.title',
      descriptionKey: 'services.offshoring.description',
    }
  ];
  
  const serviceCategories = [
    {
      title: "Custom Software Development",
      description: "Tailor-made software solutions designed specifically for your business needs and workflows.",
      features: [
        "Web Applications",
        "Desktop Software",
        "Mobile Applications",
        "Enterprise Solutions"
      ],
      color: "from-blue-50 to-indigo-100",
      textColor: "text-indigo-900",
      icon: <Code className="h-10 w-10 text-indigo-700" />
    },
    {
      title: "Process Automation",
      description: "Streamline your business operations by automating repetitive tasks and workflows.",
      features: [
        "Workflow Automation",
        "Business Process Management",
        "Robotic Process Automation",
        "Intelligent Document Processing"
      ],
      color: "from-purple-50 to-violet-100",
      textColor: "text-violet-900",
      icon: <Cog className="h-10 w-10 text-violet-700" />
    },
    {
      title: "System Integration",
      description: "Connect your diverse systems and applications to create a unified and efficient ecosystem.",
      features: [
        "API Development",
        "Middleware Solutions",
        "Legacy System Integration",
        "Cloud Integration"
      ],
      color: "from-teal-50 to-emerald-100",
      textColor: "text-emerald-900",
      icon: <ServerCog className="h-10 w-10 text-emerald-700" />
    },
    {
      title: "IT Offshoring & Support",
      description: "Comprehensive IT support and offshore development services to optimize your operations.",
      features: [
        "Website Takeover",
        "Full IT Offshoring",
        "24/7 Support",
        "Dedicated Development Teams"
      ],
      color: "from-amber-50 to-orange-100",
      textColor: "text-orange-900",
      icon: <Monitor className="h-10 w-10 text-orange-700" />
    }
  ];

  const serviceDetails = [
    {
      id: "software",
      title: "Custom Software Development",
      description: "We develop tailored software solutions to meet your unique business requirements and optimize your operations.",
      icon: <Code className="h-12 w-12 text-primary" />,
      benefits: [
        "Customized solutions aligned with your business goals",
        "Scalable architecture for future growth",
        "Intuitive user interfaces for better adoption",
        "Comprehensive support and maintenance"
      ],
      process: [
        {
          title: "Requirements Analysis",
          description: "We work closely with you to understand your business needs and define clear requirements."
        },
        {
          title: "Design and Architecture",
          description: "Our experts create a robust architecture and intuitive design for your software."
        },
        {
          title: "Development and Testing",
          description: "We implement the solution using agile methodologies with continuous testing."
        },
        {
          title: "Deployment and Support",
          description: "We ensure smooth deployment and provide ongoing support for your software."
        }
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET", "SQL/NoSQL", "DevOps tools"]
    },
    {
      id: "automation",
      title: "Process Automation",
      description: "Streamline your operations by automating repetitive tasks and complex workflows to improve efficiency and reduce errors.",
      icon: <Cog className="h-12 w-12 text-primary" />,
      benefits: [
        "Increased operational efficiency",
        "Reduced human error",
        "Cost savings through optimized processes",
        "Improved data accuracy and consistency"
      ],
      process: [
        {
          title: "Process Analysis",
          description: "We analyze your current workflows to identify automation opportunities."
        },
        {
          title: "Solution Design",
          description: "Our team designs an automation solution tailored to your specific processes."
        },
        {
          title: "Implementation",
          description: "We develop and implement the automation solution with minimal disruption."
        },
        {
          title: "Measurement and Optimization",
          description: "We continuously measure and optimize the automated processes for better results."
        }
      ],
      technologies: ["RPA tools", "Workflow engines", "Integration platforms", "AI/ML", "Custom scripts"]
    },
    {
      id: "integration",
      title: "System Integration",
      description: "Connect your diverse applications, data sources, and systems to create a unified and efficient ecosystem.",
      icon: <Network className="h-12 w-12 text-primary" />,
      benefits: [
        "Seamless data flow across systems",
        "Elimination of data silos",
        "Improved business intelligence",
        "Enhanced operational efficiency"
      ],
      process: [
        {
          title: "System Assessment",
          description: "We analyze your existing systems and integration requirements."
        },
        {
          title: "Integration Strategy",
          description: "Our experts develop a comprehensive integration strategy and architecture."
        },
        {
          title: "Implementation",
          description: "We implement the integration solution using appropriate technologies."
        },
        {
          title: "Testing and Optimization",
          description: "We rigorously test and optimize the integrated system for reliability."
        }
      ],
      technologies: ["API development", "Middleware", "ETL tools", "ESB", "Cloud integration services"]
    },
    {
      id: "offshoring",
      title: "IT Offshoring & Support",
      description: "Leverage our expertise to manage your IT infrastructure and provide continuous support for your business operations.",
      icon: <Monitor className="h-12 w-12 text-primary" />,
      benefits: [
        "Cost-effective IT operations",
        "Access to specialized expertise",
        "24/7 support coverage",
        "Focus on your core business activities"
      ],
      process: [
        {
          title: "Assessment",
          description: "We assess your current IT operations and support requirements."
        },
        {
          title: "Transition Planning",
          description: "We develop a detailed transition plan for a smooth handover."
        },
        {
          title: "Knowledge Transfer",
          description: "We ensure comprehensive knowledge transfer from your team to ours."
        },
        {
          title: "Ongoing Operations",
          description: "We manage and continuously improve your IT operations and support."
        }
      ],
      technologies: ["ITSM tools", "Monitoring platforms", "Helpdesk systems", "Remote management", "Security tools"]
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

      {/* Service Categories */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-text/80">
              Comprehensive technology solutions tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${category.color} p-8`}>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className={`text-2xl font-semibold ${category.textColor}`}>{category.title}</h3>
                    <div className="bg-white/80 p-3 rounded-full shadow-sm">{category.icon}</div>
                  </div>
                  <p className={`${category.textColor} mb-6 opacity-90`}>{category.description}</p>
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className={`h-5 w-5 mr-2 ${category.textColor}`} />
                        <span className={`${category.textColor} font-medium`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services with Tabs */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Our Detailed Services</h2>
            <p className="text-lg text-text/80">
              Explore our comprehensive service offerings designed to transform your business
            </p>
          </div>
          
          <Tabs defaultValue="software" className="w-full">
            <TabsList className="w-full max-w-4xl mx-auto mb-12 bg-white p-1 rounded-full flex justify-between">
              <TabsTrigger 
                value="software" 
                className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
              >
                <Code className="mr-2 h-4 w-4" />
                Software Dev
              </TabsTrigger>
              <TabsTrigger 
                value="automation" 
                className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
              >
                <Cog className="mr-2 h-4 w-4" />
                Automation
              </TabsTrigger>
              <TabsTrigger 
                value="integration" 
                className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
              >
                <Network className="mr-2 h-4 w-4" />
                Integration
              </TabsTrigger>
              <TabsTrigger 
                value="offshoring" 
                className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2"
              >
                <Monitor className="mr-2 h-4 w-4" />
                IT Offshoring
              </TabsTrigger>
            </TabsList>
            
            {serviceDetails.map((service) => (
              <TabsContent key={service.id} value={service.id} className="focus-visible:outline-none focus-visible:ring-0">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-10">
                      <div className="bg-primary/10 p-6 rounded-2xl md:w-auto w-16">
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
                          Key Benefits
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
                          Technologies
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
                          Why Choose Us
                        </h4>
                        <p className="text-text/80 mb-4">
                          Our team combines deep expertise with a client-centered approach to deliver solutions that truly transform your business operations.
                        </p>
                        <Button asChild className="rounded-full group">
                          <Link to="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Implementation Process */}
                    <div>
                      <h4 className="text-xl font-medium mb-8 flex items-center">
                        <Rocket className="mr-2 h-5 w-5 text-primary" />
                        Our Implementation Process
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
      
      {/* Services */}
      <section className="py-24 bg-white">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Development Process</h2>
            <p className="text-lg text-text/80 mb-12">
              We follow a proven methodology to deliver successful projects
            </p>
            
            <VerticalTimeline items={[
              { 
                title: "Discovery", 
                description: "We work closely with you to understand your business needs, goals, and challenges."
              },
              { 
                title: "Planning", 
                description: "Our team develops a detailed project plan with clear milestones and deliverables."
              },
              { 
                title: "Development", 
                description: "We implement the solution using agile methodologies with regular client feedback."
              },
              { 
                title: "Testing", 
                description: "Rigorous testing ensures the solution meets all requirements and quality standards."
              },
              { 
                title: "Deployment", 
                description: "We ensure smooth deployment with minimal disruption to your business."
              },
              { 
                title: "Support", 
                description: "Ongoing support and maintenance keep your solution running optimally."
              }
            ]} />
          </div>
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
