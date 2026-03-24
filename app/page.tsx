'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://picsum.photos/id/1015/2000/1200",
  "https://picsum.photos/id/201/2000/1200",
  "https://picsum.photos/id/251/2000/1200",
  "https://picsum.photos/id/160/2000/1200",
  "https://picsum.photos/id/102/2000/1200",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <header className="relative h-screen flex items-center overflow-hidden">
        {galleryImages.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentImage ? 'opacity-100' : 'opacity-0'}`}
            alt="Кыргызстан"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">Путешествия и миграция<br />без границ</h1>
          <p className="text-xl md:text-3xl text-emerald-100 mb-12">Авторские туры • Визы • Мероприятия</p>
          <Link href="/tours" className="inline-flex items-center gap-4 bg-white text-[#0A2540] px-10 md:px-16 py-5 md:py-6 rounded-3xl text-xl md:text-2xl font-bold hover:scale-105 transition shadow-2xl">
            Смотреть туры <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </header>
    </>
  );
}