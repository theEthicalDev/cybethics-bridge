import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransitionContext } from '@/components/transitions/TransitionContext';

export const usePageTransition = () => {
  const navigate = useNavigate();
  const { startTransition, setTransitionDirection } = useTransitionContext();

  const transitionTo = useCallback((path: string, direction: 'forward' | 'backward' = 'forward') => {
    setTransitionDirection(direction);
    startTransition();
    
    setTimeout(() => {
      navigate(path);
    }, 400);
  }, [navigate, startTransition, setTransitionDirection]);

  return { transitionTo };
};
