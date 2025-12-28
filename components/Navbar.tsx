import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        // Smooth scroll if already on home
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home with hash
        navigate('/' + href);
      }
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { name: 'AI Agents', href: '#solutions' },
    { name: 'Automations', href: '#solutions' },
    { name: 'Use Cases', href: '#why-us' },
    { name: 'Case Studies', href: '#case-studies' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center space-x-2 group cursor-pointer"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-sm transition-transform duration-500 group-hover:rotate-[360deg]">
            <img
              src="/logos/geometric_mark.png"
              alt="Epiphany Dynamics Logo"
              className="w-full h-full object-contain mix-blend-screen"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter leading-none">EPIPHANY</span>
            <span className="text-xs font-light tracking-[0.2em] leading-none text-gray-400">
              DYNAMICS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors uppercase cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              if (location.pathname === '/') {
                document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#solutions');
              }
            }}
            className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-cyan-400 transition-all active:scale-95 duration-200"
          >
            CONTACT US
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
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
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium tracking-wide text-gray-300 border-b border-zinc-900 pb-2 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              if (location.pathname === '/') {
                document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#solutions');
              }
            }}
            className="w-full bg-white text-black font-bold py-4 rounded-full"
          >
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
