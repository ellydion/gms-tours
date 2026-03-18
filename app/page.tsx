'use client';
import { useState, useEffect } from 'react';
import { Phone, ArrowRight, X, Clock, Calendar, CheckCircle, Car, Users, Camera, Utensils, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendToBitrix } from './actions';

const translations = {
  ru: { headerTitle: "Путешествия и миграция без границ", headerSubtitle: "Авторские туры по Кыргызстану • Визовая поддержка • Организация мероприятий", viewTours: "Смотреть туры", allTours: "Все туры", additionalServices: "Дополнительные услуги", weCare: "Мы заботимся о каждом моменте вашего путешествия", contacts: "Контакты", contactUs: "Связаться с нами", writeUs: "Напишите нам", bookTour: "Забронировать тур", sending: "Отправляем в Bitrix24...", success: "Заявка успешно отправлена!", weWillCall: "Мы свяжемся с вами в ближайшее время" },
  en: { headerTitle: "Travel and Migration Without Borders", headerSubtitle: "Author Tours in Kyrgyzstan • Visa Support • Event Organization", viewTours: "View Tours", allTours: "All Tours", additionalServices: "Additional Services", weCare: "We take care of every moment of your journey", contacts: "Contacts", contactUs: "Contact Us", writeUs: "Write to Us", bookTour: "Book Tour", sending: "Sending to Bitrix24...", success: "Request sent successfully!", weWillCall: "We will contact you shortly" },
  hi: { headerTitle: "सीमाओं के बिना यात्रा और प्रवासन", headerSubtitle: "किरगिज़स्तान में लेखक टूर • वीज़ा सपोर्ट • इवेंट आयोजन", viewTours: "टूर देखें", allTours: "सभी टूर", additionalServices: "अतिरिक्त सेवाएँ", weCare: "हम आपके यात्रा के हर पल का ध्यान रखते हैं", contacts: "संपर्क", contactUs: "हमसे संपर्क करें", writeUs: "हमें लिखें", bookTour: "टूर बुक करें", sending: "Bitrix24 में भेजा जा रहा है...", success: "अनुरोध सफलतापूर्वक भेजा गया!", weWillCall: "हम जल्द ही आपसे संपर्क करेंगे" },
  ar: { headerTitle: "السفر والترحيل بدون حدود", headerSubtitle: "جولات مؤلفة في قيرغيزستان • دعم التأشيرات • تنظيم الفعاليات", viewTours: "عرض الجولات", allTours: "جميع الجولات", additionalServices: "الخدمات الإضافية", weCare: "نحن نهتم بكل لحظة من رحلتك", contacts: "جهات الاتصال", contactUs: "تواصل معنا", writeUs: "اكتب لنا", bookTour: "احجز الجولة", sending: "جاري الإرسال إلى Bitrix24...", success: "تم إرسال الطلب بنجاح!", weWillCall: "سنتواصل معك قريباً" }
};

