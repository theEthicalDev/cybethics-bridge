
import React, {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useLanguage} from '@/contexts/LanguageContext';
import {Button} from '@/components/ui/button';
import {Calendar, ChevronRight, Sparkles, MapPin, Cog, Network, Code} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useIsMobile} from '@/hooks/use-mobile';

const AIDVisual: React.FC = () => {
  const {t} = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  const pillars = [
    { letter: 'A', key: 'automate', icon: Cog, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30', textColor: 'text-blue-600' },
    { letter: 'I', key: 'integrate', icon: Network, color: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30', textColor: 'text-emerald-600' },
    { letter: 'D', key: 'develop', icon: Code, color: 'from-violet-500 to-violet-600', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30', textColor: 'text-violet-600' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Main visual container */}
      <div className="glass-card rounded-2xl shadow-large p-6 md:p-8 overflow-hidden hover:shadow-xl transition-all duration-500 group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        <div className="relative z-10 space-y-5">
          {/* AID Letters row */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activeIndex === index;
              return (
                <div
                  key={pillar.letter}
                  className={`relative flex flex-col items-center transition-all duration-700 cursor-pointer ${isActive ? 'scale-110' : 'scale-95 opacity-60'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-700 ${isActive ? `bg-gradient-to-br ${pillar.color} shadow-lg` : `${pillar.bgColor} border ${pillar.borderColor}`}`}>
                    <span className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${isActive ? 'text-white' : pillar.textColor}`}>{pillar.letter}</span>
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-1 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Connecting lines animation */}
          <div className="flex items-center justify-center gap-0 -mt-3 mb-2">
            <div className={`h-0.5 flex-1 max-w-16 transition-all duration-700 ${activeIndex >= 0 ? 'bg-gradient-to-r from-blue-500/50 to-emerald-500/50' : 'bg-border/30'}`}></div>
            <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            <div className={`h-0.5 flex-1 max-w-16 transition-all duration-700 ${activeIndex >= 1 ? 'bg-gradient-to-r from-emerald-500/50 to-violet-500/50' : 'bg-border/30'}`}></div>
          </div>

          {/* Active pillar content */}
          <div className="min-h-[100px] md:min-h-[120px] flex flex-col items-center justify-center text-center transition-all duration-500">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.key}
                  className={`transition-all duration-500 absolute ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon className={`h-5 w-5 ${pillar.textColor}`} />
                    <h3 className={`text-lg md:text-xl font-bold ${pillar.textColor}`}>
                      {t(`aid.framework.${pillar.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                    {t(`aid.framework.${pillar.key}.outcomes`)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {pillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-500 ${activeIndex === index ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-primary/30 hover:bg-primary/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-xl"></div>
      </div>
    </div>
  );
};

const ContactPartner: React.FC = () => {
  const {t} = useLanguage();

  return (
    <div className="container relative z-20 -mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-10 bg-white/95 backdrop-blur-lg shadow-large rounded-2xl max-w-3xl mx-auto border border-white/30 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group" style={{transform: 'translateY(-20px)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="text-center md:text-left relative z-10">
          <h3 className="text-2xl font-bold gradient-text mb-3">{t('contact.partner')}</h3>
          <p className="text-xl font-semibold text-gray-800">Djordje Karadzic</p>
          <p className="text-base text-primary/80 mt-2 font-medium">Cybethics</p>
        </div>

        <Avatar className="h-40 w-40 border-4 border-primary/30 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 flex-shrink-0 relative z-10">
          <AvatarImage src="/media/d5a54318-571b-4628-9628-92d6e9cb11bc.png" alt="Djordje Karadzic"/>
          <AvatarFallback className="text-2xl font-bold gradient-text">DK</AvatarFallback>
        </Avatar>

        <Button asChild
                variant="glow"
                size="lg"
                className="relative z-10 rounded-full hover:scale-105 transition-all group/btn">
          <Link to="/contact" className="flex items-center py-7 px-8">
            <Calendar className="mr-3 h-5 w-5"/>
            <span className="font-semibold">{t('contact.booking')}</span>
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2"/>
          </Link>
        </Button>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const {t} = useLanguage();
  const isMobile = useIsMobile();

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-primary/5 to-purple-50/30">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-purple-400/20 to-transparent blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial opacity-50"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-up">
              <div>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20 hover:scale-105 transition-transform duration-300">
                  <span className="text-sm font-medium text-primary flex items-center font-mono tracking-wider">
                    <Sparkles className="mr-2 h-4 w-4 animate-pulse-subtle"/>
                    {t('hero.badge')}
                  </span>
                </div>
                <h1 className="mb-6 leading-tight text-balance text-4xl sm:text-6xl font-bold">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-text-light leading-relaxed mb-8">
                  {t('hero.subtitle')}
                </p>
                
                {/* Enhanced Location Badge */}
                <div className="mt-6 inline-flex items-center py-3 px-6 bg-white/80 backdrop-blur-sm rounded-full shadow-soft border border-white/30 hover:shadow-medium transition-all duration-300 hover:scale-105">
                  <MapPin className="h-5 w-5 text-primary mr-3 animate-bounce-gentle" />
                  <span className="text-base font-medium gradient-text-subtle">Emmen | Luzern | Zentralschweiz</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild variant="gradient" size="lg" className="rounded-full group">
                  <Link to="/contact" className="relative">
                    {t('hero.cta')}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group cursor-pointer" onClick={() => document.getElementById('aid-framework')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span className="gradient-text-subtle flex items-center">
                    {t('hero.ctaSecondary')}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                  </span>
                </Button>
              </div>
            </div>

            {/* Desktop view */}
            {!isMobile && (
              <div className="flex flex-col gap-8 animate-fade-up" style={{animationDelay: '300ms'}}>
                <div className="relative h-72 items-center justify-center hidden lg:flex">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl"></div>
                  <img
                    src="/media/cybethics.png"
                    alt="Cybethics - Softwareentwicklung und Automatisierung in der Zentralschweiz"
                    className="relative w-3/4 h-auto hover:scale-105 transition-transform duration-500 filter drop-shadow-2xl"
                  />
                </div>

                <div className="hover-lift">
                  <AIDVisual />
                </div>
              </div>
            )}

            {/* Mobile view */}
            {isMobile && (
              <div className="mt-8 hover-lift">
                <AIDVisual />
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactPartner/>
    </>
  );
};

export default HeroSection;
