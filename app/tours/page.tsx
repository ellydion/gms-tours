'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';   // ← ИСПРАВЛЕННЫЙ ПУТЬ
import { X, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendToBitrix } from '../actions';

interface Tour {
  id: number;
  titleRu: string;
  price: number;
  durationRu: string;
  img: string;
  descRu: string;
  programRu: { time: string; text: string }[];
}

const tours: Tour[] = [
  {
    id: 1,
    titleRu: "Ущелье Кегети + Иссык-Ата + Бурана",
    price: 3050,
    durationRu: "1 день",
    img: "https://picsum.photos/id/1015/800/600",
    descRu: "Золотое кольцо Чуйской долины — must-see тур для первого знакомства с Кыргызстаном.",
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
    price: 4550,
    durationRu: "1 день",
    img: "https://picsum.photos/id/102/800/600",
    descRu: "Эмоциональный тур к одному из самых высоких водопадов региона и бирюзовому озеру.",
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
    price: 3950,
    durationRu: "1 день",
    img: "https://picsum.photos/id/251/800/600",
    descRu: "Классический горный трекинг в национальном парке к леднику.",
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
    price: 12500,
    durationRu: "2 дня / 1 ночь",
    img: "https://picsum.photos/id/160/800/600",
    descRu: "Погружение в кочевую жизнь у высокогорного озера.",
    programRu: [
      { time: "День 1 • 08:00", text: "Выезд из Бишкека" },
      { time: "День 1 • 13:00", text: "Прибытие, размещение в юрте" },
      { time: "День 1 • 15:00", text: "Конная прогулка" },
      { time: "День 2 • 09:00", text: "Дегустация кумыса" },
      { time: "День 2 • 12:00", text: "Возвращение в Бишкек" }
    ]
  },
  {
    id: 5,
    titleRu: "Иссык-Куль + Кара-Дере (3 дня)",
    price: 21500,
    durationRu: "3 дня / 2 ночи",
    img: "https://picsum.photos/id/201/800/600",
    descRu: "Комфортный отдых на самом большом высокогорном озере мира.",
    programRu: [
      { time: "День 1 • 08:00", text: "Переезд на Иссык-Куль" },
      { time: "День 2 • 10:00", text: "Экскурсия к петроглифам" },
      { time: "День 3 • 09:00", text: "Свободное время на озере" },
      { time: "День 3 • 14:00", text: "Возвращение в Бишкек" }
    ]
  }
];

export default function ToursPage() {
  const [modalTour, setModalTour] = useState<Tour | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (tour: Tour) => setModalTour(tour);
  const closeModal = () => {
    setModalTour(null);
    setSelectedDate('');
    setName('');
    setPhone('');
    setMessage('');
  };

  const handleBook = async () => {
    if (!name.trim() || !phone.trim() || !selectedDate) {
      alert("Заполните имя, телефон и дату");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('tour', modalTour!.titleRu);
    formData.append('date', selectedDate);
    formData.append('name', name.trim());
    formData.append('phone', phone.trim());
    formData.append('message', message.trim());

    try {
      await sendToBitrix(formData);
      setSuccessMessage(`Заявка на тур "${modalTour!.titleRu}" успешно отправлена!`);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4500);
      closeModal();
    } catch (e) {
      alert('Ошибка отправки в Bitrix24');
    }
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-8 py-24 bg-stone-50">
        <h1 className="text-6xl font-bold text-center mb-16 text-[#0A2540]">Все туры</h1>
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

      {/* МОДАЛЬНОЕ ОКНО */}
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
                <button onClick={closeModal} className="absolute top-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center text-4xl shadow-2xl hover:bg-gray-100 border border-gray-200">
                  <X size={32} className="text-[#0A2540]" />
                </button>
              </div>

              <div className="p-10">
                <h2 className="text-4xl font-bold mb-6 text-[#0A2540]">{modalTour.titleRu}</h2>
                <p className="text-lg text-stone-700 leading-relaxed mb-12">{modalTour.descRu}</p>

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

                <div className="space-y-6">
                  <input type="text" placeholder="Ваше имя *" value={name} onChange={e => setName(e.target.value)} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]" />
                  <input type="tel" placeholder="Телефон *" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]" />
                  <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="w-full p-6 text-lg border border-stone-300 rounded-2xl focus:border-emerald-600 text-[#0A2540] font-medium" />
                  <textarea placeholder="Комментарий" value={message} onChange={e => setMessage(e.target.value)} rows={3} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg text-[#0A2540]" />

                  <button onClick={handleBook} disabled={isLoading} className="w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 disabled:opacity-70 transition">
                    {isLoading ? 'Отправляем в Bitrix24...' : 'Забронировать тур'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Уведомление */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000]">
            <motion.div initial={{ y: 30 }} animate={{ y: 0 }} exit={{ y: 30 }} className="bg-[#0A2540] text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4">
              <CheckCircle className="w-7 h-7 text-emerald-400" />
              <div>
                <p className="font-semibold text-lg">{successMessage}</p>
                <p className="text-emerald-200 text-sm">Мы свяжемся с вами в ближайшее время</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}