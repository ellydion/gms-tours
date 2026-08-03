-- GMS Admin Phase 1
-- Если типы уже существуют — ошибка 42710 нормальна, используй блок ниже без create type

do $$ begin
  create type public.lead_source as enum ('site', 'telegram', 'whatsapp', 'manual');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.lead_type as enum ('tour', 'visa', 'transfer', 'event', 'other');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.lead_status as enum (
    'new', 'in_progress', 'booked', 'paid', 'done', 'rejected'
  );
exception when duplicate_object then null;
end $$;

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  citizenship text,
  birth_year int,
  telegram_username text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists clients_phone_idx on public.clients (phone);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients (id) on delete set null,
  source public.lead_source not null default 'site',
  type public.lead_type not null default 'other',
  status public.lead_status not null default 'new',
  name text not null,
  phone text not null,
  interest text,
  payload jsonb not null default '{}'::jsonb,
  manager_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_type_idx on public.leads (type);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists clients_updated_at on public.clients;
create trigger clients_updated_at
  before update on public.clients
  for each row execute function public.set_updated_at();

drop trigger if exists leads_updated_at on public.leads;
create trigger leads_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

alter table public.clients enable row level security;
alter table public.leads enable row level security;
