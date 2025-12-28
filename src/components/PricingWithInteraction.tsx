import { useEffect, useRef, useState } from 'react';
import Pricing from '../imports/Pricing';

export default function PricingWithInteraction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

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

      // Add hover effects to "Get started" buttons
      const getStartedButtons = Array.from(container.querySelectorAll('[data-name*="button"]')).filter(btn => {
        return btn.textContent?.toLowerCase().includes('get started');
      });
      
      getStartedButtons.forEach(button => {
        const htmlButton = button as HTMLElement;
        htmlButton.style.cursor = 'pointer';
        htmlButton.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
        
        htmlButton.addEventListener('mouseenter', () => {
          htmlButton.style.transform = 'scale(1.05)';
        });
        
        htmlButton.addEventListener('mouseleave', () => {
          htmlButton.style.transform = 'scale(1)';
        });
      });

      // Add hover effects to pricing toggle buttons
      const toggleButtons = container.querySelectorAll('[data-name*="Tab"]');
      toggleButtons.forEach(button => {
        const htmlButton = button as HTMLElement;
        htmlButton.style.cursor = 'pointer';
        htmlButton.style.transition = 'opacity 0.2s ease';
        
        htmlButton.addEventListener('mouseenter', () => {
          htmlButton.style.opacity = '0.8';
        });
        
        htmlButton.addEventListener('mouseleave', () => {
          htmlButton.style.opacity = '1';
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <Pricing />
    </div>
  );
}
