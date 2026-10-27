import { MessageCircle, Phone } from 'lucide-react';
import { Shell } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ContactForm';
import { LocationSection } from '@/sections/LocationSection';
import { business, hoursSummary } from '@/data/business';
import { telUrl, whatsappUrl } from '@/lib/whatsapp';
import { useSeo } from '@/hooks/useSeo';

export default function Contact() {
  useSeo({
    title: 'Contato | Fale com a HomeTech em Patos de Minas',
    description:
      'Fale com a HomeTech Soluções Avançadas: WhatsApp, telefone (34) 3821-0910, endereço na R. Maj. Gote, 1170, loja 1, Centro, Patos de Minas – MG, e horários de atendimento.',
    path: '/contato',
  });

  return (
    <>
      <section
        className="relative overflow-hidden pb-16 pt-[calc(var(--header-h)+3rem)] lg:pt-[calc(var(--header-h)+4.5rem)]"
        aria-labelledby="contato-titulo"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
          <div className="absolute left-1/2 top-[-30%] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,174,85,0.15),transparent_68%)]" />
        </div>

        <Shell>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal direction="left">
                <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
                  Contato
                </p>

                <h1 id="contato-titulo" className="text-[2.1rem] font-bold leading-[1.1] sm:text-5xl">
                  Vamos conversar sobre o que você precisa.
                </h1>

                <p className="mt-6 text-base leading-relaxed text-silver-dim sm:text-lg">
                  Escolha o canal mais prático para você. Para um retorno mais rápido, o WhatsApp
                  costuma ser o caminho mais direto durante o horário de funcionamento.
                </p>
              </Reveal>

              <Reveal direction="left" delay={0.12}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    as="a"
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                    Falar no WhatsApp
                  </Button>

                  <Button as="a" href={telUrl} variant="outline" size="lg">
                    <Phone className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                    {business.phone.display}
                  </Button>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.2}>
                <dl className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      Endereço
                    </dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-silver-dim">
                      {business.address.street}, {business.address.complement.toLowerCase()}
                      <br />
                      {business.address.district}, {business.address.city} – {business.address.state}
                      <br />
                      CEP {business.address.postalCode}
                    </dd>
                  </div>

                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      Horários
                    </dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-silver-dim">
                      {hoursSummary}
                      <br />
                      Domingo: fechado.
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Shell>
      </section>

      <LocationSection id="como-chegar" />
    </>
  );
}
