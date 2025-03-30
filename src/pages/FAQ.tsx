import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CommonProblems from '@/components/CommonProblems';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const categories = [
    { value: "all", label: "faq.categories.all" },
    { value: "process", label: "faq.categories.process" },
    { value: "technical", label: "faq.categories.technical" },
    { value: "business", label: "faq.categories.business" },
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

      {/* FAQ Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className={`${isMobile ? 'overflow-x-auto' : ''} p-1 bg-gray-100 rounded-full`}>
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.value}
                      value={category.value}
                      className="px-6 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      {t(category.label)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-medium mb-3">{t(faq.question)}</h3>
                    <p className="text-text/80">{t(faq.answer)}</p>
                  </div>
                ))}
              </TabsContent>

              {/* Other category tabs would filter the FAQs accordingly */}
              {categories.slice(1).map((category) => (
                <TabsContent key={category.value} value={category.value} className="space-y-6">
                  {faqs
                    .filter((faq) => faq.question.includes(category.value))
                    .map((faq, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-medium mb-3">{t(faq.question)}</h3>
                        <p className="text-text/80">{t(faq.answer)}</p>
                      </div>
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Common Business Problems Section */}
      <CommonProblems />

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
