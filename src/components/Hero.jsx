import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import avatarImg from '../assets/avatar.png';

const Hero = () => {
  const [nameText, setNameText] = useState('Ramchandra Kadiya');
  const targetText = 'Ramchandra Kadiya';
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    let iteration = 0;
    let interval = setInterval(() => {
      setNameText(prev => 
        targetText.split("").map((letter, index) => {
          if (letter === " ") return " ";
          if (index < iteration) return targetText[index];
          return letters[Math.floor(Math.random() * letters.length)];
        }).join("")
      );
      
      if (iteration >= targetText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="anchor-hero" className="hero grid grid-cols-1 md:grid-cols-2 gap-[4vw] px-[6vw] py-16 items-center">
      <section className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-tags inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-md mb-4"
        >
          <span className="tech-accent text-[10px] tracking-widest uppercase">
            CYBERSECURITY /// DIGITAL FORENSICS /// MALWARE ANALYSIS
          </span>
        </motion.div>

        <h1 className="hero-name text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-none mb-2 font-mono relative group">
          <span className="relative z-10">{nameText}</span>
          <span className="absolute inset-0 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1">Ramchandra Kadiya</span>
          <span className="absolute inset-0 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2">Ramchandra Kadiya</span>
        </h1>
        
        <h2 className="hero-role text-xl md:text-3xl font-light text-[#94A3B8] mb-6">
          Cybersecurity Student & Analyst
        </h2>

        <p className="hero-text text-lg text-[#94A3B8] max-w-[600px] text-left leading-relaxed">
          I’m a cybersecurity graduate student specializing in digital forensics, malware analysis, 
          and network security. I bring hands-on experience in penetration testing, ethical hacking, 
          and threat analysis using tools such as Nmap, Wireshark, Nessus, Metasploit, and Burp Suite.
        </p>

        <div className="hero-actions flex gap-4 mt-8">
          <a href="#anchor-skills" className="primary-btn px-6 py-3 shadow-lg shadow-white/5">View Projects</a>
          <a href="#" className="glass-btn px-6 py-3">Download Resume</a>
        </div>
      </section>

      <section className="hero-visual flex justify-center relative mt-12 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="avatar-container relative rounded-3xl overflow-hidden border border-white/8 shadow-2xl transition-transform hover:scale-[1.02] perspective-[1000px]"
        >
          <img src={avatarImg} className="hero-avatar w-full max-w-[400px] grayscale-[20%] contrast-[1.1] hover:grayscale-0 hover:contrast-100 transition-all duration-500" alt="Ram Avatar" />
          <div className="scanner-line absolute top-0 left-0 w-full h-[2px] bg-[#2563EB] shadow-[0_0_10px_#2563EB,0_0_20px_#2563EB] opacity-50 animate-[scan_4s_linear_infinite]" />
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
