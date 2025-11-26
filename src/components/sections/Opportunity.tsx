import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { FaCheck } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const Opportunity: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="opportunity" className="py-24 lg:py-36 relative border-b border-white/5">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="font-headings font-bold text-3xl md:text-5xl mb-6 text-center leading-tight tracking-tight">
            {t.opportunity.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentGold to-[#FFF] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">{t.opportunity.titleAccent}</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-[800px] mx-auto mb-16 md:mb-24 text-center font-light leading-relaxed">
            {t.opportunity.subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <FadeIn direction="left">
            <div>
              <h3 className="font-headings font-bold text-2xl mb-4 text-white">{t.opportunity.problemTitle}</h3>
              <p className="text-gray-300 mb-10 text-[16px] md:text-[17px] leading-relaxed border-l-2 border-red-500/50 pl-6">
                {t.opportunity.problemDesc}
              </p>

              <h3 className="font-headings font-bold text-2xl mb-6 mt-12 text-white">{t.opportunity.solutionTitle}</h3>
              <ul className="list-none pl-0 space-y-6">
                {t.opportunity.items.map((item, idx) => (
                  <li key={idx} className="relative pl-10 text-[16px] md:text-[17px] leading-relaxed group">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accentGold/10 flex items-center justify-center border border-accentGold/30 group-hover:border-accentGold/80 transition-colors">
                        <FaCheck className="text-accentGold text-[10px]" />
                    </div>
                    <strong className="text-white font-semibold block mb-1">{item.title}</strong> 
                    <span className="text-gray-400 font-light group-hover:text-gray-300 transition-colors">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Abstract Chart */}
          <FadeIn direction="right" className="w-full">
            <div className="h-[280px] md:h-[340px] w-full relative bg-gradient-to-b from-[#0D121B] to-[#050608] border border-white/10 rounded-2xl p-4 overflow-hidden shadow-2xl">
              {/* Grid Lines */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              <div className="absolute top-6 right-6 font-bold text-accentGold text-xs uppercase tracking-widest px-4 py-2 bg-bgCard/80 backdrop-blur-md border border-accentGold/30 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.1)] z-10">
                {t.opportunity.chartLabel}
              </div>
              
              {/* SVG Chart Line */}
              <svg className="absolute bottom-0 left-0 w-full h-[70%]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                   <linearGradient id="chartGradient" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FFD700" stopOpacity="0.8" />
                   </linearGradient>
                   <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                   </linearGradient>
                </defs>
                <path 
                    d="M0,95 L25,70 L50,40 L75,5 L100,5 V100 H0 Z" 
                    fill="url(#areaGradient)" 
                />
                <polyline 
                  fill="none" 
                  stroke="url(#chartGradient)" 
                  strokeWidth="2" 
                  points="0,95 25,70 50,40 75,5 100,5"
                  className="drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                />
                <circle cx="25" cy="70" r="3" fill="#0D121B" stroke="#FFD700" strokeWidth="2" />
                <circle cx="50" cy="40" r="3" fill="#0D121B" stroke="#FFD700" strokeWidth="2" />
                <circle cx="75" cy="5" r="3" fill="#0D121B" stroke="#FFD700" strokeWidth="2" />
              </svg>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;