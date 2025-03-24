import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';
import Logo from '@/components/Logo';

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
    <div className="glass rounded-lg shadow-lg p-6 font-mono text-sm overflow-hidden">
      <pre className="text-left overflow-x-auto">
        <code className="text-primary/90">{text}</code>
      </pre>
    </div>
  );
};

const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: {x: number, y: number, size: number, speedX: number, speedY: number, color: string}[] = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(124, 28, 212, ${Math.random() * 0.2 + 0.05})`
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 85) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 28, 212, ${0.05 * (1 - distance / 85)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-30 pointer-events-none"></canvas>
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

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>
      
      <BackgroundParticles />
      
      <div className="container">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 h-64 flex items-center justify-center">
              <LogoAnimation />
            </div>
            
            <div className="lg:col-span-6">
              <CodeAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
