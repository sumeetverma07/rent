"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let animationFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const tick = () => {
        frame += 1;
        const progress = Math.min(frame / 70, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(value * eased));
        if (progress < 1) animationFrame = requestAnimationFrame(tick);
      };
      animationFrame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {current.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
