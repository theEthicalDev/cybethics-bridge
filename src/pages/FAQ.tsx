
import React from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {ArrowRight, ChevronRight, Database, Clock, FileSpreadsheet, Users, Zap, Link as LinkIcon, BarChart} from 'lucide-react';
import {Link} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import CommonProblems from '@/components/CommonProblems';
import {useIsMobile} from '@/hooks/use-mobile';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const {t} = useLanguage();
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
      title: t('faq.solutions.spreadsheet.title'),
      icon: <FileSpreadsheet className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.spreadsheet.problems.1'),
        t('faq.solutions.spreadsheet.problems.2'),
        t('faq.solutions.spreadsheet.problems.3'),
        t('faq.solutions.spreadsheet.problems.4'),
        t('faq.solutions.spreadsheet.problems.5')
      ],
      solution: t('faq.solutions.spreadsheet.solution'),
      benefits: [
        t('faq.solutions.spreadsheet.benefits.1'),
        t('faq.solutions.spreadsheet.benefits.2'),
        t('faq.solutions.spreadsheet.benefits.3'),
        t('faq.solutions.spreadsheet.benefits.4'),
        t('faq.solutions.spreadsheet.benefits.5')
      ]
    },
    {
      title: t('faq.solutions.automation.title'),
      icon: <Zap className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.automation.problems.1'),
        t('faq.solutions.automation.problems.2'),
        t('faq.solutions.automation.problems.3'),
        t('faq.solutions.automation.problems.4'),
        t('faq.solutions.automation.problems.5')
      ],
      solution: t('faq.solutions.automation.solution'),
      benefits: [
        t('faq.solutions.automation.benefits.1'),
        t('faq.solutions.automation.benefits.2'),
        t('faq.solutions.automation.benefits.3'),
        t('faq.solutions.automation.benefits.4'),
        t('faq.solutions.automation.benefits.5')
      ]
    },
    {
      title: t('faq.solutions.legacy.title'),
      icon: <Clock className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.legacy.problems.1'),
        t('faq.solutions.legacy.problems.2'),
        t('faq.solutions.legacy.problems.3'),
        t('faq.solutions.legacy.problems.4'),
        t('faq.solutions.legacy.problems.5')
      ],
      solution: t('faq.solutions.legacy.solution'),
      benefits: [
        t('faq.solutions.legacy.benefits.1'),
        t('faq.solutions.legacy.benefits.2'),
        t('faq.solutions.legacy.benefits.3'),
        t('faq.solutions.legacy.benefits.4'),
        t('faq.solutions.legacy.benefits.5')
      ]
    },
    {
      title: t('faq.solutions.integration.title'),
      icon: <LinkIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.integration.problems.1'),
        t('faq.solutions.integration.problems.2'),
        t('faq.solutions.integration.problems.3'),
        t('faq.solutions.integration.problems.4'),
        t('faq.solutions.integration.problems.5')
      ],
      solution: t('faq.solutions.integration.solution'),
      benefits: [
        t('faq.solutions.integration.benefits.1'),
        t('faq.solutions.integration.benefits.2'),
        t('faq.solutions.integration.benefits.3'),
        t('faq.solutions.integration.benefits.4'),
        t('faq.solutions.integration.benefits.5')
      ]
    },
    {
      title: t('faq.solutions.workflow.title'),
      icon: <Users className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.workflow.problems.1'),
        t('faq.solutions.workflow.problems.2'),
        t('faq.solutions.workflow.problems.3'),
        t('faq.solutions.workflow.problems.4'),
        t('faq.solutions.workflow.problems.5')
      ],
      solution: t('faq.solutions.workflow.solution'),
      benefits: [
        t('faq.solutions.workflow.benefits.1'),
        t('faq.solutions.workflow.benefits.2'),
        t('faq.solutions.workflow.benefits.3'),
        t('faq.solutions.workflow.benefits.4'),
        t('faq.solutions.workflow.benefits.5')
      ]
    },
    {
      title: t('faq.solutions.datadriven.title'),
      icon: <BarChart className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.datadriven.problems.1'),
        t('faq.solutions.datadriven.problems.2'),
        t('faq.solutions.datadriven.problems.3'),
        t('faq.solutions.datadriven.problems.4'),
        t('faq.solutions.datadriven.problems.5')
      ],
      solution: t('faq.solutions.datadriven.solution'),
      benefits: [
        t('faq.solutions.datadriven.benefits.1'),
        t('faq.solutions.datadriven.benefits.2'),
        t('faq.solutions.datadriven.benefits.3'),
        t('faq.solutions.datadriven.benefits.4'),
        t('faq.solutions.datadriven.benefits.5')
      ]
    },
    {
      title: t('faq.solutions.database.title'),
      icon: <Database className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.database.problems.1'),
        t('faq.solutions.database.problems.2'),
        t('faq.solutions.database.problems.3'),
        t('faq.solutions.database.problems.4'),
        t('faq.solutions.database.problems.5')
      ],
      solution: t('faq.solutions.database.solution'),
      benefits: [
        t('faq.solutions.database.benefits.1'),
        t('faq.solutions.database.benefits.2'),
        t('faq.solutions.database.benefits.3'),
        t('faq.solutions.database.benefits.4'),
        t('faq.solutions.database.benefits.5')
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
      <CommonProblems/>

      {/* Detailed Solution Examples Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">{t('faq.solutions.title')}</h2>
              <p className="text-lg text-text/80">
                {t('faq.solutions.description')}
              </p>
            </div>

            <div className="space-y-8">
              {detailedExamples.map((example, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-3 rounded-full bg-primary/10">
                      {example.icon}
                    </div>
                    <h3 className="text-2xl font-medium text-primary">{example.title}</h3>
                  </div>

                  <Accordion type="single" collapsible className="w-full border-none">
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="py-2 text-lg font-medium text-gray-700 hover:no-underline">
                        {t('faq.solutions.viewDetails')}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-700">
                              {t('faq.solutions.commonProblems')}
                            </h4>
                            <ul className="space-y-3">
                              {example.problems.map((problem, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="mr-3 mb-1.5 text-red-500">•</div>
                                  <p>{problem}</p>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-6">
                              <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-700">
                                {t('faq.solutions.ourSolution')}
                              </h4>
                              <p className="text-text/90">{example.solution}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-700">
                              {t('faq.solutions.keyBenefits')}
                            </h4>
                            <ul className="space-y-3">
                              {example.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="mr-3 mb-1.5 text-green-500">•</div>
                                  <p>{benefit}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