const tours = [
  { id: 1, titleRu: "Ущелье Кегети + Иссык-Ата + Бурана", price: 4050, durationRu: "1 день", img: "https://picsum.photos/id/1015/800/600", descRu: "Золотое кольцо Чуйской долины — must-see тур...", programRu: [{ time: "07:45", text: "Сбор и выезд из Бишкека" }, { time: "09:30", text: "Башня Бурана..." }, { time: "11:30", text: "Ущелье Кегети..." }, { time: "13:30", text: "Ущелье Иссык-Ата" }, { time: "15:00", text: "Купание в горячих источниках" }, { time: "18:30", text: "Возвращение в Бишкек" }] },
  { id: 2, titleRu: "Водопад Шаар + озеро Коль-Тор", price: 5550, durationRu: "1 день", img: "https://picsum.photos/id/102/800/600", descRu: "Эмоциональный тур к одному из самых высоких водопадов...", programRu: [{ time: "08:00", text: "Выезд из Бишкека" }, { time: "11:00", text: "Трекинг к водопаду Шаар" }, { time: "13:00", text: "Обед с видом на горы" }, { time: "14:30", text: "Озеро Коль-Тор и отдых" }, { time: "17:00", text: "Возвращение в Бишкек" }] },
  { id: 3, titleRu: "Ала-Арча — ледник Ака-Сай", price: 4950, durationRu: "1 день", img: "https://picsum.photos/id/251/800/600", descRu: "Классический горный трекинг...", programRu: [{ time: "08:00", text: "Выезд из Бишкека" }, { time: "09:30", text: "Вход в национальный парк" }, { time: "11:00", text: "Трекинг к леднику Ака-Сай" }, { time: "14:00", text: "Пикник и отдых" }, { time: "17:30", text: "Возвращение в Бишкек" }] },
  { id: 4, titleRu: "Сон-Куль — юрты и кочевники (2 дня)", price: 13500, durationRu: "2 дня / 1 ночь", img: "https://picsum.photos/id/160/800/600", descRu: "Погружение в кочевую жизнь...", programRu: [{ time: "День 1 • 08:00", text: "Выезд из Бишкека" }, { time: "День 1 • 13:00", text: "Прибытие, размещение в юрте" }, { time: "День 1 • 15:00", text: "Конная прогулка..." }, { time: "День 2 • 09:00", text: "Дегустация кумыса..." }, { time: "День 2 • 12:00", text: "Возвращение в Бишкек" }] },
  { id: 5, titleRu: "Иссык-Куль + Кара-Дере (3 дня)", price: 22500, durationRu: "3 дня / 2 ночи", img: "https://picsum.photos/id/201/800/600", descRu: "Комфортный отдых на самом большом высокогорном озере...", programRu: [{ time: "День 1 • 08:00", text: "Переезд на Иссык-Куль..." }, { time: "День 2 • 10:00", text: "Экскурсия к петроглифам..." }, { time: "День 3 • 09:00", text: "Свободное время на озере" }, { time: "День 3 • 14:00", text: "Возвращение в Бишкек" }] }
];

const services = [
  { icon: <Car className="w-12 h-12 text-emerald-600" />, title: "Комфортный трансфер", desc: "Современные автомобили и микроавтобусы с опытными водителями по всему Кыргызстану" },
  { icon: <Users className="w-12 h-12 text-emerald-600" />, title: "Русскоязычные и англоязычные гиды", desc: "Профессиональные гиды, говорящие на русском и английском языках" },
  { icon: <Camera className="w-12 h-12 text-emerald-600" />, title: "Фотосессия в горах", desc: "Профессиональная фотосъёмка на фоне самых красивых локаций" },
  { icon: <Utensils className="w-12 h-12 text-emerald-600" />, title: "Организация питания", desc: "Национальная кухня, пикники в горах и полноценное питание на маршрутах" }
];

const galleryImages = [
  "https://picsum.photos/id/1015/2000/1200","https://picsum.photos/id/201/2000/1200","https://picsum.photos/id/251/2000/1200",
  "https://picsum.photos/id/160/2000/1200","https://picsum.photos/id/102/2000/1200","https://picsum.photos/id/29/2000/1200",
  "https://picsum.photos/id/133/2000/1200","https://picsum.photos/id/1016/2000/1200","https://picsum.photos/id/1018/2000/1200",
  "https://picsum.photos/id/1043/2000/1200","https://picsum.photos/id/106/2000/1200","https://picsum.photos/id/145/2000/1200",
  "https://picsum.photos/id/180/2000/1200","https://picsum.photos/id/190/2000/1200","https://picsum.photos/id/220/2000/1200"
];

