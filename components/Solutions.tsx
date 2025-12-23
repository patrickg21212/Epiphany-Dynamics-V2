
import React, { useState } from 'react';

type SolutionItem = {
  title: string;
  description: string;
  cta: string;
};

type Category = {
  id: string;
  name: string;
  items: SolutionItem[];
  icon: string;
};

const categories: Category[] = [
  {
    id: 'gen-ai',
    name: 'Generative AI',
    icon: '✨',
    items: [
      {
        title: 'Supervised Fine-Tuning',
        description: 'Develop specialized data to train and refine pre-trained models for custom task taxonomies. We build high-quality golden datasets for peak performance.',
        cta: 'LEARN MORE'
      },
      {
        title: 'Model Safety & Red Teaming',
        description: 'Rigorously test and optimize models to ensure compliance and safety. We identify vulnerabilities and improve robustness against adversarial attacks.',
        cta: 'PROTECT YOUR MODELS'
      },
      {
        title: 'RLHF & Optimization',
        description: 'Leverage Reinforcement Learning from Human Feedback to reduce hallucinations and align model outputs with human intent and preference.',
        cta: 'OPTIMIZE OUTPUTS'
      }
    ]
  },
  {
    id: 'trad-ai',
    name: 'Traditional AI',
    icon: '📊',
    items: [
      {
        title: 'Data Annotation',
        description: 'Human-in-the-loop annotation for image, video, text, and sensor data. Achieve 99.9% accuracy with our global team of subject matter experts.',
        cta: 'START ANNOTATING'
      },
      {
        title: 'Dataset Creation',
        description: 'Custom dataset sourcing and generation tailored to specific industry needs, including healthcare, finance, and legal domains.',
        cta: 'BUILD DATASETS'
      }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Strategy',
    icon: '🏢',
    items: [
      {
        title: 'AI Consulting',
        description: 'Strategic roadmaps for AI adoption. We help identify high-impact use cases and define person-machine synergy within your organization.',
        cta: 'TALK TO AN EXPERT'
      },
      {
        title: 'Managed Services',
        description: 'End-to-end management of your AI lifecycle, from data prep to model deployment and monitoring at enterprise scale.',
        cta: 'SCALE YOUR OPS'
      }
    ]
  }
];

const Solutions: React.FC = () => {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const currentCategory = categories.find(c => c.id === activeCat)!;

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Explore Our Solutions</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-all border ${
              activeCat === cat.id 
              ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
              : 'bg-transparent text-gray-400 border-zinc-800 hover:border-zinc-600'
            }`}
          >
            <span className="mr-2">{cat.icon}</span>
            {cat.name.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 animate-fadeIn">
        {currentCategory.items.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
            <p className="text-gray-400 font-poppins leading-relaxed mb-8 flex-grow">{item.description}</p>
            <button className="text-xs font-bold tracking-widest text-white border-b-2 border-zinc-700 group-hover:border-cyan-500 transition-all w-fit pb-1">
              {item.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
           <h4 className="text-3xl font-bold mb-4">Ready to accelerate your AI journey?</h4>
           <p className="text-gray-400 font-poppins">Our team of 5,000+ subject matter experts is ready to support your most complex data challenges.</p>
        </div>
        <button className="px-12 py-5 bg-cyan-500 text-black font-black rounded-full hover:bg-white transition-all shadow-lg active:scale-95 whitespace-nowrap">
          GET A CUSTOM QUOTE
        </button>
      </div>
    </div>
  );
};

export default Solutions;
