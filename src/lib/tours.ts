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
    shortDescription: { ru: 'Золотое кольцо Чуйской долины — must-see тур за один день.', en: 'Golden ring of the Chui Valley — a must-see one-day tour.' },
    description: { ru: 'Классический маршрут из Бишкека: башня Бурана, ущелье Кегети с водопадом и горячие источники Иссык-Ата.', en: 'Classic route from Bishkek: Burana Tower, Kegeti waterfall and Issyk-Ata hot springs.' },
    program: { ru: ['08:00–08:30 — Выезд из Бишкека','09:30–10:30 — Башня Бурана + музей и балбалы','11:30–13:30 — Ущелье Кегети, водопад','16:00–17:30 — Иссык-Ата','19:00–19:30 — Возвращение в Бишкек'], en: ['08:00–08:30 — Departure from Bishkek','09:30–10:30 — Burana Tower','11:30–13:30 — Kegeti gorge','16:00–17:30 — Issyk-Ata','19:00–19:30 — Return to Bishkek'] },
    highlights: { ru: ['Водопад Кегети','Иссык-Ата','Бурана XI века'], en: ['Kegeti waterfall','Issyk-Ata springs','Burana Tower'] },
    includes: { ru: ['Трансфер','Гид','Входные билеты'], en: ['Transfer','Guide','Entrance fees'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    images: ['/tours/kegety_1.jpg','/tours/kegety_2.jpg','/tours/issyk-ata-1.jpg','/tours/issyk-ata-2.jpg','/tours/Burana-1.jpg','/tours/Burana-2.jpg'],
    isPopular: true, order: 10
  },
  {
    slug: 'chunkurchak-sky-bridge', region: 'north', durationDays: 1, priceFrom: 4200, currency: 'сом',
    title: { ru: 'Чункурчак + Небесный мост', en: 'Chunkurchak + Sky Bridge' },
    shortDescription: { ru: 'Самый зрелищный маршрут рядом с Бишкеком.', en: 'The most spectacular route near Bishkek.' },
    description: { ru: 'Небесный мост в Чункурчаке, панорамы Тянь-Шаня и лёгкая прогулка.', en: 'Sky Bridge in Chunkurchak, Tien Shan views and a light walk.' },
    program: { ru: ['09:00 — Выезд','10:30–12:30 — Небесный мост','16:00 — Возвращение'], en: ['09:00 — Departure','10:30–12:30 — Sky Bridge','16:00 — Return'] },
    highlights: { ru: ['Небесный мост','Виды на Тянь-Шань'], en: ['Sky Bridge','Tien Shan views'] },
    includes: { ru: ['Трансфер','Гид','Вход на мост'], en: ['Transfer','Guide','Bridge entrance'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    images: ['/tours/chunkurchak-valley.jpg','/tours/bridge_1.jpg'],
    isPopular: true, isNew: true, order: 20
  },
  {
    slug: 'burana-konorchek', region: 'north', durationDays: 1, priceFrom: 3900, currency: 'сом',
    title: { ru: 'Бурана + каньоны Конорчек', en: 'Burana + Konorchek Canyons' },
    shortDescription: { ru: 'История и красные каньоны за один день.', en: 'History and red canyons in one day.' },
    description: { ru: 'Утром башня Бурана, днём красные каньоны Конорчек.', en: 'Burana Tower in the morning, Konorchek red canyons in the afternoon.' },
    program: { ru: ['08:00 — Выезд','09:15–10:30 — Бурана','11:30–14:00 — Конорчек','18:00 — Возвращение'], en: ['08:00 — Departure','09:15–10:30 — Burana','11:30–14:00 — Konorchek','18:00 — Return'] },
    highlights: { ru: ['Бурана','Каньоны Конорчек'], en: ['Burana','Konorchek canyons'] },
    includes: { ru: ['Трансфер','Гид','Входные'], en: ['Transfer','Guide','Entrance fees'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    images: ['/tours/Burana-1.jpg','/tours/Burana-2.jpg','/tours/konorchek-1.jpg','/tours/konorchek-2.jpg','/tours/konorchek-3.jpg'],
    isPopular: true, order: 30
  },
  {
    slug: 'ala-archa', region: 'north', durationDays: 1, priceFrom: 3950, currency: 'сом',
    title: { ru: 'Ала-Арча — ледник Ак-Сай', en: 'Ala-Archa — Ak-Sai Glacier' },
    shortDescription: { ru: 'Горный день в нацпарке рядом с Бишкеком.', en: 'Mountain day in the national park near Bishkek.' },
    description: { ru: 'Национальный парк Ала-Арча: лес, река и маршруты к леднику Ак-Сай.', en: 'Ala-Archa National Park: forest, river and routes toward Ak-Sai glacier.' },
    program: { ru: ['08:30 — Выезд','09:30 — Ала-Арча','10:00–13:30 — Треккинг','17:30 — Возвращение'], en: ['08:30 — Departure','09:30 — Ala-Archa','10:00–13:30 — Trek','17:30 — Return'] },
    highlights: { ru: ['Нацпарк','Ледник Ак-Сай'], en: ['National park','Ak-Sai glacier'] },
    includes: { ru: ['Трансфер','Гид','Вход в парк'], en: ['Transfer','Guide','Park entrance'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    images: ['/tours/ala-archa-1.jpg','/tours/ala-archa-2.jpg','/tours/ak-sai-1.jpg'],
    order: 40
  },
  {
    slug: 'shaar-kol-tor', region: 'north', durationDays: 1, priceFrom: 4550, currency: 'сом',
    title: { ru: 'Водопад Шаар + озеро Коль-Тор', en: 'Shaar Waterfall + Kol-Tor Lake' },
    shortDescription: { ru: 'Водопад и бирюзовое горное озеро за один день.', en: 'Waterfall and turquoise mountain lake in one day.' },
    description: { ru: 'Водопад Шаар и озеро Коль-Тор. Средняя физическая подготовка.', en: 'Shaar waterfall and Kol-Tor lake. Average fitness required.' },
    program: { ru: ['07:30 — Выезд','11:00 — Шаар','13:00 — Коль-Тор','19:00 — Возвращение'], en: ['07:30 — Departure','11:00 — Shaar','13:00 — Kol-Tor','19:00 — Return'] },
    highlights: { ru: ['Водопад Шаар','Озеро Коль-Тор'], en: ['Shaar waterfall','Kol-Tor lake'] },
    includes: { ru: ['Трансфер','Гид'], en: ['Transfer','Guide'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    images: ['/tours/kol-tor-1.jpg','/tours/kegety_1.jpg','/tours/ala-archa-1.jpg','/tours/kegety_2.jpg'],
    order: 45
  },
  {
    slug: 'song-kul-2d', region: 'north', durationDays: 2, priceFrom: 12500, currency: 'сом',
    title: { ru: 'Сон-Кол — юрты и кочевники', en: 'Song-Kul — Yurts & Nomads' },
    shortDescription: { ru: 'Кочевая жизнь на высокогорном озере.', en: 'Nomadic life at a high-altitude lake.' },
    description: { ru: 'Сон-Куль выше 3000 м: юрты, джайлоо, кони и звёзды.', en: 'Song-Kul above 3000 m: yurts, jailoos, horses and stars.' },
    program: { ru: ['День 1: Бишкек → Сон-Куль, юрта, ужин','День 2: утро на озере → возврат в Бишкек'], en: ['Day 1: Bishkek → Song-Kul, yurt, dinner','Day 2: morning by the lake → return to Bishkek'] },
    highlights: { ru: ['Ночёвка в юрте','Озеро 3016 м'], en: ['Overnight in a yurt','Lake at 3016 m'] },
    includes: { ru: ['Трансфер','Гид','Юрта','Завтрак + ужин'], en: ['Transfer','Guide','Yurt','Breakfast + dinner'] },
    excludes: { ru: ['Обед'], en: ['Lunch'] },
    images: ['/tours/son-kol-2.jpg','/tours/son-kol-1.jpg','/tours/son-kol-3.jpg','/tours/son-kol-4.jpg','/tours/son-kol-5.jpg'],
    isPopular: true, order: 50
  },
  {
    slug: 'issyk-kul-south-2d', region: 'north', durationDays: 2, priceFrom: 14500, currency: 'сом',
    title: { ru: 'Южный берег Иссык-Куля', en: 'South Shore of Issyk-Kul' },
    shortDescription: { ru: 'Жети-Огуз, Барскоон и каньон Сказка.', en: 'Jeti-Oguz, Barskoon and Fairy Tale Canyon.' },
    description: { ru: 'Красные скалы Жети-Огуз, водопады Барскоон и каньон Сказка. Ночёвка у озера.', en: 'Red rocks of Jeti-Oguz, Barskoon waterfalls and Fairy Tale Canyon. Overnight by the lake.' },
    program: { ru: ['День 1: Жети-Огуз и Сказка','День 2: Барскоон → Бишкек'], en: ['Day 1: Jeti-Oguz and Fairy Tale','Day 2: Barskoon → Bishkek'] },
    highlights: { ru: ['Жети-Огуз','Каньон Сказка'], en: ['Jeti-Oguz','Fairy Tale Canyon'] },
    includes: { ru: ['Трансфер','Гид','Проживание','Завтраки'], en: ['Transfer','Guide','Stay','Breakfasts'] },
    excludes: { ru: ['Обеды и ужины'], en: ['Lunches and dinners'] },
    images: ['/tours/konorchek-1.jpg','/tours/konorchek-2.jpg','/tours/son-kol-1.jpg','/tours/chunkurchak-valley.jpg'],
    isNew: true, isPopular: true, order: 60
  },
  {
    slug: 'issyk-kul-3d', region: 'north', durationDays: 3, priceFrom: 21500, currency: 'сом',
    title: { ru: 'Иссык-Куль — 3 дня', en: 'Issyk-Kul — 3 days' },
    shortDescription: { ru: 'Север и юг озера без спешки.', en: 'North and south shores without rush.' },
    description: { ru: 'Три дня на Иссык-Куле: берега, каньоны и время у воды.', en: 'Three days at Issyk-Kul: shores, canyons and time by the water.' },
    program: { ru: ['День 1: северный берег','День 2: южный берег','День 3: возврат в Бишкек'], en: ['Day 1: north shore','Day 2: south shore','Day 3: return to Bishkek'] },
    highlights: { ru: ['Два берега','Время на отдых'], en: ['Both shores','Time to rest'] },
    includes: { ru: ['Трансферы','Гид','2 ночи','Завтраки'], en: ['Transfers','Guide','2 nights','Breakfasts'] },
    excludes: { ru: ['Обеды и ужины'], en: ['Lunches and dinners'] },
    images: ['/tours/son-kol-2.jpg','/tours/issyk-ata-1.jpg','/tours/Burana-1.jpg','/tours/kegety_1.jpg'],
    isPopular: true, order: 65
  },
  {
    slug: 'arslanbob', region: 'south', durationDays: 2, priceFrom: 13500, currency: 'сом',
    title: { ru: 'Арсланбоб — ореховые леса', en: 'Arslanbob — Walnut Forests' },
    shortDescription: { ru: 'Крупнейший ореховый лес и водопады.', en: 'The largest walnut forest and waterfalls.' },
    description: { ru: 'Арсланбоб: ореховый лес и два водопада. Старт из Оша.', en: 'Arslanbob: walnut forest and two waterfalls. Starts from Osh.' },
    program: { ru: ['День 1: Ош → Арсланбоб','День 2: лес → Ош'], en: ['Day 1: Osh → Arslanbob','Day 2: forest → Osh'] },
    highlights: { ru: ['Ореховый лес','Водопады'], en: ['Walnut forest','Waterfalls'] },
    includes: { ru: ['Трансфер из Оша','Гид','Проживание','Питание'], en: ['Transfer from Osh','Guide','Stay','Meals'] },
    excludes: { ru: ['АвиаБишкек–Ош'], en: ['Bishkek–Osh flight'] },
    images: ['/tours/ala-archa-1.jpg','/tours/ala-archa-2.jpg','/tours/kol-tor-1.jpg'],
    isNew: true, order: 70
  },
  {
    slug: 'sary-chelek', region: 'south', durationDays: 3, priceFrom: 18900, currency: 'сом',
    title: { ru: 'Сары-Челек — жемчужина юга', en: 'Sary-Chelek — Pearl of the South' },
    shortDescription: { ru: 'Бирюзовые озёра заповедника.', en: 'Turquoise lakes of the reserve.' },
    description: { ru: 'Сары-Челекский заповедник. Старт из Оша.', en: 'Sary-Chelek reserve. Starts from Osh.' },
    program: { ru: ['День 1: дорога в заповедник','День 2: озёра','День 3: возврат в Ош'], en: ['Day 1: to the reserve','Day 2: lakes','Day 3: return to Osh'] },
    highlights: { ru: ['Озеро Сары-Челек','Заповедник'], en: ['Sary-Chelek lake','Reserve'] },
    includes: { ru: ['Трансферы','Гид','Проживание','Питание'], en: ['Transfers','Guide','Stay','Meals'] },
    excludes: { ru: ['Авиа Бишкек–Ош'], en: ['Bishkek–Osh flight'] },
    images: ['/tours/kol-tor-1.jpg','/tours/ala-archa-1.jpg','/tours/son-kol-3.jpg','/tours/kegety_2.jpg'],
    isPopular: true, isNew: true, order: 80
  },
  {
    slug: 'arslanbob-sary-chelek', region: 'south', durationDays: 4, priceFrom: 24500, currency: 'сом',
    title: { ru: 'Арсланбоб + Сары-Челек', en: 'Arslanbob + Sary-Chelek' },
    shortDescription: { ru: 'Ореховые леса и бирюзовые озёра.', en: 'Walnut forests and turquoise lakes.' },
    description: { ru: 'Главный южный комбо-тур из Оша.', en: 'Main southern combo from Osh.' },
    program: { ru: ['День 1–2: Арсланбоб','День 3: Сары-Челек','День 4: Ош'], en: ['Days 1–2: Arslanbob','Day 3: Sary-Chelek','Day 4: Osh'] },
    highlights: { ru: ['Лес и озёра','4 дня'], en: ['Forest and lakes','4 days'] },
    includes: { ru: ['Трансферы','Гид','Проживание','Питание'], en: ['Transfers','Guide','Stay','Meals'] },
    excludes: { ru: ['Авиа Бишкек–Ош'], en: ['Bishkek–Osh flight'] },
    images: ['/tours/ala-archa-2.jpg','/tours/kol-tor-1.jpg','/tours/son-kol-1.jpg','/tours/ala-archa-1.jpg'],
    isPopular: true, isNew: true, order: 90
  },
  {
    slug: 'osh-city', region: 'south', durationDays: 1, priceFrom: 4500, currency: 'сом',
    title: { ru: 'Ош — священная гора Сулайман-Тоо', en: 'Osh — Sacred Sulaiman-Too' },
    shortDescription: { ru: 'Древний город, базар и гора ЮНЕСКО.', en: 'Ancient city, bazaar and UNESCO mountain.' },
    description: { ru: 'Сулайман-Тоо и базар Оша — старт южного маршрута.', en: 'Sulaiman-Too and Osh bazaar — start of the southern route.' },
    program: { ru: ['10:00 — Сулайман-Тоо','12:30 — Базар','16:30 — Конец'], en: ['10:00 — Sulaiman-Too','12:30 — Bazaar','16:30 — End'] },
    highlights: { ru: ['Сулайман-Тоо','Базар Оша'], en: ['Sulaiman-Too','Osh bazaar'] },
    includes: { ru: ['Гид','Входные'], en: ['Guide','Entrance fees'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    images: ['/tours/osh-sulaiman-too.jpg','/tours/Burana-2.jpg','/tours/konorchek-3.jpg'],
    order: 100
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
