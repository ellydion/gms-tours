'use client';

import { useState } from 'react';
import { WHATSAPP_URL } from '@/lib/contacts';

const VISA_TYPES = [
  {
    value: 'TS',
    labelRu: 'Туристическая (TS)',
    labelEn: 'Tourist (TS)',
    hintRu: 'Нужны: паспорт, обращение турфирмы или личное заявление',
    hintEn: 'Need: passport, tour operator letter or personal application',
  },
  {
    value: 'MT',
    labelRu: 'Горный туризм (MT)',
    labelEn: 'Mountain tourism (MT)',
    hintRu: 'Для треккинга, альпинизма и др. до 90 дней',
    hintEn: 'For trekking, climbing etc. up to 90 days',
  },
  {
    value: 'B',
    labelRu: 'Деловая / бизнес (B)',
    labelEn: 'Business (B)',
    hintRu:
      'Нужны: приглашение юрлица/госоргана КР, учредительные документы приглашающей стороны, справка об отсутствии налоговой задолженности',
    hintEn:
      'Need: invitation from KR company/authority, founder docs, tax clearance of inviting party',
  },
  {
    value: 'S',
    labelRu: 'Учебная (S)',
    labelEn: 'Study (S)',
    hintRu: 'Приглашение учебного заведения, документы об образовании',
    hintEn: 'University invitation, education documents',
  },
  {
    value: 'RL',
    labelRu: 'Родственная (RL)',
    labelEn: 'Relatives (RL)',
    hintRu: 'Ходатайство гражданина КР + копия его паспорта',
    hintEn: 'Petition from KR citizen + copy of their passport',
  },
  {
    value: 'other',
    labelRu: 'Другое / консультация',
    labelEn: 'Other / consultation',
    hintRu: 'Опишите цель ниже',
    hintEn: 'Describe the purpose below',
  },
];

interface Props {
  locale: string;
}

export function VisaLeadForm({ locale }: Props) {
  const isEn = locale === 'en';
  const [form, setForm] = useState({
    name: '',
    phone: '',
    citizenship: '',
    birthYear: '',
    visaType: 'TS',
    travelDates: '',
    purpose: '',
    comment: '',
  });

  const selected = VISA_TYPES.find((v) => v.value === form.visaType);

  function update(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      isEn ? '🆕 Visa application from gms.tours' : '🆕 Заявка на визу с сайта gms.tours',
      '',
      `${isEn ? 'Name' : 'Имя'}: ${form.name}`,
      `${isEn ? 'Phone' : 'Телефон'}: ${form.phone}`,
      `${isEn ? 'Citizenship' : 'Гражданство'}: ${form.citizenship}`,
      `${isEn ? 'Year of birth' : 'Год рождения'}: ${form.birthYear}`,
      `${isEn ? 'Visa type' : 'Тип визы'}: ${
        selected ? (isEn ? selected.labelEn : selected.labelRu) : form.visaType
      }`,
      `${isEn ? 'Travel dates' : 'Даты поездки'}: ${form.travelDates || '—'}`,
      `${isEn ? 'Purpose' : 'Цель'}: ${form.purpose || '—'}`,
      form.comment ? `${isEn ? 'Comment' : 'Комментарий'}: ${form.comment}` : '',
    ].filter(Boolean);

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  }

  const label = 'block text-sm font-medium text-[#1C1917] mb-1.5';
  const input =
    'w-full rounded-xl border border-[#E7E5E4] bg-white px-4 py-3 text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]';

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-2xl border border-[#E7E5E4] shadow-premium p-6 sm:p-8 space-y-5"
    >
      <div>
        <h2 className="text-xl font-bold text-[#1C1917] mb-1">
          {isEn ? 'Visa application' : 'Заявка на визу'}
        </h2>
        <p className="text-sm text-[#78716C]">
          {isEn
            ? 'Fill in the form — WhatsApp will open with your details.'
            : 'Заполните форму — откроется WhatsApp с вашими данными.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>{isEn ? 'Full name *' : 'ФИО *'}</label>
          <input
            className={input}
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
          />
        </div>
        <div>
          <label className={label}>{isEn ? 'Phone / WhatsApp *' : 'Телефон / WhatsApp *'}</label>
          <input
            className={input}
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+996..."
          />
        </div>
        <div>
          <label className={label}>{isEn ? 'Citizenship *' : 'Гражданство *'}</label>
          <input
            className={input}
            required
            value={form.citizenship}
            onChange={(e) => update('citizenship', e.target.value)}
            placeholder={isEn ? 'e.g. India, China' : 'напр. Индия, Китай'}
          />
        </div>
        <div>
          <label className={label}>{isEn ? 'Year of birth *' : 'Год рождения *'}</label>
          <input
            className={input}
            required
            type="number"
            min="1930"
            max="2015"
            value={form.birthYear}
            onChange={(e) => update('birthYear', e.target.value)}
            placeholder="1995"
          />
        </div>
      </div>

      <div>
        <label className={label}>{isEn ? 'Visa type *' : 'Тип визы *'}</label>
        <select
          className={input}
          value={form.visaType}
          onChange={(e) => update('visaType', e.target.value)}
        >
          {VISA_TYPES.map((v) => (
            <option key={v.value} value={v.value}>
              {isEn ? v.labelEn : v.labelRu}
            </option>
          ))}
        </select>
        {selected && (
          <p className="mt-2 text-xs text-[#78716C] leading-relaxed bg-[#FAF7F2] rounded-lg px-3 py-2">
            {isEn ? selected.hintEn : selected.hintRu}
          </p>
        )}
      </div>

      <div>
        <label className={label}>{isEn ? 'Intended travel dates' : 'Планируемые даты поездки'}</label>
        <input
          className={input}
          value={form.travelDates}
          onChange={(e) => update('travelDates', e.target.value)}
          placeholder={isEn ? 'e.g. 10–20 Sep 2026' : 'напр. 10–20 сентября 2026'}
        />
      </div>

      <div>
        <label className={label}>{isEn ? 'Purpose of visit' : 'Цель визита'}</label>
        <textarea
          className={input + ' min-h-[80px]'}
          value={form.purpose}
          onChange={(e) => update('purpose', e.target.value)}
          placeholder={isEn ? 'Tourism, meetings, study...' : 'Туризм, переговоры, учёба...'}
        />
      </div>

      <div>
        <label className={label}>{isEn ? 'Comment' : 'Комментарий'}</label>
        <textarea
          className={input + ' min-h-[60px]'}
          value={form.comment}
          onChange={(e) => update('comment', e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-[#B45309] hover:bg-[#92400E] text-white font-medium px-8 py-3.5 rounded-xl transition"
      >
        {isEn ? 'Send via WhatsApp' : 'Отправить в WhatsApp'}
      </button>
    </form>
  );
}