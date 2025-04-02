
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useLanguage} from '@/contexts/LanguageContext';
import {Button} from '@/components/ui/button';
import {Calendar, ChevronRight, Sparkles, MapPin} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useIsMobile} from '@/hooks/use-mobile';

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
    <div className={`glass rounded-lg shadow-lg px-6 py-3 font-mono text-sm ${isMobile ? 'w-[100%] ' : ''} overflow-hidden md:h-56 h-48`}>
      <pre className="text-left overflow-x-hidden">
        <code className="text-primary/90 text-xs sm:text-base">
          {text}
        </code>
      </pre>
    </div>
  );
};

const ContactPartner: React.FC = () => {
  const {t} = useLanguage();

  return (
    <div className="container relative z-20 -mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-8 bg-white shadow-lg rounded-xl max-w-2xl mx-auto">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-primary pb-2">{t('contact.partner')}</h3>
          <p className="text-xl font-medium">Djordje Karadzic</p>
          <p className="text-md text-gray-400 mt-1">Cybethics</p>
        </div>

        <Avatar className="h-36 w-36 border-2 border-primary/20 flex-shrink-0">
          <AvatarImage src="/media/d5a54318-571b-4628-9628-92d6e9cb11bc.png" alt="Djordje Karadzic"/>
          <AvatarFallback>DK</AvatarFallback>
        </Avatar>

        <Button asChild
                size="lg"
                className="group relative overflow-hidden rounded-full animate-pulse hover:animate-none"
                style={{animationDuration: '10s'}}>
          <Link to="/contact" className="flex items-center py-6 px-6 bg-primary hover:bg-primary/90">
            <Calendar className="mr-2 h-4 w-4"/>
            <span className="relative z-10">{t('contact.booking')}</span>
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"/>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-36 pb-12 md:pb-20 bg-white">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-sm font-medium text-primary flex items-center">
                    <Sparkles className="mr-2 h-4 w-4"/>
                    Cybethics
                  </span>
                </div>
                <h1 className="mb-4 leading-tight text-balance">
                  {t('hero.title')} <span className="text-primary">Zentralschweiz</span>
                </h1>
                <p className="text-lg md:text-xl text-text/80 ">
                  {t('hero.subtitle')} <span className="font-medium">Luzern, Zug und der gesamten Zentralschweiz</span>.
                </p>
                
                {/* Location Badge */}
                <div className="mt-4 inline-flex items-center py-2 px-4 bg-gray-50 rounded-full">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium">Emmen, Luzern</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5">
                  <Link to="/services">
                    {t('hero.cta')}
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full group">
                  <Link to="/contact">
                    {t('contact.booking')}
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <Link to="/zentralschweiz" className="text-sm font-medium flex items-center text-primary/80 hover:text-primary group">
                  <span>IT-Lösungen in der Zentralschweiz</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                </Link>
              </div>
            </div>

            {/* Only show this div on desktop */}
            {!isMobile && (
              <div className="flex flex-col gap-6">
                <div className="h-64 items-center justify-center hidden lg:flex">
                  <img
                    src="/media/cybethics.png"
                    alt="Cybethics - Softwareentwicklung und Automatisierung in der Zentralschweiz"
                    className="w-3/4 h-auto"
                  />
                </div>

                <div>
                  <CodeAnimation/>
                </div>
              </div>
            )}

            {/* Show only code animation for mobile with proper spacing */}
            {isMobile && (
              <div className="mt-4">
                <CodeAnimation/>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Partner positioned between sections with more space */}
      <ContactPartner/>
    </>
  );
};

export default HeroSection;
