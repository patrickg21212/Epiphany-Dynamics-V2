
import React, { useEffect, useState, useRef } from 'react';

const StatCounter: React.FC<{ end: number, suffix?: string, title: string }> = ({ end, suffix = "", title }) => {
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
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={elementRef} className="flex flex-col items-center text-center p-8 border border-zinc-800 rounded-2xl bg-black hover:border-zinc-500 transition-colors">
      <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">{title}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCounter end={35} suffix="+" title="Years of Excellence" />
        <StatCounter end={85} suffix="+" title="Languages Supported" />
        <StatCounter end={5000} suffix="+" title="Domain Experts" />
        <StatCounter end={2300} suffix="+" title="Global Customers" />
      </div>
    </div>
  );
};

export default Stats;
