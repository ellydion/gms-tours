# GMS Tours — gms.tours

Авторские туры по Кыргызстану + миграционные услуги.

## Стек

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- next-intl (RU / EN)
- lucide-react

## Структура

- `src/lib/tours.ts` — все туры (добавляй новые сюда)
- `src/messages/ru.json` / `en.json` — переводы
- `src/app/[locale]/` — страницы

## Запуск

```bash
npm install
npm run dev
```

Открой http://localhost:3000

## Деплой на Vercel

1. Залей репозиторий на GitHub
2. Импортируй проект в Vercel
3. Framework Preset: Next.js
4. Deploy

## Добавление тура

Открой `src/lib/tours.ts` и добавь новый объект в массив `tours`.  
Тур автоматически появится в каталоге и на главной (если `isPopular: true`).
