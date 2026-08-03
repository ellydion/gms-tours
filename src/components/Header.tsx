'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL, TELEGRAM_URL, PHONE_DISPLAY } from '@/lib/contacts';

export function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const isEn = locale === 'en';

  const nav = [
    { href: '/', label: t('nav.home') },
    { href: '/tours', label: t('nav.tours') },
    { href: '/visas', label: t('nav.visas') },
    { href: '/events', label: t('nav.events') },
    { href: '/about', label: t('nav.about') },
    { href: '/contacts', label: t('nav.contacts') },
  ];

  const switchLocale = isEn ? '/' : '/en';
  const switchLabel = isEn ? 'RU' : 'EN';

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={isEn ? '/en' : '/'} className="flex items-center gap-3 group">
            <div className="font-bold text-2xl tracking-tight text-[#1C1917] group-hover:text-[#B45309] transition-colors">
              {t('brand')}
            </div>
            <div className="hidden sm:block text-xs text-[#78716C] leading-tight">
              Global Migration<br />Solutions
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={isEn ? `/en${item.href === '/' ? '' : item.href}` : item.href}
                className="text-sm font-medium text-[#1C1917] hover:text-[#B45309] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={switchLocale}
              className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] px-2 py-1 rounded-lg hover:bg-white transition"
            >
              {switchLabel}
            </Link>

            <a
              href={`tel:${PHONE_DISPLAY.replace(/ /g, '')}`}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#1C1917] hover:text-[#B45309] transition"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{t('phone')}</span>
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] text-sm font-medium px-3 py-2.5 rounded-xl transition"
              title="Telegram бот"
            >
              <Send className="w-4 h-4" />
              <span className="hidden md:inline">Telegram</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B45309] hover:bg-[#92400E] text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-premium shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">{t('whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}