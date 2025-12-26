import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Production-First Systems',
      desc: 'Everything we build is designed to run in real operations, not live in demos or slide decks.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
    },
    {
      title: 'Automation Over Abstraction',
      desc: 'We focus on automating actual workflows end-to-end, not selling theory, frameworks, or generic AI advice.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: 'Tool-Agnostic by Design',
      desc: 'We work across modern AI and automation platforms to design systems that fit your business — not lock you into a vendor.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      ),
    },
    {
      title: 'Built for Reliability',
      desc: 'Monitoring, error handling, and long-term maintainability are considered from day one.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl font-bold tracking-tighter mb-12 leading-none">
            Why <br />
            <span className="text-cyan-500">Epiphany?</span>
          </h2>
          <div className="w-32 h-2 bg-white rounded-full mb-8"></div>
          <p className="text-2xl text-gray-400 font-poppins max-w-md">
            We build practical, reliable AI systems that solve real business problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          {features.map((f, i) => (
            <div key={i} className="p-10 bg-black hover:bg-zinc-950 transition-colors group">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl mb-6 group-hover:bg-cyan-400 transition-colors">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
