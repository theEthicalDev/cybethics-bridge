import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  depth?: number;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ 
  children, 
  speed = 0.5,
  className,
  depth = 0
}) => {
  const offset = useParallax({ speed });

  return (
    <div 
      className={cn("absolute inset-0", className)}
      style={{
        transform: `translateY(${offset}px) translateZ(${depth}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
