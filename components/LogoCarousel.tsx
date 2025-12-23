
import React from 'react';

const LogoCarousel: React.FC = () => {
  const logos = [
    { name: 'X', color: 'white' },
    { name: 'Deloitte', color: 'white' },
    { name: 'Google', color: 'white' },
    { name: 'Microsoft', color: 'white' },
    { name: 'Apple', color: 'white' },
    { name: 'Amazon', color: 'white' },
    { name: 'Boeing', color: 'white' },
    { name: 'Snowflake', color: 'white' },
  ];

  return (
    <div className="relative">
      <div className="flex animate-infinite-scroll space-x-16 items-center">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
            <span className="text-3xl font-bold tracking-tighter text-white">{logo.name}</span>
          </div>
        ))}
      </div>
      {/* Fades for smooth entry/exit */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LogoCarousel;
