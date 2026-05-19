import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export default function StatCounter({ target, suffix = '', label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!isInView) return undefined;
    if (reduceMotion) {
      setCount(target);
      return undefined;
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, reduceMotion]);

  return (
    <div ref={ref} className="hero-stat">
      <span className="hero-stat-value" aria-hidden="true">
        {count}
        {suffix}
      </span>
      <span className="sr-only">
        {target}
        {suffix} {label}
      </span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}
