import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a, button, .interactive-card, .btn')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    // Scroll Reveal Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-[cubic-bezier(0.16,1,0.3,1)]');
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Inline style for reveal logic since Tailwind v4 is CSS-based now
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      section.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="app-container relative">
      {/* Background Ambient Glows */}
      <div className="ambient-glow fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] z-[-1] opacity-60 bg-[radial-gradient(circle,rgba(37,99,235,0.4)_0%,transparent_60%)]" />
      <div className="ambient-glow fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] z-[-1] opacity-60 bg-[radial-gradient(circle,rgba(15,23,42,0.8)_0%,transparent_70%)]" />

      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className={`custom-cursor z-[9999] transition-transform duration-150 ease-out ${isHovered ? 'scale-[1.5] bg-white/10 border-white/80' : ''}`}
      />

      <Header />
      <Hero />
      <SkillsGrid />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
