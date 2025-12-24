import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-8 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-sm">
                <img src="/logos/geometric_mark.png" alt="Epiphany Dynamics Logo" className="w-full h-full object-contain mix-blend-screen" />
              </div>
              <span className="text-xl font-bold tracking-tighter">EPIPHANY DYNAMICS</span>
            </Link>
            <p className="text-gray-500 font-poppins text-sm leading-relaxed mb-8">
              Epiphany Dynamics designs and deploys custom AI automations, agent workflows, and operational systems for modern businesses.
            </p>

          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-sm font-poppins text-gray-500">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-sm font-poppins text-gray-500">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div className="flex flex-col">
                  <span>Patrick Gibbs, Founder</span>
                  <a href="mailto:patrick@epiphanydynamics.ai" className="hover:text-white transition-colors">patrick@epiphanydynamics.ai</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-xs font-poppins">
            © {new Date().getFullYear()} Epiphany Dynamics Inc. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs font-poppins text-gray-600">
            {/* Sitemap removed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
