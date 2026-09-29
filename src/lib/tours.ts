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
  },
  {
    slug: 'chunkurchak-sky-bridge', region: 'north', durationDays: 1, priceFrom: 4200, currency: 'сом',
    title: { ru: 'Чункурчак + Небесный мост', en: 'Chunkurchak + Sky Bridge' },
    shortDescription: { ru: 'Подвесной мост в 40 минутах от Бишкека.', en: 'Sky bridge 40 minutes from Bishkek.' },
    description: { ru: 'Небесный мост в Чункурчаке. Без длинного трека, подходит семьям. Мост может закрыться при ветре.', en: 'Sky Bridge in Chunkurchak. No long trek, family-friendly. Bridge may close in wind.' },
    program: { ru: ['09:00 — Выезд','10:15–12:30 — Мост','16:00 — Возврат'], en: ['09:00 — Depart','10:15 — Bridge','16:00 — Return'] },
    highlights: { ru: ['Небесный мост','Близко к городу'], en: ['Sky Bridge','Close to the city'] },
    includes: { ru: ['Трансфер','Гид','Вход на мост'], en: ['Transfer','Guide','Bridge ticket'] },
    excludes: { ru: ['Канатка','Питание'], en: ['Cable car','Meals'] },
    notes: { ru: ['40–50 минут из центра','Нескользящая обувь'], en: ['40–50 min from centre','Non-slip shoes'] },
    whatToBring: { ru: ['Кроссовки','Ветровка'], en: ['Sneakers','Windbreaker'] },
    difficulty: { ru: 'Лёгкий', en: 'Easy' }, season: { ru: 'Апрель–ноябрь', en: 'April–November' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–8', en: '2–8' },
    images: ['/tours/Chunkurchak-valley.jpg','/tours/bridge_1.jpg'], isPopular: true, isNew: true, order: 20
  },
  {
    slug: 'burana-konorchek', region: 'north', durationDays: 1, priceFrom: 3900, currency: 'сом',
    title: { ru: 'Бурана + каньоны Конорчек', en: 'Burana + Konorchek Canyons' },
    shortDescription: { ru: 'Башня XI века и красные каньоны.', en: '11th-century tower and red canyons.' },
    description: { ru: 'Утром Бурана, затем прогулка 1,5–2 часа по Конорчеку. Нужна закрытая обувь.', en: 'Burana in the morning, then 1.5–2 hours in Konorchek. Closed shoes required.' },
    program: { ru: ['08:00 — Выезд','09:10 — Бурана','11:20 — Конорчек','18:00 — Возврат'], en: ['08:00 — Depart','09:10 — Burana','11:20 — Konorchek','18:00 — Return'] },
    highlights: { ru: ['Бурана','Красные каньоны'], en: ['Burana','Red canyons'] },
    includes: { ru: ['Трансфер','Гид','Входы'], en: ['Transfer','Guide','Tickets'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    notes: { ru: ['Нет тени в каньоне','Детям от 7–8 лет'], en: ['No shade in the canyon','Kids from 7–8'] },
    whatToBring: { ru: ['Закрытая обувь','Вода 1 л'], en: ['Closed shoes','1 L water'] },
    difficulty: { ru: 'Лёгкий–средний', en: 'Easy–moderate' }, season: { ru: 'Март–ноябрь', en: 'March–November' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/Burana-1.jpg','/tours/Burana-2.jpg','/tours/konorchek-1.jpg','/tours/konorchek-2.jpg','/tours/konorchek-3.jpg'], isPopular: true, order: 30
  },
  {
    slug: 'ala-archa', region: 'north', durationDays: 1, priceFrom: 3950, currency: 'сом',
    title: { ru: 'Ала-Арча — ледник Ак-Сай', en: 'Ala-Archa — Ak-Sai Glacier' },
    shortDescription: { ru: 'Нацпарк в 40 км от Бишкека.', en: 'National park 40 km from Bishkek.' },
    description: { ru: 'Два формата: лёгкая долина 2–3 часа или подъём к леднику 4–6 часов. Вход в парк включён.', en: 'Two formats: easy valley 2–3 hours or glacier hike 4–6 hours. Park ticket included.' },
    program: { ru: ['08:30 — Выезд','10:00–13:30 — Трек','17:30 — Возврат'], en: ['08:30 — Depart','10:00 — Trek','17:30 — Return'] },
    highlights: { ru: ['Нацпарк','Два уровня'], en: ['National park','Two levels'] },
    includes: { ru: ['Трансфер','Гид','Вход в парк'], en: ['Transfer','Guide','Park ticket'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    notes: { ru: ['Сложность выбираем при брони'], en: ['We choose the level when you book'] },
    whatToBring: { ru: ['Ботинки','Куртка','Вода 1,5 л'], en: ['Boots','Jacket','1.5 L water'] },
    difficulty: { ru: 'Лёгкий или средний', en: 'Easy or moderate' }, season: { ru: 'Апрель–ноябрь', en: 'April–November' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/ala-archa-1.jpg','/tours/ala-archa-2.jpg','/tours/ak-sai-1.jpg'], order: 40
  },
  {
    slug: 'shaar-kol-tor', region: 'north', durationDays: 1, priceFrom: 4550, currency: 'сом',
    title: { ru: 'Водопад Шаар + озеро Коль-Тор', en: 'Shaar Waterfall + Kol-Tor Lake' },
    shortDescription: { ru: 'Водопад и бирюзовое озеро ~2700 м.', en: 'Waterfall and turquoise lake ~2,700 m.' },
    description: { ru: '5–7 часов хода. Нужна средняя форма и ранний выезд.', en: '5–7 hours walking. Average fitness and an early start.' },
    program: { ru: ['07:00 — Выезд','11:00 — Шаар','13:00 — Коль-Тор','19:00 — Возврат'], en: ['07:00 — Depart','11:00 — Shaar','13:00 — Kol-Tor','19:00 — Return'] },
    highlights: { ru: ['Шаар','Коль-Тор'], en: ['Shaar','Kol-Tor'] },
    includes: { ru: ['Трансфер','Гид'], en: ['Transfer','Guide'] },
    excludes: { ru: ['Питание'], en: ['Meals'] },
    notes: { ru: ['Сезон июнь–сентябрь'], en: ['Season June–September'] },
    whatToBring: { ru: ['Ботинки','Обед с собой','2 л воды'], en: ['Boots','Packed lunch','2 L water'] },
    difficulty: { ru: 'Средний', en: 'Moderate' }, season: { ru: 'Июнь–сентябрь', en: 'June–September' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–5', en: '2–5' },
    images: ['/tours/kol-tor-1.jpg','/tours/kegety_1.jpg','/tours/ala-archa-1.jpg','/tours/kegety_2.jpg'], order: 45
  },
  {
    slug: 'song-kul-2d', region: 'north', durationDays: 2, priceFrom: 12500, currency: 'сом',
    title: { ru: 'Сон-Кол — юрты и кочевники', en: 'Song-Kul — Yurts & Nomads' },
    shortDescription: { ru: 'Ночёвка в юрте на 3016 м.', en: 'A night in a yurt at 3,016 m.' },
    description: { ru: 'Перевалы, юрта у чабанов, звёзды. Ночью летом +2…+8 °C. Сезон: середина июня — середина сентября.', en: 'Passes, a herder yurt, stars. Summer nights +2…+8 °C. Season mid-June to mid-September.' },
    program: { ru: ['День 1: Бишкек → Сон-Куль, юрта, ужин','День 2: утро у озера → Бишкек к 19:00'], en: ['Day 1: Bishkek → Song-Kul, yurt, dinner','Day 2: lake morning → Bishkek by 19:00'] },
    highlights: { ru: ['Юрта 3016 м','Звёзды'], en: ['Yurt 3,016 m','Stars'] },
    includes: { ru: ['Трансфер 2 дня','Гид','Юрта','Ужин и завтрак'], en: ['2-day transfer','Guide','Yurt','Dinner and breakfast'] },
    excludes: { ru: ['Обеды','Кони'], en: ['Lunches','Horses'] },
    notes: { ru: ['Общее размещение','Связь слабая','Высота 3016 м'], en: ['Shared yurt','Weak signal','Altitude 3,016 m'] },
    whatToBring: { ru: ['Тёплая куртка','Шапка','Фонарик'], en: ['Warm jacket','Hat','Headlamp'] },
    difficulty: { ru: 'Лёгкий, высота средняя', en: 'Easy walking, moderate altitude' }, season: { ru: 'Июнь–сентябрь', en: 'June–September' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/son-kol-2.jpg','/tours/son-kol-1.jpg','/tours/son-kol-3.jpg','/tours/son-kol-4.jpg','/tours/son-kol-5.jpg'], isPopular: true, order: 50
  },
  {
    slug: 'issyk-kul-south-2d', region: 'north', durationDays: 2, priceFrom: 14500, currency: 'сом',
    title: { ru: 'Южный берег Иссык-Куля', en: 'South Shore of Issyk-Kul' },
    shortDescription: { ru: 'Жети-Огуз, Сказка, Барскоон.', en: 'Jeti-Oguz, Fairy Tale, Barskoon.' },
    description: { ru: 'Красные скалы Жети-Огуз, каньон Сказка, водопады Барскоон. Ночёвка у озера. 4–5 часов дороги из Бишкека.', en: 'Jeti-Oguz rocks, Fairy Tale Canyon, Barskoon waterfalls. Night by the lake. 4–5 hours from Bishkek.' },
    program: { ru: ['День 1: Жети-Огуз и Сказка','День 2: Барскоон → Бишкек'], en: ['Day 1: Jeti-Oguz and Fairy Tale','Day 2: Barskoon → Bishkek'] },
    highlights: { ru: ['Жети-Огуз','Сказка','Барскоон'], en: ['Jeti-Oguz','Fairy Tale','Barskoon'] },
    includes: { ru: ['Трансфер 2 дня','Гид','1 ночь','Завтрак'], en: ['2-day transfer','Guide','1 night','Breakfast'] },
    excludes: { ru: ['Обеды и ужин'], en: ['Lunches and dinner'] },
    notes: { ru: ['Купание июнь–сентябрь'], en: ['Swimming June–September'] },
    whatToBring: { ru: ['Обувь','Купальники летом'], en: ['Shoes','Swimwear in summer'] },
    difficulty: { ru: 'Лёгкий', en: 'Easy' }, season: { ru: 'Май–октябрь', en: 'May–October' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/konorchek-1.jpg','/tours/konorchek-2.jpg','/tours/son-kol-1.jpg','/tours/konorchek-3.jpg'], isNew: true, isPopular: true, order: 60
  },
  {
    slug: 'issyk-kul-3d', region: 'north', durationDays: 3, priceFrom: 21500, currency: 'сом',
    title: { ru: 'Иссык-Куль — 3 дня', en: 'Issyk-Kul — 3 days' },
    shortDescription: { ru: 'Север и юг озера без гонки.', en: 'North and south shores without rush.' },
    description: { ru: 'Чолпон-Ата, Жети-Огуз, Сказка, Барскоон. 2 ночи у воды.', en: 'Cholpon-Ata, Jeti-Oguz, Fairy Tale, Barskoon. 2 nights by the water.' },
    program: { ru: ['День 1: северный берег','День 2: южный берег','День 3: возврат в Бишкек'], en: ['Day 1: north shore','Day 2: south shore','Day 3: back to Bishkek'] },
    highlights: { ru: ['Два берега','2 ночи'], en: ['Both shores','2 nights'] },
    includes: { ru: ['Трансферы','Гид','2 ночи','Завтраки'], en: ['Transfers','Guide','2 nights','Breakfasts'] },
    excludes: { ru: ['Обеды и ужины'], en: ['Lunches and dinners'] },
    notes: { ru: ['Отель согласуем до выезда'], en: ['Hotel category agreed before departure'] },
    whatToBring: { ru: ['Слои одежды','Купальники'], en: ['Layers','Swimwear'] },
    difficulty: { ru: 'Лёгкий', en: 'Easy' }, season: { ru: 'Май–октябрь', en: 'May–October' }, startFrom: { ru: 'Бишкек', en: 'Bishkek' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/son-kol-2.jpg','/tours/issyk-ata-1.jpg','/tours/Burana-1.jpg','/tours/kegety_1.jpg'], isPopular: true, order: 65
  },
  {
    slug: 'arslanbob', region: 'south', durationDays: 2, priceFrom: 13500, currency: 'сом',
    title: { ru: 'Арсланбоб — ореховые леса', en: 'Arslanbob — Walnut Forests' },
    shortDescription: { ru: 'Ореховый лес и два водопада. Старт из Оша.', en: 'Walnut forest and two waterfalls. Starts from Osh.' },
    description: { ru: 'Переезд Ош–Арсланбоб 3–4 часа. Ночёвка в гостевом доме. Авиа Бишкек–Ош не входит.', en: 'Osh–Arslanbob 3–4 hours. Guesthouse night. Bishkek–Osh flight not included.' },
    program: { ru: ['День 1: Ош → Арсланбоб, Большой водопад','День 2: Малый водопад → Ош'], en: ['Day 1: Osh → Arslanbob, Big waterfall','Day 2: Small waterfall → Osh'] },
    highlights: { ru: ['Ореховый лес','Два водопада'], en: ['Walnut forest','Two waterfalls'] },
    includes: { ru: ['Трансфер','Гид','1 ночь','Завтрак и ужин'], en: ['Transfer','Guide','1 night','Breakfast and dinner'] },
    excludes: { ru: ['Авиа Бишкек–Ош'], en: ['Bishkek–Osh flight'] },
    notes: { ru: ['Стыкуется с Ошем и Сары-Челеком'], en: ['Combines with Osh and Sary-Chelek'] },
    whatToBring: { ru: ['Дождевик','Паспорт'], en: ['Rain jacket','Passport'] },
    difficulty: { ru: 'Лёгкий–средний', en: 'Easy–moderate' }, season: { ru: 'Май–октябрь', en: 'May–October' }, startFrom: { ru: 'Ош', en: 'Osh' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/ala-archa-1.jpg','/tours/ala-archa-2.jpg','/tours/kol-tor-1.jpg'], isNew: true, order: 70
  },
  {
    slug: 'sary-chelek', region: 'south', durationDays: 3, priceFrom: 18900, currency: 'сом',
    title: { ru: 'Сары-Челек — жемчужина юга', en: 'Sary-Chelek — Pearl of the South' },
    shortDescription: { ru: 'Заповедник и бирюзовые озёра из Оша.', en: 'Reserve and turquoise lakes from Osh.' },
    description: { ru: 'Главное озеро ~7 км. Три дня из-за дороги и пропуска.', en: 'Main lake ~7 km. Three days because of the road and permit.' },
    program: { ru: ['День 1: дорога в заповедник','День 2: озёра','День 3: возврат в Ош'], en: ['Day 1: to the reserve','Day 2: lakes','Day 3: back to Osh'] },
    highlights: { ru: ['Сары-Челек','Мало туристов'], en: ['Sary-Chelek','Few tourists'] },
    includes: { ru: ['Трансферы','Гид','2 ночи','Питание','Пропуск'], en: ['Transfers','Guide','2 nights','Meals','Permit'] },
    excludes: { ru: ['Авиа Бишкек–Ош'], en: ['Bishkek–Osh flight'] },
    notes: { ru: ['Связь слабая'], en: ['Weak signal'] },
    whatToBring: { ru: ['Трек-обувь','Репеллент'], en: ['Hiking shoes','Repellent'] },
    difficulty: { ru: 'Лёгкий–средний', en: 'Easy–moderate' }, season: { ru: 'Май–октябрь', en: 'May–October' }, startFrom: { ru: 'Ош', en: 'Osh' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/kol-tor-1.jpg','/tours/ala-archa-1.jpg','/tours/son-kol-3.jpg','/tours/kegety_2.jpg'], isPopular: true, isNew: true, order: 80
  },
  {
    slug: 'arslanbob-sary-chelek', region: 'south', durationDays: 4, priceFrom: 24500, currency: 'сом',
    title: { ru: 'Арсланбоб + Сары-Челек', en: 'Arslanbob + Sary-Chelek' },
    shortDescription: { ru: 'Лес, водопады и озёра за 4 дня из Оша.', en: 'Forest, waterfalls and lakes in 4 days from Osh.' },
    description: { ru: 'Главный южный маршрут для тех, кто прилетает в Ош.', en: 'Main southern route for guests flying into Osh.' },
    program: { ru: ['День 1–2: Арсланбоб','День 3: Сары-Челек','День 4: Ош'], en: ['Days 1–2: Arslanbob','Day 3: Sary-Chelek','Day 4: Osh'] },
    highlights: { ru: ['Два места юга','4 дня'], en: ['Two southern places','4 days'] },
    includes: { ru: ['Трансферы','Гид','3 ночи','Питание'], en: ['Transfers','Guide','3 nights','Meals'] },
    excludes: { ru: ['Авиа Бишкек–Ош'], en: ['Bishkek–Osh flight'] },
    notes: { ru: ['Бронируйте за 5–7 дней'], en: ['Book 5–7 days ahead'] },
    whatToBring: { ru: ['Слои','Паспорт','Наличные'], en: ['Layers','Passport','Cash'] },
    difficulty: { ru: 'Лёгкий–средний', en: 'Easy–moderate' }, season: { ru: 'Май–октябрь', en: 'May–October' }, startFrom: { ru: 'Ош', en: 'Osh' }, groupSize: { ru: '2–6', en: '2–6' },
    images: ['/tours/ala-archa-2.jpg','/tours/kol-tor-1.jpg','/tours/son-kol-1.jpg','/tours/ala-archa-1.jpg'], isPopular: true, isNew: true, order: 90
  },
  {
    slug: 'osh-city', region: 'south', durationDays: 1, priceFrom: 4500, currency: 'сом',
    title: { ru: 'Ош — священная гора Сулайман-Тоо', en: 'Osh — Sacred Sulaiman-Too' },
    shortDescription: { ru: 'ЮНЕСКО-гора, базар, день прилёта.', en: 'UNESCO mountain, bazaar, arrival day.' },
    description: { ru: 'Сулайман-Тоо и Большой базар. Трансфер из аэропорта — по запросу.', en: 'Sulaiman-Too and the grand bazaar. Airport transfer on request.' },
    program: { ru: ['10:00 — Сулайман-Тоо','12:30 — Базар','16:30 — Конец'], en: ['10:00 — Sulaiman-Too','12:30 — Bazaar','16:30 — End'] },
    highlights: { ru: ['ЮНЕСКО','Базар Оша'], en: ['UNESCO','Osh bazaar'] },
    includes: { ru: ['Гид','Входы'], en: ['Guide','Tickets'] },
    excludes: { ru: ['Трансфер аэропорт','Питание'], en: ['Airport transfer','Meals'] },
    notes: { ru: ['Удобная обувь на гору'], en: ['Comfortable shoes for the mountain'] },
    whatToBring: { ru: ['Головной убор','Наличные'], en: ['Hat','Cash'] },
    difficulty: { ru: 'Лёгкий', en: 'Easy' }, season: { ru: 'Круглый год', en: 'Year-round' }, startFrom: { ru: 'Ош', en: 'Osh' }, groupSize: { ru: '1–8', en: '1–8' },
    images: ['/tours/osh-sulaiman-too.jpg','/tours/Burana-2.jpg','/tours/konorchek-3.jpg'], order: 100
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
