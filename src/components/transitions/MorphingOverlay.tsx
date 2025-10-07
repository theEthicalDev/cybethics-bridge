import React, { useEffect, useRef } from 'react';

interface MorphingOverlayProps {
  isActive: boolean;
  direction?: 'forward' | 'backward';
}

const MorphingOverlay: React.FC<MorphingOverlayProps> = ({ isActive, direction = 'forward' }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!isActive || !pathRef.current) return;

    let progress = 0;
    const duration = 800;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      // Create morphing wave path
      const width = 100;
      const height = 100;
      const waveHeight = 15;
      const waveCount = 3;

      let path = direction === 'forward'
        ? `M ${eased * width * 2} 0`
        : `M ${(1 - eased) * width * 2} 0`;

      // Create wavy left edge
      for (let y = 0; y <= height; y += 5) {
        const waveOffset = Math.sin((y / height) * Math.PI * waveCount + eased * Math.PI) * waveHeight;
        const x = direction === 'forward'
          ? (eased * width * 2) + waveOffset - width
          : ((1 - eased) * width * 2) + waveOffset - width;
        path += ` L ${x} ${y}`;
      }

      // Complete the path
      path += ` L ${direction === 'forward' ? width * 2 : -width} ${height}`;
      path += ` L ${direction === 'forward' ? width * 2 : -width} 0 Z`;

      if (pathRef.current) {
        pathRef.current.setAttribute('d', path);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, direction]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="morphing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.95 }} />
            <stop offset="50%" style={{ stopColor: 'hsl(var(--primary-light))', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.95 }} />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          fill="url(#morphing-gradient)"
          d="M 0,0"
        />
      </svg>
    </div>
  );
};

export default MorphingOverlay;
