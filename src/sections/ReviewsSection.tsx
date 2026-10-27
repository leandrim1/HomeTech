import { ExternalLink } from 'lucide-react';
import { Section, Shell } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ReviewCard } from '@/components/ReviewCard';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { reviews } from '@/data/reviews';
import { business, GOOGLE_REVIEW_COUNT } from '@/data/business';

export function ReviewsSection() {
  return (
    <Section aria-labelledby="avaliacoes-titulo">
      <Shell>
        <SectionHeading
          id="avaliacoes-titulo"
          eyebrow="Avaliações"
          title="A confiança dos nossos clientes faz a diferença."
          subtitle="Comentários publicados por quem já foi atendido na nossa loja."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} delay={index * 0.08} />
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-4">
          <Button
            as="a"
            href={business.links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            Ver avaliações no Google
            <ExternalLink className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
          </Button>

          <p className="text-center text-xs text-silver-dim">
            A HomeTech reunia {GOOGLE_REVIEW_COUNT} avaliações no Google quando este site foi
            publicado. Veja o total atualizado na página da loja.
          </p>
        </Reveal>
      </Shell>
    </Section>
  );
}
