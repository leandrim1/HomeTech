import { Quote } from 'lucide-react';
import type { Review } from '@/data/reviews';
import { Stars } from '@/components/ui/Stars';
import { Reveal } from '@/components/ui/Reveal';

interface ReviewCardProps {
  review: Review;
  delay?: number;
}

export function ReviewCard({ review, delay = 0 }: ReviewCardProps) {
  return (
    <Reveal as="li" delay={delay} className="h-full">
      <figure className="relative flex h-full flex-col rounded-2xl border border-white/[0.07] bg-ink-soft/70 p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/25">
        <Quote
          className="h-7 w-7 shrink-0 text-gold/35"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <blockquote className="mt-5 flex-1">
          <p className="text-base leading-relaxed text-snow">“{review.comment}”</p>
        </blockquote>

        <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.08] font-display text-sm font-semibold text-gold"
          >
            {review.name.charAt(0)}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-snow">{review.name}</span>
            <span className="mt-1 flex items-center gap-2">
              <Stars rating={review.rating} />
              <span className="text-xs text-silver-dim">Avaliação no {review.source}</span>
            </span>
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
