'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Tour } from '@/lib/tours';
import { cn } from '@/lib/utils';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const t = useTranslations('common');
  const tTours = useTranslations('tours');
  const locale = useLocale() as 'ru' | 'en';
  const isEn = locale === 'en';

  const href = isEn ? `/en/tours/${tour.slug}` : `/tours/${tour.slug}`;

  const durationLabel =
    tour.durationDays === 1
      ? t('days.1')
      : tour.durationDays === 2
      ? t('days.2')
      : tour.durationDays === 3
      ? t('days.3')
      : t('days.4plus');

  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-premium border border-[#E7E5E4]/60"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E7E5E4]">
        <Image
          src={tour.images[0]}
          alt={tour.title[locale]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-[#0F766E]/90 text-white text-xs font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm">
            {t(`region.${tour.region}`)}
          </span>
          <span className="bg-[#1C1917]/80 text-white text-xs font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm">
            {durationLabel}
          </span>
        </div>
        {tour.isNew && (
          <span className="absolute top-3 right-3 bg-[#B45309] text-white text-xs font-medium px-2.5 py-1 rounded-lg">
            {tTours('new')}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-[#1C1917] group-hover:text-[#B45309] transition-colors line-clamp-2 mb-2">
          {tour.title[locale]}
        </h3>
        <p className="text-sm text-[#78716C] line-clamp-2 mb-4 leading-relaxed">
          {tour.shortDescription[locale]}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-[#78716C]">{t('from')}</span>
            <div className="font-semibold text-[#B45309] text-lg">
              {tour.priceFrom.toLocaleString('ru-RU')} {tour.currency}
            </div>
          </div>
          <span className="text-sm font-medium text-[#1C1917] group-hover:text-[#B45309] transition-colors">
            {t('more')} →
          </span>
        </div>
      </div>
    </Link>
  );
}
