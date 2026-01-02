import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Mobile Check
    const checkMobile = () => {
      // Check if width is < 768 or if connection is slow (if supported)
      const isSmallScreen = window.innerWidth < 768;
      const connection = (navigator as any).connection;
      const isSlowConnection =
        connection &&
        (connection.saveData ||
          connection.effectiveType === '2g' ||
          connection.effectiveType === '3g');

      setIsMobile(isSmallScreen || isSlowConnection);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Intersection Observer for GPU Efficiency
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Lazy load the 3D model if not mobile
    if (!isMobile) {
      const img = new Image();
      img.src = '/logos/3d_lightbulb.svg';
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium tracking-widest text-cyan-400 uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Intelligence Redefined</span>
          </div>
          {/* Headline - prioritized by virtue of being static HTML */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 text-glow-white">
            Design, Deploy, and Scale{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-zinc-500">
              AI Automations
            </span>{' '}
            That Actually Run in Production.
          </h1>
          <p className="text-xl text-gray-400 font-poppins leading-relaxed mb-10 max-w-2xl">
            We build custom AI automations, agent workflows, and LLM-powered systems that integrate
            directly into real business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/workflow-review')}
              className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 text-lg"
            >
              Request a Workflow Review
            </button>
          </div>
        </div>

        {/* Right Content - Abstract Tech Visual */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* The Stylized '1' / Bolt Logo from description */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div
              className="relative z-10 w-full h-full p-12 flex items-center justify-center group overflow-hidden mobile-symbol-container"
              style={{ isolation: 'isolate' }}
            >
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] pointer-events-none"
              >
                {/* Circuit lines */}
                <g stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.6">
                  <path
                    d="M50 40 H30 M45 60 H20 M55 80 H25 M40 100 H15"
                    className="animate-pulse"
                  />
                  <path
                    d="M150 40 H170 M155 60 H180 M145 80 H175 M160 100 H185"
                    className="animate-pulse delay-500"
                  />
                </g>
                {/* Glowing nodes */}
                <circle cx="25" cy="40" r="2" fill="cyan" className="animate-ping" />
                <circle cx="15" cy="100" r="2" fill="white" className="animate-ping delay-300" />
                <circle cx="185" cy="100" r="2" fill="cyan" className="animate-ping delay-700" />
              </svg>

              {/* Static Fallback / Mobile Image - Optimized WebP */}
              <img
                src="/logos/3d_lightbulb.webp"
                alt="Epiphany Dynamics 3D Symbol Placeholder"
                width={512}
                height={512}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${isLoaded && !isMobile ? 'opacity-0' : 'opacity-100'} ${isInView ? 'animate-float' : ''}`}
                loading="eager"
              />

              {/* Heavy 3D SVG - Only loads if not mobile */}
              {!isMobile && (
                <img
                  src="/logos/3d_lightbulb.svg"
                  alt="Epiphany Dynamics 3D Symbol"
                  width={512}
                  height={512}
                  loading="lazy"
                  className={`relative z-10 w-full h-full object-contain transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isInView ? 'animate-float' : ''}`}
                />
              )}
            </div>

            {/* Animated float items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
