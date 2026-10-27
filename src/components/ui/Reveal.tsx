import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export type RevealDirection = 'up' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  /** Seconds of delay, useful for staggering siblings. */
  delay?: number;
  direction?: RevealDirection;
  className?: string;
  /** Render as a different element when the default `div` would break layout. */
  as?: 'div' | 'li' | 'section' | 'article' | 'span';
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 26 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Fades content in the first time it scrolls into view.
 * Collapses to a no-op when the visitor asks for reduced motion.
 */
export function Reveal({ children, delay = 0, direction = 'up', className, as = 'div' }: RevealProps) {
  const prefersReduced = usePrefersReducedMotion();
  const MotionTag = motion[as];

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const offset = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
