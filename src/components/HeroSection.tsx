
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles, Calendar } from 'lucide-react';
import Logo from '@/components/Logo';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from '@/hooks/use-mobile';

const CodeAnimation: React.FC = () => {
  const [text, setText] = useState("");
  const codeSnippet = `
function cybethics() {
  const ethics = ["fairness", "empathy", "trust"];
  const cyber = ["code", "automation", "innovation"];
  
  return [...ethics, ...cyber].reduce((solution, value) => {
    return solution + value.charAt(0).toUpperCase();
  }, "");
}

// We prefer deeds to words
const result = cybethics();
console.log(result); // FETCI
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
    <div className="glass rounded-lg shadow-lg p-6 font-mono text-sm overflow-hidden h-96">
      <pre className="text-left overflow-x-auto">
        <code className="text-primary/90">{text}</code>
      </pre>
    </div>
  );
};

const ContactPartner: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container relative z-20 -mb-16 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-8 bg-white shadow-lg rounded-xl max-w-2xl mx-auto">
        <div className="text-left">
          <h3 className="text-lg font-semibold text-primary">Your Contact Partner</h3>
          <p className="text-xl font-medium">Djordje Karadzic</p>
          <p className="text-sm text-gray-600 mt-1">Cybethics Solutions</p>
        </div>
        
        <Avatar className="h-32 w-32 border-2 border-primary/20 flex-shrink-0">
          <AvatarImage src="/lovable-uploads/d5a54318-571b-4628-9628-92d6e9cb11bc.png" alt="Djordje Karadzic" />
          <AvatarFallback>DK</AvatarFallback>
        </Avatar>
        
        <Button asChild size="lg" className="group relative overflow-hidden rounded-full animate-pulse hover:animate-none">
          <Link to="/contact" className="flex items-center py-6 px-6 bg-primary hover:bg-primary/90">
            <Calendar className="mr-2 h-4 w-4" />
            <span className="relative z-10">{t('contact.booking')}</span>
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-32 bg-white">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-sm font-medium text-primary flex items-center">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Cybethics
                  </span>
                </div>
                <h1 className="mb-4 leading-tight text-balance">{t('hero.title')}</h1>
                <p className="text-lg md:text-xl text-text/80 max-w-xl text-balance">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full group">
                  <Link to="/services">
                    {t('hero.cta')}
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5">
                  <Link to="/contact">
                    {t('contact.booking')}
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-6 h-6 bg-primary/20 rounded"></div>
                <p className="text-sm font-medium">We prefer deeds to words</p>
              </div>
            </div>
            
            {/* Only show this div on desktop */}
            {!isMobile && (
              <div className="flex flex-col gap-6">
                <div className="h-64 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png" 
                    alt="Cybethics Logo" 
                    className="w-3/4 h-auto"
                  />
                </div>
                
                <div>
                  <CodeAnimation />
                </div>
              </div>
            )}

            {/* Show only code animation for mobile with proper spacing */}
            {isMobile && (
              <div className="mt-4 mb-32">
                <CodeAnimation />
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Contact Partner positioned between sections */}
      <ContactPartner />
    </>
  );
};

export default HeroSection;
