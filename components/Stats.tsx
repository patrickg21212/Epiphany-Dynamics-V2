import React, { useEffect, useState, useRef } from 'react';

const StatCounter: React.FC<{ end: number; suffix?: string; title: string }> = ({
  end,
  suffix = '',
  title,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // For small numbers, we want a faster animation so it doesn't look like it's lagging.
    // We aim for about 20-30ms per increment for small numbers, capped at 2000ms total.
    const duration = Math.min(2000, Math.max(1000, end * 50));
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Use easeOutQuart for a premium "scrolling" feel
      // 1 - pow(1 - progress, 4)
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center text-center p-8 border border-zinc-800 rounded-2xl bg-black hover:border-zinc-500 transition-colors"
    >
      <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
        {count}
        {suffix}
      </div>
      <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">{title}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCounter end={12} suffix="+" title="Systems Deployed" />
        <StatCounter end={28} suffix="+" title="Automations in Production" />
        <StatCounter end={60} suffix="+" title="Workflows Orchestrated" />
        <StatCounter end={15} suffix="+" title="Integrations Supported" />
      </div>
    </div>
  );
};

export default Stats;
