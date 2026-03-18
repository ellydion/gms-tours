import Navbar from '../components/Navbar';

export default function Partners() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-6xl font-bold text-center mb-16 text-[#0A2540]">Наши партнёры</h1>
        <div className="grid md:grid-cols-4 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow text-center text-stone-500 font-medium">
              Партнёр {i} • Официальный партнёр GMS
            </div>
          ))}
        </div>
      </div>
    </>
  );
}