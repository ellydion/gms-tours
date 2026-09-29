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
    description: { ru: 'Самый востребованный однодневный маршрут из Бишкека. Утром — городище Баласагун и башня Бурана XI века с каменными балбалами. Днём — ущелье Кегети: короткая прогулка к водопаду. Вечером — купание в Иссык-Ате. Гид RU/EN, выезд из отеля.\n\nВыезд от отеля в Бишкеке. До водопада Кегети обычно 25–40 минут спокойным шагом. В Иссык-Ате вода около 40–50 °C, есть раздевалки и душ. Обед не входит — кафе у Бураны или еда с собой. Маршрут круглый год, зимой водопад может быть в льду.', en: 'The most requested one-day route from Bishkek: Burana Tower, Kegeti waterfall and Issyk-Ata hot springs. RU/EN guide, hotel pickup.\n\nHotel pickup in Bishkek. Kegeti waterfall is usually a 25–40 minute easy walk. Issyk-Ata water is about 40–50 °C, with changing rooms and showers. Lunch is not included — a café near Burana or packed food. Year-round; in winter the fall can freeze.' },
    program: { ru: ['08:00–08:30 — Посадка у отеля в Бишкеке','09:20–10:50 — Бурана: башня, балбалы, музей','11:00 — Стоп на обед в кафе или перекус в машине','11:40–13:40 — Ущелье Кегети, прогулка к водопаду','15:30–17:30 — Термальные бассейны Иссык-Аты','19:00–19:30 — Возврат в Бишкек'], en: ['08:00–08:30 — Hotel pickup in Bishkek','09:20–10:50 — Burana: tower, balbals, museum','11:00 — Lunch stop or packed snack','11:40–13:40 — Kegeti Gorge, walk to the waterfall','15:30–17:30 — Issyk-Ata thermal pools','19:00–19:30 — Return to Bishkek'] },
    highlights: { ru: ['Башня Бурана XI века и балбалы','Короткая тропа к водопаду Кегети','Купание в источниках 40–50 °C','Выезд и возврат в тот же день из Бишкека'], en: ['11th-century Burana Tower and balbals','Short trail to Kegeti waterfall','Soak in 40–50 °C springs','Same-day return to Bishkek'] },
    includes: { ru: ['Трансфер от/до отеля в Бишкеке','Гид на русском или английском','Входные: Бурана и бассейны Иссык-Аты','Питьевая вода в машине'], en: ['Hotel transfer in Bishkek','Guide in Russian or English','Entrance: Burana and Issyk-Ata pools','Drinking water in the car'] },
    excludes: { ru: ['Обед','Купальники, полотенце, шлёпанцы','Личные расходы и чаевые'], en: ['Lunch','Swimwear, towel, flip-flops','Personal expenses and tips'] },
    notes: { ru: ['Цена «от» — за человека при группе 3–4. На двоих считаем отдельно.','Минимум для выезда — 2 человека.','Посадка у отеля в Бишкеке.','Зимой на тропе к водопаду бывает лёд — нужна обувь с протектором.','Тайминг ±30–40 минут из-за пробок.'], en: ['“From” price is per person in a group of 3–4. A couple is quoted separately.','Minimum 2 guests.','Pickup at your Bishkek hotel.','In winter the waterfall path can ice over — wear treaded soles.','Timing can shift ±30–40 minutes because of traffic.'] },
    whatToBring: { ru: ['Удобные кроссовки','Купальники','Полотенце','Шлёпанцы','Лёгкая куртка','Наличные на обед'], en: ['Comfortable sneakers','Swimwear','Towel','Flip-flops','Light jacket','Cash for lunch'] },
    faq: { ru: [{ q: 'Сколько идём пешком?', a: 'До водопада Кегети обычно 25–40 минут в одну сторону. В Буране и Иссык-Ате почти без ходьбы.' }, { q: 'Можно с детьми?', a: 'Да. Для дошкольников водопад можно сократить. В башню Бураны маленьких лучше не поднимать — лестница узкая.' }, { q: 'Зимой ездите?', a: 'Да. Источники работают круглый год. Водопад зимой часто в льду.' }], en: [{ q: 'How much walking?', a: 'Kegeti waterfall is usually 25–40 minutes each way. Burana and Issyk-Ata involve almost no hike.' }, { q: 'Kids?', a: 'Yes. We can shorten the waterfall walk for preschoolers. Skip the tower climb with small children — the stairs are tight.' }, { q: 'In winter?', a: 'Yes. The springs work year-round. The waterfall often freezes.' }] },
    difficulty: { ru: 'Лёгкий', en: 'Easy' }, season: { ru: 'Круглый год', en: 'Year-round' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/kegety_1.jpg','/tours/kegety_2.jpg','/tours/issyk-ata-1.jpg','/tours/issyk-ata-2.jpg','/tours/Burana-1.jpg','/tours/Burana-2.jpg'],
    isPopular: true, order: 10
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
