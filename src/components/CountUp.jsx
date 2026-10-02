import React, { useState, useEffect, useRef } from 'react';

export const CountUp = ({ 
  end = 100, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  separator = ',' 
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();
          const target = Number(end) || 0;

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Professional easeOutCubic curve for smooth slowing down at the end
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * target);
            
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration]);

  const formattedCount = separator 
    ? count.toLocaleString() 
    : count.toString();

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
