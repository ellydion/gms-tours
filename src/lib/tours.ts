export type Locale = 'ru' | 'en';
export type TourRegion = 'north' | 'south';
export interface Tour {
  slug: string; region: TourRegion; durationDays: number; priceFrom: number; currency: string;
  title: Record<Locale, string>; shortDescription: Record<Locale, string>; description: Record<Locale, string>;
  program: Record<Locale, string[]>; highlights: Record<Locale, string[]>; includes: Record<Locale, string[]>; excludes: Record<Locale, string[]>;
  notes: Record<Locale, string[]>; whatToBring: Record<Locale, string[]>; difficulty: Record<Locale, string>; season: Record<Locale, string>; startFrom: Record<Locale, string>; groupSize: Record<Locale, string>;
  images: string[]; isPopular?: boolean; isNew?: boolean; order: number;
}
export const tours: Tour[] = [];
export function getTours(region?: TourRegion) { const sorted = [...tours].sort((a, b) => a.order - b.order); if (!region) return sorted; return sorted.filter((t) => t.region === region); }
export function getTourBySlug(slug: string) { return tours.find((t) => t.slug === slug); }
export function getPopularTours(limit = 6) { return tours.filter((t) => t.isPopular).sort((a, b) => a.order - b.order).slice(0, limit); }
