import { useEffect, useRef } from 'react';
import Why from '../imports/Why';
import { useCarousel } from '../hooks/useCarousel';

export default function WhyWithInteraction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeSlide, goToSlide } = useCarousel({
    totalSlides: 4,
    autoAdvanceInterval: 5000,
    enableAutoPlay: true,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Add cursor pointer to navbar links
      const navLinks = container.querySelectorAll('[data-name*="Link"], [data-name*="menu-item"]');
      navLinks.forEach(link => {
        (link as HTMLElement).style.cursor = 'pointer';
      });

      // Add cursor pointer to buttons
      const buttons = container.querySelectorAll('button, [data-name*="button"], [data-name*="Button"]');
      buttons.forEach(button => {
        (button as HTMLElement).style.cursor = 'pointer';
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <Why activeSlide={activeSlide} onDotClick={goToSlide} />
    </div>
  );
}
