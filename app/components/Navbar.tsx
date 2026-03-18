'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="GMS" className="h-24" />
          <div>
            <div className="font-bold text-5xl tracking-tighter text-[#0A2540]">GMS</div>
            <div className="text-sm text-stone-500 -mt-1 font-medium">Global Migration Solutions</div>
          </div>
        </div>

        <div className="flex items-center gap-10 text-lg font-medium text-[#0A2540]">
          <Link href="/" className="hover:text-emerald-600 transition">Главная</Link>
          <Link href="/tours" className="hover:text-emerald-600 transition">Туры</Link>
          <Link href="/about" className="hover:text-emerald-600 transition">О нас</Link>
          <Link href="/partners" className="hover:text-emerald-600 transition">Партнёры</Link>
          <Link href="/cabinet" className="hover:text-emerald-600 transition font-semibold">Личный кабинет</Link>
        </div>

        {/* Кнопка перевода справа в углу */}
        <div className="flex gap-2">
          {(['ru','en','hi','ar'] as const).map(l => (
            <button key={l} className="px-5 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 transition">
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <a href="tel:+996774880888" className="flex items-center gap-3 text-xl font-medium text-[#0A2540]">
          <Phone className="w-6 h-6" /> +996 774 880 888
        </a>
      </div>
    </nav>
  );
}