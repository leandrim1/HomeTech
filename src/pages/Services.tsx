import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
import { Section, Shell } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CtaSection } from '@/sections/CtaSection';
import { services, type Service } from '@/data/services';
import { whatsappUrl } from '@/lib/whatsapp';
import { useSeo } from '@/hooks/useSeo';
import { cn } from '@/lib/cn';

export default function Services() {
  const { hash } = useLocation();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useSeo({
    title: 'Serviços | Assistência técnica e tecnologia | HomeTech',
    description:
      'Conheça as seis áreas de atuação da HomeTech em Patos de Minas: assistência avançada em smartphones, celulares e acessórios, informática, segurança residencial, automação e soluções rurais.',
    path: '/servicos',
  });

  // Highlight the category that was deep-linked from a card or the footer.
  useEffect(() => {
    const slug = hash ? decodeURIComponent(hash.slice(1)) : null;
    setActiveSlug(slug);

    if (!slug) return undefined;

    // Fade the highlight out so it draws the eye without staying loud.
    const timer = window.setTimeout(() => setActiveSlug(null), 2600);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <PageHeader />
      <CategoryNav />

      <div>
        {services.map((service, index) => (
          <ServiceBlock
            key={service.slug}
            service={service}
            reversed={index % 2 === 1}
            highlighted={activeSlug === service.slug}
          />
        ))}
      </div>

      <CtaSection />
    </>
  );
}

function PageHeader() {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-[calc(var(--header-h)+3rem)] sm:pb-16 lg:pt-[calc(var(--header-h)+4.5rem)]"
      aria-labelledby="servicos-titulo"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-30%] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,174,85,0.15),transparent_68%)]" />
      </div>

      <Shell>
        <Reveal className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
            Nossas soluções
          </p>

          <h1 id="servicos-titulo" className="text-[2.1rem] font-bold leading-[1.1] sm:text-5xl">
            Soluções completas em tecnologia
          </h1>

          <p className="mt-6 text-base leading-relaxed text-silver-dim sm:text-lg">
            Encontre a solução ideal para seus equipamentos, sua casa, sua empresa ou sua propriedade
            rural. Cada categoria começa com uma conversa para entender o que você precisa.
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

/** Sticky category rail — doubles as an in-page table of contents. */
function CategoryNav() {
  return (
    <nav
      aria-label="Categorias de serviço"
      className="sticky top-[var(--header-h)] z-30 border-y border-white/[0.07] bg-ink/90 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/75"
    >
      <div className="shell">
        <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <li key={service.slug} className="shrink-0">
                <a
                  href={`#${service.slug}`}
                  className="tap-target inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-silver transition-all duration-300 hover:border-gold/50 hover:bg-gold/[0.07] hover:text-gold-light"
                >
                  <Icon className="h-4 w-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
                  {service.shortTitle}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

interface ServiceBlockProps {
  service: Service;
  reversed: boolean;
  highlighted: boolean;
}

function ServiceBlock({ service, reversed, highlighted }: ServiceBlockProps) {
  const Icon = service.icon;

  return (
    <Section
      id={service.slug}
      spacing="normal"
      className={cn(
        'scroll-mt-[4.5rem] border-b border-white/[0.07] transition-colors duration-700',
        reversed && 'bg-ink-soft/40',
        highlighted && 'bg-gold/[0.045]',
      )}
      aria-labelledby={`${service.slug}-titulo`}
    >
      <Shell>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal
            direction={reversed ? 'right' : 'left'}
            className={cn(reversed && 'lg:order-last')}
          >
            <div
              className={cn(
                'overflow-hidden rounded-2xl border bg-ink shadow-card transition-colors duration-700',
                highlighted ? 'border-gold/40' : 'border-white/[0.09]',
              )}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                width={800}
                height={560}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal direction={reversed ? 'left' : 'right'}>
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07] text-gold"
              >
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>

              <h2
                id={`${service.slug}-titulo`}
                className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl"
              >
                {service.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-silver-dim">{service.description}</p>
            </Reveal>

            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              <Reveal direction={reversed ? 'left' : 'right'} delay={0.1}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  Principais aplicações
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.applications.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-silver-dim">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold/70"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal direction={reversed ? 'left' : 'right'} delay={0.18}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  O que você encontra
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-silver-dim">
                      <Sparkles
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold/70"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal direction={reversed ? 'left' : 'right'} delay={0.26}>
              <Button
                as="a"
                href={whatsappUrl(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-9"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                Solicitar informações
                <span className="sr-only"> sobre {service.title}</span>
              </Button>
            </Reveal>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
