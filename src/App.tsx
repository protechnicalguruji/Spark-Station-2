/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { FounderPage } from './pages/FounderPage';
import { TeamMemberProfilePage } from './pages/TeamMemberProfilePage';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Map pathname to PageRoute
  const getActiveRoute = (pathname: string): PageRoute => {
    const decodedPath = decodeURIComponent(pathname);
    if (
      decodedPath === '/shashwat' || 
      decodedPath === '/niket' || 
      decodedPath === '/manas' || 
      decodedPath.startsWith('/team/')
    ) {
      return 'team';
    }
    switch (decodedPath) {
      case '/':
        return 'home';
      case '/services':
        return 'services';
      case '/portfolio':
        return 'portfolio';
      case '/team':
        return 'team';
      case '/founder':
      case '/Saksham Pandey':
      case '/saksham-pandey':
        return 'founder';
      case '/contact':
        return 'contact';
      default:
        return 'home';
    }
  };

  const activeRoute = getActiveRoute(location.pathname);

  // Scroll to top on route change (with fallback if smooth is not desired/supported)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  const handleRouteChange = (route: PageRoute) => {
    if (route === 'home') {
      navigate('/');
    } else if (route === 'founder') {
      navigate('/saksham-pandey');
    } else {
      navigate(`/${route}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-[#c9d1d9] selection:bg-[#58A6FF]/30 selection:text-white">
      <Navbar activeRoute={activeRoute} onRouteChange={handleRouteChange} />
      
      <main className="flex-1 pt-24 md:pt-28 w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage onRouteChange={handleRouteChange} />} />
          <Route path="/services" element={<ServicesPage onRouteChange={handleRouteChange} />} />
          <Route path="/portfolio" element={<PortfolioPage onRouteChange={handleRouteChange} />} />
          <Route path="/team" element={<TeamPage onRouteChange={handleRouteChange} />} />
          <Route path="/founder" element={<FounderPage onRouteChange={handleRouteChange} />} />
          <Route path="/saksham-pandey" element={<FounderPage onRouteChange={handleRouteChange} />} />
          <Route path="/Saksham Pandey" element={<FounderPage onRouteChange={handleRouteChange} />} />
          <Route path="/Saksham%20Pandey" element={<FounderPage onRouteChange={handleRouteChange} />} />
          <Route path="/shashwat" element={<TeamMemberProfilePage onRouteChange={handleRouteChange} />} />
          <Route path="/niket" element={<TeamMemberProfilePage onRouteChange={handleRouteChange} />} />
          <Route path="/manas" element={<TeamMemberProfilePage onRouteChange={handleRouteChange} />} />
          <Route path="/team/:slug" element={<TeamMemberProfilePage onRouteChange={handleRouteChange} />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage onRouteChange={handleRouteChange} />} />
        </Routes>
      </main>

      <Footer onRouteChange={handleRouteChange} />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

