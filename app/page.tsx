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
  "https://picsum.photos/id/29/2000/1200",
  "https://picsum.photos/id/133/2000/1200",
  "https://picsum.photos/id/1016/2000/1200",
  "https://picsum.photos/id/1018/2000/1200",
  "https://picsum.photos/id/1043/2000/1200",
  "https://picsum.photos/id/106/2000/1200",
  "https://picsum.photos/id/145/2000/1200",
  "https://picsum.photos/id/180/2000/1200",
  "https://picsum.photos/id/190/2000/1200",
  "https://picsum.photos/id/220/2000/1200"
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
        {galleryImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            alt="Горы Кыргызстана"
          />
        ))}
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