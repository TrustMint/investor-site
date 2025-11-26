
import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { FaUserAstronaut, FaRobot } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 lg:py-36 border-b border-white/5">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="font-headings font-bold text-3xl md:text-5xl mb-6 text-center leading-tight tracking-tight">
            {t.team.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentGold to-[#FFF] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">{t.team.titleAccent}</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-[800px] mx-auto mb-16 text-center font-light">
            {t.team.subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {t.team.members.map((member, index) => (
             <FadeIn delay={0.1 + (index * 0.1)} className="h-full" key={index}>
              <div className="group h-full flex flex-col items-center text-center p-10 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-accentGold/30 transition-all duration-500 relative overflow-hidden">
                
                {/* Glow behind avatar */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-accentGold blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full mb-8 border-[2px] border-accentGold/50 bg-[#0A0E17] flex justify-center items-center text-[50px] md:text-[60px] text-accentGold transition-all duration-500 shadow-[0_0_20px_rgba(255,215,0,0.1)] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] group-hover:border-accentGold relative z-10">
                  {member.type === 'human' ? <FaUserAstronaut /> : <FaRobot />}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 font-headings text-white group-hover:text-accentGold transition-colors">{member.name}</h3>
                <h4 className="text-[14px] font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-accentGold/20 pb-2 group-hover:text-gray-300">{member.role}</h4>
                <p className="text-gray-400 text-[15px] leading-relaxed flex-grow font-light group-hover:text-gray-300 transition-colors">
                  {member.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;