
import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  label, 
  icon,
  delay = 0 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 2000; // 2 seconds animation
      const interval = 20; // Update every 20ms
      const steps = duration / interval;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          clearInterval(timer);
          current = value;
        }
        setCount(Math.floor(current));
      }, interval);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [value, delay]);
  
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      {icon && <div className="text-primary mb-4">{icon}</div>}
      <div className="text-4xl font-bold text-primary mb-2 font-heading">{count}+</div>
      <div className="text-sm text-text/70">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
