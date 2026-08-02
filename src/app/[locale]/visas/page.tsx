import { setRequestLocale } from 'next-intl/server';
import { MessageCircle, Phone, FileText, GraduationCap, Home, Languages, Shield, Clock } from 'lucide-react';

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
        {
          icon: FileText,
          title: 'Tourist & Business Visas',
          desc: 'We prepare the full package of documents for tourist and business visas. Clear instructions, checklist and support until the visa is in your passport.'
        },
        {
          icon: GraduationCap,
          title: 'Student Recruitment',
          desc: 'Official recruitment of foreign students (including Indian students to IMU). Marketing, document collection, FMGE/NExT preparation support and accompaniment.'
        },
        {
          icon: Home,
          title: 'Residence Permits & Registration',
          desc: 'Assistance with temporary and permanent residence permits, registration, and all related procedures in Kyrgyzstan.'
        },
        {
          icon: Languages,
          title: 'Translations & Documents',
          desc: 'Professional translation of documents (RU / EN / other languages), notarization support and preparation of the complete set for submission.'
        },
        {
          icon: Shield,
          title: 'Full Migration Support',
          desc: 'From the first consultation to the final result. We stay in touch, track deadlines and solve issues as they arise.'
        },
        {
          icon: Clock,
          title: 'Fast & Transparent Process',
          desc: 'Clear timelines, honest assessment of chances and no hidden fees. You always know the status of your case.'
        }
      ]
    : [
        {
          icon: FileText,
          title: 'Туристические и бизнес-визы',
          desc: 'Готовим полный пакет документов для туристических и бизнес-виз. Понятные инструкции, чек-лист и поддержка до момента, пока виза не окажется в паспорте.'
        },
        {
          icon: GraduationCap,
          title: 'Привлечение студентов',
          desc: 'Официальный набор иностранных студентов (в том числе из Индии в IMU). Маркетинг, сбор документов, поддержка по FMGE/NExT и полное сопровождение.'
        },
        {
          icon: Home,
          title: 'ВНЖ и регистрация',
          desc: 'Помощь с оформлением временного и постоянного вида на жительство, регистрацией и всеми сопутствующими процедурами в Кыргызстане.'
        },
        {
          icon: Languages,
          title: 'Переводы и документы',
          desc: 'Профессиональный перевод документов (RU / EN / другие языки), помощь с нотариальным заверением и подготовка полного комплекта для подачи.'
        },
        {
          icon: Shield,
          title: 'Полное миграционное сопровождение',
          desc: 'От первой консультации до финального результата. Мы на связи, отслеживаем сроки и решаем вопросы по мере их появления.'
        },
        {
          icon: Clock,
          title: 'Быстро и прозрачно',
          desc: 'Понятные сроки, честная оценка шансов и никаких скрытых платежей. Вы всегда знаете статус вашего дела.'
        }
      ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-5">
          {isEn ? 'Visas & Migration Support' : 'Визы и миграционная поддержка'}
        </h1>
        <p className="text-lg text-[#78716C] leading-relaxed">
          {isEn
            ? 'We have already helped process more than 4,000 visas. Clear process, personal support and real results — from tourist visas to student recruitment and residence permits.'
            : 'Мы уже помогли оформить более 4 000 виз. Понятный процесс, личное сопровождение и реальный результат — от туристических виз до привлечения студентов и ВНЖ.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-premium hover:border-[#B45309]/40 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-[#B45309]/10 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-[#B45309]" />
            </div>
            <h3 className="font-semibold text-lg text-[#1C1917] mb-2">{item.title}</h3>
            <p className="text-sm text-[#78716C] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1C1917] rounded-2xl p-8 md:p-10 text-white">
        <h2 className="text-2xl font-bold mb-3">
          {isEn ? 'Ready to start?' : 'Готовы начать?'}
        </h2>
        <p className="text-white/70 mb-6 max-w-xl">
          {isEn
            ? 'Write to us on WhatsApp or call — we will tell you exactly what documents are needed and how long the process will take in your case.'
            : 'Напишите нам в WhatsApp или позвоните — расскажем точно, какие документы нужны и сколько займёт процесс именно в вашем случае.'}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/996774880888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B45309] hover:bg-[#92400E] text-white font-medium px-6 py-3 rounded-xl transition"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+996774880888"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl transition border border-white/20"
          >
            <Phone className="w-5 h-5" />
            +996 774 880 888
          </a>
        </div>
      </div>
    </div>
  );
}
