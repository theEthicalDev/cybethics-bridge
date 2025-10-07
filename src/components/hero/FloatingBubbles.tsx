import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  blur: number;
}

const FloatingBubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate random bubbles
    const newBubbles: Bubble[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      blur: Math.random() * 3 + 1
    }));
    
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-0 rounded-full animate-float-up"
          style={{
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 30% 30%, 
              hsla(var(--primary), 0.3), 
              hsla(var(--primary), 0.05))`,
            filter: `blur(${bubble.blur}px)`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
