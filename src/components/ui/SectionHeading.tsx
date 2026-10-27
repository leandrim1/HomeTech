import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  /** Small gold label above the title. */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Heading element to render — keeps the document outline correct. */
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Tag = 'h2',
  id,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Reveal className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold',
            centered && 'justify-center',
          )}
        >
          <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
          {eyebrow}
          <span aria-hidden="true" className="h-px w-8 bg-gradient-to-l from-transparent to-gold/70" />
        </p>
      ) : null}

      <Tag id={id} className="text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Tag>

      {subtitle ? (
        <p className={cn('mt-5 text-base leading-relaxed text-silver-dim sm:text-lg', centered && 'mx-auto')}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
