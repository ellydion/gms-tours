'use client';

import { useMemo, useState } from 'react';
import type { LeadRow, LeadStatus } from '@/lib/supabase';

const STATUS_LABEL: Record<LeadStatus, string> = {
  new: 'Новая',
  in_progress: 'В работе',
  booked: 'Бронь',
  paid: 'Оплачено',
  done: 'Закрыто',
  rejected: 'Отказ',
};

const TYPE_LABEL: Record<string, string> = {
  tour: 'Тур',
  visa: 'Виза',
  transfer: 'Трансфер',
  event: 'Мероприятие',
  other: 'Другое',
};

const SOURCE_LABEL: Record<string, string> = {
  site: 'Сайт',
  telegram: 'Telegram',
  whatsapp: 'WhatsApp',
  manual: 'Вручную',
};

const VISA_TYPE_LABEL: Record<string, string> = {
  TS: 'Туристическая (TS)',
  MT: 'Горный туризм (MT)',
  B: 'Деловая / бизнес (B)',
  S: 'Учебная (S)',
  RL: 'Родственная (RL)',
  other: 'Другое',
};

const STATUSES: LeadStatus[] = [
  'new',
  'in_progress',
  'booked',
  'paid',
  'done',
  'rejected',
];

const STATUS_COLOR: Record<LeadStatus, string> = {
  new: 'bg-amber-50 text-amber-800 border-amber-200',
  in_progress: 'bg-blue-50 text-blue-800 border-blue-200',
  booked: 'bg-violet-50 text-violet-800 border-violet-200',
  paid: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  done: 'bg-stone-100 text-stone-600 border-stone-200',
  rejected: 'bg-red-50 text-red-700 border-red-200',
};

function formatTravelDate(raw: unknown): string | null {
  if (raw == null || raw === '') return null;
  const s = String(raw).trim();
  const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) {
    const d = new Date(`${iso[1]}-${iso[2]}-${iso[3]}T12:00:00`);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
  }
  const compact = s.match(/^(\d{2})[./]?(\d{2})[./]?(\d{4})$/);
  if (compact) {
    const [, dd, mm, yyyy] = compact;
    const d = new Date(`${yyyy}-${mm}-${dd}T12:00:00`);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
  }
  const d8 = s.match(/^(\d{2})(\d{2})(\d{4})$/);
  if (d8) {
    const [, dd, mm, yyyy] = d8;
    const d = new Date(`${yyyy}-${mm}-${dd}T12:00:00`);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
  }
  return s;
}

type DetailItem = { label: string; value: string };

function getDetails(lead: LeadRow): DetailItem[] {
  const p = lead.payload || {};
  const items: DetailItem[] = [];

  if (lead.type === 'visa') {
    const vt = String(p.visaType || '');
    if (vt) items.push({ label: 'Тип визы', value: VISA_TYPE_LABEL[vt] || vt });
    if (p.citizenship) {
      items.push({ label: 'Гражданство', value: String(p.citizenship) });
    }
    if (p.birth_year) {
      items.push({ label: 'Год рождения', value: String(p.birth_year) });
    }
    const dates = formatTravelDate(p.travelDates);
    if (dates) items.push({ label: 'Даты поездки', value: dates });
    if (p.purpose) items.push({ label: 'Цель', value: String(p.purpose) });
    if (p.comment) items.push({ label: 'Комментарий', value: String(p.comment) });
  } else if (lead.type === 'tour') {
    if (p.tourTitle) items.push({ label: 'Тур', value: String(p.tourTitle) });
    const dates = formatTravelDate(p.date);
    if (dates) items.push({ label: 'Дата', value: dates });
    if (p.people) items.push({ label: 'Человек', value: String(p.people) });
    if (p.comment) items.push({ label: 'Комментарий', value: String(p.comment) });
  } else {
    const skip = new Set(['from']);
    for (const [k, v] of Object.entries(p)) {
      if (skip.has(k) || v == null || v === '') continue;
      const label =
        k === 'tourTitle'
          ? 'Тур'
          : k === 'travelDates'
            ? 'Даты'
            : k === 'visaType'
              ? 'Тип визы'
              : k === 'citizenship'
                ? 'Гражданство'
                : k === 'birth_year'
                  ? 'Год рождения'
                  : k === 'purpose'
                    ? 'Цель'
                    : k === 'comment'
                      ? 'Комментарий'
                      : k === 'people'
                        ? 'Человек'
                        : k === 'date'
                          ? 'Дата'
                          : k;
      const value =
        k === 'date' || k === 'travelDates'
          ? formatTravelDate(v) || String(v)
          : k === 'visaType'
            ? VISA_TYPE_LABEL[String(v)] || String(v)
            : String(v);
      items.push({ label, value });
    }
  }

  if (lead.interest && !items.some((i) => i.value === lead.interest)) {
    items.unshift({ label: 'Интерес', value: lead.interest });
  }

  return items;
}

