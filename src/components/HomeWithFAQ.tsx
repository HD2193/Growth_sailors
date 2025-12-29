import { useState, useEffect, useRef } from 'react';
import Home from '../imports/Home';

// FAQ data with questions and answers
const faqData = [
  {
    question: "When will we see the first sales?",
    answer: "Typically, you can expect to see initial results within the first 30-60 days of launching your campaign. However, the timeline varies based on your industry, target audience, and campaign strategy. We focus on building sustainable growth rather than quick wins."
  },
  {
    question: "How do you measure the success of advertising campaigns?",
    answer: "We use comprehensive analytics including conversion rates, ROI, customer acquisition cost, engagement metrics, and revenue attribution. You'll receive detailed reports showing exactly how your campaigns are performing and contributing to your business goals."
  },
  {
    question: "How often will I receive reports on campaign results?",
    answer: "We provide weekly performance updates and comprehensive monthly reports. You'll also have 24/7 access to our real-time dashboard where you can monitor your campaign metrics at any time."
  },
  {
    question: "What are the main differences between your agency and competitors?",
    answer: "We combine data-driven strategy with creative excellence. Our team has experience with Shark Tank India brands, ensuring proven results. We focus on long-term partnerships and sustainable growth rather than short-term gains."
  },
  {
    question: "Does your agency have a minimum advertising budget to start?",
    answer: "We work with various budget sizes to ensure accessibility. Our minimum starting budget is designed to be flexible based on your business goals. During our free strategy call, we'll discuss the best approach for your specific needs and budget."
  },
  {
    question: "How do you address low conversion rates on the website?",
    answer: "We conduct thorough conversion rate optimization (CRO) audits, analyze user behavior, optimize landing pages, and implement A/B testing. Our approach combines UX improvements, compelling copy, and strategic design changes to maximize conversions."
  },
  {
    question: "Do you create creatives?",
    answer: "Yes! Our in-house creative team specializes in developing high-converting ad creatives, including graphics, videos, and copy. We create compelling content that resonates with your target audience and aligns with your brand identity while maximizing engagement and conversions."
  },
  {
    question: "How soon will we launch the first campaigns?",
    answer: "After our initial strategy call and onboarding, we typically launch your first campaigns within 7-14 days. This includes market research, audience analysis, creative development, and campaign setup to ensure everything is optimized for success from day one."
  },
  {
    question: "Do you set up tracking on the website?",
    answer: "Absolutely! We implement comprehensive tracking solutions including Google Analytics, Facebook Pixel, conversion tracking, and custom event tracking. This ensures we can accurately measure performance, optimize campaigns, and provide you with transparent, data-driven insights."
  },
  {
    question: "What is your average ROAS?",
    answer: "While ROAS varies by industry and business model, our clients typically see a 3-5x ROAS on average. However, we focus on profitable growth rather than just ROAS numbers, considering factors like customer lifetime value, acquisition costs, and long-term business sustainability."
  },
  {
    question: "In which niches do you have experience?",
    answer: "We have extensive experience across multiple industries including e-commerce, SaaS, D2C brands, B2B services, healthcare, education, and consumer products. Our team has worked with Shark Tank India brands and managed over 1000 successful campaigns across diverse niches."
  }
];

