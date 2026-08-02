import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/Header';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen flex flex-col antialiased bg-[#FAF7F2] text-[#1C1917]">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#1C1917] text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <div className="font-bold text-2xl mb-2">GMS</div>
                <p className="text-white/60 text-sm max-w-xs">
                  Global Migration Solutions — author tours and migration services in Kyrgyzstan
                </p>
              </div>
              <div className="text-sm text-white/70">
                <a href="tel:+996774880888" className="block hover:text-white transition mb-1">
                  +996 774 880 888
                </a>
                <a href="https://wa.me/996774880888" className="block hover:text-white transition">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-sm text-white/40">
              © {new Date().getFullYear()} Global Migration Solutions. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}
