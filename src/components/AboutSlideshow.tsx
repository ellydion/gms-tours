'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ABOUT_GALLERY } from '@/lib/about-gallery';
import { cn } from '@/lib/utils';

interface Props {
  title?: string;
}

export function AboutSlideshow({ title }: Props) {
  const slides = ABOUT_GALLERY;
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  const hasSlides = slides.length > 0;
  const go = useCallback(
    (dir: number) => {
      if (!hasSlides) return;
      setIndex((i) => (i + dir + slides.length) % slides.length);
    },
    [hasSlides, slides.length]
  );

  useEffect(() => {
    if (!hasSlides) return;
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [go, hasSlides]);

  if (!hasSlides) {
    return (
      <div className="rounded-2xl border border-dashed border-[#E7E5E4] bg-white p-10 text-center text-sm text-[#78716C]">
        Добавьте фото в <code className="text-[#B45309]">public/about/</code> и пути в{' '}
        <code className="text-[#B45309]">src/lib/about-gallery.ts</code>
      </div>
    );
  }

  const current = slides[index];
  const showPlaceholder = failed[index];

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-bold text-[#1C1917]">{title}</h2>
      )}

      <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#E7E5E4] border border-[#E7E5E4]">
        {showPlaceholder ? (
          <div className="absolute inset-0 flex items-center justify-center text-[#78716C] text-sm px-4 text-center">
            {current.src}
            <br />
            (файл пока не загружен)
          </div>
        ) : (
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
            onError={() => setFailed((f) => ({ ...f, [index]: true }))}
            unoptimized={current.src.endsWith('.gif')}
          />
        )}

        {/* Controls */}
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
          aria-label="Prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                'w-2 h-2 rounded-full transition',
                i === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {slides.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              'relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition',
              i === index ? 'border-[#B45309]' : 'border-transparent opacity-70 hover:opacity-100'
            )}
          >
            {failed[i] ? (
              <div className="w-full h-full bg-[#E7E5E4]" />
            ) : (
              <Image
                src={s.src}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
                onError={() => setFailed((f) => ({ ...f, [i]: true }))}
                unoptimized={s.src.endsWith('.gif')}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
