'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TourGalleryProps {
  images: string[];
  title: string;
}

export function TourGallery({ images, title }: TourGalleryProps) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#E7E5E4]" />
    );
  }

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#E7E5E4]">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${title} — ${active + 1}`}
          fill
          className="object-cover"
          priority={active === 0}
          quality={85}
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'relative aspect-[4/3] rounded-xl overflow-hidden bg-[#E7E5E4] ring-2 transition',
                active === i
                  ? 'ring-[#B45309]'
                  : 'ring-transparent hover:ring-[#E7E5E4]'
              )}
            >
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                fill
                className="object-cover"
                quality={70}
                sizes="(max-width: 640px) 33vw, 20vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
