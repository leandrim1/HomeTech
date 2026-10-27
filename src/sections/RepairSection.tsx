import { Handshake, MessageCircle, Search, Target } from 'lucide-react';
import { Section, Shell } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { whatsappUrl } from '@/lib/whatsapp';

const benefits = [
  {
    icon: Search,
    title: 'Avaliação cuidadosa do aparelho',
    description:
      'Antes de qualquer serviço, o aparelho é analisado com calma para entender o que está acontecendo.',
  },
  {
    icon: Handshake,
    title: 'Atendimento próximo e transparente',
    description:
      'Explicamos o que encontramos em linguagem simples, para que você decida com segurança.',
  },
  {
    icon: Target,
    title: 'Busca pela melhor solução',
    description:
      'Cada caso é diferente. Procuramos o caminho que faça mais sentido para o seu aparelho e para você.',
  },
];

/**
 * Dedicated spotlight on the flagship service.
 *
 * Copy intentionally avoids same-day turnaround, original-part and warranty
 * claims — none of those were confirmed by the store.
 */
export function RepairSection() {
  return (
    <Section className="relative overflow-hidden" aria-labelledby="assistencia-titulo">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_40%,rgba(215,174,85,0.09),transparent_70%)]"
      />

      <Shell>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <Reveal direction="left" className="order-last lg:order-first">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft shadow-[0_36px_70px_-30px_rgba(0,0,0,0.95)]">
                <img
                  src="/images/servicos/assistencia-smartphones.svg"
                  alt="Ilustração de bancada de assistência técnica com smartphone aberto, placa, bateria e ferramentas de precisão"
                  width={800}
                  height={560}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-6 right-4 rounded-2xl border border-gold/25 bg-ink/90 px-5 py-4 shadow-[0_22px_50px_-18px_rgba(0,0,0,0.95)] backdrop-blur sm:right-8">
                <p className="font-display text-sm font-semibold text-gold-light">iOS e Android</p>
                <p className="mt-1 text-xs text-silver-dim">as principais marcas do mercado</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal direction="right">
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
                Assistência técnica
              </p>

              <h2 id="assistencia-titulo" className="text-3xl font-semibold leading-[1.15] sm:text-4xl">
                Seu smartphone merece cuidado especializado.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-silver-dim sm:text-lg">
                Quando seu celular precisa de atenção, conte com uma equipe preparada para avaliar o
                problema e orientar você sobre a melhor solução.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <Reveal as="li" key={benefit.title} direction="right" delay={0.1 + index * 0.08}>
                    <div className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-snow">{benefit.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-silver-dim">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal direction="right" delay={0.34}>
              <Button
                as="a"
                href={whatsappUrl(
                  'Olá! Gostaria de consultar a assistência técnica da HomeTech para o meu smartphone.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-10"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                Consultar assistência
              </Button>
            </Reveal>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
