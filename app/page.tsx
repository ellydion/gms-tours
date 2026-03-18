// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { Phone, ArrowRight, X, Clock, Calendar, CheckCircle, Car, Users, Camera, Utensils, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tours = [
  {
    id: 1,
    titleRu: "Ущелье Кегети + Иссык-Ата + Бурана",
    price: 4050,
    durationRu: "1 день",
    img: "https://picsum.photos/id/1015/800/600",
    descRu: "Золотое кольцо Чуйской долины — must-see тур для первого знакомства с Кыргызстаном. Вы прикоснётесь к древней истории у башни Бурана, насладитесь мощью 20-метрового водопада и искупаетесь в целебных горячих источниках.",
    programRu: [
      { time: "07:45", text: "Сбор и выезд из Бишкека" },
      { time: "09:30", text: "Башня Бурана, музей и петроглифы" },
      { time: "11:30", text: "Ущелье Кегети — трекинг к водопаду" },
      { time: "13:30", text: "Ущелье Иссык-Ата" },
      { time: "15:00", text: "Купание в горячих источниках" },
      { time: "18:30", text: "Возвращение в Бишкек" }
    ]
  },
  {
    id: 2,
    titleRu: "Водопад Шаар + озеро Коль-Тор",
    price: 5550,
    durationRu: "1 день",
    img: "https://picsum.photos/id/102/800/600",
    descRu: "Эмоциональный тур к одному из самых высоких водопадов региона и бирюзовому горному озеру Коль-Тор.",
    programRu: [
      { time: "08:00", text: "Выезд из Бишкека" },
      { time: "11:00", text: "Трекинг к водопаду Шаар" },
      { time: "13:00", text: "Обед с видом на горы" },
      { time: "14:30", text: "Озеро Коль-Тор и отдых" },
      { time: "17:00", text: "Возвращение в Бишкек" }
    ]
  },
  {
    id: 3,
    titleRu: "Ала-Арча — ледник Ака-Сай",
    price: 4950,
    durationRu: "1 день",
    img: "https://picsum.photos/id/251/800/600",
    descRu: "Классический горный трекинг в национальном парке Ала-Арча к величественному леднику на фоне снежных вершин.",
    programRu: [
      { time: "08:00", text: "Выезд из Бишкека" },
      { time: "09:30", text: "Вход в национальный парк" },
      { time: "11:00", text: "Трекинг к леднику Ака-Сай" },
      { time: "14:00", text: "Пикник и отдых" },
      { time: "17:30", text: "Возвращение в Бишкек" }
    ]
  },
  {
    id: 4,
    titleRu: "Сон-Куль — юрты и кочевники (2 дня)",
    price: 13500,
    durationRu: "2 дня / 1 ночь",
    img: "https://picsum.photos/id/160/800/600",
    descRu: "Погружение в кочевую жизнь. Ночь в юрте у высокогорного озера Сон-Куль, конные прогулки и дегустация национальных продуктов.",
    programRu: [
      { time: "День 1 • 08:00", text: "Выезд из Бишкека" },
      { time: "День 1 • 13:00", text: "Прибытие, размещение в юрте" },
      { time: "День 1 • 15:00", text: "Конная прогулка и знакомство с кочевниками" },
      { time: "День 2 • 09:00", text: "Дегустация кумыса и национальных блюд" },
      { time: "День 2 • 12:00", text: "Возвращение в Бишкек" }
    ]
  },
  {
    id: 5,
    titleRu: "Иссык-Куль + Кара-Дере (3 дня)",
    price: 22500,
    durationRu: "3 дня / 2 ночи",
    img: "https://picsum.photos/id/201/800/600",
    descRu: "Комфортный отдых на самом большом высокогорном озере мира. Пляжи, горячие источники, древние петроглифы и потрясающие горные пейзажи.",
    programRu: [
      { time: "День 1 • 08:00", text: "Переезд на Иссык-Куль, заселение" },
      { time: "День 2 • 10:00", text: "Экскурсия к петроглифам и горячие источники" },
      { time: "День 3 • 09:00", text: "Свободное время на озере" },
      { time: "День 3 • 14:00", text: "Возвращение в Бишкек" }
    ]
  }
];

