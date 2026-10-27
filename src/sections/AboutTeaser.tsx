import { ArrowRight, Building2, Sprout, Store } from 'lucide-react';
import { Section, Shell } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { business } from '@/data/business';

const audiences = [
  { icon: Store, label: 'Residências' },
  { icon: Building2, label: 'Empresas' },
  { icon: Sprout, label: 'Propriedades rurais' },
];

export function AboutTeaser() {
  return (
    <Section className="border-y border-white/[0.07] bg-ink-soft/50" aria-labelledby="sobre-titulo">
      <Shell>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal direction="left">
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
                Sobre a HomeTech
              </p>

              <h2 id="sobre-titulo" className="text-3xl font-semibold leading-[1.15] sm:text-4xl">
                Tecnologia que resolve. Atendimento que aproxima.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-dim sm:text-lg">
                Somos uma loja de soluções tecnológicas avançadas em {business.address.city}.
                Trabalhamos para ajudar nossos clientes a resolver problemas com smartphones e outras
                tecnologias, oferecendo também produtos, acessórios e soluções para residências,
                empresas e propriedades rurais.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-silver-dim">
                Nosso objetivo é unir tecnologia, praticidade e atendimento próximo para encontrar
                soluções que façam sentido para cada necessidade.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.14}>
              <ul className="mt-9 flex flex-wrap gap-3">
                {audiences.map((audience) => {
                  const Icon = audience.icon;

                  return (
                    <li
                      key={audience.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-silver"
                    >
                      <Icon className="h-4 w-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
                      {audience.label}
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal direction="left" delay={0.22}>
              <Button as="link" to="/sobre" variant="outline" size="lg" className="mt-10">
                Conheça a HomeTech
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </Button>
            </Reveal>
          </div>

          {/* Store photographs */}
          <Reveal direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <figure className="col-span-2 overflow-hidden rounded-2xl border border-white/[0.09] bg-ink shadow-card">
                <img
                  src="/images/loja/interior-automacao.webp"
                  alt="Prateleiras da loja HomeTech com equipamentos de áudio, segurança e automação residencial"
                  width={382}
                  height={510}
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover object-center sm:h-72"
                />
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-white/[0.09] bg-ink shadow-card">
                <img
                  src="/images/loja/interior-capas.webp"
                  alt="Parede interna da loja HomeTech com capas de celular organizadas em expositor"
                  width={382}
                  height={510}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover sm:h-52"
                />
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-white/[0.09] bg-ink shadow-card">
                <img
                  src="/images/loja/fachada-entrada.webp"
                  alt="Entrada da loja HomeTech vista da calçada, com o letreiro acima da porta"
                  width={382}
                  height={510}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover sm:h-52"
                />
              </figure>
            </div>
          </Reveal>
        </div>
      </Shell>
    </Section>
  );
}
