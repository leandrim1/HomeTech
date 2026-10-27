import { ArrowLeft, MessageCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Shell } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { navigation } from '@/data/navigation';
import { whatsappUrl } from '@/lib/whatsapp';
import { useSeo } from '@/hooks/useSeo';

export default function NotFound() {
  useSeo({
    title: 'Página não encontrada | HomeTech',
    description:
      'A página que você procurava não está disponível. Volte para o início ou fale com a HomeTech em Patos de Minas – MG.',
    path: '/404',
    noIndex: true,
  });

  return (
    <section
      className="relative flex min-h-[78vh] items-center overflow-hidden py-20 pt-[calc(var(--header-h)+3rem)]"
      aria-labelledby="erro-titulo"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,174,85,0.14),transparent_68%)]" />
      </div>

      <Shell>
        <Reveal className="mx-auto max-w-xl text-center">
          <span
            aria-hidden="true"
            className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.07] text-gold"
          >
            <Search className="h-7 w-7" strokeWidth={1.6} />
          </span>

          <p className="mt-8 font-display text-6xl font-bold leading-none text-sheen-gold sm:text-7xl">
            404
          </p>

          <h1 id="erro-titulo" className="mt-5 text-2xl font-semibold sm:text-3xl">
            Não encontramos esta página.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-silver-dim">
            O endereço pode ter mudado ou a página pode não existir mais. Use os atalhos abaixo para
            continuar navegando — ou fale com a gente, que ajudamos a encontrar o que você procura.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="link" to="/" size="lg">
              <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Voltar para o início
            </Button>

            <Button
              as="a"
              href={whatsappUrl('Olá! Não encontrei o que procurava no site da HomeTech.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
              Falar no WhatsApp
            </Button>
          </div>

          <nav aria-label="Atalhos do site" className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-silver-dim">
              Ir para
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-silver transition-colors hover:border-gold/50 hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </Shell>
    </section>
  );
}
