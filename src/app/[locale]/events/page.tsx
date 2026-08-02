import { setRequestLocale } from 'next-intl/server';
import { MessageCircle, Phone, Users, Camera, Car, Award, Map, Sparkles } from 'lucide-react';

export default async function EventsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === 'en';

  const items = isEn
    ? [
        {
          icon: Users,
          title: 'Corporate & Team-building',
          desc: 'Off-sites, strategy sessions, team-building programs in the mountains, by Issyk-Kul or in unique locations. Full logistics and facilitation.'
        },
        {
          icon: Award,
          title: 'High-level & Protocol Events',
          desc: 'We have organized more than 15 high-level events, including meetings with top officials. Protocol, security coordination and flawless execution.'
        },
        {
          icon: Camera,
          title: 'Private Celebrations',
          desc: 'Weddings, anniversaries, birthdays and special private events with a strong sense of place — from yurt dinners to mountain ceremonies.'
        },
        {
          icon: Car,
          title: 'Transfers & Personal Cars',
          desc: 'VIP transfers, personal drivers, comfortable vehicles and full transport coordination for guests and participants.'
        },
        {
          icon: Map,
          title: 'Full Logistics',
          desc: 'Venues, accommodation, catering, technical production, guides and local partners — everything under one roof.'
        },
        {
          icon: Sparkles,
          title: 'Turnkey Experience',
          desc: 'From the first idea to the final report. We design, plan and run the event so you can focus on your guests.'
        }
      ]
    : [
        {
          icon: Users,
          title: 'Корпоративы и тимбилдинги',
          desc: 'Выезды, стратегические сессии, тимбилдинг-программы в горах, на Иссык-Куле или в уникальных локациях. Полная логистика и фасилитация.'
        },
        {
          icon: Award,
          title: 'Мероприятия высшего уровня',
          desc: 'Мы провели более 15 мероприятий на высшем уровне, включая встречи первых лиц. Протокол, координация безопасности и безупречное исполнение.'
        },
        {
          icon: Camera,
          title: 'Частные праздники',
          desc: 'Свадьбы, юбилеи, дни рождения и особые частные события с сильным чувством места — от ужинов в юртах до церемоний в горах.'
        },
        {
          icon: Car,
          title: 'Трансферы и личные авто',
          desc: 'VIP-трансферы, личные водители, комфортные автомобили и полная транспортная координация для гостей и участников.'
        },
        {
          icon: Map,
          title: 'Полная логистика',
          desc: 'Площадки, проживание, кейтеринг, техническое обеспечение, гиды и местные партнёры — всё под одной крышей.'
        },
        {
          icon: Sparkles,
          title: 'Под ключ',
          desc: 'От первой идеи до финального отчёта. Мы проектируем, планируем и проводим мероприятие, чтобы вы могли быть с гостями.'
        }
      ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-5">
          {isEn ? 'Events & Experiences' : 'Мероприятия и события'}
        </h1>
        <p className="text-lg text-[#78716C] leading-relaxed">
          {isEn
            ? 'We organize corporate events, high-level meetings, private celebrations and special experiences across Kyrgyzstan. More than 15 high-level events already delivered — including meetings with top officials.'
            : 'Организуем корпоративы, мероприятия высшего уровня, частные праздники и особые впечатления по всему Кыргызстану. Уже проведено более 15 мероприятий на высшем уровне — включая встречи первых лиц.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium hover:border-[#B45309]/40 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-[#B45309]/10 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-[#B45309]" />
            </div>
            <h3 className="font-semibold text-lg text-[#1C1917] mb-2">{item.title}</h3>
            <p className="text-sm text-[#78716C] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1C1917] rounded-2xl p-8 md:p-10 text-white">
        <h2 className="text-2xl font-bold mb-3">
          {isEn ? 'Let\'s discuss your event' : 'Давайте обсудим ваше мероприятие'}
        </h2>
        <p className="text-white/70 mb-6 max-w-xl">
          {isEn
            ? 'Tell us the format, number of guests and desired dates — we will propose locations, concept and budget.'
            : 'Напишите формат, количество гостей и желаемые даты — предложим локации, концепцию и бюджет.'}
        </p>
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
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl transition border border-white/20"
          >
            <Phone className="w-5 h-5" />
            +996 774 880 888
          </a>
        </div>
      </div>
    </div>
  );
}
