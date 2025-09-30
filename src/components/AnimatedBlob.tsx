import React from 'react';

interface AnimatedBlobProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ 
  className = '', 
  color = 'from-primary/20 to-primary/10',
  size = 400,
  delay = 0
}) => {
  return (
    <div
      className={`absolute rounded-full blur-3xl animate-blob ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div className={`w-full h-full rounded-full bg-gradient-to-br ${color} opacity-70`} />
    </div>
  );
};

export default AnimatedBlob;
