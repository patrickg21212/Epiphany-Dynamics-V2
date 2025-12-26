import React, { useState, useEffect } from 'react';

const WorkflowReview: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    industry: '',
    main_problem: '', // Renamed to match requirement
    monthly_leads: '', // Renamed to match requirement
    breakdown_cost: '', // Renamed to match requirement
    email: '',
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Is this a sales call?',
      a: 'No. This is a working conversation to understand how your current workflows operate. If it makes sense to continue, we’ll talk about next steps. If not, that’s fine too.',
    },
    {
      q: 'Do I need to prepare anything in advance?',
      a: 'No prep required. Context helps, but we can work through everything live on the call.',
    },
    {
      q: 'What happens during the Workflow Review?',
      a: 'We’ll walk through how leads, follow-ups, and internal workflows currently run, and where friction typically shows up. The goal is clarity, not a pitch.',
    },
    {
      q: 'What happens after the call?',
      a: 'If there’s a fit to go deeper, we’ll outline what that would look like. If not, you’ll still leave with a clear understanding of whether automation makes sense for you.',
    },
    {
      q: 'Who is this for?',
      a: 'Operators who already know their systems or workflows are slowing things down and want to evaluate automation realistically. It’s not for anyone looking for quick hacks or generic advice.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    if (submitted) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        // Optional cleanup if needed, though usually fine to leave for navigation
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Hard Fix: Read values directly from the form element to ensure no state de-sync
    const form = e.currentTarget;
    const formElements = new FormData(form);

    // Explicitly extract values with fallbacks to state
    const rawEmail = formElements.get('email') as string;
    const stateEmail = formData.email;

    // Use the first non-empty value found
    const email = rawEmail && rawEmail.trim() !== '' ? rawEmail.trim() : stateEmail.trim();

    const industry = (formElements.get('industry') as string) || formData.industry;
    const main_problem = (formElements.get('main_problem') as string) || formData.main_problem;
    const monthly_leads = (formElements.get('monthly_leads') as string) || formData.monthly_leads;
    const breakdown_cost =
      (formElements.get('breakdown_cost') as string) || formData.breakdown_cost;

    // Prepare payload for Make.com webhook
    const payload = {
      source: 'epiphanydynamics-antigravity-staging',
      submitted_at: new Date().toISOString(),
      page_url: window.location.href,
      email: email, // Explicitly mapped
      industry: industry,
      main_problem: main_problem,
      monthly_leads: monthly_leads,
      breakdown_cost: breakdown_cost,
    };

    // Debug logging to verify payload matches requirements
    console.log('Submitting webhook payload:', payload);

    try {
      // Fire and forget
      await fetch('https://hook.us2.make.com/5ecc2psdudocogqbawhdjt3qjpbw7wnd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      // Silent error handling - do not block the user flow
      console.error('Webhook submission failed', error);
    }

    // Show confirmation state regardless of webhook result
    setSubmitted(true);
    // Scroll to top to ensure message is seen
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 bg-black min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl text-center animate-fadeIn">
          <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/30 mb-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Thanks — this helps us prepare so we don’t waste your time.
            </h2>
            <p className="text-gray-400">Go ahead and schedule your workflow review below.</p>
          </div>

          {/* Calendly Inline Widget */}
          <div
            className="calendly-inline-widget w-full h-[700px] border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900"
            data-url="https://calendly.com/epiphanydynamics/ai-workflow-review-call?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=06b6d4"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>

          {/* FAQ Section */}
          <div className="mt-12 max-w-2xl mx-auto text-left">
            <h3 className="text-xl font-bold text-white mb-6 pl-2">Before you book</h3>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-zinc-800 last:border-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-2 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <span className="ml-4 text-gray-500 font-mono text-lg">
                      {openFaqIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-2 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Intake Step */}
          <div className="mt-8 p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30">
            <h3 className="text-white font-bold mb-2">Optional: Help Us Prepare</h3>
            <p className="text-gray-400 text-sm mb-4">
              If you have 2 minutes, answer a few questions so we can make your workflow review more
              useful. If you’re busy, you can skip this.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdV-Iet3PQKHFchj-qFNeIn_BVvrQS0mudOOfsDFdFvOFoXIg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-zinc-800 text-white font-medium rounded-full hover:bg-zinc-700 transition-colors text-sm border border-zinc-700"
            >
              Complete Optional Pre-Call Intake
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Request a Workflow Review
          </h1>
          <p className="text-gray-400">
            Answer a few quick questions so we can prepare and make the review useful.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 p-8 border border-zinc-800 rounded-3xl bg-zinc-900/20"
        >
          {/* Question 1: Industry */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">
              Which industry best describes your business?
            </label>
            <select
              required
              name="industry"
              className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white appearance-none"
              value={formData.industry}
              onChange={(e) => handleChange('industry', e.target.value)}
            >
              <option value="" disabled>
                Select an option...
              </option>
              <option value="Home Services">Home Services (HVAC, Plumbing, Solar, etc.)</option>
              <option value="Construction">Construction / General Contracting</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Real Estate">Real Estate / Property Management</option>
              <option value="Marketing Agency">Marketing / B2B Agency</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Question 2: Main Problem */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">
              What’s the main problem you’re trying to fix right now?
            </label>
            <div className="space-y-2">
              {[
                'Leads aren’t followed up fast enough',
                'Missed calls or inquiries slipping through',
                'Too much manual admin work',
                'No clear system to track leads',
                'Other',
              ].map((option) => (
                <label
                  key={option}
                  className={`flex items - center p - 3 rounded - xl border cursor - pointer transition - all ${
                    formData.main_problem === option
                      ? 'border-cyan-500 bg-cyan-500/10 text-white'
                      : 'border-zinc-800 bg-black hover:border-zinc-600 text-gray-400'
                  } `}
                >
                  <input
                    type="radio"
                    name="main_problem"
                    value={option}
                    required
                    checked={formData.main_problem === option}
                    onChange={(e) => handleChange('main_problem', e.target.value)}
                    className="w-4 h-4 text-cyan-500 border-zinc-600 focus:ring-cyan-500 bg-transparent mr-3"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 3: Leads per Month */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">
              About how many new leads do you get per month?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Fewer than 10', '10–30', '30–75', '75+', 'Not sure'].map((option) => (
                <label
                  key={option}
                  className={`flex items - center justify - center p - 3 rounded - xl border cursor - pointer transition - all text - center ${
                    formData.monthly_leads === option
                      ? 'border-cyan-500 bg-cyan-500/10 text-white'
                      : 'border-zinc-800 bg-black hover:border-zinc-600 text-gray-400'
                  } `}
                >
                  <input
                    type="radio"
                    name="monthly_leads"
                    value={option}
                    required
                    checked={formData.monthly_leads === option}
                    onChange={(e) => handleChange('monthly_leads', e.target.value)}
                    className="sr-only" // Hide default radio
                  />
                  <span className="text-sm font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 4: Breaking Down */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">
              What’s currently breaking down or costing you the most time or money?
            </label>
            <textarea
              required
              name="breakdown_cost"
              rows={3}
              className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white resize-none"
              placeholder="Briefly describe the bottleneck..."
              value={formData.breakdown_cost}
              onChange={(e) => handleChange('breakdown_cost', e.target.value)}
            ></textarea>
          </div>

          {/* New Question: Email */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">
              Email (so we can send your booking details)
            </label>
            <input
              type="email"
              required
              name="email"
              className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white"
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-lg active:scale-95 text-lg mt-4"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkflowReview;
