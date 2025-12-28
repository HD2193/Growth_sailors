import { useState, useEffect, useCallback } from 'react';

interface UseCarouselOptions {
  totalSlides: number;
  autoAdvanceInterval?: number;
  enableAutoPlay?: boolean;
}

interface UseCarouselReturn {
  activeSlide: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

export function useCarousel({
  totalSlides,
  autoAdvanceInterval = 5000,
  enableAutoPlay = true,
}: UseCarouselOptions): UseCarouselReturn {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setActiveSlide(index);
      }
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveSlide((current) => (current - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!enableAutoPlay) return;

    const intervalId = setInterval(() => {
      nextSlide();
    }, autoAdvanceInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [enableAutoPlay, autoAdvanceInterval, nextSlide]);

  return {
    activeSlide,
    goToSlide,
    nextSlide,
    prevSlide,
  };
}
