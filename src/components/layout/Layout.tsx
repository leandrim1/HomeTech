import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollManager } from './ScrollManager';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PageLoader } from '@/components/ui/PageLoader';

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col bg-ink">
      <ScrollManager />
      <Header />

      <main id="conteudo" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
