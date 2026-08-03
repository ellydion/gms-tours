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
    dateFrom: '',
    dateTo: '',
    purpose: '',
    comment: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const selected = VISA_TYPES.find((v) => v.value === form.visaType);

  function update(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function travelDatesValue() {
    if (form.dateFrom && form.dateTo) return `${form.dateFrom} — ${form.dateTo}`;
    if (form.dateFrom) return form.dateFrom;
    if (form.dateTo) return form.dateTo;
    return '';
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (form.dateFrom && form.dateTo && form.dateTo < form.dateFrom) {
      setStatus('error');
      setErrorMsg(
        isEn ? 'End date must be after start date' : 'Дата окончания должна быть позже начала'
      );
      return;
    }

    const travelDates = travelDatesValue();

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          source: 'site',
          type: 'visa',
          interest: selected ? (isEn ? selected.labelEn : selected.labelRu) : form.visaType,
          citizenship: form.citizenship.trim(),
          birth_year: form.birthYear ? Number(form.birthYear) : undefined,
          payload: {
            visaType: form.visaType,
            dateFrom: form.dateFrom || null,
            dateTo: form.dateTo || null,
            travelDates,
            purpose: form.purpose,
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

      const lines = [
        isEn ? '🆕 Visa application from gms.tours' : '🆕 Заявка на визу с сайта gms.tours',
        `${isEn ? 'Name' : 'Имя'}: ${form.name}`,
        `${isEn ? 'Phone' : 'Телефон'}: ${form.phone}`,
        `${isEn ? 'Citizenship' : 'Гражданство'}: ${form.citizenship}`,
        travelDates ? `${isEn ? 'Dates' : 'Даты'}: ${travelDates}` : '',
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
      <div className="rounded-2xl bg-green-50 border border-green-200 text-green-800 p-6 text-center">
        {isEn
          ? 'Application saved! Our manager will contact you.'
          : 'Заявка сохранена! Менеджер свяжется с вами.'}
      </div>
    );
  }

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
            ? 'Saved to our CRM — manager will contact you.'
            : 'Сохраняется в CRM — менеджер свяжется с вами.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>{isEn ? 'Full name *' : 'ФИО *'}</label>
          <input className={input} required value={form.name} onChange={(e) => update('name', e.target.value)} />
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
          />
        </div>
      </div>

      <div>
        <label className={label}>{isEn ? 'Visa type *' : 'Тип визы *'}</label>
        <select className={input} value={form.visaType} onChange={(e) => update('visaType', e.target.value)}>
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
        <label className={label}>{isEn ? 'Travel dates' : 'Даты поездки'}</label>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <span className="text-xs text-[#78716C] mb-1 block">{isEn ? 'From' : 'С'}</span>
            <input
              className={input}
              type="date"
              value={form.dateFrom}
              min={new Date().toISOString().slice(0, 10)}
              onChange={(e) => update('dateFrom', e.target.value)}
            />
          </div>
          <div>
            <span className="text-xs text-[#78716C] mb-1 block">{isEn ? 'To' : 'По'}</span>
            <input
              className={input}
              type="date"
              value={form.dateTo}
              min={form.dateFrom || new Date().toISOString().slice(0, 10)}
              onChange={(e) => update('dateTo', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <label className={label}>{isEn ? 'Purpose' : 'Цель визита'}</label>
        <textarea
          className={input + ' min-h-[80px]'}
          value={form.purpose}
          onChange={(e) => update('purpose', e.target.value)}
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

      {status === 'error' && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto bg-[#B45309] hover:bg-[#92400E] text-white font-medium px-8 py-3.5 rounded-xl transition disabled:opacity-60"
      >
        {status === 'loading'
          ? isEn
            ? 'Sending…'
            : 'Отправка…'
          : isEn
            ? 'Submit application'
            : 'Отправить заявку'}
      </button>
    </form>
  );
}