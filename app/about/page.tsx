import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-8 py-24">
        <h1 className="text-6xl font-bold text-center mb-12 text-[#0A2540]">О компании</h1>
        <div className="prose text-lg text-stone-700 leading-relaxed">
          <p>ОсОО «Global Migration Solutions» — это команда профессионалов, которая помогает вам открывать Кыргызстан и мир.</p>
          <p>С 2025 года мы организуем авторские туры, помогаем с визами и миграцией, а также проводим корпоративные и частные мероприятия.</p>
          <p>Наша миссия — сделать каждое путешествие безопасным, комфортным и незабываемым.</p>
        </div>
      </div>
    </>
  );
}