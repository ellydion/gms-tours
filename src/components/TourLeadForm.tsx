'use client';

import { useState } from 'react';
import { WHATSAPP_URL } from '@/lib/contacts';

interface Props {
  locale: string;
  tourTitle?: string;
}

export function TourLeadForm({ locale, tourTitle }: Props) {
  const isEn = locale === 'en';
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    people: '2',
    comment: '',
  });

  function update(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      isEn ? '🆕 Tour booking request from gms.tours' : '🆕 Заявка на тур с сайта gms.tours',
      '',
      tourTitle ? `${isEn ? 'Tour' : 'Тур'}: ${tourTitle}` : '',
      `${isEn ? 'Name' : 'Имя'}: ${form.name}`,
      `${isEn ? 'Phone' : 'Телефон'}: ${form.phone}`,
      `${isEn ? 'Preferred date' : 'Желаемая дата'}: ${form.date || '—'}`,
      `${isEn ? 'People' : 'Кол-во человек'}: ${form.people}`,
      form.comment ? `${isEn ? 'Comment' : 'Комментарий'}: ${form.comment}` : '',
    ].filter(Boolean);

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  }

  const label = 'block text-sm font-medium text-[#1C1917] mb-1.5';
  const input =
    'w-full rounded-xl border border-[#E7E5E4] bg-white px-4 py-3 text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]';

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className={label}>{isEn ? 'Name *' : 'Имя *'}</label>
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
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>{isEn ? 'Date' : 'Дата'}</label>
          <input
            className={input}
            type="date"
            value={form.date}
            onChange={(e) => update('date', e.target.value)}
          />
        </div>
        <div>
          <label className={label}>{isEn ? 'People' : 'Человек'}</label>
          <input
            className={input}
            type="number"
            min="1"
            max="50"
            value={form.people}
            onChange={(e) => update('people', e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className={label}>{isEn ? 'Comment' : 'Комментарий'}</label>
        <textarea
          className={input + ' min-h-[70px]'}
          value={form.comment}
          onChange={(e) => update('comment', e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#B45309] hover:bg-[#92400E] text-white font-medium py-3.5 rounded-xl transition"
      >
        {isEn ? 'Request booking' : 'Оставить заявку на бронь'}
      </button>
      <p className="text-xs text-[#78716C] text-center">
        {isEn
          ? 'Opens WhatsApp — we will confirm availability'
          : 'Откроется WhatsApp — подтвердим наличие мест'}
      </p>
    </form>
  );
}