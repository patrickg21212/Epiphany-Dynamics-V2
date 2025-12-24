
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
    id: 'agents',
    name: 'AI Agents & Automations',
    icon: '🤖',
    items: [
      {
        title: 'Intelligent Autonomous Agents',
        description: 'Deploy smart agents that handle complex, multi-step workflows without human intervention. We replace manual tasks with reliable, 24/7 AI workers.',
        cta: 'DEPLOY AGENTS'
      },
      {
        title: 'End-to-End Automation',
        description: 'Automate entire business processes from trigger to resolution. Eliminate bottlenecks and repetitive data entry with robust, self-healing systems.',
        cta: 'STREAMLINE OPS'
      },
      {
        title: 'Sales & Support Scaling',
        description: 'Qualify leads and resolve support tickets instantly. Deliver personalized, human-quality interactions at infinite scale, around the clock.',
        cta: 'SCALE REVENUE'
      }
    ]
  },
  {
    id: 'integrations',
    name: 'Workflow Integrations',
    icon: '⚡',
    items: [
      {
        title: 'Seamless Tool Stacks',
        description: 'Connect your existing software ecosystem (CRM, ERP, Slack). We integrate directly with your tools to orchestrate data flow securely.',
        cta: 'CONNECT TOOLS'
      },
      {
        title: 'Data Pipeline Security',
        description: 'Securely handle sensitive business data with enterprise-grade governance. We build reliable pipes that keep your information safe and compliant.',
        cta: 'SECURE DATA'
      },
      {
        title: 'Reliability & Maintenance',
        description: "Automation isn't a one-time setup. We provide ongoing monitoring and updates to ensure your workflows adapt to API changes and growth.",
        cta: 'ENSURE UPTIME'
      }
    ]
  },
  {
    id: 'apps',
    name: 'LLM Apps & Internal Tools',
    icon: '🛠️',
    items: [
      {
        title: 'Custom Internal AI Apps',
        description: 'Empower your workforce with purpose-built AI interfaces. Streamline specific operational tasks with tools designed for your unique needs.',
        cta: 'EMPOWER TEAMS'
      },
      {
        title: 'Knowledge Retrieval',
        description: 'Turn your company documentation and data into an interactive answer engine. Instant access to proprietary knowledge for every employee.',
        cta: 'UNLOCK KNOWLEDGE'
      },
      {
        title: 'High-ROI Operations',
        description: 'We focus on high-impact implementations that deliver immediate value. Track time saved and efficiency gained with clear performance metrics.',
        cta: 'VIEW METRICS'
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
            className={`px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-all border ${activeCat === cat.id
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
          <h4 className="text-3xl font-bold mb-4">Ready to Automate Real Work with AI?</h4>
          <p className="text-gray-400 font-poppins">We design and deploy custom AI automations and agent workflows tailored to your existing tools, data, and processes.</p>
        </div>
        <button className="px-12 py-5 bg-cyan-500 text-black font-black rounded-full hover:bg-white transition-all shadow-lg active:scale-95 whitespace-nowrap">
          Book an Automation Strategy Call
        </button>
      </div>
    </div>
  );
};

export default Solutions;
