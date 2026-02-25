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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-10 bg-card/95 backdrop-blur-lg shadow-large rounded-2xl max-w-3xl mx-auto border border-border/30 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl font-bold gradient-text mb-3">{t('contact.partner')}</h3>
            <p className="text-xl font-semibold text-foreground">Djordje Karadzic</p>
            <p className="text-base text-primary/80 mt-2 font-medium">Cybethics</p>
          </div>

          <Avatar className="h-40 w-40 border-4 border-primary/30 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 flex-shrink-0 relative z-10">
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