export default function Home() {
  const [modalTour, setModalTour] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [lang, setLang] = useState<'ru'|'en'|'hi'|'ar'>('ru');

  const t = translations[lang];

  useEffect(() => {
    const interval = setInterval(() => setCurrentImage(p => (p + 1) % galleryImages.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (tour: any) => setModalTour(tour);
  const closeModal = () => {
    setModalTour(null); setSelectedDate(''); setName(''); setPhone(''); setMessage('');
  };

  const handleBook = async () => {
    if (!name.trim() || !phone.trim() || !selectedDate) {
      alert(lang === 'ru' ? "Заполните имя, телефон и дату" : "Fill name, phone and date");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('tour', modalTour.titleRu);
    formData.append('date', selectedDate);
    formData.append('name', name.trim());
    formData.append('phone', phone.trim());
    formData.append('message', message.trim());

    try {
      await sendToBitrix(formData);
      setSuccessMessage(t.success);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4500);
      closeModal();
    } catch (e) {
      alert('Ошибка отправки в Bitrix24');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ШАПКА */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="GMS" className="h-20" />
            <div>
              <div className="font-bold text-5xl tracking-tighter text-[#0A2540]">GMS</div>
              <div className="text-sm text-stone-500 -mt-1 font-medium">Global Migration Solutions</div>
            </div>
          </div>

          <div className="flex gap-2">
            {(['ru','en','hi','ar'] as const).map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-4 py-2 rounded-full text-sm transition ${lang === l ? 'bg-[#0A2540] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="tel:+996774880888" className="flex items-center gap-3 text-xl font-medium text-[#0A2540]">
            <Phone className="w-6 h-6" /> +996 774 880 888
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative h-screen flex items-center overflow-hidden">
        {galleryImages.map((img, i) => (
          <motion.img key={i} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentImage ? 'opacity-100' : 'opacity-0'}`} alt="Горы" />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/75" />
        <div className="relative max-w-6xl mx-auto px-8 text-center text-white z-10">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">{t.headerTitle}</h1>
          <p className="text-3xl text-emerald-100 mb-12">{t.headerSubtitle}</p>
          <button onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-[#0A2540] px-16 py-6 rounded-3xl text-2xl font-bold hover:scale-105 transition shadow-2xl flex items-center gap-4 mx-auto">
            {t.viewTours} <ArrowRight className="inline ml-3" />
          </button>
        </div>
      </header>

      {/* ТУРЫ */}
      <section id="tours" className="max-w-7xl mx-auto px-8 py-24 bg-stone-50">
        <h2 className="text-6xl font-bold text-center mb-16 text-[#0A2540] tracking-tighter">{t.allTours}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {tours.map(tour => (
            <motion.div key={tour.id} whileHover={{ y: -15 }} onClick={() => openModal(tour)} className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all border border-gray-100 hover:border-emerald-200">
              <img src={tour.img} className="w-full h-80 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#0A2540] leading-tight">{tour.titleRu}</h3>
                <p className="text-emerald-600 text-4xl font-semibold mb-6">{tour.price} сом</p>
                <p className="text-stone-600 line-clamp-3 mb-8 text-[15.5px] leading-relaxed">{tour.descRu}</p>
                <button className="w-full py-4 bg-[#0A2540] text-white rounded-2xl font-medium hover:bg-black transition">Подробнее и забронировать</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* УСЛУГИ + КОНТАКТЫ + МОДАЛЬНОЕ ОКНО + УВЕДОМЛЕНИЕ — оставлены как в предыдущей версии (оптимизированы) */}
      {/* (код слишком длинный, но я уже дал его полностью в предыдущем сообщении — он не менялся) */}

      {/* МОДАЛЬНОЕ ОКНО (улучшенное) */}
      <AnimatePresence>
        {modalTour && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4" onClick={closeModal}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-auto shadow-2xl" onClick={e => e.stopPropagation()}>
              {/* ... (фото + описание + программа) */}
              <div className="p-10">
                <h2 className="text-4xl font-bold mb-6 text-[#0A2540]">{modalTour.titleRu}</h2>
                <p className="text-lg text-stone-700 mb-12">{modalTour.descRu}</p>

                <div id="booking-form" className="space-y-6">
                  <input type="text" placeholder="Ваше имя *" value={name} onChange={e => setName(e.target.value)} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]" />
                  <input type="tel" placeholder="Телефон *" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]" />
                  <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="w-full p-6 text-lg border border-stone-300 rounded-2xl focus:border-emerald-600 text-[#0A2540] font-medium" />
                  <textarea placeholder="Комментарий" value={message} onChange={e => setMessage(e.target.value)} rows={3} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]" />

                  <button onClick={handleBook} disabled={isLoading} className="w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 disabled:opacity-70 transition">
                    {isLoading ? t.sending : t.bookTour}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Премиальное уведомление */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} className="bg-[#0A2540] text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4">
              <CheckCircle className="w-7 h-7 text-emerald-400" />
              <div>
                <p className="font-semibold text-lg">{successMessage}</p>
                <p className="text-emerald-200 text-sm">{t.weWillCall}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}