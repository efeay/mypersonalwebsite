import { useState, useEffect, useRef } from 'react';

interface PhotoAnimationHookProps {
  delay?: number;
}

export const usePhotoAnimation = ({ delay = 2000 }: PhotoAnimationHookProps = {}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showText, setShowText] = useState(false);
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
      
      // Start typing animation after photo animation
      setTimeout(() => {
        setShowText(true);
      }, 1200);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return {
    isAnimated,
    showText,
    photoRef
  };
};