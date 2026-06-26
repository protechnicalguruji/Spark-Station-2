/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>('home');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeRoute]);

  const renderPage = () => {
    switch (activeRoute) {
      case 'home':
        return <HomePage onRouteChange={setActiveRoute} />;
      case 'services':
        return <ServicesPage onRouteChange={setActiveRoute} />;
      case 'portfolio':
        return <PortfolioPage onRouteChange={setActiveRoute} />;
      case 'team':
        return <TeamPage onRouteChange={setActiveRoute} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onRouteChange={setActiveRoute} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-[#c9d1d9] selection:bg-[#58A6FF]/30 selection:text-white">
      <Navbar activeRoute={activeRoute} onRouteChange={setActiveRoute} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer onRouteChange={setActiveRoute} />
      <Analytics />
    </div>
  );
}

