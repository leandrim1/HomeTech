import { Loader2 } from 'lucide-react';

/**
 * Shown only while a lazily-loaded route chunk is in flight — never on a page
 * that is already resolved, so the site does not flash a spinner needlessly.
 */
export function PageLoader() {
  return (
    <div
      className="flex min-h-[70vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="flex flex-col items-center gap-4">
        <Loader2 className="h-7 w-7 animate-spin text-gold" strokeWidth={1.75} aria-hidden="true" />
        <span className="text-sm text-silver-dim">Carregando…</span>
      </span>
    </div>
  );
}
