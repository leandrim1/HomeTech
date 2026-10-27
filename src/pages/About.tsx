import { Building2, Clock, Compass, MapPin, MessageCircle, Phone, Sprout, Store, Wrench } from 'lucide-react';
import { Section, Shell } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CtaSection } from '@/sections/CtaSection';
import { business, hoursSummary } from '@/data/business';
import { services } from '@/data/services';
import { storePhotos } from '@/data/storePhotos';
import { telUrl, whatsappUrl } from '@/lib/whatsapp';
import { useSeo } from '@/hooks/useSeo';

const commitments = [
  {
    icon: Compass,
    title: 'Entender antes de indicar',
    description:
      'A conversa vem primeiro. Entender o aparelho, o ambiente ou a rotina evita indicar algo que não resolve o seu problema.',
  },
  {
    icon: Wrench,
    title: 'Assistência como especialidade',
    description:
      'A assistência avançada em smartphones é o serviço que mais nos procura, e é tratada com a atenção técnica que merece.',
  },
  {
    icon: MessageCircle,
    title: 'Linguagem sem complicação',
    description:
      'Explicamos o que encontramos de forma clara, para que a decisão seja sua e você saiba exatamente o que está contratando.',
  },
];

const audiences = [
  {
    icon: Store,
    title: 'Residências',
    description:
      'Do celular do dia a dia à automação e à segurança da casa, reunindo tudo em um atendimento só.',
  },
  {
    icon: Building2,
    title: 'Empresas',
    description:
      'Equipamentos, conectividade e monitoramento para comércios e escritórios de Patos de Minas e região.',
  },
  {
    icon: Sprout,
    title: 'Propriedades rurais',
    description:
      'Conectividade e acompanhamento para áreas afastadas da sede, considerando distância e relevo.',
  },
];

