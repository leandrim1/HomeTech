import { MessageCircle, Phone } from 'lucide-react';
import { Shell } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { business } from '@/data/business';
import { telUrl, whatsappUrl } from '@/lib/whatsapp';

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="cta-titulo">
      <Shell>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-ink-graphite px-6 py-14 text-center shadow-[0_40px_80px_-36px_rgba(0,0,0,0.95)] sm:px-12 sm:py-16">
            {/* Gold detailing */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
              <div className="absolute left-1/2 top-[-40%] h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,174,85,0.17),transparent_68%)]" />
              <div className="absolute inset-0 bg-grid-faint bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
            </div>

            <div className="relative">
              <h2 id="cta-titulo" className="text-3xl font-semibold leading-tight sm:text-4xl">
                Precisa de uma solução tecnológica?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-silver-dim sm:text-lg">
                Conte para a HomeTech o que você precisa. Nossa equipe está pronta para ajudar você a
                encontrar o caminho certo.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  as="a"
                  href={whatsappUrl(
                    'Olá! Vim pelo site da HomeTech e preciso de uma solução tecnológica.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                  Fale com a HomeTech
                </Button>

                <Button as="a" href={telUrl} variant="outline" size="lg">
                  <Phone className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  {business.phone.display}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
