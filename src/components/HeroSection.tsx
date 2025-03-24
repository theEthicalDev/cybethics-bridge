
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
    
    // Professional mountain outline points with Swiss-inspired silhouette
    canvas.width = window.innerWidth;
    canvas.height = 300;
    
    // Adjust mountain width based on canvas width
    const scaleWidth = canvas.width / 1400;
    
    // Define the mountain range as a series of peaks (Swiss Alps inspired)
    const mountainPoints = [
      [0, 300],
      [canvas.width * 0.1, 250 * scaleWidth],
      [canvas.width * 0.15, 200], 
      [canvas.width * 0.2, 150], // First peak
      [canvas.width * 0.25, 180],
      [canvas.width * 0.3, 130], // Second peak
      [canvas.width * 0.35, 160],
      [canvas.width * 0.4, 120], // Third peak
      [canvas.width * 0.45, 170],
      [canvas.width * 0.5, 100], // Main peak (Matterhorn-inspired)
      [canvas.width * 0.55, 160],
      [canvas.width * 0.6, 140], // Another peak
      [canvas.width * 0.65, 180],
      [canvas.width * 0.7, 130], // Final peak
      [canvas.width * 0.8, 200],
      [canvas.width * 0.9, 250],
      [canvas.width, 300]
    ];
    
    let progress = 0;
    const animationDuration = 2500;
    const startTime = performance.now();
    
    function drawMountain(currentTime: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      progress = Math.min((currentTime - startTime) / animationDuration, 1);
      
      // Draw mountain fill
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
      
      // Complete the path back to the bottom
      ctx.lineTo(canvas.width, 300);
      ctx.lineTo(0, 300);
      
      ctx.closePath();
      
      // Create a gradient fill for the mountains
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(124, 28, 212, 0.08)');
      gradient.addColorStop(1, 'rgba(124, 28, 212, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw mountain outline
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
      
      ctx.strokeStyle = 'rgba(124, 28, 212, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Add subtle snow caps to the peaks
      if (progress > 0.5) {
        const snowOpacity = (progress - 0.5) * 2; // Fade in snow after mountain is halfway drawn
        
        const peakIndices = [3, 5, 7, 9, 11, 13]; // Indices of mountain peaks
        for (const peakIndex of peakIndices) {
          if (peakIndex < Math.floor(progress * mountainPoints.length)) {
            const peakX = mountainPoints[peakIndex][0];
            const peakY = mountainPoints[peakIndex][1];
            
            ctx.beginPath();
            ctx.arc(peakX, peakY, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.7 * snowOpacity})`;
            ctx.fill();
          }
        }
      }
      
      if (progress < 1) {
        requestAnimationFrame(drawMountain);
      }
    }
    
    requestAnimationFrame(drawMountain);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      drawMountain(performance.now());
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas ref={canvasRef} className="w-full absolute top-0 opacity-80 pointer-events-none" style={{ zIndex: 1 }}></canvas>
  );
};

const LogoBubbleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = 400;
    canvas.height = 400;
    
    // Create image element for the logo
    const logoImage = new Image();
    logoImage.src = '/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png';
    
    // Bubble parameters
    const bubbles: {x: number, y: number, radius: number, speed: number, opacity: number}[] = [];
    const bubbleCount = 15;
    
    // Create initial bubbles
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.6 + 0.2
      });
    }
    
    // Draw function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the background bubbles
      bubbles.forEach(bubble => {
        // Move bubbles upward
        bubble.y -= bubble.speed;
        
        // Reset bubbles when they reach the top
        if (bubble.y < -bubble.radius * 2) {
          bubble.y = canvas.height + bubble.radius;
          bubble.x = Math.random() * canvas.width;
        }
        
        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 28, 212, ${bubble.opacity * 0.2})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(124, 28, 212, ${bubble.opacity * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      
      // Draw logo in the center
      if (logoImage.complete) {
        const logoSize = canvas.width * 0.7;
        const centerX = (canvas.width - logoSize) / 2;
        const centerY = (canvas.height - logoSize) / 2;
        
        // Apply a subtle glow effect
        ctx.shadowColor = 'rgba(124, 28, 212, 0.3)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        ctx.drawImage(logoImage, centerX, centerY, logoSize, logoSize);
        
        // Reset shadow
        ctx.shadowBlur = 0;
      }
      
      requestAnimationFrame(animate);
    }
    
    // Start animation when image is loaded
    logoImage.onload = () => {
      animate();
    };
    
    return () => {};
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full rounded-xl overflow-hidden border-4 border-primary/20 shadow-lg"
    />
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
              <div className="rounded-xl overflow-hidden h-96">
                <LogoBubbleAnimation />
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
