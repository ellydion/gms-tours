import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getSupabaseAdmin, LeadRow } from '@/lib/supabase';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login');
  }

  let leads: LeadRow[] = [];
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(500);
    leads = (data || []) as LeadRow[];
  } catch {
    leads = [];
  }

  const byStatus = (s: string) => leads.filter((l) => l.status === s).length;
  const byType = (t: string) => leads.filter((l) => l.type === t).length;
  const bySource = (s: string) => leads.filter((l) => l.source === s).length;

  const cards = [
    { label: 'Всего заявок', value: leads.length },
    { label: 'Новые', value: byStatus('new') },
    { label: 'В работе', value: byStatus('in_progress') },
    { label: 'Бронь / оплачено', value: byStatus('booked') + byStatus('paid') },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Дашборд</h1>
        <p className="text-sm text-[#78716C]">Сводка по заявкам</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {cards.map((c) => (
          <div
            key={c.label}
            className="bg-white border border-[#E7E5E4] rounded-2xl p-5 shadow-sm"
          >
            <div className="text-2xl font-bold text-[#1C1917]">{c.value}</div>
            <div className="text-xs text-[#78716C] mt-1">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-[#E7E5E4] rounded-2xl p-5">
          <h2 className="font-semibold mb-3">По типу</h2>
          <ul className="space-y-2 text-sm">
            {[
              ['tour', 'Туры'],
              ['visa', 'Визы'],
              ['transfer', 'Трансферы'],
              ['event', 'Мероприятия'],
              ['other', 'Другое'],
            ].map(([k, label]) => (
              <li key={k} className="flex justify-between">
                <span className="text-[#78716C]">{label}</span>
                <span className="font-medium">{byType(k)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-[#E7E5E4] rounded-2xl p-5">
          <h2 className="font-semibold mb-3">По источнику</h2>
          <ul className="space-y-2 text-sm">
            {[
              ['site', 'Сайт'],
              ['telegram', 'Telegram'],
              ['whatsapp', 'WhatsApp'],
              ['manual', 'Вручную'],
            ].map(([k, label]) => (
              <li key={k} className="flex justify-between">
                <span className="text-[#78716C]">{label}</span>
                <span className="font-medium">{bySource(k)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href="/admin"
          className="px-4 py-2.5 rounded-xl bg-[#1C1917] text-white text-sm font-medium"
        >
          К заявкам
        </Link>
        <Link
          href="/admin/calendar"
          className="px-4 py-2.5 rounded-xl border border-[#E7E5E4] bg-white text-sm font-medium"
        >
          Календарь
        </Link>
      </div>
    </div>
  );
}