import { HeartHandshake, MapPin, Sparkles, Wrench } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { business } from '@/data/business';

/**
 * Four factual reassurances taken straight from what the store does.
 * No client counts, years in business or certifications are claimed — none
 * were confirmed by the business.
 */
const highlights = [
  {
    icon: MapPin,
    title: `Atendimento em ${business.address.city}`,
    description: 'Loja física no Centro, com atendimento presencial.',
  },
  {
    icon: Wrench,
    title: 'Assistência especializada',
    description: 'Equipe preparada para avaliar e orientar sobre o seu aparelho.',
  },
  {
    icon: Sparkles,
    title: 'Soluções para cada necessidade',
    description: 'Residências, empresas e propriedades rurais.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento próximo',
    description: 'Conversa direta, sem jargão técnico desnecessário.',
  },
];

export function CredibilityStrip() {
  return (
    <section
      className="relative border-y border-white/[0.07] bg-ink-soft/60"
      aria-label="Por que escolher a HomeTech"
    >
      <div className="shell py-10 sm:py-12">
        <ul className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/[0.07]">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 0.08}
                className="flex gap-4 lg:px-7 lg:first:pl-0 lg:last:pr-0"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold"
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} />
                </span>

                <div className="min-w-0">
                  <h3 className="text-[0.95rem] font-semibold leading-snug text-snow">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-silver-dim">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
