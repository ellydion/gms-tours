import { setRequestLocale } from 'next-intl/server';
import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

export default async function ContactsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === 'en';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6">
        {isEn ? 'Contacts' : 'Контакты'}
      </h1>
      <p className="text-lg text-[#78716C] mb-10">
        {isEn
          ? 'Write or call us — we reply quickly and help choose the best route.'
          : 'Напишите или позвоните — отвечаем быстро и помогаем выбрать лучший маршрут.'}
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <a
          href="https://wa.me/996774880888"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium hover:border-[#B45309] transition"
        >
          <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
          </div>
          <div>
            <div className="font-medium text-[#1C1917]">WhatsApp</div>
            <div className="text-sm text-[#78716C]">+996 774 880 888</div>
          </div>
        </a>

        <a
          href="tel:+996774880888"
          className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium hover:border-[#B45309] transition"
        >
          <div className="w-12 h-12 rounded-xl bg-[#B45309]/10 flex items-center justify-center">
            <Phone className="w-6 h-6 text-[#B45309]" />
          </div>
          <div>
            <div className="font-medium text-[#1C1917]">{isEn ? 'Phone' : 'Телефон'}</div>
            <div className="text-sm text-[#78716C]">+996 774 880 888</div>
          </div>
        </a>

        <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium">
          <div className="w-12 h-12 rounded-xl bg-[#0F766E]/10 flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#0F766E]" />
          </div>
          <div>
            <div className="font-medium text-[#1C1917]">Email</div>
            <div className="text-sm text-[#78716C]">info@gms.tours</div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium">
          <div className="w-12 h-12 rounded-xl bg-[#1C1917]/5 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-[#1C1917]" />
          </div>
          <div>
            <div className="font-medium text-[#1C1917]">{isEn ? 'Location' : 'Локация'}</div>
            <div className="text-sm text-[#78716C]">Bishkek, Kyrgyzstan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
