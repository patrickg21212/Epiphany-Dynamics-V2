
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Generative AI', href: '#solutions' },
    { name: 'Traditional AI', href: '#solutions' },
    { name: 'Enterprises', href: '#why-us' },
    { name: 'Resources', href: '#' },
    { name: 'Case Studies', href: '#case-studies' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm transition-transform duration-500 group-hover:rotate-[360deg]">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-black fill-current">
              <path d="M40 10 L60 10 L80 90 L60 90 L50 50 L40 90 L20 90 Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter leading-none">EPIPHANY</span>
            <span className="text-xs font-light tracking-[0.2em] leading-none text-gray-400">DYNAMICS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-cyan-400 transition-all active:scale-95 duration-200">
            CONTACT US
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-zinc-800 p-6 flex flex-col space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium tracking-wide text-gray-300 border-b border-zinc-900 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-white text-black font-bold py-4 rounded-full">
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
