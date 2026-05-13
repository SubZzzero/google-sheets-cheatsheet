import { useEffect, useState } from 'react';
import s from './ScrollToTop.module.css';

const VISIBILITY_SCROLL_OFFSET = 320;

const shouldShowButton = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.scrollY > VISIBILITY_SCROLL_OFFSET;
};

export const ScrollToTop = ({ ui }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(shouldShowButton());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button type="button" className={s.button} aria-label={ui.ariaLabel} onClick={handleClick}>
      <span className={s.label}>{ui.label}</span>
    </button>
  );
};