export default function HomeWithFAQ() {
  const [openFAQs, setOpenFAQs] = useState<Set<number>>(new Set());
  const [heightsUpdated, setHeightsUpdated] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find if the click was on an FAQ button
      const faqButton = target.closest('[data-name*="faq-btn"]');
      
      if (faqButton) {
        // Find the parent FAQ item
        const faqItem = target.closest('[data-name*="faq-item"]');
        if (!faqItem) return;
        
        // Get all FAQ items to find the index
        const allFaqItems = containerRef.current?.querySelectorAll('[data-name*="faq-item"]');
        if (!allFaqItems) return;
        
        const index = Array.from(allFaqItems).indexOf(faqItem);
        
        if (index !== -1) {
          setOpenFAQs(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
              newSet.delete(index);
            } else {
              newSet.add(index);
            }
            return newSet;
          });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleClick);
      
      // Add cursor pointer to FAQ buttons and navbar links
      const faqButtons = container.querySelectorAll('[data-name*="faq-btn"]');
      faqButtons.forEach(item => {
        (item as HTMLElement).style.cursor = 'pointer';
      });
      
      const navLinks = container.querySelectorAll('[data-name*="Link"], [data-name*="menu-item"]');
      navLinks.forEach(link => {
        (link as HTMLElement).style.cursor = 'pointer';
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleClick);
      }
    };
  }, []);

  // Apply dynamic heights to FAQ items based on open state
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const allFaqItems = container.querySelectorAll('[data-name*="faq-item"]');

    allFaqItems.forEach((item, index) => {
      const htmlItem = item as HTMLElement;
      const isOpen = openFAQs.has(index);

      if (isOpen) {
        // Expand the FAQ item - calculate answer height more accurately
        const answerLength = faqData[index].answer.length;
        const charsPerLine = 90; // Characters per line at this font size
        const answerLines = Math.ceil(answerLength / charsPerLine);
        const answerHeight = Math.max(120, answerLines * 32); // 32px line height including spacing
        const totalHeight = 136.36 + answerHeight + 40; // Added 40px padding

        htmlItem.style.height = `${totalHeight}px`;
        htmlItem.style.minHeight = `${totalHeight}px`;
        htmlItem.style.transition = 'height 0.3s ease-in-out, min-height 0.3s ease-in-out';
      } else {
        // Collapse to original height
        const originalHeight = index === 10 ? '137.36px' : (index === 3 ? '144.13px' : '136.36px');
        htmlItem.style.height = originalHeight;
        htmlItem.style.minHeight = originalHeight;
        htmlItem.style.transition = 'height 0.3s ease-in-out, min-height 0.3s ease-in-out';
      }
    });

    // Update FAQ section and main container heights
    const faqSection = container.querySelector('[data-name="FAQ"]') as HTMLElement;
    const mainContainer = container.querySelector('[data-name="Home"]') as HTMLElement;

    if (faqSection && mainContainer) {
      // Calculate total height needed for all FAQs
      let totalFAQHeight = 0;
      allFaqItems.forEach((item, index) => {
        const isOpen = openFAQs.has(index);
        if (isOpen) {
          const answerLength = faqData[index].answer.length;
          const answerLines = Math.ceil(answerLength / 90);
          const answerHeight = Math.max(120, answerLines * 32);
          totalFAQHeight += 136.36 + answerHeight + 40;
        } else {
          totalFAQHeight += index === 10 ? 137.36 : (index === 3 ? 144.13 : 136.36);
        }
      });

      // Update FAQ section height
      faqSection.style.height = `${totalFAQHeight + 200}px`;
      faqSection.style.minHeight = `${totalFAQHeight + 200}px`;

      // Update main container height to accommodate expanded FAQs
      const baseHeight = 10200;
      const extraHeight = Math.max(0, totalFAQHeight - 1508); // 1508 is original FAQ list height
      mainContainer.style.height = `${baseHeight + extraHeight}px`;

      // Trigger re-render after heights are updated
      setTimeout(() => setHeightsUpdated(prev => prev + 1), 50);
    }
  }, [openFAQs]);

  return (
    <div ref={containerRef} className="relative">
      <Home />
      
      {/* Render FAQ answers inside expanded cards */}
      {Array.from(openFAQs).map((faqIndex) => {
        const faqAnswer = faqData[faqIndex];
        if (!faqAnswer) return null;

        // Get the actual FAQ item from DOM to use its real position
        const container = containerRef.current;
        if (!container) return null;

        const allFaqItems = container.querySelectorAll('[data-name*="faq-item"]');
        const currentFaqItem = allFaqItems[faqIndex] as HTMLElement;
        if (!currentFaqItem) return null;

        // Calculate absolute position by traversing offsetParent chain
        let absoluteTop = 0;
        let element: HTMLElement | null = currentFaqItem;
        while (element && element !== document.body) {
          absoluteTop += element.offsetTop;
          element = element.offsetParent as HTMLElement;
        }

        // Position answer 100px below the top of the FAQ item (below the question)
        const topPosition = absoluteTop + 100;

        // Use heightsUpdated in calculation to force re-render when heights change
        const _ = heightsUpdated;

        return (
          <div
            key={faqIndex}
            className="absolute left-[281px] w-[802px] z-10 transition-all duration-300 ease-in-out"
            style={{
              top: `${topPosition}px`,
              animation: 'fadeIn 0.3s ease-in-out'
            }}
          >
            <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[29px] text-[20px] text-[#e0e0e0] px-0 py-2 whitespace-normal break-words">
              {faqAnswer.answer}
            </p>
          </div>
        );
      })}
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
