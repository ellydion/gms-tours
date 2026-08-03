import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getSupabaseAdmin, LeadRow } from '@/lib/supabase';
import { AdminLeadsClient } from '@/components/AdminLeadsClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login');
  }

  let leads: LeadRow[] = [];
  let error: string | null = null;

  try {
    const supabase = getSupabaseAdmin();
    const { data, error: qErr } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(150);
    if (qErr) error = qErr.message;
    else leads = (data || []) as LeadRow[];
  } catch (e) {
    error = e instanceof Error ? e.message : 'DB error';
  }

  const newCount = leads.filter((l) => l.status === 'new').length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Заявки</h1>
        <p className="text-sm text-[#78716C]">
          Всего {leads.length}
          {newCount > 0 ? ` · новых ${newCount}` : ''}
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      <AdminLeadsClient initialLeads={leads} />
    </div>
  );
}