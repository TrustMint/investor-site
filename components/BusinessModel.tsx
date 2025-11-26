
import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { FaPercentage, FaDatabase, FaCoins, FaHandsHelping } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const BusinessModel: React.FC = () => {
  const { t } = useLanguage();
  
  const icons = [<FaPercentage />, <FaDatabase />, <FaCoins />, <FaHandsHelping />];

  return (
    <section id="business-model" className="py-24 lg:py-36 bg-[#080B10] border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.03),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="font-headings font-bold text-3xl md:text-5xl mb-6 text-center leading-tight tracking-tight text-white">
            {t.model.title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-[800px] mx-auto mb-16 text-center font-light">
            {t.model.subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {t.model.items.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="group h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 border border-transparent rounded-2xl [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] z-0 group-hover:border-goldMid/30 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="text-[28px] text-goldLight mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-goldMid/30 transition-all duration-500">
                      {icons[index]}
                    </div>
                    
                    <h4 className="font-headings font-bold text-xl mb-4 text-white group-hover:text-goldLight transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-400 text-[15px] leading-relaxed flex-grow font-light group-hover:text-gray-300 transition-colors">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;