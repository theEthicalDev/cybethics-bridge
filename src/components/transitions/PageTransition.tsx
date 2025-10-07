import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MorphingOverlay from './MorphingOverlay';
import { useTransitionContext } from './TransitionContext';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const { isTransitioning, startTransition, endTransition, transitionDirection } = useTransitionContext();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayLocation(location);
      return;
    }

    if (location.pathname !== displayLocation.pathname) {
      setIsAnimating(true);
      startTransition();

      // Start exit animation
      setTimeout(() => {
        setDisplayLocation(location);
      }, 400);

      // End transition
      setTimeout(() => {
        endTransition();
        setIsAnimating(false);
      }, 800);
    }
  }, [location, displayLocation, startTransition, endTransition]);

  return (
    <>
      <MorphingOverlay isActive={isTransitioning} direction={transitionDirection} />
      <div
        className={cn(
          "transition-opacity duration-300",
          isAnimating ? "opacity-0" : "opacity-100"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
