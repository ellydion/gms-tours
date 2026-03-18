import Navbar from './components/Navbar';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/75" />
        <div className="relative max-w-6xl mx-auto px-8 text-center text-white z-10">
          <h1 className="text-7xl font-bold leading-tight mb-6">Путешествия и миграция<br />без границ</h1>
          <p className="text-3xl text-emerald-100 mb-12">Авторские туры • Визовая поддержка • Организация мероприятий</p>
          <Link href="/tours" className="inline-flex items-center gap-4 bg-white text-[#0A2540] px-16 py-6 rounded-3xl text-2xl font-bold hover:scale-105 transition shadow-2xl">
            Смотреть все туры <ArrowRight />
          </Link>
        </div>
      </header>
    </>
  );
}