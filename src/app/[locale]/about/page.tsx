import { setRequestLocale } from 'next-intl/server';
import { MessageCircle, Phone, FileCheck, Calendar, Car, MapPin, Users, Award } from 'lucide-react';
import { AboutSlideshow } from '@/components/AboutSlideshow';
import { WHATSAPP_URL, TELEGRAM_URL, PHONE_DISPLAY, PHONE_2_DISPLAY, EMAIL } from '@/lib/contacts';

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
        { icon: Users, title: 'Team on the ground', text: 'Guides, drivers and coordinators in Bishkek and Osh. One manager stays with you from the first message to the last transfer.' },
        { icon: Award, title: 'Protocol & events', text: '15+ high-level events, including meetings with first persons. We handle timing, cars, venues and guest flow.' },
        { icon: Car, title: 'VIP logistics', text: 'Airport meetings, personal cars, bilingual drivers. The same standard for a one-day tour and a three-day program.' },
      ]
    : [
        { icon: Users, title: 'Команда на земле', text: 'Гиды, водители и координаторы в Бишкеке и Оше. Один менеджер ведёт вас от первого сообщения до последнего трансфера.' },
        { icon: Award, title: 'Протокол и события', text: 'Более 15 мероприятий высшего уровня, включая встречи первых лиц. Тайминг, авто, площадки и логика гостей — на нас.' },
        { icon: Car, title: 'VIP-логистика', text: 'Встречи в аэропорту, личные автомобили, водители с языками. Один стандарт и для однодневки, и для трёхдневной программы.' },
      ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6">
        {isEn ? 'About GMS' : 'О компании GMS'}
      </h1>

      <div className="space-y-5 text-lg text-[#57534E] leading-relaxed mb-10 max-w-3xl">
        <p>
          {isEn
            ? 'Global Migration Solutions (GMS) is a Bishkek company: author tours across Kyrgyzstan, visa and migration support, and event logistics.'
            : 'ОсОО «Global Migration Solutions» (GMS) — компания из Бишкека: авторские туры по Кыргызстану, визовая и миграционная поддержка, логистика мероприятий.'}
        </p>
        <p>
          {isEn
            ? 'We have processed more than 4,000 visas and delivered 15+ high-level events, including meetings with top officials. Guests get VIP transfers, a personal car when needed, and a clear plan before they land.'
            : 'Оформили более 4 000 виз и провели 15+ мероприятий на высшем уровне, включая встречи первых лиц. Гостям даём VIP-трансферы, личный автомобиль при необходимости и понятный план до прилёта.'}
        </p>
        <p>
          {isEn
            ? 'Tours are built by us. North routes start in Bishkek, south routes in Osh. Groups stay small. Guides work in Russian and English. WhatsApp and phone stay open during the trip.'
            : 'Маршруты собираем сами. Север стартует из Бишкека, юг — из Оша. Группы небольшие. Гиды на русском и английском. WhatsApp и телефон открыты на всём маршруте.'}
        </p>
        <p>
          {isEn
            ? 'Legal name: LLC Global Migration Solutions. Director: Myrzabekova K.T. Office: Isakeeva 32/2, Bishkek. Email: info@gms.tours.'
            : 'Юридическое лицо: ОсОО «Глобальные миграционные решения». Директор: Мырзабекова К.Т. Офис: Исакеева 32/2, Бишкек. Почта: info@gms.tours.'}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
        {stats.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-[#E7E5E4] text-center shadow-premium">
            <item.icon className="w-6 h-6 text-[#B45309] mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#1C1917] mb-1">{item.value}</div>
            <div className="text-xs text-[#78716C] leading-tight">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-5 mb-14">
        {points.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium">
            <div className="w-11 h-11 rounded-xl bg-[#B45309]/10 flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-[#B45309]" />
            </div>
            <h3 className="font-semibold text-[#1C1917] mb-2">{p.title}</h3>
            <p className="text-sm text-[#57534E] leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E5E4]">
        <h2 className="text-xl font-semibold text-[#1C1917] mb-4">{isEn ? 'How we work' : 'Как мы работаем'}</h2>
        <ol className="space-y-3 text-sm text-[#44403C] leading-relaxed list-decimal pl-5">
          <li>{isEn ? 'You write on WhatsApp or leave a form — we reply with dates, price for your group size and what is included.' : 'Пишете в WhatsApp или оставляете заявку — отвечаем датами, ценой под размер группы и тем, что входит.'}</li>
          <li>{isEn ? 'We confirm the pickup point, language of the guide and any extras (horses, cable car, hotel upgrade).' : 'Подтверждаем точку посадки, язык гида и доплаты (кони, канатка, улучшение номера).'}</li>
          <li>{isEn ? 'On the day: driver and guide on time, water in the car, a live contact if plans change.' : 'В день выезда: водитель и гид вовремя, вода в машине, живой контакт если планы меняются.'}</li>
        </ol>
      </div>

      <div className="mb-14">
        <AboutSlideshow title={isEn ? 'From our routes' : 'С наших маршрутов'} />
      </div>

      <div className="flex flex-wrap gap-3">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#B45309] hover:bg-[#92400E] text-white font-medium px-6 py-3 rounded-xl transition">
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium px-6 py-3 rounded-xl transition">Telegram</a>
        <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium px-6 py-3 rounded-xl transition">{EMAIL}</a>
        <a href={`tel:${PHONE_DISPLAY.replace(/ /g, '')}`} className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium px-6 py-3 rounded-xl transition">
          <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
        </a>
        <a href={`tel:${PHONE_2_DISPLAY.replace(/ /g, '')}`} className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#B45309] text-[#1C1917] font-medium px-6 py-3 rounded-xl transition">
          <Phone className="w-5 h-5" /> {PHONE_2_DISPLAY}
        </a>
      </div>
    </div>
  );
}
