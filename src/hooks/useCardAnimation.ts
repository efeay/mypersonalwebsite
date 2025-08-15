import { useState, useEffect } from 'react';

interface UseCardAnimationProps {
  delay?: number;
  staggerDelay?: number;
}

export const useCardAnimation = ({ delay = 2500, staggerDelay = 200 }: UseCardAnimationProps) => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { showCards, staggerDelay };
};