import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** How long to keep looking for an anchor before giving up, in milliseconds. */
const ANCHOR_TIMEOUT = 2500;

/**
 * Restores a sane scroll position on navigation: top of the page for a new
 * route, or the anchored section when the URL carries a hash.
 *
 * Anchored targets are retried rather than read once, because routes are lazily
 * loaded — on a direct hit to `/servicos#automacao` the chunk is still in
 * flight when this effect first runs, so the element does not exist yet.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    const deadline = performance.now() + ANCHOR_TIMEOUT;
    let frame = 0;

    const attempt = () => {
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      if (performance.now() < deadline) {
        frame = window.requestAnimationFrame(attempt);
        return;
      }

      // The anchor never appeared — fall back to the top of the page.
      window.scrollTo({ top: 0, left: 0 });
    };

    frame = window.requestAnimationFrame(attempt);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
