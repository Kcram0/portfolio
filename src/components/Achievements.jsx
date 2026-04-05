import React from 'react';

const AchievementCard = ({ title, sub, desc, type }) => {
  const isWinner = type === 'success';

  return (
    <article className="achievement-card flex flex-col p-8 glass-panel interactive-card bg-white/3 border border-white/8 rounded-2xl group transition-all duration-300">
      <div className={`card-status w-2 h-2 rounded-full mb-4 shadow-[0_0_10px_currentColor] ${isWinner ? 'bg-emerald-500 text-emerald-500' : 'bg-blue-500 text-blue-500'}`} />
      <h3 className="font-mono text-lg font-bold text-[#F8FAFC] tracking-tight uppercase group-hover:text-blue-400 transition-colors uppercase">{title}</h3>
      <p className="achievement-sub text-[#F59E0B] font-mono text-xs tracking-widest uppercase mt-1">{sub}</p>
      <p className="achievement-desc text-sm text-[#94A3B8] mt-4 leading-relaxed font-sans">{desc}</p>
    </article>
  );
};

const Achievements = () => {
  const items = [
    {
      title: "AI Chatbot Hackathon",
      sub: "Certificate of Participation",
      type: "active",
      desc: "Participated in a fast‑paced AI hackathon where I collaborated with a teammate to design and deploy an intelligent chatbot using Google’s Gemini API and Streamlit. The project involved prompt engineering, real‑time response handling, and UI integration. The event also featured mentorship from Google speakers, providing valuable insights into modern AI development workflows and best practices."
    },
    {
      title: "Sunflower Hackathon",
      sub: "2nd Prize Winner",
      type: "success",
      desc: "Secured 2nd place for developing “Progress Timeline,” an interactive academic planning platform designed to help students visualize weekly progress, track assignments, and manage deadlines. The system featured color‑coded task indicators, automated study suggestions, midterm/final markers, and email‑based progress summaries. This project demonstrated my ability to combine UI/UX design, problem‑solving, and full‑stack development under time‑constrained conditions."
    }
  ];

  return (
    <section id="anchor-achievements" className="achievements-section mt-16 px-[6vw]">
      <div className="section-header text-center mb-12">
        <h2 className="text-3xl font-bold font-mono tracking-tight text-[#F8FAFC]">Achievements</h2>
        <p className="text-[#94A3B8] text-sm mt-3 uppercase tracking-widest font-mono">Milestones that reflect my growth, innovation, and hands-on cybersecurity journey.</p>
      </div>

      <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
        {items.map((item, index) => (
          <AchievementCard 
            key={index}
            title={item.title}
            sub={item.sub}
            desc={item.desc}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
