import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getTours } from '@/lib/tours';
import { TourCard } from '@/components/TourCard';
import Link from 'next/link';

export default async function ToursPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ region?: string; days?: string }>;
}) {
  const { locale } = await params;
  const { region, days } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations('tours');
  const tCommon = await getTranslations('common');
  const isEn = locale === 'en';

  let tours = getTours(region === 'north' || region === 'south' ? region : undefined);

  if (days) {
    const d = parseInt(days);
    if (d === 1) tours = tours.filter((t) => t.durationDays === 1);
    else if (d === 2) tours = tours.filter((t) => t.durationDays === 2 || t.durationDays === 3);
    else if (d === 4) tours = tours.filter((t) => t.durationDays >= 4);
  }

  const base = isEn ? '/en/tours' : '/tours';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">{t('title')}</h1>
        <p className="text-[#78716C] text-lg">{t('subtitle')}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        <Link
          href={base}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            !region ? 'bg-[#1C1917] text-white' : 'bg-white border border-[#E7E5E4] text-[#1C1917] hover:border-[#B45309]'
          }`}
        >
          {t('filterAll')}
        </Link>
        <Link
          href={`${base}?region=north`}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            region === 'north' ? 'bg-[#0F766E] text-white' : 'bg-white border border-[#E7E5E4] text-[#1C1917] hover:border-[#0F766E]'
          }`}
        >
          {t('filterNorth')}
        </Link>
        <Link
          href={`${base}?region=south`}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            region === 'south' ? 'bg-[#0F766E] text-white' : 'bg-white border border-[#E7E5E4] text-[#1C1917] hover:border-[#0F766E]'
          }`}
        >
          {t('filterSouth')}
        </Link>

        <div className="w-px bg-[#E7E5E4] mx-1 hidden sm:block" />

        <Link
          href={`${base}${region ? `?region=${region}&` : '?'}days=1`}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            days === '1' ? 'bg-[#B45309] text-white' : 'bg-white border border-[#E7E5E4] text-[#1C1917] hover:border-[#B45309]'
          }`}
        >
          {tCommon('days.1')}
        </Link>
        <Link
          href={`${base}${region ? `?region=${region}&` : '?'}days=2`}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            days === '2' ? 'bg-[#B45309] text-white' : 'bg-white border border-[#E7E5E4] text-[#1C1917] hover:border-[#B45309]'
          }`}
        >
          2–3 {isEn ? 'days' : 'дня'}
        </Link>
        <Link
          href={`${base}${region ? `?region=${region}&` : '?'}days=4`}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            days === '4' ? 'bg-[#B45309] text-white' : 'bg-white border border-[#E7E5E4] text-[#1C1917] hover:border-[#B45309]'
          }`}
        >
          {tCommon('days.4plus')}
        </Link>
      </div>

      {/* Grid */}
      {tours.length === 0 ? (
        <p className="text-[#78716C] text-center py-20">{t('noResults')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
}
