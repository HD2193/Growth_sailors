import { useEffect, useRef } from 'react';
import Who from '../imports/Who';
import FooterSection from '../imports/FooterSection';

export default function WhoWithInteraction() {
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
      const buttons = container.querySelectorAll('button, [data-name*="button"], [data-name*="Button"]');
      buttons.forEach(button => {
        (button as HTMLElement).style.cursor = 'pointer';
      });
      
      // Make culture cards darker
      const cultureCards = container.querySelectorAll('[data-name="Item [card-item]"]');
      cultureCards.forEach(card => {
        const htmlCard = card as HTMLElement;
        // Add dark background to the cards
        htmlCard.style.backgroundColor = '#1a1a1a';
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <Who />
      {/* Add footer at the bottom */}
      <div className="absolute left-0 top-[3450px] w-full">
        <FooterSection />
      </div>
    </div>
  );
}
