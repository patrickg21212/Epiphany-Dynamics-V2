
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Domain Expertise',
      desc: 'Over 5,000 in-house subject matter experts spanning STEM, healthcare, finance, and legal domains.',
      icon: <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    },
    {
      title: 'Global Delivery',
      desc: '20+ global delivery locations with proficiency in over 85 native languages and dialects.',
      icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    },
    {
      title: 'Rapid Scalability',
      desc: 'Swift delivery of high-quality results 24/7, allowing rapid globalization across projects of any complexity.',
      icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    {
      title: 'Proprietary Tech',
      desc: 'Advanced SaaS platforms for LLM development, data labeling, and intelligent document extraction.',
      icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl font-bold tracking-tighter mb-12 leading-none">
            Why <br/><span className="text-cyan-500">Epiphany?</span>
          </h2>
          <div className="w-32 h-2 bg-white rounded-full mb-8"></div>
          <p className="text-2xl text-gray-400 font-poppins max-w-md">
            We don't just provide data; we provide the human intelligence that makes machine intelligence possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          {features.map((f, i) => (
            <div key={i} className="p-10 bg-black hover:bg-zinc-950 transition-colors group">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl mb-6 group-hover:bg-cyan-400 transition-colors">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {f.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-500 font-poppins text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
