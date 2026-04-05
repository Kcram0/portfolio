import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="anchor-contact" className="contact-section mt-16 px-[6vw] max-w-[800px] mx-auto text-center border-t border-white/8 pt-16">
      <h2 className="text-3xl font-bold font-mono tracking-tight text-[#F8FAFC]">Contact Information</h2>
      <p className="text-[#94A3B8] text-sm mt-3 uppercase tracking-widest font-mono">Feel free to reach out for collaborations, opportunities, or cybersecurity discussions.</p>

      <div className="contact-details mt-12 flex flex-col gap-4 items-center">
        <div className="contact-item flex gap-4 items-center bg-black/20 p-4 rounded-xl border border-white/8 w-full max-w-[450px] justify-between group transition-all hover:bg-black/30">
          <span className="text-[#F59E0B] font-mono text-xs tracking-widest uppercase flex items-center gap-2 pr-4 border-r border-white/10 h-full"><Mail size={14} /> EMAIL_SYS</span>
          <a href="mailto:chanram.620@gmail.com" className="body-text text-[#F8FAFC] no-underline transition-all hover:text-blue-400 font-mono text-sm">chanram.620@gmail.com</a>
        </div>
        <div className="contact-item flex gap-4 items-center bg-black/20 p-4 rounded-xl border border-white/8 w-full max-w-[450px] justify-between group transition-all hover:bg-black/30">
          <span className="text-[#F59E0B] font-mono text-xs tracking-widest uppercase flex items-center gap-2 pr-4 border-r border-white/10 h-full"><Phone size={14} /> COMM_LINK</span>
          <span className="body-text text-[#F8FAFC] font-mono text-sm">+1 (201) 589-7830</span>
        </div>
      </div>

      <div className="contact-buttons mt-12 flex justify-center gap-4 flex-wrap">
        <a href="mailto:chanram.620@gmail.com" className="tech-btn px-6 py-3 flex items-center gap-2">Email Me</a>
        <a href="https://www.linkedin.com/in/ramchandrakadiya/" target="_blank" className="primary-btn px-6 py-3 flex items-center gap-2 shadow-lg shadow-white/5"><Linkedin size={16} /> LinkedIn</a>
        <a href="https://github.com/Kcram0" target="_blank" className="glass-btn px-6 py-3 flex items-center gap-2"><Github size={16} /> GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