export function AdminLeadsClient({ initialLeads }: { initialLeads: LeadRow[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [filter, setFilter] = useState<string>('all');
  const [busyId, setBusyId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === 'all') return leads;
    return leads.filter((l) => l.status === filter);
  }, [leads, filter]);

  async function setStatus(id: string, status: LeadStatus) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (res.ok && data.lead) {
        setLeads((prev) => prev.map((l) => (l.id === id ? data.lead : l)));
      } else {
        alert(data.error || 'Ошибка');
      }
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-sm border ${
            filter === 'all'
              ? 'bg-[#1C1917] text-white border-[#1C1917]'
              : 'bg-white border-[#E7E5E4]'
          }`}
        >
          Все ({leads.length})
        </button>
        {STATUSES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-sm border ${
              filter === s
                ? 'bg-[#1C1917] text-white border-[#1C1917]'
                : 'bg-white border-[#E7E5E4]'
            }`}
          >
            {STATUS_LABEL[s]}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.length === 0 && (
          <div className="bg-white border border-dashed border-[#E7E5E4] rounded-2xl p-10 text-center text-[#78716C] text-sm">
            Заявок пока нет.
          </div>
        )}

        {filtered.map((lead) => {
          const details = getDetails(lead);
          return (
            <article
              key={lead.id}
              className="bg-white border border-[#E7E5E4] rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="px-5 pt-5 pb-4 flex flex-wrap items-start justify-between gap-3 border-b border-[#F5F2EB]">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-[#1C1917] truncate">
                      {lead.name}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STATUS_COLOR[lead.status]}`}
                    >
                      {STATUS_LABEL[lead.status]}
                    </span>
                  </div>
                  <a
                    href={`tel:${lead.phone}`}
                    className="text-[#B45309] font-medium text-sm hover:underline"
                  >
                    {lead.phone}
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-[#57534E] border border-[#E7E5E4]">
                    {TYPE_LABEL[lead.type] || lead.type}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-[#57534E] border border-[#E7E5E4]">
                    {SOURCE_LABEL[lead.source] || lead.source}
                  </span>
                </div>
              </div>

              {details.length > 0 && (
                <div className="px-5 py-4 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {details.map((item) => (
                    <div key={item.label} className="min-w-0">
                      <div className="text-[11px] uppercase tracking-wide text-[#A8A29E] mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm text-[#1C1917] break-words">{item.value}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="px-5 py-3 bg-[#FAF7F2]/80 border-t border-[#E7E5E4] flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#A8A29E]">
                  {new Date(lead.created_at).toLocaleString('ru-RU', {
                    timeZone: 'Asia/Bishkek',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <div className="flex-1" />
                <select
                  className="text-sm border border-[#E7E5E4] rounded-lg px-2.5 py-1.5 bg-white"
                  value={lead.status}
                  disabled={busyId === lead.id}
                  onChange={(e) => setStatus(lead.id, e.target.value as LeadStatus)}
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {STATUS_LABEL[s]}
                    </option>
                  ))}
                </select>
                <a
                  href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1.5 rounded-lg bg-[#25D366]/15 text-[#128C7E] font-medium hover:bg-[#25D366]/25"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}