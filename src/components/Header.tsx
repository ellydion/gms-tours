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
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href={isEn ? '/en' : '/'}
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
            onClick={() => setOpen(false)}
          >
            <div className="font-bold text-xl sm:text-2xl tracking-tight text-[#1C1917] group-hover:text-[#B45309] transition-colors">
              {t('brand')}
            </div>
            <div className="hidden sm:block text-xs text-[#78716C] leading-tight">
              Global Migration
              <br />
              Solutions
            </div>
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

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href={switchLocale}
              className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] px-2 py-1.5 rounded-lg"
            >
              {switchLabel}
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#B45309] hover:bg-[#92400E] text-white text-sm font-medium px-3 py-2 rounded-xl transition"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#E7E5E4] bg-white text-[#1C1917] shadow-sm"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[min(100%,320px)] bg-[#FAF7F2] shadow-2xl flex flex-col">
            <div className="flex items-center justify-between h-16 px-4 border-b border-[#E7E5E4]">
              <span className="font-bold text-lg">GMS</span>
              <button
                type="button"
                className="w-10 h-10 rounded-xl border border-[#E7E5E4] bg-white flex items-center justify-center"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={hrefFor(item.href)}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3.5 rounded-xl text-base font-medium text-[#1C1917] hover:bg-white hover:text-[#B45309] transition"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-[#E7E5E4] my-3" />
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium hover:bg-white"
              >
                <Send className="w-5 h-5 text-[#229ED9]" />
                Telegram
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium hover:bg-white"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/ /g, '')}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium hover:bg-white"
              >
                <Phone className="w-5 h-5 text-[#B45309]" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE_2_DISPLAY.replace(/ /g, '')}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium hover:bg-white"
              >
                <Phone className="w-5 h-5 text-[#B45309]" />
                {PHONE_2_DISPLAY}
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}