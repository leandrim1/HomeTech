import { useEffect, useState } from 'react';

/**
 * Reports whether the page has scrolled past `threshold` pixels.
 * Used by the header to swap between its transparent and solid states.
 */
export function useScrolledPast(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      // Coalesce scroll events into one state write per frame.
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return scrolled;
}
