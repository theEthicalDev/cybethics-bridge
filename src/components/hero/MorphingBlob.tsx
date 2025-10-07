import React, { useEffect, useRef } from 'react';

interface MorphingBlobProps {
  size: number;
  speed: number;
  color: string;
  blur?: number;
  opacity?: number;
  delay?: number;
}

const MorphingBlob: React.FC<MorphingBlobProps> = ({ 
  size, 
  speed, 
  color, 
  blur = 40, 
  opacity = 0.6,
  delay = 0 
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!pathRef.current) return;

    let time = delay;
    const animate = () => {
      time += speed * 0.001;
      
      // Generate organic blob shape using sine waves
      const points = 8;
      const radius = size / 2;
      let pathData = 'M ';
      
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wobble1 = Math.sin(time + i) * 0.2;
        const wobble2 = Math.cos(time * 0.7 + i * 0.5) * 0.15;
        const r = radius * (1 + wobble1 + wobble2);
        
        const x = size / 2 + Math.cos(angle) * r;
        const y = size / 2 + Math.sin(angle) * r;
        
        if (i === 0) {
          pathData += `${x},${y} `;
        } else {
          // Use bezier curves for smooth organic shapes
          const prevAngle = ((i - 1) / points) * Math.PI * 2;
          const prevWobble1 = Math.sin(time + (i - 1)) * 0.2;
          const prevWobble2 = Math.cos(time * 0.7 + (i - 1) * 0.5) * 0.15;
          const prevR = radius * (1 + prevWobble1 + prevWobble2);
          
          const cp1x = size / 2 + Math.cos(prevAngle + 0.3) * prevR * 1.1;
          const cp1y = size / 2 + Math.sin(prevAngle + 0.3) * prevR * 1.1;
          const cp2x = size / 2 + Math.cos(angle - 0.3) * r * 1.1;
          const cp2y = size / 2 + Math.sin(angle - 0.3) * r * 1.1;
          
          pathData += `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y} `;
        }
      }
      
      pathData += 'Z';
      
      if (pathRef.current) {
        pathRef.current.setAttribute('d', pathData);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size, speed, delay]);

  return (
    <svg 
      width={size} 
      height={size} 
      className="absolute"
      style={{ 
        filter: `blur(${blur}px)`,
        opacity,
        willChange: 'transform'
      }}
    >
      <defs>
        <linearGradient id={`blob-gradient-${color}-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.5 }} />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        fill={`url(#blob-gradient-${color}-${delay})`}
        d="M 0,0"
      />
    </svg>
  );
};

export default MorphingBlob;
