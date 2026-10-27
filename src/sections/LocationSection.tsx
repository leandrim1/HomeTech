import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { Section, Shell } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { business } from '@/data/business';
import { telUrl } from '@/lib/whatsapp';

interface LocationSectionProps {
  /** Rendered as `h1` on the contact page, `h2` on the home page. */
  headingLevel?: 'h1' | 'h2';
  id?: string;
}

export function LocationSection({ headingLevel = 'h2', id = 'localizacao' }: LocationSectionProps) {
  return (
    <Section id={id} className="border-t border-white/[0.07] bg-ink-soft/40" aria-labelledby={`${id}-titulo`}>
      <Shell>
        <SectionHeading
          id={`${id}-titulo`}
          as={headingLevel}
          eyebrow="Localização"
          title={`Estamos em ${business.address.city}.`}
          subtitle="Venha conversar pessoalmente ou fale com a gente antes de passar na loja."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Info cards */}
          <div className="grid gap-5 lg:col-span-2">
            <Reveal direction="left">
              <article className="surface h-full p-6">
                <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  <MapPin className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  Endereço
                </h3>

                <address className="mt-4 not-italic text-base leading-relaxed text-snow">
                  {business.name}
                  <br />
                  <span className="text-silver-dim">
                    {business.address.street}, {business.address.complement.toLowerCase()}
                    <br />
                    {business.address.district}, {business.address.city} – {business.address.state}
                    <br />
                    CEP {business.address.postalCode}
                  </span>
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
                  <Navigation className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  Abrir no Google Maps
                </Button>
              </article>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <article className="surface h-full p-6">
                <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  <Phone className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  Telefone
                </h3>

                <p className="mt-4 font-display text-2xl font-semibold text-snow">
                  {business.phone.display}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-silver-dim">
                  Ligue durante o horário de funcionamento para falar com a loja.
                </p>

                <Button as="a" href={telUrl} size="sm" className="mt-5">
                  <Phone className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  Ligar para a loja
                </Button>
              </article>
            </Reveal>

            <Reveal direction="left" delay={0.16}>
              <article className="surface h-full p-6">
                <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                  <Clock className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  Horários de funcionamento
                </h3>

                <dl className="mt-4 space-y-2.5">
                  {business.openingHours.map((day) => (
                    <div
                      key={day.label}
                      className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] pb-2.5 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-silver-dim">{day.label}</dt>
                      <dd
                        className={
                          day.opens
                            ? 'text-sm font-medium text-snow'
                            : 'text-sm font-medium text-silver-dim/60'
                        }
                      >
                        {day.display}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-soft shadow-card">
              <iframe
                src={business.links.googleMapsEmbed}
                title={`Mapa com a localização da ${business.name} em ${business.address.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[340px] w-full border-0 bg-ink-graphite grayscale-[0.35] contrast-[1.05] sm:h-[460px] lg:h-full lg:min-h-[560px]"
              />
            </div>
          </Reveal>
        </div>
      </Shell>
    </Section>
  );
}
