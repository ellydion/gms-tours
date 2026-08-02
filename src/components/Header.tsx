'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

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
          {/* Logo */}
          <Link href={isEn ? '/en' : '/'} className="flex items-center gap-3 group">
            <div className="font-bold text-2xl tracking-tight text-[#1C1917] group-hover:text-[#B45309] transition-colors">
              {t('brand')}
            </div>
            <div className="hidden sm:block text-xs text-[#78716C] leading-tight">
              Global Migration<br />Solutions
            </div>
          </Link>

          {/* Desktop Nav */}
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

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href={switchLocale}
              className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] px-2 py-1 rounded-lg hover:bg-white transition"
            >
              {switchLabel}
            </Link>

            <a
              href="tel:+996774880888"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#1C1917] hover:text-[#B45309] transition"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{t('phone')}</span>
            </a>

            <a
              href="https://wa.me/996774880888"
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
