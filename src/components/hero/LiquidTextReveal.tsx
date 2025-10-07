import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LiquidTextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const LiquidTextReveal: React.FC<LiquidTextRevealProps> = ({ 
  children, 
  delay = 0,
  className 
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "transition-all duration-1000 ease-out",
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-background via-primary/20 to-background transition-transform duration-1000 ease-in-out",
          isRevealed ? "-translate-x-full" : "translate-x-0"
        )}
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
        }}
      />
    </div>
  );
};

export default LiquidTextReveal;
