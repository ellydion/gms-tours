import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getSupabaseAdmin, LeadRow } from '@/lib/supabase';
import { AdminCalendar } from '@/components/admin/AdminCalendar';

export const dynamic = 'force-dynamic';

export default async function AdminCalendarPage() {
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
      .limit(300);
    leads = (data || []) as LeadRow[];
  } catch {
    leads = [];
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Календарь</h1>
        <p className="text-sm text-[#78716C]">Поездки и визы по датам из заявок</p>
      </div>
      <AdminCalendar leads={leads} />
    </div>
  );
}