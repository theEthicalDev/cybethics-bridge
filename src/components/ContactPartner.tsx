import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ContactPartner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-10 bg-card/95 backdrop-blur-lg rounded-2xl max-w-3xl mx-auto border-l-4 border-l-primary border border-border/30 shadow-soft transition-all duration-500 group relative">

          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl font-bold gradient-text mb-2">{t('contact.partner')}</h3>
            <p className="text-xl font-semibold text-foreground">Djordje Karadzic</p>
            <p className="text-sm text-primary/80 mt-1 font-medium">{t('contact.role')}</p>
            <p className="text-sm text-muted-foreground mt-3 italic max-w-xs">"{t('contact.philosophy')}"</p>
            <a
              href="https://www.linkedin.com/in/djordjekaradzic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>

          <Avatar className="h-36 w-36 border-4 border-primary/20 shadow-soft flex-shrink-0 relative z-10">
            <AvatarImage src="/media/d5a54318-571b-4628-9628-92d6e9cb11bc.png" alt="Djordje Karadzic" />
            <AvatarFallback className="text-2xl font-bold gradient-text">DK</AvatarFallback>
          </Avatar>

          <Button asChild variant="glow" size="lg" className="relative z-10 rounded-full hover:scale-105 transition-all group/btn">
            <Link to="/contact" className="flex items-center py-7 px-8">
              <Calendar className="mr-3 h-5 w-5" />
              <span className="font-semibold">{t('contact.booking')}</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactPartner;
