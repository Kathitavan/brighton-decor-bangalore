// src/components/about/Timeline.jsx
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { Sparkles, Compass, Layers, ShieldCheck, Globe, Trophy } from 'lucide-react';

const milestones = [
  {
    year: '2022',
    title: 'Founded in Bangalore',
    subtitle: 'Origins of Brighton Decor',
    desc: 'Brighton Decor Private Limited launched in Bangalore, Karnataka, bringing bespoke window blinds and precision on-site measurement to discerning homeowners.',
    icon: Compass,
  },
  {
    year: '2023',
    title: 'Vinayaka Nagar Physical Showroom',
    subtitle: 'Open 7 Days a Week',
    desc: "Opened our physical showroom at 2nd 'C' Cross, Vinayaka Nagar, Bangalore - 560030, displaying 1m x 1m fabric swatches and working window systems.",
    icon: Sparkles,
  },
  {
    year: '2024',
    title: 'Dream Curtains & Smart Motorization',
    subtitle: 'Somfy & Tuya Integration',
    desc: 'Introduced our signature walk-through Dream Curtains alongside remote and app-controlled Somfy & Tuya motorized shading across all blind categories.',
    icon: Layers,
  },
  {
    year: '2025',
    title: '3D Room Studio & 3–4 Day Delivery',
    subtitle: 'Speed Meets Visualization',
    desc: 'Unveiled our interactive 3D Room Studio and streamlined custom manufacturing in Bangalore to guarantee a 3–4 day turnaround with ₹250 installation.',
    icon: ShieldCheck,
  },
  {
    year: '2025',
    title: 'Karnataka & South India Reach',
    subtitle: 'Luxury Villas & Tech Parks',
    desc: 'Expanded residential and executive commercial installations across Indiranagar, Whitefield, Sadashivanagar, HSR Layout, and South India.',
    icon: Globe,
  },
  {
    year: '2026',
    title: '500+ Projects Completed',
    subtitle: '100% Satisfaction & 5–7 Yr Warranty',
    desc: 'Celebrated 500+ completed projects across Bangalore and South India with an unbroken 100% customer satisfaction record.',
    icon: Trophy,
  },
];

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 14;
    const rotateY = (centerX - x) / 14;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`will-change-transform transform-gpu relative ${className}`}
    >
      {children}
      {isHovered && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A55A]/15 via-transparent to-transparent pointer-events-none transition-opacity duration-300" />
      )}
    </div>
  );
};

const TimelineItem = ({ milestone, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, margin: '-100px' });
  const IconComponent = milestone.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center gap-8 md:gap-0 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } my-12 md:my-16`}
    >
      <div className={`flex-1 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
        <TiltCard className="backdrop-blur-xl bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] group hover:border-[#C9A55A]/50 transition-colors duration-500">
          <div className={`flex items-center gap-3 mb-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#C9A55A] bg-[#C9A55A]/10 px-3 py-1 rounded-full border border-[#C9A55A]/20">
              {milestone.year}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
              {milestone.subtitle}
            </span>
          </div>

          <h3 className="font-serif text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-[#C9A55A] transition-colors duration-300">
            {milestone.title}
          </h3>

          <p className="text-white/70 text-sm md:text-base font-sans font-light leading-relaxed">
            {milestone.desc}
          </p>
        </TiltCard>
      </div>

      <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div
          animate={isInView ? { scale: [1, 1.25, 1], opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${
            isInView
              ? 'bg-[#0F0E0C] border-[#C9A55A] text-[#C9A55A] shadow-[0_0_25px_rgba(201,165,90,0.6)]'
              : 'bg-[#1F1D1A] border-white/20 text-white/40'
          }`}
        >
          <IconComponent size={20} />

          {isInView && (
            <span className="absolute inset-0 rounded-full bg-[#C9A55A]/30 animate-ping pointer-events-none" />
          )}
        </motion.div>
      </div>

      <div className="hidden md:block flex-1" />
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#0F0E0C] text-white overflow-hidden"
      aria-label="Company timeline"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C9A55A]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#C9A55A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#C9A55A]/10 border border-[#C9A55A]/25 mb-4"
          >
            <Sparkles size={14} className="text-[#C9A55A]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A55A]">
              Our Bangalore Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Milestones of Craftsmanship &amp; <br />
            <span className="italic text-[#C9A55A]">Architectural Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-sans font-light text-base"
          >
            From our 2022 founding in Bangalore to 500+ luxury residences and commercial spaces across South India.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#C9A55A] via-[#FFF3E0] to-[#C9A55A] origin-top -translate-x-1/2 shadow-[0_0_15px_#C9A55A]"
          />

          <div className="relative z-10">
            {milestones.map((milestone, idx) => (
              <TimelineItem
                key={milestone.year + idx}
                milestone={milestone}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
