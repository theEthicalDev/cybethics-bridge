
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

      {/* Solution Examples Section - New */}
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
