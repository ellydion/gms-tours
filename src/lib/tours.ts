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
    shortDescription: {
      ru: 'Золотое кольцо Чуйской долины — must-see тур за один день.',
      en: 'Golden ring of the Chui Valley — a must-see one-day tour.'
    },
    description: {
      ru: 'Классический однодневный маршрут из Бишкека: Бурана, водопад Кегети и источники Иссык-Ата.',
      en: 'Classic one-day route from Bishkek: Burana, Kegeti waterfall and Issyk-Ata springs.'
    },
    program: {
      ru: ['08:00 — Выезд из Бишкека','09:30 — Бурана','11:30 — Кегети','16:00 — Иссык-Ата','19:00 — Возвращение'],
      en: ['08:00 — Depart Bishkek','09:30 — Burana','11:30 — Kegeti','16:00 — Issyk-Ata','19:00 — Return']
    },
    highlights: { ru: ['Водопад Кегети','Иссык-Ата','Бурана'], en: ['Kegeti waterfall','Issyk-Ata','Burana'] },
    includes: { ru: ['Трансфер','Гид','Входные'], en: ['Transfer','Guide','Entrance fees'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    images: ['/tours/kegety_1.jpg','/tours/kegety_2.jpg','/tours/issyk-ata-1.jpg','/tours/issyk-ata-2.jpg','/tours/Burana-1.jpg','/tours/Burana-2.jpg'],
    isPopular: true,
    order: 10
  }
];

export function getTours(region?: TourRegion) {
  const sorted = [...tours].sort((a, b) => a.order - b.order);
  if (!region) return sorted;
  return sorted.filter((t) => t.region === region);
}

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export function getPopularTours(limit = 6) {
  return tours.filter((t) => t.isPopular).sort((a, b) => a.order - b.order).slice(0, limit);
}
