
import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCategoryProps {
  title: string;
  description: string;
  features: string[];
  color: string;
  textColor: string;
  icon: React.ReactNode;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ 
  title, 
  description, 
  features, 
  color, 
  textColor, 
  icon 
}) => (
  <div 
    className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up"
  >
    <div className={`bg-gradient-to-br ${color} p-8`}>
      <div className="flex justify-between items-start mb-6">
        <h3 className={`text-2xl font-semibold ${textColor}`}>{title}</h3>
        <div className="bg-white/80 p-3 rounded-full shadow-sm">{icon}</div>
      </div>
      <p className={`${textColor} mb-6 opacity-90`}>{description}</p>
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center">
            <Check className={`h-5 w-5 mr-2 ${textColor}`} />
            <span className={`${textColor} font-medium`}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ServiceCategories = () => {
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
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-indigo-700"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
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
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-violet-700"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M12 8c-1.033-.634-2.497-1.001-4.01-1.001A3.907 3.907 0 0 0 4 11.1"></path></svg>
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
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-emerald-700"><path d="M11 12H3"></path><path d="M16 6H3"></path><path d="M16 18H3"></path><path d="M18 6h.01"></path><path d="M18 12h.01"></path><path d="M18 18h.01"></path><path d="M21 6h.01"></path><path d="M21 12h.01"></path><path d="M21 18h.01"></path></svg>
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
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-orange-700"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
    }
  ];

  return (
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
            <ServiceCategory 
              key={index}
              title={category.title}
              description={category.description}
              features={category.features}
              color={category.color}
              textColor={category.textColor}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
