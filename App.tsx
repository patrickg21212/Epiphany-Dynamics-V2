
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCarousel from './components/LogoCarousel';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Stats from './components/Stats';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-12 bg-black overflow-hidden">
          <div className="container mx-auto px-4 mb-8 text-center">
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">Trusted by the World's Leading Tech Innovators</p>
          </div>
          <LogoCarousel />
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
      </main>

      <Footer />
      
      {/* Sticky Call to Action for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-lg border-t border-zinc-800 z-50">
        <button className="w-full bg-white text-black font-bold py-4 rounded-full shadow-lg active:scale-95 transition-transform">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default App;
