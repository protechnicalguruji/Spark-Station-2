import React from 'react';
import { CodeXml, Check, ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';
import { SERVICES, AGENCY_INFO } from '../data/agencyData';
import { PageRoute } from '../types';
import { Icon } from '../components/Icon';
import { CTASection } from '../components/CTASection';

interface ServicesPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onRouteChange }) => {
  return (
    <div className="relative min-h-screen py-20">
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">
        <span className="section-label mb-6">
          <CodeXml size={14} />
          <span>Services Architecture</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Everything You Need to <span className="gradient-text">Build & Scale</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          Comprehensive digital services to help your business thrive online. Custom-built solutions crafted by dedicated specialists — no cookie-cutter packages.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="ss-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#58A6FF]/40"
              style={{
                background: 'linear-gradient(145deg, rgba(22,27,34,1) 0%, rgba(13,17,23,0.8) 100%)',
              }}
            >
              <div>
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform group-hover:scale-105"
                    style={{ background: `${srv.color}15`, color: srv.color, border: `1px solid ${srv.color}30` }}
                  >
                    <Icon name={srv.iconName} size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      {srv.title}
                    </h2>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border inline-block"
                      style={{ background: `${srv.color}10`, color: srv.color, borderColor: `${srv.color}30` }}
                    >
                      Specialized Offering
                    </span>
                  </div>
                </div>

                <p className="text-base text-[#8b949e] leading-relaxed mb-8">
                  {srv.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#30363d]/80 mb-8">
                  {/* Benefits */}
                  <div>
                    <h4
                      className="text-xs font-mono font-bold uppercase tracking-widest mb-3.5 flex items-center gap-2"
                      style={{ color: srv.color }}
                    >
                      <span>Benefits</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {srv.benefits.map((ben, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2.5 text-sm text-[#c9d1d9]">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                            style={{ background: `${srv.color}30` }}
                          >
                            <Check size={12} style={{ color: srv.color }} />
                          </div>
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest mb-3.5 text-[#8b949e]">
                      Ideal Use Cases
                    </h4>
                    <ul className="space-y-2 text-sm text-[#8b949e]">
                      {srv.useCases.map((uc, uIdx) => (
                        <li key={uIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#30363d]" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-[#30363d]/80 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#8b949e]">
                  Delivery timeline: Custom scoped
                </span>
                <button
                  onClick={() => {
                    onRouteChange('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm"
                >
                  <span>Request Quote</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Not Sure Consultation Banner */}
      <section className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
        <div className="ss-card p-10 bg-gradient-to-r from-[#161b22] to-[#21262d] text-center border-[#58A6FF]/30 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-lg">
            <span className="section-label mb-3">
              <HelpCircle size={14} />
              <span>Free Advisory</span>
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Not sure which service you need?
            </h3>
            <p className="text-sm text-[#8b949e]">
              Tell us about your project goals and we'll recommend the optimal tech stack and approach — completely free.
            </p>
          </div>
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-3.5 !px-7 whitespace-nowrap shadow-lg shadow-[#58A6FF]/20"
          >
            <MessageCircle size={18} />
            <span>Get Free Consultation</span>
          </a>
        </div>
      </section>

      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
