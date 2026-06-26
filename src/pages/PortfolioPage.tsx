import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { AGENCY_INFO } from '../data/agencyData';
import { CTASection } from '../components/CTASection';

interface PortfolioPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onRouteChange }) => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'branding', label: 'Branding & Identity' },
  ];

  return (
    <div className="relative min-h-screen py-20">
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
        <span className="section-label mb-6">
          <Sparkles size={14} className="text-[#58A6FF]" />
          <span>Showcase</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Real Projects, <span className="gradient-text">Real Results</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          A selection of websites, applications, and digital products we've built for our clients. (Showcase gallery is currently undergoing scheduled updates).
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-4xl mx-auto px-6 mb-16 relative z-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeTab === cat.id
                ? 'bg-[#58A6FF] text-white shadow-lg shadow-[#58A6FF]/25'
                : 'bg-[#161b22] text-[#8b949e] hover:text-white border border-[#30363d]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Showcase Container (Placeholder as requested by user) */}
      <section className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
        <div
          className="ss-card p-16 md:p-24 text-center border-dashed border-[#30363d] flex flex-col items-center justify-center bg-[#161b22]/40"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#58A6FF]/10 text-[#58A6FF] flex items-center justify-center mb-6">
            <Sparkles size={32} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Curated Portfolio Being Updated
          </h3>
          <p className="text-base text-[#8b949e] max-w-lg mx-auto mb-8 leading-relaxed">
            As requested, the projects grid will be customized and added here afterwards. Want to review our recent case studies or confidential client references right now?
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !py-3 !px-7"
            >
              <MessageCircle size={18} />
              <span>Request Confidential Deck on WhatsApp</span>
            </a>
            <button
              onClick={() => onRouteChange('contact')}
              className="btn-secondary !py-3 !px-7"
            >
              <span>Submit Project Brief</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
