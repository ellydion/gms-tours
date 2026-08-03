import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin, LeadStatus } from '@/lib/supabase';
import { verifyAdminSessionToken } from '@/lib/admin-auth';

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const cookie = req.cookies.get('gms_admin_session')?.value;
  if (!verifyAdminSessionToken(cookie)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await ctx.params;
  const body = await req.json();
  const patch: { status?: LeadStatus; manager_note?: string } = {};
  if (body.status) patch.status = body.status;
  if (typeof body.manager_note === 'string') patch.manager_note = body.manager_note;

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('leads')
    .update(patch)
    .eq('id', id)
    .select('*')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ lead: data });
}
