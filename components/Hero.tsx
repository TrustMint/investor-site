import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { useLanguage } from './LanguageContext';
import { FaPlay } from 'react-icons/fa';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="min-h-[100vh] flex items-center pt-32 pb-20 relative border-none overflow-hidden">
      
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-[#020305] z-0">
          {/* Radial Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0077B6]/20 via-[#050608]/50 to-[#050608] blur-[100px] opacity-40 animate-pulse-slow pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-goldMid/10 via-[#050608]/50 to-[#050608] blur-[120px] opacity-30 pointer-events-none"></div>

          {/* Neural Grid Overlay */}
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                   backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                   backgroundSize: '50px 50px',
                   maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
               }}>
          </div>
          
          {/* Floating Particles (Simulated with simple divs for performance) */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-goldLight rounded-full blur-[1px] animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accentBlue rounded-full blur-[1px] animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full blur-[0px] animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-goldMid/20 rounded-full blur-[4px] animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center z-10 relative">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-goldMid/30 bg-goldMid/5 text-goldLight text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-goldLight animate-pulse"></span>
            Seed Round 2026
          </div>
          
          <h1 className="font-headings font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-8 tracking-tight hidden">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 pb-2">
              {t.hero.title.split(' ').slice(0, 3).join(' ')} {/* Fallback logic for animation split, roughly */}
            </span>
            <span className="block text-metallic drop-shadow-goldGlow">
               {t.hero.title.split(' ').slice(3).join(' ')}
            </span>
            {/* Note: The split logic above is simple; for full localization it might break phrasing, but visual impact remains. 
                Ideally, we just render the title fully. 
            */}
             <span className="sr-only">{t.hero.title}</span>
          </h1>
          {/* Overwrite H1 visual for better localization support: */}
           <div className="absolute inset-0 hidden"></div> 
           {/* Re-rendering H1 cleanly for all languages */}
           <h1 className="font-headings font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-8 tracking-tight absolute inset-0 opacity-0 pointer-events-none">{t.hero.title}</h1>
           
           <div className="font-headings font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-8 tracking-tight">
             <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 pb-2">
               {language === 'en' ? 'Invest in the' : t.hero.title.split(' ')[0]}
             </span>
             <span className="block text-metallic drop-shadow-goldGlow pb-4">
               {language === 'en' ? 'Algorithm of Life.' : t.hero.title.split(' ').slice(1).join(' ')}
             </span>
           </div>

        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="max-w-[760px] mx-auto mb-12 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light tracking-wide mix-blend-plus-lighter">
            {t.hero.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row justify-center items-center gap-5">
           <a 
             href="#cta" 
             className="group relative inline-flex justify-center items-center px-10 py-4 bg-gradient-to-b from-goldLight via-goldMid to-goldDark text-black rounded-full font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(191,149,63,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(191,149,63,0.6)] overflow-hidden border border-goldLight/20"
           >
             <span className="relative z-10 flex items-center gap-2 drop-shadow-md">{t.hero.btnDeck}</span>
             <div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:animate-shimmer" />
           </a>
           
           <a 
             href="#opportunity" 
             className="inline-flex justify-center items-center px-10 py-4 bg-white/5 text-white border border-white/20 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/10 hover:border-goldMid/50 backdrop-blur-md"
           >
             {t.hero.btnMarket}
           </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;