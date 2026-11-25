// src/components/about/TeamSection.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Mail, ArrowUpRight } from 'lucide-react';
import { teamMembers } from '../../data/team';

const TeamCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent border border-white/10 rounded-2xl p-6 group hover:border-[#C9A55A]/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_70px_rgba(201,165,90,0.15)] flex flex-col justify-between"
      >
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-[inherit]"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 165, 90, 0.15), transparent 60%)`,
          }}
        />

        <div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 relative bg-[#1F1D1A]">
            <img
              src={member.image}
              alt={`${member.name} — ${member.role}`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              onError={(e) => {
                e.target.src = '/assets/imgs/common/placeholder.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-transparent to-transparent opacity-65" />

            <div className="absolute top-3 right-3 backdrop-blur-md bg-[#0F0E0C]/80 border border-[#C9A55A]/30 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-mono text-[#C9A55A]">
              {member.experience}
            </div>
          </div>

          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A55A] mb-1 block">
            {member.role}
          </span>

          <h3 className="font-serif text-white text-2xl font-bold mb-3 group-hover:text-[#C9A55A] transition-colors duration-300">
            {member.name}
          </h3>

          <p className="text-white/70 font-sans font-light text-sm leading-relaxed mb-6">
            {member.tagline}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
            Bangalore HQ Leadership
          </span>
          <a
            href={`mailto:${member.email || 'Musaib@brightondecor.in'}`}
            aria-label={`Email ${member.name}`}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#C9A55A] hover:text-[#0F0E0C] hover:border-[#C9A55A] transition-colors duration-300"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0F0E0C] text-white overflow-hidden border-t border-white/10"
      aria-label="Leadership team"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#C9A55A]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#C9A55A]/10 border border-[#C9A55A]/25 mb-4"
          >
            <Sparkles size={14} className="text-[#C9A55A]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A55A]">
              Founders &amp; Leadership
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Guided by Visionary <br />
            <span className="italic text-[#C9A55A]">Bangalore Leadership</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-sans font-light text-base"
          >
            Brighton Decor Private Limited is led by founders personally committed to precision craftsmanship across every Bangalore and South India project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.name} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
