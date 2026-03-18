import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Global Migration Solutions | Туры по Кыргызстану и миграция',
  description: 'Авторские туры по Кыргызстану, визовая поддержка, организация мероприятий. ОсОО «Global Migration Solutions» — официальный сайт. Бронируйте туры, получайте визы и организуйте события без границ.',
  keywords: ['туры Кыргызстан', 'виза Кыргызстан', 'миграция Кыргызстан', 'Сон-Куль', 'Иссык-Куль', 'Кегети', 'GMS', 'Global Migration Solutions'],
  authors: [{ name: 'Global Migration Solutions' }],
  openGraph: {
    title: 'Global Migration Solutions | Туры по Кыргызстану',
    description: 'Авторские туры, визы и миграция. ОсОО «Global Migration Solutions»',
    images: [{ url: 'https://gms.tours/og-image.jpg' }],
    siteName: 'GMS Tours',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="font-sans">{children}</body>
    </html>
  );
}