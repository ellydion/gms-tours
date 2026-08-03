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
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function update(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          source: 'site',
          type: 'tour',
          interest: tourTitle || 'Тур',
          payload: {
            tourTitle,
            date: form.date,
            people: form.people,
            comment: form.comment,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || (isEn ? 'Failed to save' : 'Не удалось сохранить'));
        return;
      }

      setStatus('ok');
      setForm({ name: '', phone: '', date: '', people: '2', comment: '' });

      // optional WhatsApp notify
      const lines = [
        isEn ? '🆕 Tour booking from gms.tours' : '🆕 Заявка на тур с сайта gms.tours',
        tourTitle ? `${isEn ? 'Tour' : 'Тур'}: ${tourTitle}` : '',
        `${isEn ? 'Name' : 'Имя'}: ${form.name}`,
        `${isEn ? 'Phone' : 'Телефон'}: ${form.phone}`,
      ].filter(Boolean);
      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
    } catch {
      setStatus('error');
      setErrorMsg(isEn ? 'Network error' : 'Ошибка сети');
    }
  }

  const label = 'block text-sm font-medium text-[#1C1917] mb-1.5';
  const input =
    'w-full rounded-xl border border-[#E7E5E4] bg-white px-4 py-3 text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]';

  if (status === 'ok') {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm p-4 text-center">
        {isEn
          ? 'Request saved! We will contact you soon.'
          : 'Заявка сохранена! Мы свяжемся с вами.'}
      </div>
    );
  }

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

      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#B45309] hover:bg-[#92400E] text-white font-medium py-3.5 rounded-xl transition disabled:opacity-60"
      >
        {status === 'loading'
          ? isEn
            ? 'Sending…'
            : 'Отправка…'
          : isEn
            ? 'Request booking'
            : 'Оставить заявку на бронь'}
      </button>
      <p className="text-xs text-[#78716C] text-center">
        {isEn
          ? 'Saved to our system — manager will contact you'
          : 'Сохраняется в систему — менеджер свяжется с вами'}
      </p>
    </form>
  );
}
