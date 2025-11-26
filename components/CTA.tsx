
import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { useLanguage } from './LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="cta" className="pt-12 pb-24 lg:pb-40 text-center">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="relative bg-[#0D121B] border border-accentGold/30 p-10 md:p-16 lg:p-24 rounded-3xl max-w-[1000px] mx-auto overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accentGold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0077B6]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
                <h2 className="font-headings font-bold text-[1.8rem] md:text-[3rem] text-white mb-8 leading-tight">
                  {t.cta.title}
                </h2>
                <p className="max-w-[700px] mx-auto mb-12 text-[17px] text-gray-300 font-light leading-relaxed">
                  {t.cta.desc}
                </p>
                <a 
                  href="mailto:invest@synapseai.com?subject=Investment Inquiry" 
                  className="inline-flex justify-center items-center px-12 py-4 bg-gradient-to-r from-accentGold to-[#CFB53B] text-black rounded-full font-bold text-[1rem] uppercase tracking-wide shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]"
                >
                  {t.cta.btn}
                </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;