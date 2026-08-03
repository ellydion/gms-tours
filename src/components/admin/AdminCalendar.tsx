'use client';

import { useMemo, useState } from 'react';
import type { LeadRow } from '@/lib/supabase';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const TYPE_LABEL: Record<string, string> = {
  tour: 'Тур',
  visa: 'Виза',
  transfer: 'Трансфер',
  event: 'Ивент',
  other: 'Другое',
};

function extractDate(lead: LeadRow): string | null {
  const p = lead.payload || {};
  const raw =
    (p.date as string) ||
    (p.travelDates as string) ||
    (p.preferredDate as string) ||
    '';
  if (!raw) return null;
  const iso = raw.match(/\d{4}-\d{2}-\d{2}/);
  if (iso) return iso[0];
  const d = new Date(raw);
  if (!isNaN(d.getTime())) {
    return d.toISOString().slice(0, 10);
  }
  return null;
}

function monthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startPad = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function AdminCalendar({ leads }: { leads: LeadRow[] }) {
  const now = new Date();
  const [cursor, setCursor] = useState({ y: now.getFullYear(), m: now.getMonth() });
  const [selected, setSelected] = useState<string | null>(null);

  const byDate = useMemo(() => {
    const map = new Map<string, LeadRow[]>();
    for (const lead of leads) {
      const d = extractDate(lead);
      if (!d) continue;
      if (!map.has(d)) map.set(d, []);
      map.get(d)!.push(lead);
    }
    return map;
  }, [leads]);

  const cells = monthMatrix(cursor.y, cursor.m);
  const title = new Date(cursor.y, cursor.m, 1).toLocaleDateString('ru-RU', {
    month: 'long',
    year: 'numeric',
  });

  function shift(dir: number) {
    const d = new Date(cursor.y, cursor.m + dir, 1);
    setCursor({ y: d.getFullYear(), m: d.getMonth() });
    setSelected(null);
  }

  const selectedLeads = selected ? byDate.get(selected) || [] : [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => shift(-1)}
            className="w-9 h-9 rounded-xl border border-[#E7E5E4] bg-white flex items-center justify-center hover:border-[#B45309]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              setCursor({ y: now.getFullYear(), m: now.getMonth() });
              setSelected(null);
            }}
            className="px-3 h-9 rounded-xl border border-[#E7E5E4] bg-white text-sm hover:border-[#B45309]"
          >
            Сегодня
          </button>
          <button
            type="button"
            onClick={() => shift(1)}
            className="w-9 h-9 rounded-xl border border-[#E7E5E4] bg-white flex items-center justify-center hover:border-[#B45309]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-7 border-b border-[#E7E5E4] text-xs font-medium text-[#78716C]">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => (
            <div key={d} className="px-2 py-2.5 text-center">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 auto-rows-fr">
          {cells.map((day, i) => {
            if (day === null) {
              return (
                <div
                  key={i}
                  className="min-h-[88px] bg-[#FAF7F2]/50 border-b border-r border-[#E7E5E4]/60"
                />
              );
            }
            const key = `${cursor.y}-${String(cursor.m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const items = byDate.get(key) || [];
            const isToday =
              day === now.getDate() &&
              cursor.m === now.getMonth() &&
              cursor.y === now.getFullYear();
            const isSel = selected === key;

            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(key)}
                className={cn(
                  'min-h-[88px] p-1.5 text-left border-b border-r border-[#E7E5E4]/60 hover:bg-[#FAF7F2] transition align-top',
                  isSel && 'bg-[#B45309]/5 ring-2 ring-inset ring-[#B45309]/40'
                )}
              >
                <div
                  className={cn(
                    'text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full mb-1',
                    isToday ? 'bg-[#B45309] text-white' : 'text-[#1C1917]'
                  )}
                >
                  {day}
                </div>
                <div className="space-y-0.5">
                  {items.slice(0, 3).map((l) => (
                    <div
                      key={l.id}
                      className="text-[10px] leading-tight px-1 py-0.5 rounded bg-[#0F766E]/10 text-[#0F766E] truncate"
                      title={l.name}
                    >
                      {TYPE_LABEL[l.type] || l.type}: {l.name}
                    </div>
                  ))}
                  {items.length > 3 && (
                    <div className="text-[10px] text-[#78716C]">+{items.length - 3}</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white border border-[#E7E5E4] rounded-2xl p-5">
        <h3 className="font-semibold mb-3">
          {selected ? `На ${selected}: ${selectedLeads.length}` : 'Выберите день'}
        </h3>
        {!selected && (
          <p className="text-sm text-[#78716C]">
            В календаре — заявки, у которых в форме указана дата (тур) или даты поездки (виза).
          </p>
        )}
        {selected && selectedLeads.length === 0 && (
          <p className="text-sm text-[#78716C]">На этот день заявок с датой нет.</p>
        )}
        <div className="space-y-2">
          {selectedLeads.map((l) => (
            <div key={l.id} className="border border-[#E7E5E4] rounded-xl p-3 text-sm">
              <div className="font-medium">{l.name}</div>
              <div className="text-[#78716C]">
                {TYPE_LABEL[l.type]} · {l.phone}
                {l.interest ? ` · ${l.interest}` : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}