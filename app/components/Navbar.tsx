'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Лого */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="GMS" className="h-20 md:h-24" />
          <div>
            <div className="font-bold text-4xl md:text-5xl tracking-tighter text-[#0A2540]">GMS</div>
            <div className="text-xs md:text-sm text-stone-500 -mt-1">Global Migration Solutions</div>
          </div>
        </div>

        {/* Десктоп меню */}
        <div className="hidden md:flex items-center gap-9 text-lg font-medium text-[#0A2540]">
          <Link href="/" className="hover:text-emerald-600 transition">Главная</Link>
          <Link href="/tours" className="hover:text-emerald-600 transition">Туры</Link>
          <Link href="/about" className="hover:text-emerald-600 transition">О нас</Link>
          <Link href="/partners" className="hover:text-emerald-600 transition">Партнёры</Link>
          <Link href="/cabinet" className="hover:text-emerald-600 transition font-semibold">Кабинет</Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Телефон */}
          <a href="tel:+996774880888" className="hidden sm:flex items-center gap-3 text-xl font-medium text-[#0A2540]">
            <Phone className="w-6 h-6" /> +996 774 880 888
          </a>

          {/* Мобильное меню */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl text-[#0A2540]">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-8 flex flex-col gap-6 text-xl font-medium text-[#0A2540]">
          <Link href="/" onClick={() => setMenuOpen(false)}>Главная</Link>
          <Link href="/tours" onClick={() => setMenuOpen(false)}>Туры</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>О нас</Link>
          <Link href="/partners" onClick={() => setMenuOpen(false)}>Партнёры</Link>
          <Link href="/cabinet" onClick={() => setMenuOpen(false)}>Личный кабинет</Link>
          <a href="tel:+996774880888" className="flex items-center gap-3 text-xl">📞 +996 774 880 888</a>
        </div>
      )}
    </nav>
  );
}