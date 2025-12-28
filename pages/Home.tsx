import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import LogoCarousel from '../components/LogoCarousel';
import Solutions from '../components/Solutions';
import Features from '../components/Features';
import Stats from '../components/Stats';
import CaseStudies from '../components/CaseStudies';

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Handle hash scrolling on mount (if navigating from another page)
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className="flex-grow">
      <Hero />

      <section className="py-8 bg-black overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">
            Platforms We Build With
          </p>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-4">
            We design and deploy automations using modern, battle-tested AI and workflow platforms.
          </p>
        </div>
        <LogoCarousel />
        <div className="container mx-auto px-4 mt-6 text-center">
          <p className="text-zinc-800 text-[10px] uppercase tracking-wider">
            Logos are trademarks of their respective owners. No official affiliation or endorsement
            is implied.
          </p>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-zinc-950">
        <Solutions />
      </section>

      <section id="why-us" className="py-24 bg-black border-y border-zinc-800">
        <Features />
      </section>

      <section className="py-24 bg-zinc-950">
        <Stats />
      </section>

      <section id="case-studies" className="py-24 bg-black">
        <CaseStudies />
      </section>

      <section className="py-24 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="p-12 bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-3xl font-bold mb-4 text-white">Ready to Automate Real Work with AI?</h4>
              <p className="text-gray-400 font-poppins">
                We design and deploy custom AI automations and agent workflows tailored to your existing
                tools, data, and processes.
              </p>
            </div>
            <button
              onClick={() => navigate('/workflow-review')}
              className="px-12 py-5 bg-cyan-500 text-black font-black rounded-full hover:bg-white transition-all shadow-lg active:scale-95 whitespace-nowrap"
            >
              Request a Workflow Review
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Call to Action for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-lg border-t border-zinc-800 z-50">
        <button
          className="w-full bg-white text-black font-bold py-4 rounded-full shadow-lg active:scale-95 transition-transform"
          onClick={() => navigate('/workflow-review')}
        >
          Request a Workflow Review
        </button>
      </div>
    </main>
  );
};

export default Home;
