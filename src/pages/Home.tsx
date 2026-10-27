import { useMemo } from 'react';
import { Hero } from '@/sections/Hero';
import { CredibilityStrip } from '@/sections/CredibilityStrip';
import { ServicesGrid } from '@/sections/ServicesGrid';
import { RepairSection } from '@/sections/RepairSection';
import { AboutTeaser } from '@/sections/AboutTeaser';
import { ReviewsSection } from '@/sections/ReviewsSection';
import { CtaSection } from '@/sections/CtaSection';
import { LocationSection } from '@/sections/LocationSection';
import { useSeo } from '@/hooks/useSeo';
import { buildLocalBusinessSchema } from '@/lib/structuredData';

export default function Home() {
  // Built once so the structured-data effect does not re-run on every render.
  const jsonLd = useMemo(() => buildLocalBusinessSchema(), []);

  useSeo({
    title: 'HomeTech Soluções Avançadas | Tecnologia em Patos de Minas',
    description:
      'Assistência avançada em smartphones, celulares e acessórios, informática, segurança residencial, automação e soluções rurais em Patos de Minas – MG. Fale com um especialista.',
    path: '/',
    jsonLd,
  });

  return (
    <>
      <Hero />
      <CredibilityStrip />
      <ServicesGrid />
      <RepairSection />
      <AboutTeaser />
      <ReviewsSection />
      <CtaSection />
      <LocationSection />
    </>
  );
}
