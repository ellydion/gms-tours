import { setRequestLocale } from 'next-intl/server';
import { MessageCircle, Phone, FileCheck, Calendar, Car, MapPin } from 'lucide-react';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === 'en';

  const stats = isEn
    ? [
        { icon: FileCheck, value: '4 000+', label: 'Visas processed' },
        { icon: Calendar, value: '15+', label: 'High-level events' },
        { icon: Car, value: 'VIP', label: 'Transfers & personal cars' },
        { icon: MapPin, value: 'KR', label: 'Tours across the country' }
      ]
    : [
        { icon: FileCheck, value: '4 000+', label: 'Оформленных виз' },
        { icon: Calendar, value: '15+', label: 'Мероприятий высшего уровня' },
        { icon: Car, value: 'VIP', label: 'Трансферы и личные авто' },
        { icon: MapPin, value: 'КР', label: 'Туры по всей стране' }
      ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6">
        {isEn ? 'About GMS' : 'О компании GMS'}
      </h1>

      <div className="space-y-6 text-lg text-[#78716C] leading-relaxed mb-12">
        <p>
          {isEn
            ? 'Global Migration Solutions (GMS) is a Bishkek-based company that combines authentic author tours across Kyrgyzstan with professional migration and visa support.'
            : 'Global Migration Solutions (GMS) — компания из Бишкека, которая сочетает авторские туры по Кыргызстану с профессиональной миграционной и визовой поддержкой.'}
        </p>
        <p>
          {isEn
            ? 'We have already helped process more than 4,000 visas and organized over 15 high-level events, including meetings with top officials. We provide VIP transfers, personal cars and full logistics for guests and partners.'
            : 'Мы уже помогли оформить более 4 000 виз и провели более 15 мероприятий на высшем уровне, включая встречи первых лиц. Обеспечиваем VIP-трансферы, личные автомобили и полную логистику для гостей и партнёров.'}
        </p>
        <p>
          {isEn
            ? 'We design routes ourselves, work with trusted local guides and drivers, and stay in touch with every guest before, during and after the trip. Our focus is quality, flexibility and real experiences.'
            : 'Мы сами проектируем маршруты, работаем с проверенными гидами и водителями и остаёмся на связи с каждым гостем до, во время и после поездки. Наш фокус — качество, гибкость и настоящие впечатления.'}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-[#E7E5E4] text-center shadow-premium"
          >
            <item.icon className="w-6 h-6 text-[#B45309] mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#1C1917] mb-1">{item.value}</div>
            <div className="text-xs text-[#78716C] leading-tight">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://wa.me/996774880888"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#B45309] hover:bg-[#92400E] text-white font-medium px-6 py-3 rounded-xl transition"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <a
          href="tel:+996774880888"
          className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium px-6 py-3 rounded-xl transition"
        >
          <Phone className="w-5 h-5" />
          +996 774 880 888
        </a>
      </div>
    </div>
  );
}
