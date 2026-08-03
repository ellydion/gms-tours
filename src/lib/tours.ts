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
  program: Record<Locale, string[]>; // тайминг / программа
  highlights: Record<Locale, string[]>;
  includes: Record<Locale, string[]>;
  excludes: Record<Locale, string[]>;
  images: string[];
  isPopular?: boolean;
  isNew?: boolean;
  order: number;
}

export const tours: Tour[] = [
  // ========== NORTH ==========
  {
    slug: 'kegeti-issyk-ata-burana',
    region: 'north',
    durationDays: 1,
    priceFrom: 3050,
    currency: 'сом',
    title: {
      ru: 'Кегети + Иссык-Ата + Бурана',
      en: 'Kegeti + Issyk-Ata + Burana'
    },
    shortDescription: {
      ru: 'Золотое кольцо Чуйской долины — must-see тур за один день.',
      en: 'Golden ring of the Chui Valley — a must-see one-day tour.'
    },
    description: {
      ru: 'Классический и самый востребованный однодневный маршрут из Бишкека. Мы соединяем историю, природу и релакс: древняя башня Бурана XI века, живописное ущелье Кегети с водопадом и целебные горячие источники Иссык-Ата. Идеально подходит для первого знакомства с Кыргызстаном и для тех, у кого мало времени.',
      en: 'The classic and most popular one-day route from Bishkek. We combine history, nature and relaxation: the 11th-century Burana Tower, the scenic Kegeti gorge with a waterfall, and the healing hot springs of Issyk-Ata. Perfect for a first introduction to Kyrgyzstan and for those short on time.'
    },
    program: {
      ru: [
        '08:00–08:30 — Выезд из Бишкека',
        '09:30–10:30 — Башня Бурана + музей и балбалы',
        '11:30–13:30 — Ущелье Кегети, водопад, прогулка',
        '14:00–15:30 — Обед (по желанию) + переезд',
        '16:00–17:30 — Горячие источники Иссык-Ата, купание',
        '19:00–19:30 — Возвращение в Бишкек'
      ],
      en: [
        '08:00–08:30 — Departure from Bishkek',
        '09:30–10:30 — Burana Tower + museum and balbals',
        '11:30–13:30 — Kegeti gorge, waterfall, walk',
        '14:00–15:30 — Lunch (optional) + transfer',
        '16:00–17:30 — Issyk-Ata hot springs, swimming',
        '19:00–19:30 — Return to Bishkek'
      ]
    },
    highlights: {
      ru: ['Водопад в ущелье Кегети', 'Горячие источники Иссык-Ата', 'Башня Бурана XI века', 'Идеально для первого дня'],
      en: ['Waterfall in Kegeti gorge', 'Issyk-Ata hot springs', '11th century Burana Tower', 'Perfect for the first day']
    },
    includes: {
      ru: ['Трансфер на комфортабельном авто', 'Русскоязычный гид', 'Входные билеты'],
      en: ['Transfer in a comfortable vehicle', 'Russian/English-speaking guide', 'Entrance fees']
    },
    excludes: {
      ru: ['Питание', 'Личные расходы', 'Купальные принадлежности'],
      en: ['Meals', 'Personal expenses', 'Swimwear']
    },
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1400&q=85'
    ],
    isPopular: true,
    order: 10
  },
  {
    slug: 'chunkurchak-sky-bridge',
    region: 'north',
    durationDays: 1,
    priceFrom: 4200,
    currency: 'сом',
    title: {
      ru: 'Чункурчак + Небесный мост',
      en: 'Chunkurchak + Sky Bridge'
    },
    shortDescription: {
      ru: 'Самый зрелищный и фотогеничный маршрут рядом с Бишкеком.',
      en: 'The most spectacular and photogenic route near Bishkek.'
    },
    description: {
      ru: 'Небесный мост в ущелье Чункурчак — одна из самых ярких локаций окрестностей Бишкека. Подвесной мост на высоте, панорамные виды на Тянь-Шань, свежий горный воздух и возможность совместить с лёгкой прогулкой. Отлично подходит для семей, пар и тех, кто хочет красивые фото без долгой дороги.',
      en: 'The Sky Bridge in Chunkurchak gorge is one of the brightest locations near Bishkek. A suspension bridge at height, panoramic views of the Tien Shan, fresh mountain air and the chance to combine it with a light walk. Great for families, couples and anyone who wants beautiful photos without a long journey.'
    },
    program: {
      ru: [
        '09:00 — Выезд из Бишкека',
        '10:00–10:20 — Прибытие в Чункурчак',
        '10:30–12:30 — Небесный мост, фото, прогулка по территории',
        '12:30–13:30 — Свободное время / перекус',
        '14:00–15:00 — Дополнительная точка (по желанию) или возвращение',
        '16:00 — Возвращение в Бишкек'
      ],
      en: [
        '09:00 — Departure from Bishkek',
        '10:00–10:20 — Arrival at Chunkurchak',
        '10:30–12:30 — Sky Bridge, photos, walk around the area',
        '12:30–13:30 — Free time / snack',
        '14:00–15:00 — Optional extra stop or return',
        '16:00 — Return to Bishkek'
      ]
    },
    highlights: {
      ru: ['Небесный мост', 'Панорамные виды на Тянь-Шань', 'Лёгкий уровень', 'Отличные фото'],
      en: ['Sky Bridge', 'Panoramic Tien Shan views', 'Easy level', 'Great photos']
    },
    includes: {
      ru: ['Трансфер', 'Гид', 'Вход на мост'],
      en: ['Transfer', 'Guide', 'Bridge entrance']
    },
    excludes: {
      ru: ['Питание', 'Канатная дорога (опционально)'],
      en: ['Meals', 'Cable car (optional)']
    },
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=85',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=85',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=85'
    ],
    isPopular: true,
    isNew: true,
    order: 20
  },
  {
    slug: 'burana-konorchek',
    region: 'north',
    durationDays: 1,
    priceFrom: 3900,
    currency: 'сом',
    title: {
      ru: 'Бурана + каньоны Конорчек',
      en: 'Burana + Konorchek Canyons'
    },
    shortDescription: {
      ru: 'История + «марсианские» красные каньоны за один день.',
      en: 'History + “Martian” red canyons in one day.'
    },
    description: {
      ru: 'Один из самых фотогеничных маршрутов. Утром — древняя башня Бурана и каменные балбалы, днём — прогулка по красным каньонам Конорчек, которые напоминают пейзажи Марса или американского Юго-Запада. Отличный баланс истории и природы.',
      en: 'One of the most photogenic routes. In the morning — the ancient Burana Tower and stone balbals, in the afternoon — a walk through the red Konorchek canyons that look like Martian landscapes or the American Southwest. A perfect balance of history and nature.'
    },
    program: {
      ru: [
        '08:00 — Выезд из Бишкека',
        '09:15–10:30 — Башня Бурана, музей, балбалы',
        '11:30–14:00 — Каньоны Конорчек (прогулка 1,5–2 часа)',
        '14:00–15:00 — Обед / перекус',
        '15:30–16:30 — Дополнительные смотровые точки',
        '18:00 — Возвращение в Бишкек'
      ],
      en: [
        '08:00 — Departure from Bishkek',
        '09:15–10:30 — Burana Tower, museum, balbals',
        '11:30–14:00 — Konorchek Canyons (1.5–2 hour walk)',
        '14:00–15:00 — Lunch / snack',
        '15:30–16:30 — Additional viewpoints',
        '18:00 — Return to Bishkek'
      ]
    },
    highlights: {
      ru: ['Башня Бурана', 'Красные каньоны Конорчек', 'Сильные фотолокации', 'Несложная прогулка'],
      en: ['Burana Tower', 'Red Konorchek canyons', 'Strong photo locations', 'Easy walk']
    },
    includes: {
      ru: ['Трансфер', 'Гид', 'Входные билеты'],
      en: ['Transfer', 'Guide', 'Entrance fees']
    },
    excludes: {
      ru: ['Питание'],
      en: ['Meals']
    },
    images: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=85',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=85',
      'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1400&q=85'
    ],
    isPopular: true,
    order: 30
  },
  {
    slug: 'ala-archa',
    region: 'north',
    durationDays: 1,
    priceFrom: 3950,
    currency: 'сом',
    title: {
      ru: 'Ала-Арча — ледник Ака-Сай',
      en: 'Ala-Archa — Ak-Sai Glacier'
    },
    shortDescription: {
      ru: 'Классический горный день в национальном парке рядом с Бишкеком.',
      en: 'Classic mountain day in the national park near Bishkek.'
    },
    description: {
      ru: 'Национальный парк Ала-Арча — ближайшие настоящие горы к столице. В зависимости от подготовки группы мы идём либо лёгким маршрутом до водопада, либо более серьёзным треком в сторону ледника Ака-Сай. Чистый воздух, хвойный лес, река и виды на пики Тянь-Шаня.',
      en: 'Ala-Archa National Park is the closest real mountains to the capital. Depending on the group’s fitness we either take an easy route to the waterfall or a more serious trek toward the Ak-Sai glacier. Clean air, coniferous forest, river and views of the Tien Shan peaks.'
    },
    program: {
      ru: [
        '08:30 — Выезд из Бишкека',
        '09:30 — Въезд в нацпарк Ала-Арча',
        '10:00–13:30 — Треккинг (варианты разной сложности)',
        '13:30–14:30 — Обед / отдых у реки',
        '15:00–16:00 — Свободное время или дополнительная точка',
        '17:30 — Возвращение в Бишкек'
      ],
      en: [
        '08:30 — Departure from Bishkek',
        '09:30 — Entrance to Ala-Archa National Park',
        '10:00–13:30 — Trekking (options of different difficulty)',
        '13:30–14:30 — Lunch / rest by the river',
        '15:00–16:00 — Free time or extra stop',
        '17:30 — Return to Bishkek'
      ]
    },
    highlights: {
      ru: ['Национальный парк', 'Возможность увидеть ледник', 'Горный воздух', 'Разный уровень сложности'],
      en: ['National park', 'Chance to see the glacier', 'Mountain air', 'Different difficulty levels']
    },
    includes: {
      ru: ['Трансфер', 'Гид', 'Вход в парк'],
      en: ['Transfer', 'Guide', 'Park entrance']
    },
    excludes: {
      ru: ['Питание'],
      en: ['Meals']
    },
    images: [
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1400&q=85',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1400&q=85',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=85'
    ],
    order: 40
  },
  {
    slug: 'shaar-kol-tor',
    region: 'north',
    durationDays: 1,
    priceFrom: 4550,
    currency: 'сом',
    title: {
      ru: 'Водопад Шаар + озеро Коль-Тор',
      en: 'Shaar Waterfall + Kol-Tor Lake'
    },
    shortDescription: {
      ru: 'Мощный водопад и бирюзовое горное озеро — один из самых красивых дней.',
      en: 'Powerful waterfall and turquoise mountain lake — one of the most beautiful days.'
    },
    description: {
      ru: 'Маршрут для тех, кто хочет настоящей горной красоты за один день. Высокий водопад Шаар и озеро Коль-Тор с нереально бирюзовой водой. Требует средней физической подготовки (подъём), но виды полностью окупают усилия.',
      en: 'A route for those who want real mountain beauty in one day. The high Shaar waterfall and Kol-Tor lake with unreal turquoise water. Requires average fitness (ascent), but the views fully reward the effort.'
    },
    program: {
      ru: [
        '07:30 — Ранний выезд из Бишкека',
        '09:30 — Начало треккинга',
        '11:00–12:00 — Водопад Шаар',
        '13:00–14:30 — Озеро Коль-Тор, отдых, фото',
        '14:30–16:30 — Спуск',
        '18:30–19:00 — Возвращение в Бишкек'
      ],
      en: [
        '07:30 — Early departure from Bishkek',
        '09:30 — Start of the trek',
        '11:00–12:00 — Shaar waterfall',
        '13:00–14:30 — Kol-Tor lake, rest, photos',
        '14:30–16:30 — Descent',
        '18:30–19:00 — Return to Bishkek'
      ]
    },
    highlights: {
      ru: ['Водопад Шаар', 'Бирюзовое озеро Коль-Тор', 'Настоящий горный день', 'Средняя сложность'],
      en: ['Shaar waterfall', 'Turquoise Kol-Tor lake', 'Real mountain day', 'Medium difficulty']
    },
    includes: {
      ru: ['Трансфер', 'Гид'],
      en: ['Transfer', 'Guide']
    },
    excludes: {
      ru: ['Питание'],
      en: ['Meals']
    },
    images: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1400&q=85',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=85',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1400&q=85'
    ],
    order: 45
  },
  {
    slug: 'song-kul-2d',
    region: 'north',
    durationDays: 2,
    priceFrom: 12500,
    currency: 'сом',
    title: {
      ru: 'Сон-Куль — юрты и кочевники',
      en: 'Song-Kul — Yurts & Nomads'
    },
    shortDescription: {
      ru: 'Погружение в настоящую кочевую жизнь на высокогорном озере.',
      en: 'Immersion in real nomadic life at a high-altitude lake.'
    },
    description: {
      ru: 'Сон-Куль — одно из самых атмосферных мест Кыргызстана. Высокогорное озеро на высоте более 3000 м, бескрайние джайлоо, юрты, кони, кумыс и звёздное небо. Мы ночуем в традиционной юрте, общаемся с местными чабанами и чувствуем настоящий ритм кочевой жизни.',
      en: 'Song-Kul is one of the most atmospheric places in Kyrgyzstan. A high-altitude lake above 3000 m, endless jailoos, yurts, horses, kumis and a starry sky. We stay in a traditional yurt, meet local shepherds and feel the real rhythm of nomadic life.'
    },
    program: {
      ru: [
        'День 1: 08:00 выезд из Бишкека → перевал → прибытие на Сон-Куль к обеду → размещение в юрте → прогулка / кони → ужин у костра → звёзды',
        'День 2: Завтрак → свободное утро на озере → выезд → обед в пути → возвращение в Бишкек к 18:00–19:00'
      ],
      en: [
        'Day 1: 08:00 departure from Bishkek → pass → arrival at Song-Kul by lunch → yurt check-in → walk / horses → dinner by the fire → stars',
        'Day 2: Breakfast → free morning by the lake → departure → lunch on the way → return to Bishkek by 18:00–19:00'
      ]
    },
    highlights: {
      ru: ['Ночёвка в юрте', 'Высокогорное озеро 3016 м', 'Кочевая культура', 'Звёздное небо'],
      en: ['Overnight in a yurt', 'High-altitude lake 3016 m', 'Nomadic culture', 'Starry sky']
    },
    includes: {
      ru: ['Трансфер', 'Гид', 'Проживание в юрте', 'Завтрак + ужин'],
      en: ['Transfer', 'Guide', 'Yurt accommodation', 'Breakfast + dinner']
    },
    excludes: {
      ru: ['Обед', 'Конные прогулки (по желанию)'],
      en: ['Lunch', 'Horse riding (optional)']
    },
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=85',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1400&q=85',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=85'
    ],
    isPopular: true,
    order: 50
  },
  {
    slug: 'issyk-kul-south-2d',
    region: 'north',
    durationDays: 2,
    priceFrom: 14500,
    currency: 'сом',
    title: {
      ru: 'Южный берег Иссык-Куля',
      en: 'South Shore of Issyk-Kul'
    },
    shortDescription: {
      ru: 'Жети-Огуз, Барскоон и каньон Сказка — самый красивый берег озера.',
      en: 'Jeti-Oguz, Barskoon and Fairy Tale Canyon — the most beautiful shore of the lake.'
    },
    description: {
      ru: 'Южный берег Иссык-Куля — это красные скалы Жети-Огуз («Семь быков»), водопады ущелья Барскоон и фантастический каньон Сказка. Меньше туристов, чем на севере, больше дикой красоты и атмосферных локаций. Ночёвка на берегу озера.',
      en: 'The southern shore of Issyk-Kul means the red rocks of Jeti-Oguz (“Seven Bulls”), the waterfalls of Barskoon gorge and the fantastic Fairy Tale Canyon. Fewer tourists than on the north shore, more wild beauty and atmospheric locations. Overnight by the lake.'
    },
    program: {
      ru: [
        'День 1: Выезд из Бишкека утром → Жети-Огуз → обед → каньон Сказка → размещение на южном берегу → ужин и закат',
        'День 2: Завтрак → ущелье Барскоон и водопады → свободное время на озере → возвращение в Бишкек к вечеру'
      ],
      en: [
        'Day 1: Morning departure from Bishkek → Jeti-Oguz → lunch → Fairy Tale Canyon → check-in on the south shore → dinner and sunset',
        'Day 2: Breakfast → Barskoon gorge and waterfalls → free time by the lake → return to Bishkek in the evening'
      ]
    },
    highlights: {
      ru: ['Жети-Огуз', 'Каньон Сказка', 'Водопады Барскоон', 'Ночёвка у озера'],
      en: ['Jeti-Oguz', 'Fairy Tale Canyon', 'Barskoon waterfalls', 'Overnight by the lake']
    },
    includes: {
      ru: ['Трансфер', 'Гид', 'Проживание', 'Завтраки'],
      en: ['Transfer', 'Guide', 'Accommodation', 'Breakfasts']
    },
    excludes: {
      ru: ['Обеды и ужины'],
      en: ['Lunches and dinners']
    },
    images: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=85',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=85',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=85',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1400&q=85'
    ],
    isNew: true,
    isPopular: true,
    order: 60
  },
  {
    slug: 'issyk-kul-3d',
    region: 'north',
    durationDays: 3,
    priceFrom: 21500,
    currency: 'сом',
    title: {
      ru: 'Иссык-Куль — 3 дня',
      en: 'Issyk-Kul — 3 days'
    },
    shortDescription: {
      ru: 'Комфортный и насыщенный отдых на самом большом высокогорном озере.',
      en: 'Comfortable and rich stay at the largest high-altitude lake.'
    },
    description: {
      ru: 'Три дня, чтобы по-настоящему почувствовать Иссык-Куль: северный и южный берег, каньоны, ущелья, горячие источники и время просто отдохнуть у воды. Оптимальный формат для тех, кто хочет и увидеть главное, и не спешить.',
      en: 'Three days to truly feel Issyk-Kul: north and south shores, canyons, gorges, hot springs and time to simply relax by the water. The optimal format for those who want to see the main highlights without rushing.'
    },
    program: {
      ru: [
        'День 1: Бишкек → северный берег / Чолпон-Ата → размещение → отдых на озере',
        'День 2: Южный берег — Жети-Огуз, Сказка, Барскоон → возвращение на базу',
        'День 3: Свободное утро или горячие источники → выезд в Бишкек'
      ],
      en: [
        'Day 1: Bishkek → north shore / Cholpon-Ata → check-in → lake time',
        'Day 2: South shore — Jeti-Oguz, Fairy Tale, Barskoon → return to base',
        'Day 3: Free morning or hot springs → departure to Bishkek'
      ]
    },
    highlights: {
      ru: ['Северный и южный берег', 'Каньоны и ущелья', 'Время на отдых', 'Комфортное проживание'],
      en: ['North and south shores', 'Canyons and gorges', 'Time to relax', 'Comfortable stay']
    },
    includes: {
      ru: ['Трансферы', 'Гид', 'Проживание 2 ночи', 'Завтраки'],
      en: ['Transfers', 'Guide', '2 nights accommodation', 'Breakfasts']
    },
    excludes: {
      ru: ['Обеды и ужины'],
      en: ['Lunches and dinners']
    },
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1400&q=85',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=85',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=85'
    ],
    isPopular: true,
    order: 65
  },

  // ========== SOUTH ==========
  {
    slug: 'arslanbob',
    region: 'south',
    durationDays: 2,
    priceFrom: 13500,
    currency: 'сом',
    title: {
      ru: 'Арсланбоб — ореховые леса',
      en: 'Arslanbob — Walnut Forests'
    },
    shortDescription: {
      ru: 'Крупнейший ореховый лес в мире, водопады и южное гостеприимство.',
      en: 'The world’s largest walnut forest, waterfalls and southern hospitality.'
    },
    description: {
      ru: 'Арсланбоб — уникальное место. Здесь растёт самый большой ореховый лес на планете, есть два мощных водопада и особая южная атмосфера. Маршрут стартует из Оша. Идеально сочетается с Сары-Челеком.',
      en: 'Arslanbob is a unique place. Here grows the largest walnut forest on the planet, there are two powerful waterfalls and a special southern atmosphere. The route starts from Osh. Perfectly combines with Sary-Chelek.'
    },
    program: {
      ru: [
        'День 1: Ош → переезд в Арсланбоб → Большой водопад → размещение → ужин',
        'День 2: Малый водопад + прогулка по ореховому лесу → возвращение в Ош'
      ],
      en: [
        'Day 1: Osh → transfer to Arslanbob → Big waterfall → check-in → dinner',
        'Day 2: Small waterfall + walk through the walnut forest → return to Osh'
      ]
    },
    highlights: {
      ru: ['Крупнейший ореховый лес', 'Два водопада', 'Южная атмосфера', 'Старт из Оша'],
      en: ['Largest walnut forest', 'Two waterfalls', 'Southern atmosphere', 'Starts from Osh']
    },
    includes: {
      ru: ['Трансфер из Оша', 'Гид', 'Проживание', 'Питание'],
      en: ['Transfer from Osh', 'Guide', 'Accommodation', 'Meals']
    },
    excludes: {
      ru: ['Авиаперелёт Бишкек–Ош'],
      en: ['Bishkek–Osh flight']
    },
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=85',
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=1400&q=85',
      'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=1400&q=85'
    ],
    isNew: true,
    order: 70
  },
  {
    slug: 'sary-chelek',
    region: 'south',
    durationDays: 3,
    priceFrom: 18900,
    currency: 'сом',
    title: {
      ru: 'Сары-Челек — жемчужина юга',
      en: 'Sary-Chelek — Pearl of the South'
    },
    shortDescription: {
      ru: 'Биосферный заповедник с системой бирюзовых озёр — одно из самых красивых мест страны.',
      en: 'Biosphere reserve with a system of turquoise lakes — one of the most beautiful places in the country.'
    },
    description: {
      ru: 'Сары-Челекский биосферный заповедник — это тишина, чистейшие озёра и пейзажи, которые сложно передать словами. Меньше туристов, больше настоящей природы. Старт из Оша.',
      en: 'The Sary-Chelek Biosphere Reserve is silence, crystal-clear lakes and landscapes that are hard to describe in words. Fewer tourists, more real nature. Starts from Osh.'
    },
    program: {
      ru: [
        'День 1: Ош → переезд в заповедник → размещение',
        'День 2: Полный день на озёрах Сары-Челек (прогулки, фото, отдых)',
        'День 3: Утро в заповеднике → возвращение в Ош'
      ],
      en: [
        'Day 1: Osh → transfer to the reserve → check-in',
        'Day 2: Full day at Sary-Chelek lakes (walks, photos, rest)',
        'Day 3: Morning in the reserve → return to Osh'
      ]
    },
    highlights: {
      ru: ['Озеро Сары-Челек', 'Биосферный заповедник', 'Минимум туристов', 'Сильные пейзажи'],
      en: ['Sary-Chelek lake', 'Biosphere reserve', 'Few tourists', 'Strong landscapes']
    },
    includes: {
      ru: ['Трансферы', 'Гид', 'Проживание', 'Питание'],
      en: ['Transfers', 'Guide', 'Accommodation', 'Meals']
    },
    excludes: {
      ru: ['Авиаперелёт Бишкек–Ош'],
      en: ['Bishkek–Osh flight']
    },
    images: [
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1400&q=85',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=85'
    ],
    isPopular: true,
    isNew: true,
    order: 80
  },
  {
    slug: 'arslanbob-sary-chelek',
    region: 'south',
    durationDays: 4,
    priceFrom: 24500,
    currency: 'сом',
    title: {
      ru: 'Арсланбоб + Сары-Челек',
      en: 'Arslanbob + Sary-Chelek'
    },
    shortDescription: {
      ru: 'Главный южный комбо-тур: ореховые леса и бирюзовые озёра.',
      en: 'The main southern combo: walnut forests and turquoise lakes.'
    },
    description: {
      ru: 'Лучшее, что есть на юге Кыргызстана, в одном маршруте. Сначала — величественный ореховый лес и водопады Арсланбоба, затем — заповедник Сары-Челек с его невероятными озёрами. Оптимальный формат для тех, кто летит в Ош.',
      en: 'The best of southern Kyrgyzstan in one route. First — the majestic walnut forest and waterfalls of Arslanbob, then — the Sary-Chelek reserve with its incredible lakes. Optimal format for those flying to Osh.'
    },
    program: {
      ru: [
        'День 1: Ош → Арсланбоб → водопады → ночёвка',
        'День 2: Ореховый лес → переезд в сторону Сары-Челека',
        'День 3: Полный день в заповеднике Сары-Челек',
        'День 4: Утро → возвращение в Ош'
      ],
      en: [
        'Day 1: Osh → Arslanbob → waterfalls → overnight',
        'Day 2: Walnut forest → transfer toward Sary-Chelek',
        'Day 3: Full day in Sary-Chelek reserve',
        'Day 4: Morning → return to Osh'
      ]
    },
    highlights: {
      ru: ['Ореховые леса + озёра', 'Два сильных места юга', '4 дня без спешки', 'Старт из Оша'],
      en: ['Walnut forests + lakes', 'Two strong southern places', '4 days without rush', 'Starts from Osh']
    },
    includes: {
      ru: ['Трансферы', 'Гид', 'Проживание', 'Питание'],
      en: ['Transfers', 'Guide', 'Accommodation', 'Meals']
    },
    excludes: {
      ru: ['Авиаперелёт Бишкек–Ош'],
      en: ['Bishkek–Osh flight']
    },
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=85',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1400&q=85',
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=1400&q=85',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=85'
    ],
    isPopular: true,
    isNew: true,
    order: 90
  },
  {
    slug: 'osh-city',
    region: 'south',
    durationDays: 1,
    priceFrom: 4500,
    currency: 'сом',
    title: {
      ru: 'Ош — священная гора Сулайман-Тоо',
      en: 'Osh — Sacred Sulaiman-Too'
    },
    shortDescription: {
      ru: 'Древний город, базар и гора ЮНЕСКО — идеальный старт юга.',
      en: 'Ancient city, bazaar and UNESCO mountain — perfect start of the south.'
    },
    description: {
      ru: 'Ош — один из древнейших городов Центральной Азии. Священная гора Сулайман-Тоо (объект ЮНЕСКО), огромный колоритный базар и особая южная атмосфера. Отличный вариант на день прилёта или как начало большого южного маршрута.',
      en: 'Osh is one of the oldest cities in Central Asia. The sacred Sulaiman-Too mountain (UNESCO site), a huge colorful bazaar and a special southern atmosphere. An excellent option for the day of arrival or as the start of a bigger southern route.'
    },
    program: {
      ru: [
        '09:00–09:30 — Встреча в отеле / аэропорту',
        '10:00–12:00 — Священная гора Сулайман-Тоо + музей',
        '12:30–14:00 — Большой базар Оша, дегустации',
        '14:30–16:00 — Исторический центр / свободное время',
        '16:30 — Завершение программы'
      ],
      en: [
        '09:00–09:30 — Meeting at hotel / airport',
        '10:00–12:00 — Sacred Sulaiman-Too mountain + museum',
        '12:30–14:00 — Osh big bazaar, tastings',
        '14:30–16:00 — Historical center / free time',
        '16:30 — End of the program'
      ]
    },
    highlights: {
      ru: ['Сулайман-Тоо (ЮНЕСКО)', 'Базар Оша', 'Древний город', 'Идеальный первый день на юге'],
      en: ['Sulaiman-Too (UNESCO)', 'Osh bazaar', 'Ancient city', 'Perfect first day in the south']
    },
    includes: {
      ru: ['Гид', 'Входные билеты'],
      en: ['Guide', 'Entrance fees']
    },
    excludes: {
      ru: ['Трансфер из аэропорта (по запросу)', 'Питание'],
      en: ['Airport transfer (on request)', 'Meals']
    },
    images: [
      '/tours/osh-sulaiman-too.jpg',
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1400&q=85',
      'https://images.unsplash.com/photo-1555881403-7469c6a5b5e1?w=1400&q=85'
    ],
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
  return tours
    .filter((t) => t.isPopular)
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);
}
