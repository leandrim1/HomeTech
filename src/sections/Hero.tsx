import { ArrowDown, MapPin, MessageCircle, ShieldCheck, Smartphone, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { business } from '@/data/business';
import { whatsappUrl } from '@/lib/whatsapp';

/**
 * Opening statement of the site: positioning on the left, a layered device
 * composition on the right, both collapsing to a single column on phones.
 */
export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden pb-20 pt-[calc(var(--header-h)+2.5rem)] sm:pb-24 lg:pb-28 lg:pt-[calc(var(--header-h)+4.5rem)]"
      aria-labelledby="hero-titulo"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-18%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,174,85,0.16),transparent_68%)] blur-[2px]" />
        <div className="absolute right-[-10%] top-[22%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(197,200,204,0.09),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal direction="left">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-1.5 text-xs font-medium text-gold-light">
                <MapPin className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                {business.address.city} – {business.address.state}
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <h1
                id="hero-titulo"
                className="mt-6 text-[2.1rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.35rem]"
              >
                Tecnologia avançada para{' '}
                <span className="text-sheen-gold motion-safe:animate-sheen-pan">conectar</span>,{' '}
                <span className="text-sheen-gold motion-safe:animate-sheen-pan">proteger</span> e
                facilitar sua vida.
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-dim sm:text-lg">
                Da assistência especializada em smartphones à automação e segurança residencial, a
                HomeTech oferece soluções tecnológicas para o seu dia a dia.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button as="link" to="/servicos" size="lg">
                  Conheça nossas soluções
                </Button>

                <Button
                  as="a"
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                  Fale pelo WhatsApp
                </Button>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.32}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-silver-dim">
                <li className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
                  Assistência iOS e Android
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
                  Segurança e automação
                </li>
                <li className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
                  Soluções rurais
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Visual composition */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal direction="right" delay={0.12}>
              <HeroComposition />
            </Reveal>
          </div>
        </div>

        {/* Scroll hint */}
        <Reveal delay={0.5} className="mt-16 hidden justify-center lg:flex">
          <a
            href="#solucoes"
            className="group flex flex-col items-center gap-2 rounded-lg p-2 text-xs font-medium uppercase tracking-[0.2em] text-silver-dim transition-colors hover:text-gold-light"
          >
            Explorar
            <span
              aria-hidden="true"
              className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 pt-1.5 transition-colors group-hover:border-gold/50"
            >
              <ArrowDown
                className="h-3 w-3 text-gold motion-safe:animate-scroll-hint"
                strokeWidth={2.5}
              />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Layered composition: the store front photograph framed behind a floating
 * device panel, with small connectivity cues in gold.
 */
function HeroComposition() {
  return (
    <div className="relative mx-auto max-w-[520px] lg:max-w-none">
      {/* Glow pad */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_60%_40%,rgba(215,174,85,0.14),transparent_65%)] blur-xl"
      />

      {/* Store photograph */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-ink-soft shadow-[0_40px_80px_-32px_rgba(0,0,0,0.95)]">
        <img
          src="/images/loja/fachada-ampla.webp"
          alt="Fachada da loja HomeTech Soluções Avançadas em Patos de Minas, com a vitrine listando os serviços e as marcas atendidas"
          width={680}
          height={510}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent"
        />

        {/* Caption chip */}
        <p className="absolute bottom-5 left-5 hidden items-center gap-2 rounded-full border border-white/10 bg-ink/80 px-3.5 py-2 text-xs font-medium text-silver backdrop-blur-sm sm:inline-flex">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
          Nossa loja na R. Maj. Gote, 1170
        </p>
      </div>

      {/* Floating device panel */}
      <div className="absolute -bottom-8 right-2 w-[44%] max-w-[190px] motion-safe:animate-float-slow sm:-right-6 sm:w-[38%]">
        <div className="overflow-hidden rounded-[1.4rem] border border-gold/25 bg-ink-graphite p-2.5 shadow-[0_26px_60px_-18px_rgba(0,0,0,0.95)] backdrop-blur">
          <div className="rounded-[1rem] bg-gradient-to-b from-ink-soft to-ink p-4">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-silver-dim">
                Diagnóstico
              </span>
            </span>

            <p className="mt-3 font-display text-xl font-bold text-sheen-gold">6</p>
            <p className="text-[0.68rem] leading-snug text-silver-dim">
              áreas de atuação em um só lugar
            </p>

            <div aria-hidden="true" className="mt-4 space-y-1.5">
              <span className="block h-1 w-full rounded-full bg-gold/60" />
              <span className="block h-1 w-3/4 rounded-full bg-white/15" />
              <span className="block h-1 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Connectivity badge */}
      <div className="absolute -left-3 top-8 hidden rounded-2xl border border-white/10 bg-ink/85 p-3.5 backdrop-blur sm:block">
        <Wifi className="h-5 w-5 text-gold" strokeWidth={1.75} aria-hidden="true" />
        <span className="sr-only">Conectividade</span>
      </div>
    </div>
  );
}
