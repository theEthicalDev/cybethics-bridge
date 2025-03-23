
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

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
    <div className="glass rounded-lg border border-white/20 shadow-lg p-6 font-mono text-sm overflow-hidden animate-float">
      <pre className="text-left overflow-x-auto">
        <code className="text-primary/90">{text}</code>
      </pre>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-medium text-primary">Cybethics</span>
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
              <div className="w-6 h-6 bg-red-600 rounded"></div>
              <p className="text-sm font-medium">{t('about.swiss')}</p>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="w-full h-full max-w-lg mx-auto relative">
              {/* Code animation */}
              <div className="absolute top-0 right-0 left-0 z-10">
                <CodeAnimation />
              </div>
              
              {/* Personal image below code animation */}
              <div className="absolute inset-0 mt-64 glass rounded-3xl border border-white/20 shadow-lg overflow-hidden transform -rotate-3 animate-float" style={{ animationDelay: '1s' }}>
                <img 
                  src="/lovable-uploads/7c05cd7c-66b7-46f9-8156-5b85017caf76.png"
                  alt="Cybethics Team"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
