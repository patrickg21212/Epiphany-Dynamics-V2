import React from 'react';

const CaseStudies: React.FC = () => {
  const stories = [
    {
      category: 'Supply Chain Operations',
      title: 'Autonomous Invoice & Manifest Processing',
      problem: 'A logistics provider faced a backlog of thousands of unorganized shipping documents, causing inventory delays.',
      system: 'We deployed a multi-modal agent workflow to classify documents, extract line-item data, and reconcile it with the ERP.',
      outcome: 'Eliminated the backlog in 48 hours and reduced ongoing manual data entry by over 80%.',
      image: '/images/supply-chain.png'
    },
    {
      category: 'Customer Support',
      title: 'Tier-1 Support Agent Integration',
      problem: 'A high-growth service agency struggled to maintain response times during peak ticket volume.',
      system: 'We implemented a RAG-enabled support agent connected to Slack and Zendesk to draft responses and triage issues.',
      outcome: 'Cut average first-response time from 4 hours to under 10 minutes without adding headcount.',
      image: '/images/customer-support.png'
    },
    {
      category: 'Financial Reporting',
      title: 'Automated Compliance Pipelines',
      problem: 'Manual compilation of weekly regulatory reports was prone to human error and consumed valuable analyst hours.',
      system: 'We built a secure, audit-ready data pipeline to aggregate, validate, and format reports automatically.',
      outcome: 'Replaced 15 hours of weekly manual spreadsheet work with a 100% reliable automated process.',
      image: '/images/financial-reporting.png'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div className="max-w-2xl">
          <p className="text-cyan-500 font-bold tracking-widest text-sm mb-4">PROVEN RESULTS</p>
          <h2 className="text-5xl font-bold tracking-tight">Real-World Operational Impact</h2>
        </div>

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
            </div>
            <p className="text-cyan-500 text-xs font-bold tracking-widest uppercase mb-2">{s.category}</p>
            <h3 className="text-xl font-bold mb-6 group-hover:text-cyan-400 transition-colors leading-snug">{s.title}</h3>

            <div className="space-y-4">
              <div>
                <span className="text-white font-bold text-xs uppercase tracking-wider block mb-1">Problem</span>
                <p className="text-gray-400 text-sm font-poppins leading-relaxed">{s.problem}</p>
              </div>
              <div>
                <span className="text-white font-bold text-xs uppercase tracking-wider block mb-1">System Built</span>
                <p className="text-gray-400 text-sm font-poppins leading-relaxed">{s.system}</p>
              </div>
              <div className="pt-2 border-t border-zinc-800">
                <span className="text-cyan-500 font-bold text-xs uppercase tracking-wider block mb-1">Outcome</span>
                <p className="text-white text-sm font-poppins leading-relaxed">{s.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
