
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

  const solutionExamples = [
    {
      problem: 'faq.examples.manual.problem',
      solution: 'faq.examples.manual.solution',
      benefits: 'faq.examples.manual.benefits',
    },
    {
      problem: 'faq.examples.integration.problem',
      solution: 'faq.examples.integration.solution',
      benefits: 'faq.examples.integration.benefits',
    },
    {
      problem: 'faq.examples.reporting.problem',
      solution: 'faq.examples.reporting.solution',
      benefits: 'faq.examples.reporting.benefits',
    },
    {
      problem: 'faq.examples.legacy.problem',
      solution: 'faq.examples.legacy.solution',
      benefits: 'faq.examples.legacy.benefits',
    },
  ];

  // New detailed examples section
  const detailedExamples = [
    {
      title: 'faq.detailed.excel.title',
      problems: [
        'faq.detailed.excel.problems.blocking',
        'faq.detailed.excel.problems.overriding',
        'faq.detailed.excel.problems.collaboration',
        'faq.detailed.excel.problems.permissions',
        'faq.detailed.excel.problems.reporting',
      ],
      solution: 'faq.detailed.excel.solution',
      benefits: [
        'faq.detailed.excel.benefits.access',
        'faq.detailed.excel.benefits.roles',
        'faq.detailed.excel.benefits.validation',
        'faq.detailed.excel.benefits.history',
        'faq.detailed.excel.benefits.automation',
      ]
    },
    {
      title: 'faq.detailed.manual.title',
      problems: [
        'faq.detailed.manual.problems.time',
        'faq.detailed.manual.problems.errors',
        'faq.detailed.manual.problems.consistency',
        'faq.detailed.manual.problems.training',
        'faq.detailed.manual.problems.scaling',
      ],
      solution: 'faq.detailed.manual.solution',
      benefits: [
        'faq.detailed.manual.benefits.efficiency',
        'faq.detailed.manual.benefits.accuracy',
        'faq.detailed.manual.benefits.standardization',
        'faq.detailed.manual.benefits.insights',
        'faq.detailed.manual.benefits.scalability',
      ]
    },
    {
      title: 'faq.detailed.legacy.title',
      problems: [
        'faq.detailed.legacy.problems.maintenance',
        'faq.detailed.legacy.problems.compatibility',
        'faq.detailed.legacy.problems.security',
        'faq.detailed.legacy.problems.limitations',
        'faq.detailed.legacy.problems.support',
      ],
      solution: 'faq.detailed.legacy.solution',
      benefits: [
        'faq.detailed.legacy.benefits.modern',
        'faq.detailed.legacy.benefits.performance',
        'faq.detailed.legacy.benefits.security',
        'faq.detailed.legacy.benefits.integration',
        'faq.detailed.legacy.benefits.features',
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

      {/* Solution Examples Section - Previous */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">{t('faq.examples.title')}</h2>
              <p className="text-lg text-text/80">
                {t('faq.examples.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {solutionExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-md shadow-sm">
                      <h3 className="text-lg font-semibold mb-3 text-red-500">{t('faq.examples.problem')}</h3>
                      <p>{t(example.problem)}</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-md shadow-sm">
                      <h3 className="text-lg font-semibold mb-3 text-blue-500">{t('faq.examples.solution')}</h3>
                      <p>{t(example.solution)}</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-md shadow-sm">
                      <h3 className="text-lg font-semibold mb-3 text-green-500">{t('faq.examples.benefits')}</h3>
                      <p>{t(example.benefits)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Detailed Solution Examples Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">{t('faq.detailed.title')}</h2>
              <p className="text-lg text-text/80">
                {t('faq.detailed.subtitle')}
              </p>
            </div>

            <div className="space-y-12">
              {detailedExamples.map((example, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-medium mb-6 text-primary">{t(example.title)}</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-red-500">{t('faq.detailed.problems')}</h4>
                      <ul className="space-y-3">
                        {example.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-3 mt-1.5 text-red-500">•</div>
                            <p>{t(problem)}</p>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-4 text-blue-500">{t('faq.detailed.solution')}</h4>
                        <p className="text-text/90">{t(example.solution)}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-500">{t('faq.detailed.benefits')}</h4>
                      <ul className="space-y-3">
                        {example.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-3 mt-1.5 text-green-500">•</div>
                            <p>{t(benefit)}</p>
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
