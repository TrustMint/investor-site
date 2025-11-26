import React from 'react';
import { FaAtom, FaTwitter, FaLinkedinIn, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const socialLinks = [
    { icon: <FaTwitter />, href: 'https://x.com/YourUsername' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com/company/YourCompany' },
    { icon: <FaTelegramPlane />, href: 'https://t.me/YourChannel' },
    { icon: <FaEnvelope />, href: 'mailto:invest@synapseai.com' },
  ];

  return (
    <footer className="py-16 text-center bg-[#030406] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="font-headings text-[24px] font-bold mb-6 flex items-center justify-center gap-2 tracking-tight text-white/90">
          <FaAtom className="text-accentGold" /> SynapseAI
        </div>
        
        <div className="flex justify-center gap-6 mb-10">
          {socialLinks.map((social, idx) => (
            <a 
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 text-lg transition-all duration-300 hover:text-accentGold hover:bg-white/10 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <p className="text-gray-500 text-[12px] leading-relaxed max-w-[600px] mx-auto font-light hover:text-gray-400 transition-colors">
          {t.footer.copy}<br />
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
};

export default Footer;