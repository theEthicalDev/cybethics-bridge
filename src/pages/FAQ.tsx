
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CommonProblems from '@/components/CommonProblems';
import { useIsMobile } from '@/hooks/use-mobile';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const faqs = [
    {
      question: 'faq.process.question',
      answer: 'faq.process.answer',
    },
    {
      question: 'faq.pricing.question',
      answer: 'faq.pricing.answer',
    },
    {
      question: 'faq.timeline.question',
      answer: 'faq.timeline.answer',
    },
    {
      question: 'faq.technologies.question',
      answer: 'faq.technologies.answer',
    },
    {
      question: 'faq.maintenance.question',
      answer: 'faq.maintenance.answer',
    },
    {
      question: 'faq.ownership.question',
      answer: 'faq.ownership.answer',
    },
    {
      question: 'faq.communication.question',
      answer: 'faq.communication.answer',
    },
  ];

  // Detailed solution examples with real content
  const detailedExamples = [
    {
      title: "Spreadsheet Chaos to Structured Data Management",
      problems: [
        "Excel files get blocked when multiple users try to work simultaneously",
        "Data gets overwritten accidentally without track changes",
        "No granular permission system - everyone sees everything or nothing",
        "No data validation leading to inconsistent inputs and errors",
        "Complex formulas break easily when spreadsheet structure changes"
      ],
      solution: "Development of a tailored multi-user web or desktop application with role-based access control, data validation, and audit trails.",
      benefits: [
        "Multiple users can work simultaneously without conflicts",
        "Role-based access controls ensure users only see what they need",
        "Built-in validation prevents data entry errors before they happen",
        "Complete audit history of who changed what and when",
        "Automated workflows replace manual copy-paste processes"
      ]
    },
    {
      title: "Manual Processes to Automated Workflows",
      problems: [
        "Staff spending hours on repetitive data entry tasks",
        "Human errors requiring extensive reviewing and corrections",
        "Inconsistent process execution depending on who performs the task",
        "Knowledge trapped with specific employees creates business continuity risks",
        "Difficult to scale operations as volume increases"
      ],
      solution: "Implementation of workflow automation software with API integrations to connect systems and eliminate manual steps.",
      benefits: [
        "Reduce processing time from hours to minutes or seconds",
        "Eliminate human errors in routine tasks",
        "Standardized processes regardless of who initiates them",
        "Business logic documented in systems rather than employee knowledge",
        "Easily handle 10x volume without adding staff"
      ]
    },
    {
      title: "Legacy System Modernization",
      problems: [
        "Outdated systems expensive to maintain and modify",
        "Security vulnerabilities in unsupported software",
        "Incompatibility with modern operating systems and browsers",
        "Limited functionality compared to modern alternatives",
        "Difficulty finding developers who can work with obsolete technologies"
      ],
      solution: "Gradual migration to modern technology stack with improved security, user experience, and integration capabilities.",
      benefits: [
        "Lower maintenance costs and faster feature development",
        "Improved security and compliance with current standards",
        "Better performance and responsiveness for users",
        "Easier integration with other business systems",
        "Access to larger talent pool for ongoing development"
      ]
    },
    {
      title: "Disconnected Systems to Integrated Ecosystem",
      problems: [
        "Data entered multiple times in different systems",
        "Information silos preventing unified business view",
        "Time lag between systems creates inconsistencies",
        "Reporting requires manual consolidation from multiple sources",
        "Process breaks when handoffs between systems occur"
      ],
      solution: "Implementation of API integration layer or middleware to connect existing systems and synchronize data automatically.",
      benefits: [
        "Single source of truth for business data",
        "Real-time data flow between systems eliminates delays",
        "Automated reporting with consolidated data",
        "End-to-end process visibility across system boundaries",
        "Reduced administrative overhead maintaining multiple systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">{t('faq.title')}</h1>
            <p className="text-lg text-text/80 mb-8">
              {t('faq.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Questions - Removed filtering tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-medium mb-3">{t(faq.question)}</h3>
                <p className="text-text/80">{t(faq.answer)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Business Problems Section */}
      <CommonProblems />

      {/* Detailed Solution Examples Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Common Business Problems Solved</h2>
              <p className="text-lg text-text/80">
                Here are some common business challenges and how custom software development can solve them.
              </p>
            </div>

            <div className="space-y-12">
              {detailedExamples.map((example, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-medium mb-6 text-primary">{example.title}</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-red-500">Common Problems</h4>
                      <ul className="space-y-3">
                        {example.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-3 mt-1.5 text-red-500">•</div>
                            <p>{problem}</p>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-4 text-blue-500">Our Solution</h4>
                        <p className="text-text/90">{example.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-500">Key Benefits</h4>
                      <ul className="space-y-3">
                        {example.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-3 mt-1.5 text-green-500">•</div>
                            <p>{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/90 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">{t('faq.cta.title')}</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">{t('faq.cta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-none rounded-full">
                  <Link to="/contact">
                    {t('contact.booking')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
                  <Link to="/services">
                    {t('services.more')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
