
import React, { useState, useEffect, useRef } from 'react';

export interface AnimatedCounterProps {
  value: number;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  label, 
  icon, 
  delay = 0,
  suffix = ""
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          // Add delay before starting animation
          const timeoutId = setTimeout(() => {
            let startTime: number;
            const duration = 2000; // 2 seconds
            
            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const currentCount = Math.floor(progress * value);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(value);
              }
            };
            
            requestAnimationFrame(animate);
          }, delay);
          
          return () => clearTimeout(timeoutId);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value, delay]);
  
  return (
    <div ref={countRef} className="text-center p-6 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      {icon && <div className="mb-3">{icon}</div>}
      <div className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-text/70">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
