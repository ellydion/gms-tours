'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Phone, MessageCircle, Send, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, TELEGRAM_URL, PHONE_DISPLAY, PHONE_2_DISPLAY } from '@/lib/contacts';

export function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const isEn = locale === 'en';
  const [open, setOpen] = useState(false);

  const nav = [
    { href: '/', label: t('nav.home') },
    { href: '/tours', label: t('nav.tours') },
    { href: '/visas', label: t('nav.visas') },
    { href: '/events', label: t('nav.events') },
    { href: '/about', label: t('nav.about') },
    { href: '/contacts', label: t('nav.contacts') },
  ];

  const hrefFor = (path: string) =>
    isEn ? `/en${path === '/' ? '' : path}` : path;

  const switchLocale = isEn ? '/' : '/en';
  const switchLabel = isEn ? 'RU' : 'EN';

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            <Link
              href={isEn ? '/en' : '/'}
              className="flex items-center gap-2 shrink-0"
              onClick={() => setOpen(false)}
            >
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#1C1917]">
                {t('brand')}
              </span>
              <span className="hidden sm:block text-xs text-[#78716C] leading-tight">
                Global Migration
                <br />
                Solutions
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={hrefFor(item.href)}
                  className="text-sm font-medium text-[#1C1917] hover:text-[#B45309] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={switchLocale}
                className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] px-2 py-1.5"
              >
                {switchLabel}
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 bg-[#B45309] hover:bg-[#92400E] text-white text-sm font-medium px-3 py-2 rounded-xl transition"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <button
                type="button"
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-[#E7E5E4] bg-white text-[#1C1917]"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-0 z-[100]" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <div
            className="absolute top-0 right-0 h-full bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#E7E5E4]"
            style={{ width: 'min(86vw, 340px)' }}
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-[#E7E5E4] shrink-0">
              <span className="font-bold text-lg text-[#1C1917]">GMS</span>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#E7E5E4] bg-white"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3">
              <ul className="flex flex-col gap-0.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={hrefFor(item.href)}
                      onClick={() => setOpen(false)}
                      className="block w-full px-4 py-3.5 rounded-xl text-[16px] font-medium text-[#1C1917] hover:bg-white active:bg-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="h-px bg-[#E7E5E4] my-3 mx-2" />

              <div className="flex flex-col gap-0.5">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-[#1C1917] hover:bg-white"
                >
                  <Send className="w-5 h-5 text-[#229ED9] shrink-0" />
                  Telegram
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-[#1C1917] hover:bg-white"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/ /g, '')}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-[#1C1917] hover:bg-white"
                >
                  <Phone className="w-5 h-5 text-[#B45309] shrink-0" />
                  <span className="leading-tight">{PHONE_DISPLAY}</span>
                </a>
                <a
                  href={`tel:${PHONE_2_DISPLAY.replace(/ /g, '')}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-[#1C1917] hover:bg-white"
                >
                  <Phone className="w-5 h-5 text-[#B45309] shrink-0" />
                  <span className="leading-tight">{PHONE_2_DISPLAY}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}