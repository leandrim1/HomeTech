import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';
import { Reveal } from '@/components/ui/Reveal';

interface ServiceCardProps {
  service: Service;
  /** Stagger delay, in seconds. */
  delay?: number;
}

export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Reveal as="li" delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-soft/70 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-lift focus-within:-translate-y-1.5 focus-within:border-gold/30">
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            decoding="async"
            width={800}
            height={560}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink-soft via-ink-soft/20 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-ink/80 text-gold backdrop-blur-sm transition-colors duration-500 group-hover:border-gold/60 group-hover:text-gold-light"
          >
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold leading-snug text-snow transition-colors duration-300 group-hover:text-gold-light">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-silver-dim">{service.summary}</p>

          <Link
            to={`/servicos#${service.slug}`}
            className="mt-6 inline-flex items-center gap-2 self-start rounded-md text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            Saiba mais
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="sr-only">sobre {service.title}</span>
          </Link>
        </div>

        {/* Hairline that lights up on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold-sheen transition-transform duration-500 group-hover:scale-x-100"
        />
      </article>
    </Reveal>
  );
}
