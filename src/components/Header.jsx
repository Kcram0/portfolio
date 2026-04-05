import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#anchor-hero', active: true },
    { name: 'Projects', href: '#anchor-skills' },
    { name: 'Workflow', href: '#anchor-achievements' },
    { name: 'Certifications', href: '#anchor-contact' },
  ];

  return (
    <header className={`site-header sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b0f19]/90 backdrop-blur-xl border-b border-white/8 py-3' : 'bg-transparent py-4'}`}>
      <div className="flex justify-between items-center px-[4vw]">
        <div className="logo tech-text text-base text-[#F8FAFC]">RAMCHANDRA KADIYA</div>

        {/* Mobile Toggle */}
        <div className="md:hidden cursor-pointer z-60" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-[#F8FAFC]" /> : <Menu className="text-[#F8FAFC]" />}
        </div>

        {/* Navigation */}
        <nav className={`nav md:flex gap-6 items-center flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#131a2a] md:bg-transparent border-b md:border-b-0 border-white/8 transition-all duration-400 overflow-hidden ${isOpen ? 'max-h-[400px] py-6' : 'max-h-0 md:max-h-none py-0'}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`tech-link no-underline text-xs tracking-widest font-mono transition-colors hover:text-[#F8FAFC] ${link.active ? 'text-[#F8FAFC]' : 'text-[#94A3B8]'}`}>{link.name}</a>
          ))}
          <a href="/contact.html" className="tech-btn text-xs tracking-widest px-4 py-2 mt-4 md:mt-0">Contact Me</a>
          <a href="#" className="primary-btn text-xs tracking-widest flex items-center gap-2 px-4 py-2 mt-2 md:mt-0 shadow-lg shadow-white/5">
            <Download size={14} /> Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
