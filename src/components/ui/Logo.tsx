import { cn } from '@/lib/cn';
import { business } from '@/data/business';

interface LogoProps {
  className?: string;
  /** Hides the wordmark, leaving only the shield (used in tight spaces). */
  markOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const markSizes = {
  sm: 'h-8',
  md: 'h-9 sm:h-10',
  lg: 'h-12',
};

const wordSizes = {
  sm: 'text-[0.95rem]',
  md: 'text-lg sm:text-xl',
  lg: 'text-2xl',
};

const taglineSizes = {
  sm: 'text-[0.5rem] tracking-[0.28em]',
  md: 'text-[0.55rem] tracking-[0.3em]',
  lg: 'text-[0.65rem] tracking-[0.32em]',
};

/**
 * The HomeTech lockup: the shield mark plus the wordmark set in the brand's
 * silver-to-gold split. The shield is an inline-friendly SVG asset so it stays
 * crisp at every size and in the favicon.
 */
export function Logo({ className, markOnly = false, size = 'md' }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <img
        src="/images/hometech-mark.svg"
        alt=""
        aria-hidden="true"
        width={120}
        height={140}
        className={cn('w-auto shrink-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]', markSizes[size])}
      />

      {markOnly ? (
        <span className="sr-only">{business.name}</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className={cn('font-display font-bold leading-none', wordSizes[size])}>
            <span className="text-sheen-silver">HOME</span>
            <span className="text-sheen-gold">TECH</span>
          </span>
          <span className={cn('mt-1 font-sans font-medium uppercase text-silver-dim', taglineSizes[size])}>
            Soluções Avançadas
          </span>
        </span>
      )}
    </span>
  );
}
