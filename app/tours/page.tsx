'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
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
  { id: 1, titleRu: "Ущелье Кегети + Иссык-Ата + Бурана", price: 3050, durationRu: "1 день", img: "https://picsum.photos/id/1015/800/600", descRu: "Золотое кольцо Чуйской долины — must-see тур.", programRu: [{ time: "07:45", text: "Сбор и выезд" }, { time: "09:30", text: "Башня Бурана" }, { time: "11:30", text: "Кегети — водопад" }, { time: "15:00", text: "Горячие источники" }] },
  { id: 2, titleRu: "Водопад Шаар + озеро Коль-Тор", price: 4550, durationRu: "1 день", img: "https://picsum.photos/id/102/800/600", descRu: "Эмоциональный тур к высокому водопаду и бирюзовому озеру.", programRu: [{ time: "08:00", text: "Выезд" }, { time: "11:00", text: "Трекинг к Шаар" }, { time: "14:30", text: "Озеро Коль-Тор" }] },
  { id: 3, titleRu: "Ала-Арча — ледник Ака-Сай", price: 3950, durationRu: "1 день", img: "https://picsum.photos/id/251/800/600", descRu: "Классический горный трекинг к леднику.", programRu: [{ time: "08:00", text: "Выезд" }, { time: "11:00", text: "Трекинг" }, { time: "14:00", text: "Пикник" }] },
  { id: 4, titleRu: "Сон-Куль — юрты и кочевники (2 дня)", price: 12500, durationRu: "2 дня / 1 ночь", img: "https://picsum.photos/id/160/800/600", descRu: "Погружение в кочевую жизнь у высокогорного озера.", programRu: [{ time: "День 1", text: "Прибытие в юрту" }, { time: "День 2", text: "Возвращение" }] },
  { id: 5, titleRu: "Иссык-Куль + Кара-Дере (3 дня)", price: 21500, durationRu: "3 дня / 2 ночи", img: "https://picsum.photos/id/201/800/600", descRu: "Комфортный отдых на самом большом высокогорном озере.", programRu: [{ time: "День 1", text: "Заселение" }, { time: "День 3", text: "Возвращение" }] },
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
  const closeModal = () => { setModalTour(null); setSelectedDate(''); setName(''); setPhone(''); setMessage(''); };

  const handleBook = async () => {
    if (!name.trim() || !phone.trim() || !selectedDate) return alert("Заполните все обязательные поля");
    setIsLoading(true);
    const formData = new FormData();
    formData.append('tour', modalTour!.titleRu);
    formData.append('date', selectedDate);
    formData.append('name', name.trim());
    formData.append('phone', phone.trim());
    formData.append('message', message.trim());

    try {
      await sendToBitrix(formData);
      setSuccessMessage(`Заявка на "${modalTour!.titleRu}" отправлена!`);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4500);
      closeModal();
    } catch (e) {
      alert('Ошибка отправки');
    }
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 bg-stone-50">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 md:mb-16 text-[#0A2540]">Все туры</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              whileHover={{ y: -12 }}
              onClick={() => openModal(tour)}
              className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all border border-gray-100 hover:border-emerald-200"
            >
              <img src={tour.img} className="w-full h-64 md:h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#0A2540]">{tour.titleRu}</h3>
                <p className="text-emerald-600 text-3xl font-semibold mb-4">{tour.price} сом</p>
                <p className="text-stone-600 text-sm md:text-base line-clamp-3 mb-6">{tour.descRu}</p>
                <button className="w-full py-4 bg-[#0A2540] text-white rounded-2xl font-medium text-base md:text-lg">Подробнее</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* МОДАЛЬНОЕ ОКНО */}
      <AnimatePresence>
        {modalTour && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4" onClick={closeModal}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-3xl w-full max-w-2xl md:max-w-4xl max-h-[92vh] overflow-auto shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <img src={modalTour.img} className="w-full h-64 md:h-80 object-cover" />
                <button onClick={closeModal} className="absolute top-6 right-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl text-[#0A2540]">
                  <X size={28} />
                </button>
              </div>
              <div className="p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A2540]">{modalTour.titleRu}</h2>
                <p className="text-stone-700 leading-relaxed mb-8">{modalTour.descRu}</p>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Clock className="text-emerald-600" /> Программа</h3>
                  <div className="space-y-4">
                    {modalTour.programRu.map((item, i) => (
                      <div key={i} className="flex gap-4 bg-stone-50 p-5 rounded-2xl">
                        <div className="font-mono font-semibold text-emerald-600 bg-white px-4 py-1 rounded-xl shadow-sm">{item.time}</div>
                        <div className="text-stone-700">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <input type="text" placeholder="Имя *" value={name} onChange={e => setName(e.target.value)} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg" />
                  <input type="tel" placeholder="Телефон *" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg" />
                  <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg" />
                  <textarea placeholder="Комментарий" value={message} onChange={e => setMessage(e.target.value)} rows={3} className="w-full p-5 border border-stone-300 rounded-2xl focus:border-emerald-600 text-lg" />

                  <button onClick={handleBook} disabled={isLoading} className="w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 disabled:opacity-70">
                    {isLoading ? 'Отправляем...' : 'Забронировать тур'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000]">
            <motion.div initial={{ y: 30 }} animate={{ y: 0 }} exit={{ y: 30 }} className="bg-[#0A2540] text-white px-8 py-5 rounded-3xl shadow-2xl flex items-center gap-4">
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