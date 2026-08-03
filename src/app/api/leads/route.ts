import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin, LeadSource, LeadType } from '@/lib/supabase';

export const runtime = 'nodejs';

type Body = {
  name?: string;
  phone?: string;
  interest?: string;
  source?: LeadSource;
  type?: LeadType;
  payload?: Record<string, unknown>;
  telegram_username?: string;
  citizenship?: string;
  birth_year?: number;
};

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

/**
 * Auth:
 * - Browser forms (no header) → always allowed
 * - Bot/external with x-leads-secret → must match LEADS_API_SECRET if secret is set
 */
function checkAuth(req: NextRequest): boolean {
  const secret = process.env.LEADS_API_SECRET;
  const header = req.headers.get('x-leads-secret');
  if (!header) return true; // site form
  if (!secret) return true;
  return header === secret;
}

export async function POST(req: NextRequest) {
  try {
    if (!checkAuth(req)) return unauthorized();

    const body = (await req.json()) as Body;
    const name = (body.name || '').trim();
    const phone = (body.phone || '').trim();

    if (!name || !phone) {
      return NextResponse.json({ error: 'name and phone required' }, { status: 400 });
    }

    const source: LeadSource = body.source || 'site';
    const type: LeadType = body.type || 'other';
    const interest = (body.interest || '').trim() || null;
    const payload: Record<string, unknown> = { ...(body.payload || {}) };

    if (body.citizenship) payload.citizenship = body.citizenship;
    if (body.birth_year) payload.birth_year = body.birth_year;
    if (body.telegram_username) payload.telegram_username = body.telegram_username;

    const supabase = getSupabaseAdmin();

    let clientId: string | null = null;
    const { data: existing } = await supabase
      .from('clients')
      .select('id')
      .eq('phone', phone)
      .limit(1)
      .maybeSingle();

    if (existing?.id) {
      clientId = existing.id;
      await supabase
        .from('clients')
        .update({
          name,
          citizenship: body.citizenship || undefined,
          birth_year: body.birth_year || undefined,
          telegram_username: body.telegram_username || undefined,
        })
        .eq('id', clientId);
    } else {
      const { data: created, error: cErr } = await supabase
        .from('clients')
        .insert({
          name,
          phone,
          citizenship: body.citizenship || null,
          birth_year: body.birth_year || null,
          telegram_username: body.telegram_username || null,
        })
        .select('id')
        .single();
      if (cErr) {
        console.error('client insert', cErr);
        return NextResponse.json({ error: cErr.message }, { status: 500 });
      }
      clientId = created.id;
    }

    const { data: lead, error: lErr } = await supabase
      .from('leads')
      .insert({
        client_id: clientId,
        source,
        type,
        status: 'new',
        name,
        phone,
        interest,
        payload,
      })
      .select('*')
      .single();

    if (lErr) {
      console.error('lead insert', lErr);
      return NextResponse.json({ error: lErr.message }, { status: 500 });
    }

    console.log('[LEAD saved]', lead.id, name, phone);
    return NextResponse.json({ ok: true, lead });
  } catch (e) {
    console.error('POST /api/leads', e);
    const msg = e instanceof Error ? e.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const secret = process.env.LEADS_API_SECRET;
    const header = req.headers.get('x-leads-secret');
    const cookie = req.cookies.get('gms_admin_session')?.value;

    const { verifyAdminSessionToken } = await import('@/lib/admin-auth');
    const okCookie = verifyAdminSessionToken(cookie);
    const okSecret = !!(secret && header === secret);
    if (!okCookie && !okSecret) return unauthorized();

    const supabase = getSupabaseAdmin();
    const status = req.nextUrl.searchParams.get('status');
    let q = supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(100);
    if (status) q = q.eq('status', status);

    const { data, error } = await q;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ leads: data });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
