
import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Opportunity from './components/Opportunity';
import BusinessModel from './components/BusinessModel';
import InvestmentFocus from './components/InvestmentFocus';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { BackToTop } from './components/ui/BackToTop';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="relative font-main bg-bgDark text-textPrimary overflow-x-hidden min-h-screen selection:bg-goldMid selection:text-black">
        
        {/* Cinematic Grain Overlay */}
        <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] bg-noise mix-blend-overlay"></div>
        
        {/* Premium Ambient Background Effects */}
        <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#0077B6] rounded-full blur-[180px] opacity-[0.06] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#BF953F] rounded-full blur-[180px] opacity-[0.04] pointer-events-none z-0" />
        
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Opportunity />
            <BusinessModel />
            <InvestmentFocus />
            <Roadmap />
            <Team />
            <CTA />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;