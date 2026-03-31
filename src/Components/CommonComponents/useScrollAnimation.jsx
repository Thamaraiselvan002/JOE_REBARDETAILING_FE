import { useEffect, useRef } from 'react';

export default function useScrollAnimation() {
  const scrollRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // animate once only
          }
        });
      },
      { threshold: 0.15 }
    );

    scrollRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Call this as ref on any element you want to animate
  const addRef = (el) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  return addRef;
}