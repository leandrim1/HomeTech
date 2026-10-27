import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Vertical rhythm. `tight` is for strips, `loose` for feature sections. */
  spacing?: 'tight' | 'normal' | 'loose';
  'aria-labelledby'?: string;
  'aria-label'?: string;
}

const spacings = {
  tight: 'py-12 sm:py-14',
  normal: 'py-16 sm:py-20 lg:py-24',
  loose: 'py-20 sm:py-24 lg:py-32',
};

export function Section({ id, children, className, spacing = 'normal', ...aria }: SectionProps) {
  return (
    <section id={id} className={cn('relative', spacings[spacing], className)} {...aria}>
      {children}
    </section>
  );
}

/** Centred content column shared by every section. */
export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('shell', className)}>{children}</div>;
}
