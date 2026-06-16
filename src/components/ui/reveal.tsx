'use client';

import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
};

export function Reveal({ children, delay = 0, style, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </div>
  );
}