export default function About() {
  useSeo({
    title: 'Sobre a HomeTech | Loja de tecnologia em Patos de Minas',
    description:
      'Conheça a HomeTech Soluções Avançadas: loja de tecnologia em Patos de Minas – MG com assistência técnica em smartphones, acessórios, informática, segurança, automação e soluções rurais.',
    path: '/sobre',
    image: '/images/loja/fachada-ampla.webp',
  });

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pb-16 pt-[calc(var(--header-h)+3rem)] lg:pt-[calc(var(--header-h)+4.5rem)]"
        aria-labelledby="sobre-pagina-titulo"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
          <div className="absolute left-1/2 top-[-30%] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,174,85,0.15),transparent_68%)]" />
        </div>

        <Shell>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal direction="left">
                <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
                  Quem somos
                </p>

                <h1 id="sobre-pagina-titulo" className="text-[2.1rem] font-bold leading-[1.1] sm:text-5xl">
                  Tecnologia que resolve. Atendimento que aproxima.
                </h1>

                <p className="mt-6 text-base leading-relaxed text-silver-dim sm:text-lg">
                  Somos uma loja de soluções tecnológicas avançadas em {business.address.city}.
                  Trabalhamos para ajudar nossos clientes a resolver problemas com smartphones e
                  outras tecnologias, oferecendo também produtos, acessórios e soluções para
                  residências, empresas e propriedades rurais.
                </p>

                <p className="mt-4 text-base leading-relaxed text-silver-dim">
                  Nosso objetivo é unir tecnologia, praticidade e atendimento próximo para encontrar
                  soluções que façam sentido para cada necessidade.
                </p>
              </Reveal>

              <Reveal direction="left" delay={0.16}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button
                    as="a"
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                    Falar com a equipe
                  </Button>

                  <Button as="link" to="/servicos" variant="outline" size="lg">
                    Ver nossos serviços
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.1}>
              <figure className="overflow-hidden rounded-2xl border border-white/[0.09] bg-ink shadow-[0_36px_70px_-30px_rgba(0,0,0,0.95)]">
                <img
                  src="/images/loja/fachada-ampla.webp"
                  alt="Fachada da loja HomeTech Soluções Avançadas, com a vitrine listando os serviços e as marcas atendidas"
                  width={680}
                  height={510}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <figcaption className="border-t border-white/[0.07] px-5 py-4 text-sm text-silver-dim">
                  Nossa loja no Centro de {business.address.city}, na {business.address.street}.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* Commitments */}
      <Section className="border-y border-white/[0.07] bg-ink-soft/50" aria-labelledby="proposta-titulo">
        <Shell>
          <SectionHeading
            id="proposta-titulo"
            eyebrow="Nossa proposta de atendimento"
            title="Perto de quem precisa resolver."
            subtitle="Tecnologia só é útil quando resolve algo concreto. É por isso que o nosso atendimento começa ouvindo."
          />

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {commitments.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal as="li" key={item.title} delay={index * 0.08}>
                  <article className="surface h-full p-7">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07] text-gold"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>

                    <h3 className="mt-5 text-lg font-semibold text-snow">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-silver-dim">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </Shell>
      </Section>

      {/* Areas of operation */}
      <Section aria-labelledby="atuacao-titulo">
        <Shell>
          <SectionHeading
            id="atuacao-titulo"
            eyebrow="Áreas de atuação"
            title="Um atendimento para três realidades diferentes."
            subtitle="A necessidade de uma casa não é a mesma de um comércio ou de uma fazenda — e o atendimento acompanha essa diferença."
          />

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;

              return (
                <Reveal as="li" key={audience.title} delay={index * 0.08}>
                  <article className="surface h-full p-7">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07] text-gold"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>

                    <h3 className="mt-5 text-lg font-semibold text-snow">{audience.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-silver-dim">
                      {audience.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-white/[0.07] bg-ink-soft/60 p-7 sm:p-9">
              <h3 className="text-lg font-semibold text-snow">
                Compromisso com soluções tecnológicas
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-silver-dim">
                Reunimos em um único endereço seis frentes que normalmente exigiriam procurar
                fornecedores diferentes. Isso encurta o caminho de quem precisa resolver algo hoje e
                permite que uma solução cresça com o tempo — começando pelo essencial e ampliando
                conforme a necessidade aparece.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <a
                      href={`/servicos#${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-silver transition-colors hover:border-gold/50 hover:text-gold-light"
                    >
                      {service.shortTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Shell>
      </Section>

      {/* Store gallery */}
      <Section className="border-y border-white/[0.07] bg-ink-soft/50" aria-labelledby="loja-titulo">
        <Shell>
          <SectionHeading
            id="loja-titulo"
            eyebrow="Nossa loja"
            title="Venha conhecer o espaço."
            subtitle="Fotos reais da nossa loja no Centro de Patos de Minas."
          />

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {storePhotos.map((photo, index) => (
              <Reveal as="li" key={photo.src} delay={index * 0.06}>
                <figure className="group h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-ink shadow-card transition-colors duration-500 hover:border-gold/30">
                  <div className="overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={382}
                      height={510}
                      loading="lazy"
                      decoding="async"
                      className="h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-64"
                    />
                  </div>
                  <figcaption className="border-t border-white/[0.07] px-5 py-4 text-sm text-silver-dim">
                    {photo.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </Shell>
      </Section>

      {/* Location + channels */}
      <Section aria-labelledby="canais-titulo">
        <Shell>
          <SectionHeading
            id="canais-titulo"
            eyebrow="Localização e contato"
            title="Como chegar e como falar com a gente."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}>
              <article className="surface h-full p-7">
                <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  <MapPin className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  Endereço
                </h3>
                <address className="mt-4 not-italic text-sm leading-relaxed text-silver-dim">
                  {business.address.street}, {business.address.complement.toLowerCase()}
                  <br />
                  {business.address.district}, {business.address.city} – {business.address.state}
                  <br />
                  CEP {business.address.postalCode}
                </address>
                <Button
                  as="a"
                  href={business.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="mt-5"
                >
                  Abrir no Google Maps
                </Button>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="surface h-full p-7">
                <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  <Phone className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  Canais de contato
                </h3>
                <p className="mt-4 font-display text-xl font-semibold text-snow">
                  {business.phone.display}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-silver-dim">
                  Ligue para a loja ou inicie uma conversa pelo WhatsApp.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button as="a" href={telUrl} variant="outline" size="sm">
                    Ligar
                  </Button>
                  <Button
                    as="a"
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                  >
                    WhatsApp
                  </Button>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article className="surface h-full p-7">
                <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  <Clock className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  Horários
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-silver-dim">{hoursSummary}</p>
                <p className="mt-2 text-sm text-silver-dim/70">Domingo: fechado.</p>
                <Button as="link" to="/contato" variant="outline" size="sm" className="mt-5">
                  Ver página de contato
                </Button>
              </article>
            </Reveal>
          </div>
        </Shell>
      </Section>

      <CtaSection />
    </>
  );
}
