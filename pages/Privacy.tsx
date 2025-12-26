import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        <div className="space-y-6 text-gray-400 font-poppins">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. Information Collection</h2>
            <p>
              We collect information that you voluntarily provide to us, including your name, email
              address, and any details submitted through our contact forms or audit tools. We may
              also collect basic usage data through cookies to understand how visitors interact with
              our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your inquiries and provide requested services.</li>
                <li>Deliver custom automation plans and audit results.</li>
                <li>Improve our website functionality and user experience.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Information Sharing</h2>
            <p>
              We do not sell your personal data. We may share your information with trusted
              third-party service providers who assist us in operating our website and conducting
              our business, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{' '}
              <a
                href="mailto:patrick@epiphanydynamics.ai"
                className="text-cyan-500 hover:text-white transition-colors"
              >
                patrick@epiphanydynamics.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
