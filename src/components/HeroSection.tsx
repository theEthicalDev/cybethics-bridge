import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useLanguage} from '@/contexts/LanguageContext';
import {Button} from '@/components/ui/button';
import {Calendar, ChevronRight, Sparkles, MapPin} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useIsMobile} from '@/hooks/use-mobile';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedBlob from '@/components/AnimatedBlob';
import MagneticButton from '@/components/MagneticButton';

const CodeAnimation: React.FC = () => {
  const [text, setText] = useState("");
  const isMobile = useIsMobile();
  const codeSnippet = `
function cybethics() {
  const cyber = ["code", "automation", "security"];
  const ethics = ["fairness", "empathy", "trust"];
  ethics.map((ethic, i) => {
    console.log(\`We are about \${cyber[i]} & \${ethic}\`);
  });
}
`;
  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < codeSnippet.length) {
        currentText += codeSnippet[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`glass-card rounded-2xl shadow-large px-8 py-6 font-mono text-sm ${isMobile ? 'w-[100%] ' : ''} overflow-hidden md:h-64 h-56 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group relative`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-xs text-primary/60 font-sans">cybethics.js</span>
        </div>
        
        <pre className="text-left overflow-x-hidden">
          <code className="text-primary/90 text-xs sm:text-sm leading-relaxed">
            {text}
          </code>
        </pre>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-xl"></div>
    </div>
  );
};

const ContactPartner: React.FC = () => {
  const {t} = useLanguage();

  return (
    <div className="container relative z-20 -mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-10 bg-white/95 backdrop-blur-lg shadow-large rounded-2xl max-w-3xl mx-auto border border-white/30 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group" style={{transform: 'translateY(-20px)'}}>
        {/* Background decoration */}
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
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <>
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-primary/5 to-purple-50/30">
        <ParticleBackground />
        
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatedBlob className="top-1/4 -left-1/4" color="from-primary/20 to-primary/5" size={384} delay={0} />
          <AnimatedBlob className="bottom-1/4 -right-1/4" color="from-purple-400/20 to-transparent" size={384} delay={2000} />
          <AnimatedBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="from-accent/15 to-accent/5" size={300} delay={4000} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial opacity-50"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-10 transition-all duration-1000 ${heroVisible ? 'animate-slide-right opacity-100' : 'opacity-0'}`}>
              <div>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20 hover:scale-105 transition-transform duration-300">
                  <span className="text-sm font-medium text-primary flex items-center">
                    <Sparkles className="mr-2 h-4 w-4 animate-pulse-subtle"/>
                    Cybethics
                  </span>
                </div>
                <h1 className="mb-6 leading-tight text-balance text-4xl sm:text-6xl font-bold gradient-text animate-slide-up" style={{ animationDelay: '200ms' }}>
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-text-light leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
                  {t('hero.subtitle')}
                </p>
                
                {/* Enhanced Location Badge */}
                <div className="mt-6 inline-flex items-center py-3 px-6 bg-white/80 backdrop-blur-sm rounded-full shadow-soft border border-white/30 hover:shadow-medium transition-all duration-300 hover:scale-105">
                  <MapPin className="h-5 w-5 text-primary mr-3 animate-bounce-gentle" />
                  <span className="text-base font-medium gradient-text-subtle">Emmen | Luzern | Zentralschweiz</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <MagneticButton asChild variant="gradient" size="lg" className="rounded-full group">
                  <Link to="/services" className="relative">
                    {t('hero.cta')}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                  </Link>
                </MagneticButton>
                <MagneticButton asChild variant="outline" size="lg" className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group">
                  <Link to="/contact" className="gradient-text-subtle">
                    {t('contact.booking')}
                    <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110"/>
                  </Link>
                </MagneticButton>
              </div>
            </div>

            {/* Enhanced desktop view */}
            {!isMobile && (
              <div className={`flex flex-col gap-8 transition-all duration-1000 ${heroVisible ? 'animate-slide-left opacity-100' : 'opacity-0'}`}>
                <div className="relative h-72 items-center justify-center hidden lg:flex animate-perspective-tilt">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl animate-rotate-slow"></div>
                  <img
                    src="/media/cybethics.png"
                    alt="Cybethics - Softwareentwicklung und Automatisierung in der Zentralschweiz"
                    className="relative w-3/4 h-auto hover:scale-105 transition-transform duration-500 filter drop-shadow-2xl"
                  />
                </div>

                <div className="hover-lift">
                  <CodeAnimation/>
                </div>
              </div>
            )}

            {/* Enhanced mobile view */}
            {isMobile && (
              <div className="mt-8 hover-lift animate-scale-in">
                <CodeAnimation/>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Partner */}
      <ContactPartner/>
    </>
  );
};

export default HeroSection;
