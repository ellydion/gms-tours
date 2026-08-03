import { createClient, SupabaseClient } from '@supabase/supabase-js';

let adminClient: SupabaseClient | null = null;

/** Server-only client with service role (bypasses RLS) */
export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY');
  }

  if (!adminClient) {
    adminClient = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return adminClient;
}

export type LeadSource = 'site' | 'telegram' | 'whatsapp' | 'manual';
export type LeadType = 'tour' | 'visa' | 'transfer' | 'event' | 'other';
export type LeadStatus = 'new' | 'in_progress' | 'booked' | 'paid' | 'done' | 'rejected';

export interface LeadRow {
  id: string;
  client_id: string | null;
  source: LeadSource;
  type: LeadType;
  status: LeadStatus;
  name: string;
  phone: string;
  interest: string | null;
  payload: Record<string, unknown>;
  manager_note: string | null;
  created_at: string;
  updated_at: string;
}
