import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/cn';

/**
 * Floating WhatsApp entry point.
 *
 * Appears only after the visitor has scrolled past the hero so it never covers
 * the primary call to action, and can be dismissed for the session on small
 * screens where it competes with page content.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setVisible(window.scrollY > 420);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Let the label breathe for a moment, then collapse back to the icon.
  useEffect(() => {
    if (!visible || dismissed) return undefined;

    setShowLabel(true);
    const timer = window.setTimeout(() => setShowLabel(false), 4200);
    return () => window.clearTimeout(timer);
  }, [visible, dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        'fixed bottom-5 right-4 z-40 flex items-end gap-2 transition-all duration-500 sm:bottom-7 sm:right-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
      )}
    >
      <button
        type="button"
        onClick={() => setDismissed(true)}
        tabIndex={visible ? 0 : -1}
        aria-label="Ocultar o botão de WhatsApp"
        className="mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-ink-graphite/90 text-silver-dim backdrop-blur transition-colors hover:border-white/25 hover:text-snow"
      >
        <X className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
      </button>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="group relative inline-flex items-center gap-3 rounded-full bg-[#1FA855] py-3.5 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_14px_38px_-12px_rgba(31,168,85,0.85)] transition-all duration-300 hover:bg-[#25B65E] hover:shadow-[0_18px_44px_-12px_rgba(37,182,94,0.95)] active:scale-95"
        aria-label="Conversar com a HomeTech pelo WhatsApp"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#1FA855] opacity-0 motion-safe:animate-pulse-ring motion-safe:opacity-100"
        />
        <MessageCircle className="relative h-6 w-6 shrink-0" strokeWidth={2} aria-hidden="true" />
        <span
          className={cn(
            'relative overflow-hidden whitespace-nowrap transition-all duration-500',
            showLabel
              ? 'max-w-[11rem] opacity-100'
              : 'max-w-0 opacity-0 group-hover:max-w-[11rem] group-hover:opacity-100 group-focus-visible:max-w-[11rem] group-focus-visible:opacity-100',
          )}
        >
          Falar no WhatsApp
        </span>
      </a>
    </div>
  );
}
