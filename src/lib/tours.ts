export type Locale = 'ru' | 'en';

export type TourRegion = 'north' | 'south';

export interface Tour {
  slug: string;
  region: TourRegion;
  durationDays: number;
  priceFrom: number;
  currency: string;
  title: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  description: Record<Locale, string>;
  program: Record<Locale, string[]>;
  highlights: Record<Locale, string[]>;
  includes: Record<Locale, string[]>;
  excludes: Record<Locale, string[]>;
  notes: Record<Locale, string[]>;
  whatToBring: Record<Locale, string[]>;
  faq?: Record<Locale, { q: string; a: string }[]>;
  difficulty: Record<Locale, string>;
  season: Record<Locale, string>;
  startFrom: Record<Locale, string>;
  groupSize: Record<Locale, string>;
  images: string[];
  isPopular?: boolean;
  isNew?: boolean;
  order: number;
}

export const tours: Tour[] = [
  {
    slug: 'kegeti-issyk-ata-burana',
    region: 'north',
    durationDays: 1,
    priceFrom: 3050,
    currency: 'сом',
    title: { ru: 'Кегети + Иссык-Ата + Бурана', en: 'Kegeti + Issyk-Ata + Burana' },
    shortDescription: { ru: 'История, водопад и горячие источники за один день из Бишкека.', en: 'History, a waterfall and hot springs in one day from Bishkek.' },
    description: { ru: 'Самый востребованный однодневный маршрут из Бишкека. Утром — городище Баласагун и башня Бурана XI века с каменными балбалами. Днём — ущелье Кегети: короткая прогулка к водопаду. Вечером — купание в Иссык-Ате. Гид RU/EN, выезд из отеля.', en: 'The most requested one-day route from Bishkek: Burana Tower, Kegeti waterfall and Issyk-Ata hot springs. RU/EN guide, hotel pickup.' },
    program: { ru: ['08:00–08:30 — Выезд из Бишкека','09:20–10:40 — Бурана','11:30–13:30 — Кегети','15:30–17:30 — Иссык-Ата','19:00 — Возвращение'], en: ['08:00 — Leave Bishkek','09:20 — Burana','11:30 — Kegeti','15:30 — Issyk-Ata','19:00 — Return'] },
    highlights: { ru: ['Бурана XI века','Водопад Кегети','Иссык-Ата'], en: ['Burana Tower','Kegeti waterfall','Issyk-Ata springs'] },
    includes: { ru: ['Трансфер','Гид RU/EN','Входные','Вода'], en: ['Transfer','RU/EN guide','Tickets','Water'] },
    excludes: { ru: ['Обед','Купальники'], en: ['Lunch','Swimwear'] },
    notes: { ru: ['Старт из Бишкека','Минимум 2 человека','Цена от за человека при группе 3–4','Вода в Иссык-Ате 40–50 °C'], en: ['Starts in Bishkek','Min 2 guests','Price from for 3–4 people','Springs 40–50 °C'] },
    whatToBring: { ru: ['Удобная обувь','Купальники','Полотенце'], en: ['Comfortable shoes','Swimwear','Towel'] },
    difficulty: { ru: 'Лёгкий', en: 'Easy' }, season: { ru: 'Круглый год', en: 'Year-round' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/kegety_1.jpg','/tours/kegety_2.jpg','/tours/issyk-ata-1.jpg','/tours/issyk-ata-2.jpg','/tours/Burana-1.jpg','/tours/Burana-2.jpg'],
    isPopular: true, order: 10
  }
];
