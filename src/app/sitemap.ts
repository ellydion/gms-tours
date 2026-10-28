import type { MetadataRoute } from 'next';
import { tours } from '@/lib/tours';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/visas', '/tours', '/tours/north', '/tours/south', '/events', '/about', '/contacts',
    ...tours.map((t) => `/tours/${t.slug}`)];
  return paths.map((p) => ({
    url: `${SITE_URL}${p || '/'}`,
    alternates: { languages: { ru: `${SITE_URL}${p || '/'}`, en: `${SITE_URL}/en${p}` } },
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : p === '/visas' || p === '/tours' ? 0.9 : 0.7,
  }));
}
