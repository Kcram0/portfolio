import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, desc, className }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card glass-panel interactive-card p-6 flex flex-col justify-center rounded-xl bg-white/3 border border-white/8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(37,99,235,0.4)] ${className}`}
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      <h3 className="font-mono text-base font-semibold text-[#F8FAFC] tracking-widest uppercase relative z-10">{title}</h3>
      {desc && <p className="mt-2 text-sm text-[#94A3B8] relative z-10 leading-relaxed">{desc}</p>}
      <div className="tech-lines h-[2px] w-10 bg-[#F59E0B] mt-auto relative z-10" />
    </article>
  );
};

const SkillsGrid = () => {
  const skills = [
    { title: "Digital Forensics", desc: "Expertise in evidence documentation, forensic tool validation, and extracting critical intelligence from damaged or compromised digital systems.", span: true },
    { title: "Penetration Testing" },
    { title: "Network Security" },
    { title: "Malware Analysis" },
    { title: "Python Scripting & Automation", span: true },
    { title: "OSINT Investigations" },
    { title: "Threat Intelligence" },
    { title: "Vulnerability Assessment" },
  ];

  return (
    <section id="anchor-skills" className="skills-section mt-16 px-[6vw]">
      <div className="section-header text-center mb-12">
        <h2 className="text-3xl font-bold font-mono tracking-tight text-[#F8FAFC]">Technical Skills</h2>
        <p className="text-[#94A3B8] text-sm mt-3 uppercase tracking-widest font-mono">A deeper look into my core cybersecurity and forensic capabilities.</p>
      </div>
      
      <div className="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1200px] mx-auto auto-rows-[150px]">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            title={skill.title} 
            desc={skill.desc} 
            className={`${skill.span ? 'md:col-span-2' : ''} ${skill.desc ? 'md:row-span-2' : ''} group`}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
