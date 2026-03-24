'use client';
import Navbar from '../components/Navbar';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Мы — GMS
          </h1>
          <p className="text-2xl md:text-3xl text-emerald-200 max-w-2xl mx-auto">
            Делаем Кыргызстан ближе к миру,<br className="hidden md:block" /> а мир — ближе к вам
          </p>
        </div>
      </div>

      {/* История */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0A2540]">Наша история</h2>
            <div className="prose prose-lg text-stone-700 leading-relaxed">
              <p className="text-xl">
                С 2025 года ОсОО «Global Migration Solutions» помогает людям открывать настоящую красоту Кыргызстана и строить новую жизнь.
              </p>
              <p>
                Мы начинали с одного тура в ущелье Кегети. Сегодня мы организуем авторские путешествия по всей стране, помогаем с визами, миграцией и проводим яркие корпоративные и частные мероприятия.
              </p>
              <p>
                Наша команда — это местные эксперты, гиды и организаторы, которые знают каждую тропу, каждое озеро и каждую традицию. Мы не просто возим туристов — мы создаём незабываемые эмоции.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/1015/800/600" 
                alt="Команда GMS в горах" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ценности */}
      <div className="bg-stone-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-[#0A2540]">
            Наши ценности
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-4xl mb-8">🛡️</div>
              <h3 className="text-3xl font-bold mb-4 text-[#0A2540]">Безопасность</h3>
              <p className="text-stone-600 text-lg">Каждый тур проходит тщательную проверку. Мы отвечаем за вашу безопасность на 100%.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-4xl mb-8">🌍</div>
              <h3 className="text-3xl font-bold mb-4 text-[#0A2540]">Индивидуальность</h3>
              <p className="text-stone-600 text-lg">Нет шаблонных маршрутов. Каждый тур создаётся специально под ваши пожелания.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-4xl mb-8">🌲</div>
              <h3 className="text-3xl font-bold mb-4 text-[#0A2540]">Экология</h3>
              <p className="text-stone-600 text-lg">Мы убираем за собой и учим путешествовать с уважением к природе Кыргызстана.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="bg-[#0A2540] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы отправиться в незабываемое путешествие?</h2>
          <p className="text-xl text-emerald-200 mb-10">Присоединяйтесь к тысячам счастливых клиентов GMS</p>
          <Link 
            href="/tours" 
            className="inline-flex items-center gap-4 bg-white text-[#0A2540] px-12 py-6 rounded-3xl text-2xl font-bold hover:scale-105 transition shadow-2xl"
          >
            Выбрать тур <ArrowRight className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </>
  );
}