const services = [
  { icon: <Car className="w-12 h-12 text-emerald-600" />, title: "Комфортный трансфер", desc: "Современные автомобили и микроавтобусы с опытными водителями по всему Кыргызстану" },
  { icon: <Users className="w-12 h-12 text-emerald-600" />, title: "Русскоязычные и англоязычные гиды", desc: "Профессиональные гиды, говорящие на русском и английском языках" },
  { icon: <Camera className="w-12 h-12 text-emerald-600" />, title: "Фотосессия в горах", desc: "Профессиональная фотосъёмка на фоне самых красивых локаций" },
  { icon: <Utensils className="w-12 h-12 text-emerald-600" />, title: "Организация питания", desc: "Национальная кухня, пикники в горах и полноценное питание на маршрутах" },
];

const galleryImages = [
  "https://picsum.photos/id/1015/2000/1200",
  "https://picsum.photos/id/201/2000/1200",
  "https://picsum.photos/id/251/2000/1200",
  "https://picsum.photos/id/160/2000/1200",
  "https://picsum.photos/id/102/2000/1200",
  "https://picsum.photos/id/29/2000/1200",
  "https://picsum.photos/id/133/2000/1200",
  "https://picsum.photos/id/1016/2000/1200",
  "https://picsum.photos/id/1018/2000/1200",
  "https://picsum.photos/id/1043/2000/1200",
  "https://picsum.photos/id/106/2000/1200",
  "https://picsum.photos/id/145/2000/1200",
  "https://picsum.photos/id/180/2000/1200",
  "https://picsum.photos/id/190/2000/1200",
  "https://picsum.photos/id/220/2000/1200"
];

