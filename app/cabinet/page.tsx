'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { User, Calendar, Clock, LogOut, CheckCircle } from 'lucide-react';
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
      setMessage('Вход выполнен успешно!');
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

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#0A2540]">Личный кабинет</h1>

        {!isLoggedIn ? (
          /* ====================== ФОРМА ВХОДА / РЕГИСТРАЦИИ ====================== */
          <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex bg-stone-100 rounded-3xl p-1 mb-10">
              <button
                onClick={() => setIsRegister(false)}
                className={`flex-1 py-4 rounded-3xl font-semibold transition-all ${!isRegister ? 'bg-white shadow text-[#0A2540]' : 'text-stone-500'}`}
              >
                Вход
              </button>
              <button
                onClick={() => setIsRegister(true)}
                className={`flex-1 py-4 rounded-3xl font-semibold transition-all ${isRegister ? 'bg-white shadow text-[#0A2540]' : 'text-stone-500'}`}
              >
                Регистрация
              </button>
            </div>

            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-5 border border-stone-300 rounded-2xl mb-6 focus:border-emerald-600 text-lg"
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-5 border border-stone-300 rounded-2xl mb-8 focus:border-emerald-600 text-lg"
            />

            <button
              onClick={handleAuth}
              className="w-full py-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl text-xl font-bold transition"
            >
              {isRegister ? 'Зарегистрироваться' : 'Войти'}
            </button>

            {message && (
              <p className="text-center mt-6 text-emerald-600 font-medium">{message}</p>
            )}

            <p className="text-center text-sm text-stone-500 mt-8">
              Демо: любой email + любой пароль при регистрации
            </p>
          </div>
        ) : (
          /* ====================== ДАШБОРД ПОСЛЕ ВХОДА ====================== */
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
              <div className="flex items-center gap-4">
                <User className="w-14 h-14 text-emerald-600" />
                <div>
                  <div className="text-3xl font-semibold text-[#0A2540]">{email}</div>
                  <div className="text-emerald-600 text-lg">Добро пожаловать в личный кабинет</div>
                </div>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium transition"
              >
                <LogOut className="w-5 h-5" /> Выйти
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#0A2540]">
              <Calendar className="text-emerald-600" /> Мои заявки
            </h2>

            {bookings.length === 0 ? (
              <div className="text-center py-16 text-stone-500">
                <p className="text-xl">Пока нет забронированных туров</p>
                <p className="mt-2">Перейдите в раздел «Туры» и забронируйте первый тур</p>
              </div>
            ) : (
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-stone-50 p-6 rounded-3xl"
                  >
                    <div>
                      <div className="font-semibold text-2xl text-[#0A2540]">{booking.tour}</div>
                      <div className="flex items-center gap-2 text-emerald-600 mt-2">
                        <Clock className="w-5 h-5" />
                        {booking.date}
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 px-8 py-3 bg-emerald-100 text-emerald-700 rounded-2xl font-medium">
                      {booking.status}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={addTestBooking}
              className="mt-12 w-full py-6 bg-emerald-600 text-white rounded-3xl text-xl font-bold hover:bg-emerald-700 transition"
            >
              Добавить тестовую заявку
            </button>
          </div>
        )}
      </div>
    </>
  );
}