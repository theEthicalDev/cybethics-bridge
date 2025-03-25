
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles, Calendar } from 'lucide-react';
import Logo from '@/components/Logo';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="glass rounded-lg shadow-lg p-6 font-mono text-sm overflow-hidden h-64">
      <pre className="text-left overflow-x-auto">
        <code className="text-primary/90">{text}</code>
      </pre>
    </div>
  );
};

const MeshGradientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    
    // Create gradient circles
    const gradientCircles = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: canvas.width * 0.4, color: 'rgba(124, 28, 212, 0.15)' },
      { x: canvas.width * 0.7, y: canvas.height * 0.6, radius: canvas.width * 0.5, color: 'rgba(146, 82, 234, 0.15)' },
      { x: canvas.width * 0.5, y: canvas.height * 0.2, radius: canvas.width * 0.45, color: 'rgba(183, 148, 244, 0.12)' },
      { x: canvas.width * 0.8, y: canvas.height * 0.3, radius: canvas.width * 0.35, color: 'rgba(207, 186, 240, 0.13)' }
    ];
    
    // Animation variables
    let angle = 0;
    const speed = 0.0008;
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update circle positions with continuous subtle movement
      angle += speed;
      gradientCircles.forEach((circle, index) => {
        const offsetX = Math.sin(angle + index * 0.5) * 70;
        const offsetY = Math.cos(angle + index * 0.7) * 50;
        
        const gradient = ctx.createRadialGradient(
          circle.x + offsetX, 
          circle.y + offsetY, 
          0, 
          circle.x + offsetX, 
          circle.y + offsetY, 
          circle.radius
        );
        
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x + offsetX, circle.y + offsetY, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 w-full h-full"></canvas>
  );
};

const LogoAnimation: React.FC = () => {
  const [scale, setScale] = useState(0);
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
      setScale(1.2);
    }, 300);
    
    setTimeout(() => {
      setScale(1);
    }, 800);
    
    setTimeout(() => {
      setScale(1.1);
    }, 1200);
    
    setTimeout(() => {
      setScale(1);
    }, 1500);
  }, []);
  
  return (
    <div 
      className="w-full h-full flex items-center justify-center"
      style={{
        opacity,
        transform: `scale(${scale})`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <img 
        src="/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png" 
        alt="Cybethics Logo" 
        className="w-3/4 h-auto"
      />
    </div>
  );
};

const ContactPartner: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-6 -mt-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg max-w-4xl mx-auto">
        <div className="text-left">
          <h3 className="text-lg font-semibold text-primary">Your Contact Partner</h3>
          <p className="text-xl font-medium">Djordje Karadzic</p>
          <p className="text-sm text-gray-600 mt-1">Cybethics Solutions</p>
        </div>
        
        <Avatar className="h-20 w-20 border-2 border-primary/20 flex-shrink-0">
          <AvatarImage src="/lovable-uploads/d5a54318-571b-4628-9628-92d6e9cb11bc.png" alt="Djordje Karadzic" />
          <AvatarFallback>DK</AvatarFallback>
        </Avatar>
        
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full group">
          <Link to="/contact">
            <Calendar className="mr-2 h-4 w-4" />
            {t('contact.booking')}
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-gradient-to-b from-white via-white to-gray-50/80">
        <MeshGradientBackground />
        
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
                <div className="w-6 h-6 bg-red-600 rounded"></div>
                <p className="text-sm font-medium">{t('about.swiss')}</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="h-64 flex items-center justify-center">
                <LogoAnimation />
              </div>
              
              <div>
                <CodeAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add a gradient transition div */}
      <div className="h-24 bg-gradient-to-b from-gray-50/80 to-gray-50 -mt-24"></div>
      
      {/* Contact Partner positioned centrally between sections */}
      <ContactPartner />
    </>
  );
};

export default HeroSection;
