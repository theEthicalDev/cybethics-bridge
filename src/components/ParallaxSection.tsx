import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  disabled?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5,
  className,
  disabled = false
}) => {
  const offset = useParallax({ speed, disabled });

  return (
    <div 
      className={cn("relative", className)}
      style={{
        transform: disabled ? 'none' : `translateY(${offset}px)`,
        willChange: disabled ? 'auto' : 'transform'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
