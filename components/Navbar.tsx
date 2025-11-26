import React, { useState, useEffect } from 'react';
import { FaAtom, FaBars, FaTimes, FaTwitter, FaLinkedinIn, FaTelegramPlane, FaEnvelope, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close language menu when clicking outside (handled via backdrop for simplicity)
  const closeLangMenu = () => setIsLangMenuOpen(false);

  const navLinks = [
    { name: t.nav.about, href: '#' },
    { name: t.nav.opportunity, href: '#opportunity' },
    { name: t.nav.model, href: '#business-model' },
    { name: t.nav.roadmap, href: '#roadmap' },
    { name: t.nav.team, href: '#team' },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, href: 'https://x.com/YourUsername' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com/company/YourCompany' },
    { icon: <FaTelegramPlane />, href: 'https://t.me/YourChannel' },
    { icon: <FaEnvelope />, href: 'mailto:invest@synapseai.com' },
  ];
  
  const langs = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文' }
  ];

  const currentLangLabel = langs.find(l => l.code === language)?.label || 'English';

  return (
    <>
      <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1100px] z-50">
        <nav className="relative bg-[#0D121B]/70 backdrop-blur-xl saturate-[1.8] border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] rounded-full px-4 md:px-6 h-[56px] md:h-[60px] flex justify-between items-center transition-all duration-300 hover:border-white/20 hover:bg-[#0D121B]/80">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-headings font-bold text-base md:text-lg text-white hover:text-goldLight transition-colors">
            <FaAtom className="text-goldMid text-lg md:text-xl animate-spin-slow" style={{ animationDuration: '10s' }} />
            <span className="tracking-tight">SynapseAI</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-6 xl:gap-8 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-white/70 font-medium text-[12px] xl:text-[13px] uppercase tracking-wider transition-all duration-300 hover:text-goldLight hover:shadow-gold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            
            {/* Premium Language Switcher */}
            <div className="relative z-50">
                <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] md:text-[11px] font-bold text-gray-300 transition-all active:scale-95 group"
                >
                    <FaGlobe className="text-goldMid group-hover:text-goldLight transition-colors" />
                    <span className="uppercase hidden sm:inline-block tracking-wide">{currentLangLabel}</span>
                    <span className="uppercase sm:hidden tracking-wide">{language}</span>
                    <FaChevronDown className={`text-[8px] transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                    {isLangMenuOpen && (
                        <>
                            <div className="fixed inset-0 z-40 bg-transparent" onClick={closeLangMenu} />
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-[calc(100%+8px)] right-0 w-[140px] bg-[#0A0E15]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-1.5 z-50 flex flex-col gap-1 ring-1 ring-white/5"
                            >
                                {langs.map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => {
                                        setLanguage(l.code as any);
                                        closeLangMenu();
                                    }}
                                    className={`flex items-center justify-between w-full px-3 py-2.5 text-[11px] font-medium rounded-xl transition-all ${
                                    language === l.code
                                        ? 'bg-goldMid/10 text-goldLight border border-goldMid/20'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                                    }`}
                                >
                                    <span>{l.label}</span>
                                    {language === l.code && <div className="w-1.5 h-1.5 rounded-full bg-goldMid shadow-[0_0_8px_#BF953F]"></div>}
                                </button>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="#cta" 
                className="hidden lg:inline-block px-4 py-2 border border-goldMid/30 text-goldMid rounded-full font-semibold text-[10px] uppercase tracking-widest transition-all duration-300 hover:bg-goldMid hover:text-black hover:border-goldMid hover:shadow-gold"
              >
                {t.nav.partner}
              </a>
              <a 
                href="https://app.synapseairwa.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-goldMid to-goldDark text-black rounded-full font-bold text-[10px] uppercase tracking-widest shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-goldGlow"
              >
                {t.nav.dapp}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white text-lg z-[60] relative focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, y: -20, filter: 'blur(10px)' }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-[80px] right-[2.5%] w-[95%] max-w-[340px] bg-[#0A0E15]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 z-50 flex flex-col gap-6 shadow-2xl lg:hidden origin-top-right ring-1 ring-white/5"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + (i * 0.05) }}
                  >
                    <a 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-[15px] font-semibold py-3 px-4 rounded-xl text-white/80 hover:bg-white/5 hover:text-goldLight transition-all"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3 }}
                className="flex justify-between items-center px-4 pt-4 border-t border-white/10"
              >
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-textSecondary text-lg transition-all active:scale-95 hover:bg-goldMid hover:text-black"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;