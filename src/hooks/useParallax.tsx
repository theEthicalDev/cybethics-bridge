import { useEffect, useState, useCallback } from 'react';

interface ParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, disabled = false } = options;
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (disabled) return;
    
    const scrollY = window.scrollY;
    const newOffset = scrollY * speed;
    setOffset(newOffset);
  }, [speed, disabled]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || disabled) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, disabled]);

  return offset;
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const totalScrollable = documentHeight - windowHeight;
      const scrollProgress = (scrollY / totalScrollable) * 100;
      
      setProgress(Math.min(scrollProgress, 100));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
};
