import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';
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
    <div className="glass rounded-lg border border-white/20 shadow-lg p-6 font-mono text-sm overflow-hidden animate-float absolute top-0">
      <pre className="text-left overflow-x-auto">
        <code className="text-primary/90">{text}</code>
      </pre>
    </div>
  );
};

const MountainAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = 900;
    canvas.height = 300;
    
    const mountainPoints = [
      [0, 300],
      [100, 250],
      [200, 180],
      [300, 120],
      [350, 200],
      [400, 150],
      [450, 220],
      [550, 100],
      [650, 180],
      [750, 220],
      [850, 240],
      [900, 300]
    ];
    
    let progress = 0;
    const animationDuration = 3000;
    const startTime = performance.now();
    
    function drawMountain(currentTime: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      progress = Math.min((currentTime - startTime) / animationDuration, 1);
      
      ctx.beginPath();
      ctx.moveTo(mountainPoints[0][0], mountainPoints[0][1]);
      
      for (let i = 1; i < Math.floor(progress * mountainPoints.length); i++) {
        ctx.lineTo(mountainPoints[i][0], mountainPoints[i][1]);
      }
      
      if (progress < 1) {
        const currentIndex = Math.floor(progress * mountainPoints.length);
        const nextIndex = Math.min(currentIndex + 1, mountainPoints.length - 1);
        const subProgress = (progress * mountainPoints.length) % 1;
        
        const currentX = mountainPoints[currentIndex][0] + (mountainPoints[nextIndex][0] - mountainPoints[currentIndex][0]) * subProgress;
        const currentY = mountainPoints[currentIndex][1] + (mountainPoints[nextIndex][1] - mountainPoints[currentIndex][1]) * subProgress;
        
        ctx.lineTo(currentX, currentY);
      }
      
      ctx.closePath();
      
      ctx.fillStyle = 'rgba(124, 28, 212, 0.05)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(mountainPoints[0][0], mountainPoints[0][1]);
      
      for (let i = 1; i < Math.floor(progress * mountainPoints.length); i++) {
        ctx.lineTo(mountainPoints[i][0], mountainPoints[i][1]);
      }
      
      if (progress < 1) {
        const currentIndex = Math.floor(progress * mountainPoints.length);
        const nextIndex = Math.min(currentIndex + 1, mountainPoints.length - 1);
        const subProgress = (progress * mountainPoints.length) % 1;
        
        const currentX = mountainPoints[currentIndex][0] + (mountainPoints[nextIndex][0] - mountainPoints[currentIndex][0]) * subProgress;
        const currentY = mountainPoints[currentIndex][1] + (mountainPoints[nextIndex][1] - mountainPoints[currentIndex][1]) * subProgress;
        
        ctx.lineTo(currentX, currentY);
      }
      
      ctx.strokeStyle = 'rgba(124, 28, 212, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      if (progress < 1) {
        requestAnimationFrame(drawMountain);
      }
    }
    
    requestAnimationFrame(drawMountain);
    
    return () => {};
  }, []);
  
  return (
    <canvas ref={canvasRef} className="w-full absolute top-0 opacity-70 pointer-events-none" style={{ zIndex: 1 }}></canvas>
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

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>
      
      <BackgroundParticles />
      
      <div className="absolute top-0 left-0 right-0 z-0">
        <MountainAnimation />
      </div>
      
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
          
          <div className="relative animate-scale-in flex flex-col items-center">
            <div className="w-full max-w-md mx-auto relative mb-8">
              <div className="rounded-xl overflow-hidden border-4 border-primary/20 shadow-lg">
                <img 
                  src="/public/lovable-uploads/d5a54318-571b-4628-9628-92d6e9cb11bc.png" 
                  alt="Professional portrait" 
                  className="w-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-16 -right-8 w-64 transform rotate-6 scale-75 opacity-90 z-10">
                <CodeAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
