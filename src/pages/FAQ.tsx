import React from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {
  ClipboardListIcon,
  Clock,
  DatabaseIcon,
  FileSpreadsheet,
  HandIcon,
  HeadsetIcon,
  NetworkIcon,
  ShieldBanIcon,
  ShoppingCartIcon,
  SnailIcon,
  UsersIcon,
  WarehouseIcon
} from 'lucide-react';
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
        t('faq.solutions.spreadsheet.problems.0'),
        t('faq.solutions.spreadsheet.problems.1'),
        t('faq.solutions.spreadsheet.problems.2'),
        t('faq.solutions.spreadsheet.problems.3'),
        t('faq.solutions.spreadsheet.problems.4')
      ],
      solution: t('faq.solutions.spreadsheet.solution'),
      benefits: [
        t('faq.solutions.spreadsheet.benefits.0'),
        t('faq.solutions.spreadsheet.benefits.1'),
        t('faq.solutions.spreadsheet.benefits.2'),
        t('faq.solutions.spreadsheet.benefits.3'),
        t('faq.solutions.spreadsheet.benefits.4')
      ]
    },
    {
      title: t('faq.solutions.automation.title'),
      icon: <HandIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.automation.problems.0'),
        t('faq.solutions.automation.problems.1'),
        t('faq.solutions.automation.problems.2'),
        t('faq.solutions.automation.problems.3'),
        t('faq.solutions.automation.problems.4')
      ],
      solution: t('faq.solutions.automation.solution'),
      benefits: [
        t('faq.solutions.automation.benefits.0'),
        t('faq.solutions.automation.benefits.1'),
        t('faq.solutions.automation.benefits.2'),
        t('faq.solutions.automation.benefits.3'),
        t('faq.solutions.automation.benefits.4')
      ]
    },
    {
      title: t('faq.solutions.legacy.title'),
      icon: <Clock className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.legacy.problems.0'),
        t('faq.solutions.legacy.problems.1'),
        t('faq.solutions.legacy.problems.2'),
        t('faq.solutions.legacy.problems.3'),
        t('faq.solutions.legacy.problems.4')
      ],
      solution: t('faq.solutions.legacy.solution'),
      benefits: [
        t('faq.solutions.legacy.benefits.0'),
        t('faq.solutions.legacy.benefits.1'),
        t('faq.solutions.legacy.benefits.2'),
        t('faq.solutions.legacy.benefits.3'),
        t('faq.solutions.legacy.benefits.4')
      ]
    },
    {
      title: t('faq.solutions.separation.title'),
      icon: <NetworkIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.separation.problems.0'),
        t('faq.solutions.separation.problems.1'),
        t('faq.solutions.separation.problems.2'),
        t('faq.solutions.separation.problems.3'),
        t('faq.solutions.separation.problems.4')
      ],
      solution: t('faq.solutions.separation.solution'),
      benefits: [
        t('faq.solutions.separation.benefits.0'),
        t('faq.solutions.separation.benefits.1'),
        t('faq.solutions.separation.benefits.2'),
        t('faq.solutions.separation.benefits.3'),
        t('faq.solutions.separation.benefits.4')
      ]
    },
    {
      title: t('faq.solutions.workflow.title'),
      icon: <SnailIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.workflow.problems.0'),
        t('faq.solutions.workflow.problems.1'),
        t('faq.solutions.workflow.problems.2'),
        t('faq.solutions.workflow.problems.3'),
        t('faq.solutions.workflow.problems.4')
      ],
      solution: t('faq.solutions.workflow.solution'),
      benefits: [
        t('faq.solutions.workflow.benefits.0'),
        t('faq.solutions.workflow.benefits.1'),
        t('faq.solutions.workflow.benefits.2'),
        t('faq.solutions.workflow.benefits.3'),
        t('faq.solutions.workflow.benefits.4')
      ]
    },
    {
      title: t('faq.solutions.datadriven.title'),
      icon: <DatabaseIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.datadriven.problems.0'),
        t('faq.solutions.datadriven.problems.1'),
        t('faq.solutions.datadriven.problems.2'),
        t('faq.solutions.datadriven.problems.3'),
        t('faq.solutions.datadriven.problems.4')
      ],
      solution: t('faq.solutions.datadriven.solution'),
      benefits: [
        t('faq.solutions.datadriven.benefits.0'),
        t('faq.solutions.datadriven.benefits.1'),
        t('faq.solutions.datadriven.benefits.2'),
        t('faq.solutions.datadriven.benefits.3'),
        t('faq.solutions.datadriven.benefits.4')
      ]
    },
    {
      title: t('faq.solutions.customerSupport.title'),
      icon: <HeadsetIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.customerSupport.problems.0'),
        t('faq.solutions.customerSupport.problems.1'),
        t('faq.solutions.customerSupport.problems.2'),
        t('faq.solutions.customerSupport.problems.3'),
        t('faq.solutions.customerSupport.problems.4')
      ],
      solution: t('faq.solutions.customerSupport.solution'),
      benefits: [
        t('faq.solutions.customerSupport.benefits.0'),
        t('faq.solutions.customerSupport.benefits.1'),
        t('faq.solutions.customerSupport.benefits.2'),
        t('faq.solutions.customerSupport.benefits.3'),
        t('faq.solutions.customerSupport.benefits.4'),
      ],
    },
    {
      title: t('faq.solutions.inventoryManagement.title'),
      icon: <WarehouseIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.inventoryManagement.problems.0'),
        t('faq.solutions.inventoryManagement.problems.1'),
        t('faq.solutions.inventoryManagement.problems.2'),
        t('faq.solutions.inventoryManagement.problems.3'),
        t('faq.solutions.inventoryManagement.problems.4')
      ],
      solution: t('faq.solutions.inventoryManagement.solution'),
      benefits: [
        t('faq.solutions.inventoryManagement.benefits.0'),
        t('faq.solutions.inventoryManagement.benefits.1'),
        t('faq.solutions.inventoryManagement.benefits.2'),
        t('faq.solutions.inventoryManagement.benefits.3'),
        t('faq.solutions.inventoryManagement.benefits.4'),
      ],
    },
    {
      title: t('faq.solutions.teamCollaboration.title'),
      icon: <UsersIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.teamCollaboration.problems.0'),
        t('faq.solutions.teamCollaboration.problems.1'),
        t('faq.solutions.teamCollaboration.problems.2'),
        t('faq.solutions.teamCollaboration.problems.3'),
        t('faq.solutions.teamCollaboration.problems.4')
      ],
      solution: t('faq.solutions.teamCollaboration.solution'),
      benefits: [
        t('faq.solutions.teamCollaboration.benefits.0'),
        t('faq.solutions.teamCollaboration.benefits.1'),
        t('faq.solutions.teamCollaboration.benefits.2'),
        t('faq.solutions.teamCollaboration.benefits.3'),
        t('faq.solutions.teamCollaboration.benefits.4'),
      ],
    },
    {
      title: t('faq.solutions.salesAutomation.title'),
      icon: <ShoppingCartIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.salesAutomation.problems.0'),
        t('faq.solutions.salesAutomation.problems.1'),
        t('faq.solutions.salesAutomation.problems.2'),
        t('faq.solutions.salesAutomation.problems.3'),
        t('faq.solutions.salesAutomation.problems.4')
      ],
      solution: t('faq.solutions.salesAutomation.solution'),
      benefits: [
        t('faq.solutions.salesAutomation.benefits.0'),
        t('faq.solutions.salesAutomation.benefits.1'),
        t('faq.solutions.salesAutomation.benefits.2'),
        t('faq.solutions.salesAutomation.benefits.3'),
        t('faq.solutions.salesAutomation.benefits.4'),
      ],
    },
    {
      title: t('faq.solutions.projectManagement.title'),
      icon: <ClipboardListIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.projectManagement.problems.0'),
        t('faq.solutions.projectManagement.problems.1'),
        t('faq.solutions.projectManagement.problems.2'),
        t('faq.solutions.projectManagement.problems.3'),
        t('faq.solutions.projectManagement.problems.4')
      ],
      solution: t('faq.solutions.projectManagement.solution'),
      benefits: [
        t('faq.solutions.projectManagement.benefits.0'),
        t('faq.solutions.projectManagement.benefits.1'),
        t('faq.solutions.projectManagement.benefits.2'),
        t('faq.solutions.projectManagement.benefits.3'),
        t('faq.solutions.projectManagement.benefits.4'),
      ],
    },
    {
      title: t('faq.solutions.security.title'),
      icon: <ShieldBanIcon className="h-8 w-8 text-primary"/>,
      problems: [
        t('faq.solutions.security.problems.0'),
        t('faq.solutions.security.problems.1'),
        t('faq.solutions.security.problems.2'),
        t('faq.solutions.security.problems.3'),
        t('faq.solutions.security.problems.4')
      ],
      solution: t('faq.solutions.security.solution'),
      benefits: [
        t('faq.solutions.security.benefits.0'),
        t('faq.solutions.security.benefits.1'),
        t('faq.solutions.security.benefits.2'),
        t('faq.solutions.security.benefits.3'),
        t('faq.solutions.security.benefits.4'),
      ],
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

      {/* FAQ Questions */}
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

      {/* Common Business Problems Section - Ensure this uses translation */}
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
              <p className="text-lg md:text-xl text-white/90 mb-8 text-balance">{t('faq.cta.subtitle')}</p>
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
