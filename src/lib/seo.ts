import type { Metadata } from 'next';
import { PHONE, PHONE_2, EMAIL } from './contacts';

export const SITE_URL = 'https://www.gms.tours';

/** Путь без префикса локали, напр. '/visas' или '' для главной */
export function pageMetadata(locale: string, path: string, title: string, description: string, image?: string): Metadata {
  const ru = `${SITE_URL}${path || '/'}`;
  const en = `${SITE_URL}/en${path}`;
  const url = locale === 'en' ? en : ru;
  const img = image ?? '/tours/son-kol-1.jpg';
  return {
    title,
    description,
    alternates: { canonical: url, languages: { ru, en, 'x-default': ru } },
    openGraph: {
      type: 'website', url, title, description, siteName: 'GMS — Global Migration Solutions',
      locale: locale === 'en' ? 'en_US' : 'ru_RU',
      images: [{ url: img }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [img] },
  };
}

/** Данные только с сайта и 2ГИС-карточки, указанной на сайте (адрес — со страницы «О нас») */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE_URL}/#org`,
    name: 'Global Migration Solutions (GMS)',
    legalName: 'ОсОО «Глобальные миграционные решения»',
    url: SITE_URL,
    image: `${SITE_URL}/tours/son-kol-1.jpg`,
    email: EMAIL,
    telephone: [PHONE, PHONE_2],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Исакеева, 32/2',
      addressLocality: 'Бишкек',
      addressCountry: 'KG',
    },
    areaServed: 'KG',
  };
}
