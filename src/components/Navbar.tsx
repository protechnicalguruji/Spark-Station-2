import React, { useState } from 'react';
import { Zap, MessageCircle, Menu, X } from 'lucide-react';
import { PageRoute } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  activeRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRoute, onRouteChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Team', route: 'team' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-[#30363d]/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#58A6FF] to-[#8B5CF6] flex items-center justify-center text-white shadow-lg shadow-[#58A6FF]/20 group-hover:scale-105 transition-transform">
            <Zap size={22} className="fill-current" />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-wider text-white block leading-none">
              {AGENCY_INFO.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#58A6FF] font-semibold mt-1 block">
              Agency
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#161b22]/90 p-1.5 rounded-full border border-[#30363d]">
          {navLinks.map((link) => {
            const isActive = activeRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#58A6FF]/20 to-[#8B5CF6]/20 text-white font-semibold border border-[#58A6FF]/40 shadow-sm'
                    : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-[#25D366] text-sm font-medium border border-[#30363d] transition-all"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary text-sm !py-2.5 !px-5"
          >
            <Zap size={16} />
            <span>Start Project</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] text-[#c9d1d9] hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161b22] border-b border-[#30363d] px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeRoute === link.route
                    ? 'bg-[#58A6FF]/15 text-[#58A6FF] font-semibold border border-[#58A6FF]/30'
                    : 'text-[#8b949e] hover:bg-[#21262d] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-[#30363d]">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary w-full justify-center text-base py-3"
            >
              <Zap size={18} />
              <span>Start Project</span>
            </button>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#21262d] text-[#25D366] font-medium border border-[#30363d]"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
