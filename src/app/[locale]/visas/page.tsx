import { setRequestLocale } from 'next-intl/server';
import { MessageCircle, Phone, FileText, GraduationCap, Home, Languages, Shield, Clock } from 'lucide-react';
import { VisaLeadForm } from '@/components/VisaLeadForm';
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_2_DISPLAY } from '@/lib/contacts';

export default async function VisasPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === 'en';

  const services = isEn
    ? [
        { icon: FileText, title: 'Tourist & Business Visas', desc: 'Full document package for TS, B and other types. Checklists based on DCS KR requirements.' },
        { icon: GraduationCap, title: 'Student Recruitment', desc: 'Official recruitment (incl. IMU). Documents, FMGE/NExT support, full accompaniment.' },
        { icon: Home, title: 'Residence Permits', desc: 'Temporary and permanent residence, registration and related procedures in Kyrgyzstan.' },
        { icon: Languages, title: 'Translations & Documents', desc: 'Professional translations, notarization support, complete submission sets.' },
        { icon: Shield, title: 'Full Migration Support', desc: 'From first consultation to final result. Deadlines tracked, issues solved as they appear.' },
        { icon: Clock, title: 'Fast & Transparent', desc: 'Clear timelines, honest assessment, no hidden fees. You always know the status.' },
      ]
    : [
        { icon: FileText, title: 'Туристические и бизнес-визы', desc: 'Полный пакет по типам TS, B и др. Чек-листы с учётом требований ДКС КР.' },
        { icon: GraduationCap, title: 'Привлечение студентов', desc: 'Официальный набор (в т.ч. IMU). Документы, FMGE/NExT, полное сопровождение.' },
        { icon: Home, title: 'ВНЖ и регистрация', desc: 'Временный и постоянный вид на жительство, регистрация и сопутствующие процедуры.' },
        { icon: Languages, title: 'Переводы и документы', desc: 'Профессиональный перевод, нотариат, полный комплект для подачи.' },
        { icon: Shield, title: 'Полное сопровождение', desc: 'От консультации до результата. Сроки под контролем, вопросы решаем по ходу.' },
        { icon: Clock, title: 'Быстро и прозрачно', desc: 'Понятные сроки, честная оценка, без скрытых платежей.' },
      ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-5">
          {isEn ? 'Visas & Migration Support' : 'Визы и миграционная поддержка'}
        </h1>
        <p className="text-lg text-[#78716C] leading-relaxed">
          {isEn
            ? 'More than 4,000 visas processed. We work with tourist (TS), business (B), mountain tourism (MT), study and other categories according to DCS KR rules.'
            : 'Более 4 000 оформленных виз. Работаем с туристическими (TS), деловыми (B), горный туризм (MT), учебными и другими категориями по правилам ДКС КР.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {services.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium">
            <div className="w-12 h-12 rounded-xl bg-[#B45309]/10 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-[#B45309]" />
            </div>
            <h3 className="font-semibold text-lg text-[#1C1917] mb-2">{item.title}</h3>
            <p className="text-sm text-[#78716C] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <div id="visa-form" className="mb-14">
        <VisaLeadForm locale={locale} />
      </div>

      <div className="bg-[#1C1917] rounded-2xl p-8 text-white">
        <h2 className="text-xl font-bold mb-3">{isEn ? 'Or contact us directly' : 'Или свяжитесь напрямую'}</h2>
        <div className="flex flex-wrap gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#B45309] hover:bg-[#92400E] text-white font-medium px-5 py-3 rounded-xl transition">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a href={`tel:${PHONE_DISPLAY.replace(/ /g, '')}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 font-medium px-5 py-3 rounded-xl border border-white/20">
            <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
          </a>
          <a href={`tel:${PHONE_2_DISPLAY.replace(/ /g, '')}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 font-medium px-5 py-3 rounded-xl border border-white/20">
            <Phone className="w-5 h-5" /> {PHONE_2_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}
