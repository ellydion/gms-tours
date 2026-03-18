'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { User, Calendar, Clock, LogOut } from 'lucide-react';
import bcrypt from 'bcryptjs';

interface Booking {
  id: number;
  tour: string;
  date: string;
  status: string;
}

export default function Cabinet() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedBookings = localStorage.getItem('bookings');
    if (savedEmail) {
      setIsLoggedIn(true);
      setEmail(savedEmail);
    }
    if (savedBookings) setBookings(JSON.parse(savedBookings));
  }, []);

  const handleAuth = async () => {
    if (!email || !password) {
      setMessage('Заполните email и пароль');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u: any) => u.email === email);

    if (isRegister) {
      if (existingUser) {
        setMessage('Пользователь уже существует');
        return;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      users.push({ id: Date.now(), email, password: hashedPassword });
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('userEmail', email);
      setIsLoggedIn(true);
      setMessage('Регистрация прошла успешно!');
    } else {
      if (!existingUser || !(await bcrypt.compare(password, existingUser.password))) {
        setMessage('Неверный email или пароль');
        return;
      }
      localStorage.setItem('userEmail', email);
      setIsLoggedIn(true);
      setMessage('Вход выполнен!');
    }
  };

  const logout = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const addTestBooking = () => {
    const newBooking: Booking = {
      id: Date.now(),
      tour: "Сон-Куль — юрты и кочевники",
      date: "2025-06-15",
      status: "Подтверждено"
    };
    const updated = [...bookings, newBooking];
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-8 py-24">
        <h1 className="text-6xl font-bold text-center mb-12 text-[#0A2540]">Личный кабинет</h1>

        {!isLoggedIn ? (
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md mx-auto">
            <div className="flex gap-2 mb-8 bg-gray-100 rounded-3xl p-1">
              <button onClick={() => setIsRegister(false)} className={`flex-1 py-4 rounded-3xl font-medium transition ${!isRegister ? 'bg-white shadow' : 'text-stone-500'}`}>Вход</button>
              <button onClick={() => setIsRegister(true)} className={`flex-1 py-4 rounded-3xl font-medium transition ${isRegister ? 'bg-white shadow' : 'text-stone-500'}`}>Регистрация</button>
            </div>

            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-6 border border-stone-300 rounded-2xl mb-6 text-lg" />
            <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-6 border border-stone-300 rounded-2xl mb-8 text-lg" />

            <button onClick={handleAuth} className="w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 transition">
              {isRegister ? 'Зарегистрироваться' : 'Войти'}
            </button>

            {message && <p className="text-center mt-6 text-emerald-600 font-medium">{message}</p>}
            <p className="text-center text-sm text-stone-500 mt-8">Демо: любой email + любой пароль при регистрации</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <User className="w-12 h-12 text-emerald-600" />
                <div>
                  <div className="text-3xl font-semibold text-[#0A2540]">{email}</div>
                  <div className="text-emerald-600">Добро пожаловать!</div>
                </div>
              </div>
              <button onClick={logout} className="flex items-center gap-2 text-red-600 hover:text-red-700 transition">
                <LogOut /> Выйти
              </button>
            </div>

            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3 text-[#0A2540]">
              <Calendar className="text-emerald-600" /> Мои заявки
            </h2>

            {bookings.length === 0 ? (
              <p className="text-stone-600 text-center py-12 text-lg">Пока нет заявок. Забронируйте тур на странице «Туры»</p>
            ) : (
              bookings.map(b => (
                <div key={b.id} className="flex justify-between items-center border-b py-8 last:border-none">
                  <div>
                    <div className="font-semibold text-2xl text-[#0A2540]">{b.tour}</div>
                    <div className="text-emerald-600 flex items-center gap-2"><Clock className="w-5 h-5" /> {b.date}</div>
                  </div>
                  <div className="px-8 py-3 bg-emerald-100 text-emerald-700 rounded-2xl font-medium">{b.status}</div>
                </div>
              ))
            )}

            <button onClick={addTestBooking} className="mt-10 w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 transition">
              Добавить тестовую заявку
            </button>
          </div>
        )}
      </div>
    </>
  );
}