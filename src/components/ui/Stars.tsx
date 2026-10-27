import { Star } from 'lucide-react';

interface StarsProps {
  /** 1–5. Pass `null` when the original rating was not informed. */
  rating: number | null;
  className?: string;
}

/**
 * Renders a star rating. When `rating` is `null` nothing is drawn, so the site
 * never invents a score for a review that did not state one.
 */
export function Stars({ rating, className }: StarsProps) {
  if (rating === null) return null;

  const rounded = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div
      className={className}
      role="img"
      aria-label={`Avaliação de ${rounded} de 5 estrelas`}
    >
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={
              index < rounded ? 'h-4 w-4 fill-gold text-gold' : 'h-4 w-4 text-white/15'
            }
            strokeWidth={1.5}
          />
        ))}
      </div>
    </div>
  );
}
