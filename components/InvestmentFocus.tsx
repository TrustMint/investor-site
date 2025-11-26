
import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { FaCogs, FaGavel, FaUsers, FaShieldAlt, FaBullhorn, FaHandshake } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const InvestmentFocus: React.FC = () => {
  const { t } = useLanguage();
  const icons = [<FaCogs />, <FaGavel />, <FaUsers />, <FaShieldAlt />, <FaBullhorn />, <FaHandshake />];

  return (
    <section id="investment-focus" className="py-24 lg:py-36 border-b border-white/5 bg-bgDark">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="font-headings font-bold text-3xl md:text-5xl mb-6 text-center leading-tight tracking-tight text-white">
            {t.focus.title} <span className="text-metallic drop-shadow-gold">{t.focus.titleAccent}</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-[800px] mx-auto mb-16 text-center font-light">
            {t.focus.subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.focus.items.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="group h-full p-8 rounded-2xl bg-[#0A0E14] border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-goldMid/20 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-goldMid/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                <div className="flex items-center gap-4 mb-6">
                   <div className="text-2xl text-goldMid drop-shadow-gold group-hover:text-goldLight transition-colors">
                      {icons[index]}
                   </div>
                   <h4 className="font-headings font-bold text-lg text-white group-hover:text-goldLight transition-colors">{item.title}</h4>
                </div>
                <p className="text-gray-400 text-[15px] leading-relaxed flex-grow font-light border-t border-white/5 pt-4 group-hover:border-white/10 group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentFocus;