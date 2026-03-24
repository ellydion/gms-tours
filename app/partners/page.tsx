'use client';
import Navbar from '../components/Navbar';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const partners = [
  { name: "Kyrgyz Airways", desc: "Официальный авиапартнёр", img: "https://picsum.photos/id/1015/600/300" },
  { name: "Issyk-Kul Resort", desc: "Лучшие отели на Иссык-Куле", img: "https://picsum.photos/id/201/600/300" },
  { name: "Visa Center KG", desc: "Визовая поддержка", img: "https://picsum.photos/id/251/600/300" },
  { name: "Nomad Travel", desc: "Транспорт и логистика", img: "https://picsum.photos/id/160/600/300" },
  { name: "Kyrgyz Tourism", desc: "Государственный партнёр", img: "https://picsum.photos/id/102/600/300" },
  { name: "Mountain Guide Association", desc: "Профессиональные гиды", img: "https://picsum.photos/id/133/600/300" },
];

export default function Partners() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Наши партнёры
          </h1>
          <p className="text-2xl text-emerald-200 max-w-xl mx-auto">
            Мы работаем только с лучшими компаниями Кыргызстана
          </p>
        </div>
      </div>

      {/* Партнёры */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={partner.img} 
                  alt={partner.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-2">{partner.name}</h3>
                <p className="text-emerald-600 font-medium">{partner.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="bg-stone-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#0A2540]">
            Хотите стать нашим партнёром?
          </h2>
          <p className="text-xl text-stone-600 mb-10 max-w-xl mx-auto">
            Мы всегда открыты к новым сотрудничеством в сфере туризма, транспорта и услуг
          </p>
          <Link 
            href="/cabinet" 
            className="inline-flex items-center gap-4 bg-[#0A2540] text-white px-12 py-6 rounded-3xl text-2xl font-bold hover:scale-105 transition shadow-2xl"
          >
            Связаться с нами <ArrowRight className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </>
  );
}