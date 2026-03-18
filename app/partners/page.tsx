import Navbar from '../components/Navbar';

const partners = [
  { name: "Kyrgyz Airways", logo: "https://picsum.photos/id/1015/300/200" },
  { name: "Issyk-Kul Resort", logo: "https://picsum.photos/id/201/300/200" },
  { name: "Visa Center KG", logo: "https://picsum.photos/id/251/300/200" },
  { name: "Nomad Travel", logo: "https://picsum.photos/id/160/300/200" },
];

export default function Partners() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-6xl font-bold text-center mb-16 text-[#0A2540]">Наши партнёры</h1>
        <div className="grid md:grid-cols-4 gap-8">
          {partners.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition group">
              <img src={p.logo} className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition" />
              <div className="p-8 text-center">
                <div className="font-semibold text-2xl text-[#0A2540]">{p.name}</div>
                <div className="text-emerald-600 text-sm mt-2">Официальный партнёр GMS</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}