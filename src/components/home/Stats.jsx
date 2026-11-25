// src/components/home/Stats.jsx
// Section 2: Trust Stats & GST Badge — Onyx & Brushed Bronze (#121212)
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Building2, Clock } from 'lucide-react';
import { company } from '../../config/company';

const stats = [
  { value: '500+', label: 'Completed Projects', sub: 'Bangalore & South India' },
  { value: '4+', label: 'Years of Craftsmanship', sub: 'Est. 2022' },
  { value: '100%', label: 'Satisfaction Rate', sub: 'Zero-Compromise Fit' },
  { value: '5–7 Yrs', label: 'Window Warranty', sub: '3–4 Days Lead Time' },
];

const KineticCountUp = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    if (value.includes('–') || value.includes('-') || /[a-zA-Z]/.test(value)) {
      setDisplayValue(value);
      return;
    }

    const numericStr = value.replace(/[^0-9]/g, '');
    if (!numericStr) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericStr, 10);
    const hasPlus = value.includes('+');
    const hasPercent = value.includes('%');

    let startTime;
    let animationFrame;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * targetNum);

      let formatted = current.toLocaleString();
      if (hasPlus) formatted += '+';
      if (hasPercent) formatted += '%';

      setDisplayValue(formatted);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const StatItem = ({ value, label, sub, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-60px' });
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
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-center p-6 md:p-8 rounded-xl bg-[#181614]/80 border border-[#CD9B51]/20 overflow-hidden group hover:border-[#D4AF37]/60 transition-colors duration-500"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-[inherit]"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(205, 155, 81, 0.2), transparent 70%)`,
        }}
      />

      <div className="font-serif text-[#CD9B51] group-hover:text-[#D4AF37] text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight group-hover:scale-105 transition-all duration-300 drop-shadow-md">
        <KineticCountUp value={value} />
      </div>
      <div className="text-[#F5F2EA] font-sans font-semibold text-sm mb-1">{label}</div>
      <div className="text-[#CD9B51]/70 font-sans text-[10px] uppercase tracking-[0.2em] font-medium">{sub}</div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section
      id="section-trust-stats"
      className="relative z-20 bg-[#121212] py-12 md:py-16 px-6 md:px-12 border-t border-[#CD9B51]/20"
      aria-label="Trust statistics and GST verification"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-[#181614] via-[#121212] to-[#171410] border border-[#CD9B51]/35 p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
          {/* Verified GST & Private Limited Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-[#CD9B51]/20 px-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#CD9B51]/15 border border-[#CD9B51]/40 flex items-center justify-center text-[#D4AF37]">
                <Building2 size={17} />
              </div>
              <div>
                <div className="text-xs font-serif font-bold text-[#F5F2EA] tracking-wide">
                  {company.legalName}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/55 font-sans">
                  Physical Showroom · Vinayaka Nagar, Bangalore
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CD9B51]/15 border border-[#CD9B51]/45 text-[#DFBF7A] text-[11px] font-mono font-bold tracking-wider">
                <ShieldCheck size={14} className="text-[#D4AF37]" />
                GSTIN: {company.gst}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-white/75 text-[10px] uppercase tracking-widest font-sans font-semibold">
                <Clock size={12} className="text-[#CD9B51]" />
                3–4 Days Delivery
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
