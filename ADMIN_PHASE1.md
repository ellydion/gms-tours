# GMS Admin — Фаза 1

## 1. Supabase

1. Создай проект на https://supabase.com
2. SQL Editor → выполни файл `supabase/schema.sql`
3. Settings → API:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (секретный!)

## 2. Env (Vercel + local `.env.local`)

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
ADMIN_PASSWORD=надёжный-пароль
ADMIN_SECRET=длинная-случайная-строка
LEADS_API_SECRET=общий-секрет-для-бота
```

## 3. Зависимость

```bash
npm install @supabase/supabase-js
```

## 4. Админка

Открой: https://www.gms.tours/admin/login

## 5. Telegram-бот (Fly secrets)

```
GMS_SITE_URL=https://www.gms.tours
LEADS_API_SECRET=тот-же-что-на-сайте
```

Бот после заявки шлёт POST на `/api/leads`.

## API

`POST /api/leads`

```json
{
  "name": "Айбек",
  "phone": "+996555...",
  "source": "site",
  "type": "tour",
  "interest": "Сон-Куль",
  "payload": { "people": "2" }
}
```

Header (если задан LEADS_API_SECRET): `x-leads-secret: ...`
