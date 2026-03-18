'use client';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function Cabinet() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('bookings');
    if (saved) setBookings(JSON.parse(saved));
  }, []);

  const fakeBooking = () => {
    const newBooking = { id: Date.now(), tour: "Сон-Куль", date: "2025-06-15", status: "Подтверждено" };
    const updated = [...bookings, newBooking];
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-8 py-24">
        <h1 className="text-6xl font-bold text-center mb-12 text-[#0A2540]">Личный кабинет</h1>

        <div className="bg-white rounded-3xl shadow p-10">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3"><Calendar className="text-emerald-600" /> Мои туры</h2>
          
          {bookings.length === 0 && (
            <p className="text-stone-500 text-center py-12">Пока нет забронированных туров.<br />Забронируйте первый тур на странице «Туры»</p>
          )}

          {bookings.map(b => (
            <div key={b.id} className="flex justify-between items-center border-b py-6">
              <div>
                <div className="font-semibold text-xl">{b.tour}</div>
                <div className="text-emerald-600 flex items-center gap-2"><Clock className="w-4 h-4" /> {b.date}</div>
              </div>
              <div className="text-green-600 font-medium">{b.status}</div>
            </div>
          ))}
        </div>

        <button onClick={fakeBooking} className="mt-8 w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 transition">
          Добавить тестовую заявку
        </button>
      </div>
    </>
  );
}