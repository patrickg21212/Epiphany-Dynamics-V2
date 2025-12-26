import React, { useState, useEffect } from 'react';
import SelectField from '../components/ui/SelectField';
import RadioGroup from '../components/ui/RadioGroup';
import TextAreaField from '../components/ui/TextAreaField';
import InputField from '../components/ui/InputField';

const WorkflowReview: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    industry: '',
    main_problem: '', // Renamed to match requirement
    monthly_leads: '', // Renamed to match requirement
    breakdown_cost: '', // Renamed to match requirement
    email: '',
  });

  const [honeypot, setHoneypot] = useState('');

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

    // Anti-Spam Check: If honeypot field is filled, pretend success but do nothing
    if (honeypot) {
      console.log('Bot detected, submission ignored.');
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error('Webhook URL not configured');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status: ${response.status}`);
      }

      // GA4 Tracking: Lead Generated
      if ((window as any).gtag) {
        (window as any).gtag('event', 'lead_generated', {
          event_category: 'Workflow Review',
          event_label: 'Submission Success',
          value: 1,
        });
      }

      // Show confirmation state only on success
      setSubmitted(true);
      // Scroll to top to ensure message is seen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Webhook submission failed', error);
      setSubmissionError('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // For Select and Radio inputs, we track on change immediately
    // For text inputs, we'll use onBlur instead to avoid spamming events
    if (
      e.target.tagName === 'SELECT' ||
      (e.target.tagName === 'INPUT' && (e.target as HTMLInputElement).type === 'radio')
    ) {
      trackStepCompletion(name, value);
    }
  };

  const trackStepCompletion = (stepName: string, stepValue: string) => {
    if ((window as any).gtag && stepValue) {
      (window as any).gtag('event', 'step_complete', {
        step_name: stepName,
        step_value: stepValue,
      });
    }
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
          <SelectField
            label="Which industry best describes your business?"
            name="industry"
            required
            value={formData.industry}
            onChange={handleInputChange}
            options={[
              'Home Services (HVAC, Plumbing, Solar, etc.)',
              'Construction / General Contracting',
              'Professional Services',
              'Real Estate / Property Management',
              'Marketing Agency',
              'Other',
            ]}
          />

          {/* Question 2: Main Problem */}
          <RadioGroup
            label="What’s the main problem you’re trying to fix right now?"
            name="main_problem"
            required
            value={formData.main_problem}
            onChange={handleInputChange}
            options={[
              'Leads aren’t followed up fast enough',
              'Missed calls or inquiries slipping through',
              'Too much manual admin work',
              'No clear system to track leads',
              'Other',
            ]}
          />

          {/* Question 3: Leads per Month */}
          <RadioGroup
            label="About how many new leads do you get per month?"
            name="monthly_leads"
            required
            value={formData.monthly_leads}
            onChange={handleInputChange}
            layout="grid"
            options={['Fewer than 10', '10–30', '30–75', '75+', 'Not sure']}
          />

          {/* Question 4: Breaking Down */}
          <TextAreaField
            label="What’s currently breaking down or costing you the most time or money?"
            name="breakdown_cost"
            required
            placeholder="Briefly describe the bottleneck..."
            value={formData.breakdown_cost}
            onChange={handleInputChange}
            onBlur={(e) => trackStepCompletion(e.target.name, e.target.value)}
          />

          {/* New Question: Email */}
          <InputField
            label="Email (so we can send your booking details)"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={(e) => trackStepCompletion(e.target.name, e.target.value)}
          />

          {submissionError && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-200 text-center">
              {submissionError}
            </div>
          )}

          {/* Honeypot Field - Hidden */}
          <div className="hidden">
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 bg-white text-black font-bold rounded-full transition-all shadow-lg text-lg mt-4 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyan-400 active:scale-95'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkflowReview;
