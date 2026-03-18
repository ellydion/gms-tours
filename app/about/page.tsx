import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-[#0A2540] text-white py-24">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-8">Мы — GMS</h1>
          <p className="text-2xl text-emerald-200 max-w-3xl mx-auto">Делаем Кыргызстан ближе к миру, а мир — ближе к вам</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 text-[#0A2540]">Наша история</h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-8">
              С 2025 года ОсОО «Global Migration Solutions» помогает людям открывать Кыргызстан и строить новую жизнь. 
              Мы начинали с небольшого тура в ущелье Кегети, а сегодня организуем путешествия по всей стране, помогаем с визами и проводим яркие мероприятия.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Наша команда — это местные эксперты, которые знают каждую тропу, каждое озеро и каждую традицию. 
              Мы не просто возим туристов — мы создаём незабываемые эмоции.
            </p>
          </div>
          <div className="bg-stone-100 rounded-3xl overflow-hidden shadow-xl">
            <img src="https://picsum.photos/id/1015/800/600" className="w-full h-full object-cover" alt="Команда GMS" />
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-24">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#0A2540]">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Безопасность", desc: "Каждый тур проходит строгий контроль" },
              { title: "Индивидуальность", desc: "Нет шаблонных маршрутов" },
              { title: "Экология", desc: "Мы бережём природу Кыргызстана" }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow hover:shadow-2xl transition text-center">
                <h3 className="text-3xl font-bold mb-6 text-[#0A2540]">{v.title}</h3>
                <p className="text-stone-600 text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}