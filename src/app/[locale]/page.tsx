import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { getPopularTours } from '@/lib/tours';
import { TourCard } from '@/components/TourCard';
import { MessageCircle, Mountain, Compass, Heart, Headphones } from 'lucide-react';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');
  const isEn = locale === 'en';
  const popular = getPopularTours(6);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1C1917] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1917]/60 via-[#1C1917]/40 to-[#1C1917]/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={isEn ? '/en/tours' : '/tours'}
              className="inline-flex items-center justify-center bg-[#B45309] hover:bg-[#92400E] text-white font-medium px-8 py-3.5 rounded-xl transition-premium shadow-lg"
            >
              {t('ctaTours')}
            </Link>
            <a
              href="https://wa.me/996774880888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-3.5 rounded-xl transition border border-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              {t('ctaWhatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1C1917]">{t('popular')}</h2>
          <Link
            href={isEn ? '/en/tours' : '/tours'}
            className="text-[#B45309] font-medium hover:underline"
          >
            {tCommon('more')} →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popular.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      {/* North / South blocks */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href={isEn ? '/en/tours/north' : '/tours/north'}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-premium"
            >
              <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1016/1200/900')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{t('northTitle')}</h3>
                <p className="text-white/80">{t('northDesc')}</p>
              </div>
            </Link>

            <Link
              href={isEn ? '/en/tours/south' : '/tours/south'}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-premium"
            >
              <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1018/1200/900')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{t('southTitle')}</h3>
                <p className="text-white/80">{t('southDesc')}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C1917] text-center mb-14">{t('whyTitle')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Compass, title: t('why1'), desc: t('why1Desc') },
            { icon: Mountain, title: t('why2'), desc: t('why2Desc') },
            { icon: Heart, title: t('why3'), desc: t('why3Desc') },
            { icon: Headphones, title: t('why4'), desc: t('why4Desc') },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#B45309]/10 text-[#B45309] mb-5">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-[#1C1917] mb-2">{item.title}</h3>
              <p className="text-sm text-[#78716C] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
