import { setRequestLocale } from 'next-intl/server';
import { MessageCircle, Phone, FileCheck, Calendar, Car, MapPin, Users, Award } from 'lucide-react';
import { AboutSlideshow } from '@/components/AboutSlideshow';
import { WHATSAPP_URL, TELEGRAM_URL, PHONE_DISPLAY, PHONE_2_DISPLAY } from '@/lib/contacts';

export default async function AboutPage({
  params,
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
        { icon: Car, value: 'VIP', label: 'Transfers & cars' },
        { icon: MapPin, value: 'KR', label: 'Tours nationwide' },
      ]
    : [
        { icon: FileCheck, value: '4 000+', label: 'Оформленных виз' },
        { icon: Calendar, value: '15+', label: 'Мероприятий высшего уровня' },
        { icon: Car, value: 'VIP', label: 'Трансферы и авто' },
        { icon: MapPin, value: 'КР', label: 'Туры по всей стране' },
      ];

  const points = isEn
    ? [
        {
          icon: Users,
          title: 'Team & partners',
          text: 'Local guides, drivers and coordinators. Personal approach for every guest and corporate client.',
        },
        {
          icon: Award,
          title: 'High-level events',
          text: '15+ events at the highest level, including meetings with first persons. Full protocol and logistics.',
        },
        {
          icon: Car,
          title: 'VIP transfers',
          text: 'Airport meetings, personal cars, bilingual drivers. Comfort from the first minute in the country.',
        },
      ]
    : [
        {
          icon: Users,
          title: 'Команда и партнёры',
          text: 'Локальные гиды, водители и координаторы. Индивидуальный подход к каждому гостю и корпоративному клиенту.',
        },
        {
          icon: Award,
          title: 'Мероприятия высшего уровня',
          text: 'Более 15 мероприятий, включая встречи первых лиц. Полный протокол и логистика.',
        },
        {
          icon: Car,
          title: 'VIP-трансферы',
          text: 'Встречи в аэропорту, личные автомобили, водители с языками. Комфорт с первой минуты в стране.',
        },
      ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6">
        {isEn ? 'About GMS' : 'О компании GMS'}
      </h1>

      <div className="space-y-5 text-lg text-[#78716C] leading-relaxed mb-10 max-w-3xl">
        <p>
          {isEn
            ? 'Global Migration Solutions (GMS) is a Bishkek-based company that combines author tours across Kyrgyzstan with professional visa and migration support.'
            : 'Global Migration Solutions (GMS) — компания из Бишкека, которая сочетает авторские туры по Кыргызстану с профессиональной визовой и миграционной поддержкой.'}
        </p>
        <p>
          {isEn
            ? 'We have processed more than 4,000 visas and organized over 15 high-level events, including meetings with top officials. We provide VIP transfers, personal cars and end-to-end logistics for guests and partners.'
            : 'Мы оформили более 4 000 виз и провели более 15 мероприятий на высшем уровне, включая встречи первых лиц. Обеспечиваем VIP-трансферы, личные автомобили и полную логистику для гостей и партнёров.'}
        </p>
        <p>
          {isEn
            ? 'Routes are designed by us. We work with trusted guides and drivers and stay in touch with every guest before, during and after the trip.'
            : 'Маршруты проектируем сами. Работаем с проверенными гидами и водителями и остаёмся на связи с каждым гостем до, во время и после поездки.'}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
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

      {/* Points */}
      <div className="grid sm:grid-cols-3 gap-5 mb-14">
        {points.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium"
          >
            <div className="w-11 h-11 rounded-xl bg-[#B45309]/10 flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-[#B45309]" />
            </div>
            <h3 className="font-semibold text-[#1C1917] mb-2">{p.title}</h3>
            <p className="text-sm text-[#78716C] leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      {/* Slideshow */}
      <div className="mb-14">
        <AboutSlideshow
          title={isEn ? 'Moments from our work' : 'Моменты нашей работы'}
        />
        <p className="mt-3 text-xs text-[#A8A29E]">
          {isEn
            ? 'Place your photos and GIFs in public/about/ and list them in src/lib/about-gallery.ts'
            : 'Положите фото и GIF в public/about/ и пропишите пути в src/lib/about-gallery.ts'}
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#B45309] hover:bg-[#92400E] text-white font-medium px-6 py-3 rounded-xl transition"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium px-6 py-3 rounded-xl transition"
        >
          Telegram
        </a>
        <a
          href={`tel:${PHONE_DISPLAY.replace(/ /g, '')}`}
          className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium px-6 py-3 rounded-xl transition"
        >
          <Phone className="w-5 h-5" />
          {PHONE_DISPLAY}
        </a>
        <a
          href={`tel:${PHONE_2_DISPLAY.replace(/ /g, '')}`}
          className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium px-6 py-3 rounded-xl transition"
        >
          <Phone className="w-5 h-5" />
          {PHONE_2_DISPLAY}
        </a>
      </div>
    </div>
  );
}