export default function Home() {
  const [modalTour, setModalTour] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (tour: any) => setModalTour(tour);
  const closeModal = () => {
    setModalTour(null);
    setSelectedDate('');
  };

  const handleBook = () => {
    if (!selectedDate) {
      alert("Пожалуйста, выберите дату поездки");
      return;
    }
    setSuccessMessage(`Заявка на тур "${modalTour.titleRu}" на ${selectedDate} успешно отправлена!`);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4500);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ШАПКА С ЛОГОТИПОМ */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="GMS Logo" className="h-25" />
            <div>
              <div className="font-bold text-5xl tracking-tighter text-[#0A2540]">GMS</div>
              <div className="text-sm text-stone-500 -mt-1 font-medium">Global Migration Solutions</div>
            </div>
          </div>
          <a href="tel:+996774880888" className="flex items-center gap-3 text-xl font-medium text-[#0A2540]">
            <Phone className="w-6 h-6" /> +996 774 880 888
          </a>
        </div>
      </nav>

      {/* HERO со слайд-шоу */}
      <header className="relative h-screen flex items-center overflow-hidden">
        {galleryImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            alt="Горы Кыргызстана"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/75"></div>
        <div className="relative max-w-6xl mx-auto px-8 text-center text-white z-10">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">Путешествия и миграция без границ</h1>
          <p className="text-3xl text-emerald-100 mb-12">Авторские туры по Кыргызстану • Визовая поддержка • Организация мероприятий</p>
          <button 
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#0A2540] px-16 py-6 rounded-3xl text-2xl font-bold hover:scale-105 transition shadow-2xl flex items-center gap-4 mx-auto"
          >
            Смотреть туры <ArrowRight className="inline ml-3" />
          </button>
        </div>
      </header>

      {/* ТУРЫ */}
      <section id="tours" className="max-w-7xl mx-auto px-8 py-24 bg-stone-50">
        <h2 className="text-6xl font-bold text-center mb-16 text-[#0A2540] tracking-tighter">Все туры</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              whileHover={{ y: -15 }}
              onClick={() => openModal(tour)}
              className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all border border-gray-100 hover:border-emerald-200"
            >
              <img src={tour.img} className="w-full h-80 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2540] leading-tight">{tour.titleRu}</h3>
                <p className="text-emerald-600 text-4xl font-semibold mb-6">{tour.price} сом</p>
                <p className="text-stone-600 line-clamp-3 mb-8 text-[15.5px] leading-relaxed">{tour.descRu}</p>
                <button className="w-full py-4 bg-[#0A2540] text-white rounded-2xl font-medium hover:bg-black transition">
                  Подробнее и забронировать
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* УСЛУГИ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-6 text-[#0A2540]">Дополнительные услуги</h2>
          <p className="text-center text-xl text-stone-600 mb-16 max-w-2xl mx-auto">
            Мы заботимся о каждом моменте вашего путешествия
          </p>

          <div className="relative h-96 md:h-[480px] rounded-3xl overflow-hidden mb-16 shadow-xl">
            {galleryImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                alt="Галерея услуг"
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:border-emerald-200 p-8"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#0A2540]">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#0A2540]">Контакты</h2>
          <div className="max-w-2xl mx-auto bg-stone-50 p-12 rounded-3xl shadow">
            <h3 className="text-2xl font-bold mb-8 text-[#0A2540]">Связаться с нами</h3>
            <div className="space-y-6 mb-12">
              <p className="flex items-center gap-4 text-[#0A2540] font-semibold text-xl">
                <Phone className="text-emerald-600 w-7 h-7" /> +996 774 880 888
              </p>
              <p className="flex items-center gap-4 text-[#0A2540] font-semibold text-xl">
                <MapPin className="text-emerald-600 w-7 h-7" /> Исакеева 32/2, Бишкек, Кыргызстан
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-[#0A2540]">Напишите нам</h4>
              <div className="space-y-6">
                <input type="text" placeholder="Ваше имя" className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]" />
                <input type="tel" placeholder="Телефон" className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]" />
                <textarea placeholder="Сообщение" rows={4} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]"></textarea>
                <button className="w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 transition">
                  Отправить сообщение
                </button>
              </div>
            </div>
            <div className="flex gap-6 mt-12">
              <a href="https://wa.me/996774880888" target="_blank" className="flex-1 bg-green-500 text-white py-5 rounded-2xl text-lg font-medium flex items-center justify-center gap-3 hover:bg-green-600 transition">
                WhatsApp
              </a>
              <a href="https://t.me/gms_tours" target="_blank" className="flex-1 bg-blue-500 text-white py-5 rounded-2xl text-lg font-medium flex items-center justify-center gap-3 hover:bg-blue-600 transition">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* МОДАЛЬНОЕ ОКНО + уведомление */}
      <AnimatePresence>
        {modalTour && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4" onClick={closeModal}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-80 md:h-96">
                <img src={modalTour.img} className="w-full h-full object-cover" />
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center text-4xl shadow-2xl hover:bg-gray-100 border border-gray-200"
                >
                  <X size={32} className="text-[#0A2540]" />
                </button>
              </div>
              <div className="p-10">
                <h2 className="text-4xl font-bold mb-6 text-[#0A2540]">{modalTour.titleRu}</h2>
                <p className="text-lg text-stone-700 leading-relaxed mb-12">{modalTour.descRu}</p>
                {modalTour.programRu && modalTour.programRu.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#0A2540]">
                      <Clock className="text-emerald-600" /> Программа тура
                    </h3>
                    <div className="space-y-5">
                      {modalTour.programRu.map((item: any, i: number) => (
                        <div key={i} className="flex gap-6 bg-stone-50 p-6 rounded-2xl">
                          <div className="font-mono text-emerald-600 font-semibold bg-white px-5 py-2 rounded-xl shadow-sm min-w-[85px] text-center">
                            {item.time}
                          </div>
                          <div className="flex-1 text-[17px] text-stone-700">{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="bg-stone-50 p-8 rounded-3xl mb-10">
                  <p className="font-semibold mb-4 text-lg flex items-center gap-2 text-[#0A2540]">
                    <Calendar className="text-emerald-600" /> Выберите дату поездки
                  </p>
                  <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-6 text-lg border border-stone-300 rounded-2xl focus:border-emerald-600 text-[#0A2540] font-medium"
                  />
                </div>
                <button 
                  onClick={handleBook}
                  className="w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 transition"
                >
                  Забронировать тур
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Премиальное уведомление */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-[#0A2540] text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4"
            >
              <CheckCircle className="w-7 h-7 text-emerald-400" />
              <div>
                <p className="font-semibold text-lg">{successMessage}</p>
                <p className="text-emerald-200 text-sm">Мы свяжемся с вами в ближайшее время</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}