import { useEffect } from 'react';

export const useLocomotiveScroll = () => {
  useEffect(() => {
    // Enable smooth scrolling via CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null;
};
