
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
  Check 
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
      
      {/* Services */}
      <section className="py-24 bg-gray-50">
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
      <section className="bg-white py-24">
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
