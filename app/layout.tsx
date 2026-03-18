import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Global Migration Solutions | Туры по Кыргызстану и миграция',
  description: 'Авторские туры по Кыргызстану, визовая поддержка, организация мероприятий. ОсОО «Global Migration Solutions» — официальный сайт.',
  keywords: ['туры Кыргызстан', 'виза Кыргызстан', 'Сон-Куль', 'Иссык-Куль', 'Кегети', 'GMS', 'Global Migration Solutions'],
  openGraph: {
    title: 'GMS — Туры по Кыргызстану',
    description: 'Авторские туры, визы и миграция без границ',
    images: [{ url: 'https://gms.tours/og-image.jpg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}