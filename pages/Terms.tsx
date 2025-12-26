import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        <div className="space-y-6 text-gray-400 font-poppins">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. General Information</h2>
            <p>
              The content provided on this website is for general informational purposes only.
              Epiphany Dynamics ("we", "us") makes no representation or warranty of any kind,
              express or implied, regarding the accuracy, adequacy, validity, reliability, or
              completeness of any information on the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. No Guarantees</h2>
            <p>
              Our services involve the deployment of AI technologies which are rapidly evolving.
              While we strive for excellence, we cannot guarantee specific business outcomes,
              revenue increases, or operational efficiencies. Past performance is not indicative of
              future results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Epiphany Dynamics shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses,
              resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Service Agreements</h2>
            <p>
              Any professional services engaged with Epiphany Dynamics will be governed by a
              separate Master Services Agreement (MSA) or Statement of Work (SOW), which shall
              supersede these general terms regarding the specific project delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. Contact</h2>
            <p>
              For any legal notices or questions regarding these Terms, please contact:{' '}
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

export default Terms;
