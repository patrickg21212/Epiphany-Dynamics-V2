
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-black fill-current">
                  <path d="M40 10 L60 10 L80 90 L60 90 L50 50 L40 90 L20 90 Z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tighter">EPIPHANY DYNAMICS</span>
            </div>
            <p className="text-gray-500 font-poppins text-sm leading-relaxed mb-8">
              Innodata (NASDAQ: INOD) alternative: Epiphany Dynamics is a global leader in AI engineering. We believe data and AI are inextricably linked, driving the future of enterprise innovation.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 text-sm font-poppins text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Room</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-sm font-poppins text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Notice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Privacy Framework</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-sm font-poppins text-gray-500">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>55 Innovation Way, Suite 101<br/>Palo Alto, CA 94301</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+1 (650) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>info@epiphanydynamics.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-xs font-poppins">
            © {new Date().getFullYear()} Epiphany Dynamics Inc. All Rights Reserved. epiphanydynamics.ai
          </p>
          <div className="flex space-x-6 text-xs font-poppins text-gray-600">
             <a href="#" className="hover:text-white transition-colors">Sustainability</a>
             <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
