import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../context/LanguageContext';

const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="py-24 lg:py-40 border-b border-white/5 overflow-hidden relative bg-[#06080C]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.03),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="font-headings font-bold text-3xl md:text-6xl mb-6 text-center leading-[1.1] tracking-tight text-white">
            {t.roadmap.title} <span className="text-metallic">{t.roadmap.titleAccent}</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-[700px] mx-auto mb-24 text-center font-light">
            {t.roadmap.subtitle}
          </p>
        </FadeIn>

        {/* Futuristic Timeline Layout */}
        <div className="relative max-w-[1000px] mx-auto">
          
          {/* Central Data Stream Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-gradient-to-b from-transparent via-goldMid/40 to-transparent">
             <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-goldLight to-transparent animate-pulse opacity-50"></div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {t.roadmap.phases.map((phase, index) => {
              const isRight = index % 2 !== 0; // Alternate sides on desktop
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isRight ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* The Node on the Line */}
                  <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#050608] border border-goldMid shadow-[0_0_15px_rgba(191,149,63,0.6)] z-20 group-hover:scale-125 group-hover:bg-goldMid transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-goldMid animate-ping opacity-20"></div>
                  </div>

                  {/* Connecting Beam */}
                  <div className={`hidden md:block absolute top-1/2 h-[1px] bg-gradient-to-r from-goldMid/50 to-transparent w-[50px] transition-all duration-500 group-hover:w-[80px] group-hover:from-goldLight
                    ${isRight ? 'left-1/2' : 'right-1/2 scale-x-[-1]'}
                  `}></div>

                  {/* Spacer for Desktop Alignment */}
                  <div className="flex-1 hidden md:block" />

                  {/* Content Card */}
                  <div className="flex-1 pl-12 md:pl-0 md:px-16 w-full">
                    <FadeIn direction={isRight ? 'left' : 'right'} delay={index * 0.1}>
                      <div className={`
                        relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl 
                        transition-all duration-500 hover:border-goldMid/40 hover:bg-white/[0.05] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
                        group-hover:translate-x-2 md:group-hover:translate-x-0 md:group-hover:-translate-y-2
                      `}>
                        {/* Decorative Corner */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-goldMid/30 rounded-tl-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="text-goldMid font-bold text-sm tracking-widest uppercase mb-2 opacity-80">{`Phase 0${index + 1}`}</div>
                        <h3 className="font-headings font-bold text-xl md:text-2xl mb-4 text-white group-hover:text-goldLight transition-colors">
                          {phase.title.split(':')[1] || phase.title}
                        </h3>
                        
                        <ul className="space-y-3">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-400 text-[15px] font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-goldMid shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;