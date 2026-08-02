import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getTours } from '@/lib/tours';
import { TourCard } from '@/components/TourCard';
import Link from 'next/link';

export default async function NorthToursPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const tTours = await getTranslations('tours');
  const isEn = locale === 'en';
  const tours = getTours('north');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-2">
        <Link href={isEn ? '/en/tours' : '/tours'} className="text-sm text-[#B45309] hover:underline">
          ← {tTours('title')}
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">{t('northTitle')}</h1>
      <p className="text-[#78716C] text-lg mb-10">{t('northDesc')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </div>
  );
}
