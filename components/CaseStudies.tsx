
import React from 'react';

const CaseStudies: React.FC = () => {
  const stories = [
    {
      category: 'Generative AI',
      title: 'Multilingual Text Annotation for Leading Tech Platform',
      image: 'https://picsum.photos/seed/ai1/800/600',
      description: 'Implementing 99% accurate grounding for a global advertising engine across 13 languages.'
    },
    {
      category: 'Legal Tech',
      title: 'Contract Risk Analysis with Custom LLMs',
      image: 'https://picsum.photos/seed/legal/800/600',
      description: 'Automating regulatory sifting for thousands of complex legal documents daily.'
    },
    {
      category: 'Healthcare',
      title: 'Medical Record Data Extraction Platform',
      image: 'https://picsum.photos/seed/med/800/600',
      description: 'Training specialized models to extract structured insights from clinical journals.'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div className="max-w-2xl">
          <p className="text-cyan-500 font-bold tracking-widest text-sm mb-4">SUCCESS STORIES</p>
          <h2 className="text-5xl font-bold tracking-tight">Enterprise Success at Scale</h2>
        </div>
        <button className="hidden md:flex items-center space-x-2 text-white font-bold border-b border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-all">
          <span>VIEW ALL CASE STUDIES</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stories.map((s, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
              <img 
                src={s.image} 
                alt={s.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                 <button className="bg-white text-black font-bold px-6 py-3 rounded-full text-sm">READ CASE STUDY</button>
              </div>
            </div>
            <p className="text-cyan-500 text-xs font-bold tracking-widest uppercase mb-2">{s.category}</p>
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-snug">{s.title}</h3>
            <p className="text-gray-500 text-sm font-poppins leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
