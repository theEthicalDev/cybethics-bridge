import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import useScrollReveal from '@/hooks/useScrollReveal';

const HomepageFAQ: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const faqs = [
    { question: 'faq.process.question', answer: 'faq.process.answer' },
    { question: 'faq.pricing.question', answer: 'faq.pricing.answer' },
    { question: 'faq.timeline.question', answer: 'faq.timeline.answer' },
    { question: 'faq.maintenance.question', answer: 'faq.maintenance.answer' },
    { question: 'faq.ownership.question', answer: 'faq.ownership.answer' },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      <div className="container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-6 border border-primary/20 badge-shimmer">
              <span className="text-sm font-medium text-primary">{t('homepage.faq.badge')}</span>
            </div>
            <h2 className="mb-4">{t('homepage.faq.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('homepage.faq.subtitle')}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className={`glass-card rounded-xl px-6 border-none shadow-soft data-[state=open]:shadow-medium transition-all duration-300 scroll-reveal scroll-reveal-delay-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''}`}
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline py-5">
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className={`text-center mt-10 scroll-reveal scroll-reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group">
              <Link to="/faq" className="flex items-center font-semibold">
                {t('homepage.faq.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
