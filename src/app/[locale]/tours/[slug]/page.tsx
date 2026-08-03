import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { TourGallery } from '@/components/TourGallery';
import { TourLeadForm } from '@/components/TourLeadForm';
import { PHONE_DISPLAY, PHONE_2_DISPLAY } from '@/lib/contacts';
import Link from 'next/link';
import { getTourBySlug, tours } from '@/lib/tours';
import { Phone, Check, X } from 'lucide-react';

export function generateStaticParams() {
  return tours.flatMap((tour) => [
    { locale: 'ru', slug: tour.slug },
    { locale: 'en', slug: tour.slug },
  ]);
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const t = await getTranslations('tour');
  const tCommon = await getTranslations('common');
  const loc = locale as 'ru' | 'en';
  const isEn = locale === 'en';

  const durationLabel =
    tour.durationDays === 1
      ? tCommon('days.1')
      : tour.durationDays === 2
      ? tCommon('days.2')
      : tour.durationDays === 3
      ? tCommon('days.3')
      : tCommon('days.4plus');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm">
        <Link href={isEn ? '/en/tours' : '/tours'} className="text-[#B45309] hover:underline">
          {tCommon('nav.tours')}
        </Link>
        <span className="mx-2 text-[#78716C]">/</span>
        <span className="text-[#78716C]">{tour.title[loc]}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left content */}
        <div className="lg:col-span-2 space-y-8">
          <TourGallery images={tour.images} title={tour.title[loc]} />

          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#0F766E]/10 text-[#0F766E] text-sm font-medium px-3 py-1 rounded-lg">
                {tCommon(`region.${tour.region}`)}
              </span>
              <span className="bg-[#1C1917]/5 text-[#1C1917] text-sm font-medium px-3 py-1 rounded-lg">
                {durationLabel}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-4">
              {tour.title[loc]}
            </h1>
            <p className="text-lg text-[#78716C] leading-relaxed">
              {tour.description[loc]}
            </p>
          </div>

          {/* Program */}
          <div>
            <h2 className="text-xl font-semibold text-[#1C1917] mb-4">{t('program')}</h2>
            <div className="bg-white rounded-2xl p-6 border border-[#E7E5E4] space-y-3">
              {tour.program[loc].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-[#B45309] font-medium shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#1C1917]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Includes / Excludes */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E7E5E4]">
              <h3 className="font-semibold text-[#1C1917] mb-4">{t('includes')}</h3>
              <ul className="space-y-2">
                {tour.includes[loc].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-[#0F766E] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E7E5E4]">
              <h3 className="font-semibold text-[#1C1917] mb-4">{t('excludes')}</h3>
              <ul className="space-y-2">
                {tour.excludes[loc].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#78716C]">
                    <X className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky booking card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-premium border border-[#E7E5E4]">
            <div className="mb-1 text-sm text-[#78716C]">{t('priceFrom')}</div>
            <div className="text-3xl font-bold text-[#B45309] mb-1">
              {tour.priceFrom.toLocaleString('ru-RU')} {tour.currency}
            </div>
            <div className="text-sm text-[#78716C] mb-4">{t('perPerson')}</div>

            <TourLeadForm locale={locale} tourTitle={tour.title[loc]} />

            <div className="mt-4 pt-4 border-t border-[#E7E5E4] space-y-2">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/ /g, '')}`}
                className="flex items-center justify-center gap-2 w-full border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium py-3 rounded-xl transition text-sm"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE_2_DISPLAY.replace(/ /g, '')}`}
                className="flex items-center justify-center gap-2 w-full border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium py-3 rounded-xl transition text-sm"
              >
                <Phone className="w-4 h-4" />
                {PHONE_2_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
