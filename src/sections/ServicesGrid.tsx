import { ArrowRight } from 'lucide-react';
import { Section, Shell } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/services';

export function ServicesGrid() {
  return (
    <Section id="solucoes" aria-labelledby="solucoes-titulo">
      <Shell>
        <SectionHeading
          id="solucoes-titulo"
          eyebrow="O que fazemos"
          title="Soluções completas em tecnologia"
          subtitle="Encontre a solução ideal para seus equipamentos, sua casa, sua empresa ou sua propriedade rural."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} delay={index * 0.07} />
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button as="link" to="/servicos" variant="outline" size="lg">
            Ver todos os detalhes
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </Button>
        </Reveal>
      </Shell>
    </Section>
  );
}
