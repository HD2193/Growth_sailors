import { useEffect, useRef } from 'react';
import What from '../imports/What';

export default function WhatWithInteraction() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Add cursor pointer to navbar links
      const navLinks = container.querySelectorAll('[data-name*="Link"], [data-name*="menu-item"]');
      navLinks.forEach(link => {
        (link as HTMLElement).style.cursor = 'pointer';
      });
      
      // Add cursor pointer to buttons
      const buttons = container.querySelectorAll('button, [data-name*="button"]');
      buttons.forEach(button => {
        (button as HTMLElement).style.cursor = 'pointer';
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <What />
    </div>
  );
}
