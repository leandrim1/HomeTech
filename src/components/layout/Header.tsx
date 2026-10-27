import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { navigation } from '@/data/navigation';
import { business, hoursSummary } from '@/data/business';
import { telUrl, whatsappUrl } from '@/lib/whatsapp';
import { useScrolledPast } from '@/hooks/useScrollPosition';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { cn } from '@/lib/cn';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(24);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(menuOpen);

  // Any navigation closes the drawer, including same-page anchor jumps.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Escape closes the drawer and returns focus to the control that opened it.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Move focus into the drawer so keyboard and screen-reader users land there.
  useEffect(() => {
    if (menuOpen) panelRef.current?.focus();
  }, [menuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative rounded-md px-1 py-2 text-sm font-medium transition-colors duration-200',
      'after:absolute after:inset-x-1 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold-sheen after:transition-transform after:duration-300 hover:after:scale-x-100',
      isActive ? 'text-gold-light after:scale-x-100' : 'text-silver hover:text-snow',
    );

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-white/[0.07] bg-ink/90 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/75'
            : 'border-b border-transparent bg-gradient-to-b from-ink/85 to-transparent',
        )}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link
            to="/"
            className="-ml-1 shrink-0 rounded-lg p-1 transition-opacity hover:opacity-90"
            aria-label={`${business.name} — página inicial`}
          >
            <Logo />
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target hidden items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-emerald-300 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-200 sm:inline-flex"
              aria-label="Conversar com a HomeTech pelo WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <Button
              as="a"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="hidden md:inline-flex"
            >
              Fale com um especialista
            </Button>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="tap-target inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-snow transition-colors hover:border-gold/50 hover:text-gold-light lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-[visibility] duration-300 lg:hidden',
          menuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none',
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            'absolute inset-0 bg-ink/80 backdrop-blur-sm transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMenuOpen(false)}
        />

        <div
          id="menu-mobile"
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal={menuOpen}
          aria-label="Menu de navegação"
          className={cn(
            'absolute inset-x-0 top-[var(--header-h)] origin-top border-b border-white/[0.07] bg-ink-soft/95 px-4 pb-8 pt-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 focus:outline-none',
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0',
          )}
        >
          <nav aria-label="Navegação principal (mobile)">
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    tabIndex={menuOpen ? 0 : -1}
                    className={({ isActive }) =>
                      cn(
                        'tap-target flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-gold/10 text-gold-light ring-1 ring-inset ring-gold/25'
                          : 'text-silver hover:bg-white/[0.04] hover:text-snow',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              as="a"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              tabIndex={menuOpen ? 0 : -1}
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              Fale com um especialista
            </Button>

            <Button as="a" href={telUrl} variant="outline" size="lg" tabIndex={menuOpen ? 0 : -1}>
              <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              {business.phone.display}
            </Button>
          </div>

          <p className="mt-5 text-center text-xs leading-relaxed text-silver-dim">{hoursSummary}</p>
        </div>
      </div>
    </>
  );
}
