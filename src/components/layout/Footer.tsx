import { Link } from 'react-router-dom';
import { Clock, Info, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { navigation } from '@/data/navigation';
import { services } from '@/data/services';
import { business } from '@/data/business';
import { telUrl, whatsappUrl } from '@/lib/whatsapp';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />

      <div className="shell py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-silver-dim">
              Loja de soluções tecnológicas avançadas em {business.address.city}. Assistência técnica
              em smartphones, celulares e acessórios, informática, segurança, automação e soluções
              rurais.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target inline-flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-2.5 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/[0.13]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={telUrl}
                className="tap-target inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-snow transition-colors hover:border-gold/50 hover:text-gold-light"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Ligar
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-2" aria-labelledby="rodape-navegacao">
            <h2 id="rodape-navegacao" className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-silver-dim transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="lg:col-span-3" aria-labelledby="rodape-servicos">
            <h2 id="rodape-servicos" className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Serviços
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/servicos#${service.slug}`}
                    className="text-sm text-silver-dim transition-colors hover:text-gold-light"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + hours */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Onde estamos</h2>

            <address className="mt-5 space-y-4 not-italic">
              <a
                href={business.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 text-sm text-silver-dim transition-colors hover:text-gold-light"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  {business.address.street}, {business.address.complement.toLowerCase()}
                  <br />
                  {business.address.district}, {business.address.city} – {business.address.state}
                  <br />
                  CEP {business.address.postalCode}
                  <span className="mt-1 block text-xs text-gold/70 group-hover:text-gold-light">
                    Ver no Google Maps
                  </span>
                </span>
              </a>

              <a
                href={telUrl}
                className="flex items-center gap-3 text-sm text-silver-dim transition-colors hover:text-gold-light"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
                {business.phone.display}
              </a>
            </address>

            <div className="mt-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-snow">
                <Clock className="h-4 w-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
                Horários
              </h3>
              <dl className="mt-3 space-y-1.5 text-sm">
                {business.openingHours.map((day) => (
                  <div key={day.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-silver-dim">{day.label}</dt>
                    <dd className={day.opens ? 'text-silver' : 'text-silver-dim/70'}>{day.display}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-12 border-t border-white/[0.07] pt-8">
          <p className="flex items-start gap-2.5 text-xs leading-relaxed text-silver-dim/80">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-silver-dim/60" strokeWidth={1.75} aria-hidden="true" />
            <span>
              As informações sobre produtos, serviços, prazos e condições apresentadas neste site são
              ilustrativas e podem mudar. Confirme sempre os detalhes diretamente com a loja antes de
              fechar qualquer atendimento. As imagens das categorias de serviço são ilustrações e não
              representam equipamentos específicos em estoque.
            </span>
          </p>

          <div className="mt-6 flex flex-col gap-3 text-xs text-silver-dim sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {business.name}. Todos os direitos reservados.
            </p>
            <p>
              {business.address.city} – {business.address.stateName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
