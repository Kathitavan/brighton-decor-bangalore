// src/components/home/Testimonials.jsx
// Section 7: Verified Bangalore Reviews & Testimonials — Charcoal Velvet & Star Gold (#141416)
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialCard = ({ testimonial, index, isInView }) => {
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden w-full backdrop-blur-xl bg-gradient-to-br from-[#1d1d20] via-[#17171a] to-[#141416] border border-[#F5C451]/20 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#F5C451]/60 transition-all duration-500 group flex flex-col justify-between"
      >
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-[inherit]"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 196, 81, 0.14), transparent 70%)`,
          }}
        />

        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-1 text-[#F5C451]">
              {[...Array(5)].map((_, si) => (
                <Star
                  key={si}
                  size={14}
                  fill="#F5C451"
                  className="text-[#F5C451] drop-shadow-[0_0_8px_rgba(245,196,81,0.55)]"
                />
              ))}
            </div>
            <Quote size={20} className="text-[#F5C451]/35 group-hover:text-[#F5C451] transition-colors" />
          </div>

          <p className="text-white/85 text-sm leading-relaxed font-sans italic font-light mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="font-serif text-white font-bold text-base group-hover:text-[#F5C451] transition-colors">
                {testimonial.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#F5C451] mt-0.5">
                {testimonial.city}
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full">
              <CheckCircle2 size={10} /> Verified
            </span>
          </div>
          {testimonial.service && (
            <span className="text-[10px] text-white/55 font-sans">
              {testimonial.service}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      id="section-reviews"
      className="py-20 md:py-28 bg-[#141416] text-white relative overflow-hidden border-t border-[#F5C451]/20"
      aria-label="Verified Bangalore Reviews and Testimonials"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,196,81,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,196,81,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F5C451]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#F5C451]/12 border border-[#F5C451]/35 mb-4">
            <Sparkles size={14} className="text-[#F5C451]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#F5C451]">
              5.0 ★ Google Reviews · Bangalore
            </span>
          </div>

          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            Trusted Across{' '}
            <span className="italic text-[#F5C451]">Bangalore</span>
          </h2>
          <p className="text-white/65 text-sm sm:text-base font-sans font-light">
            Verified homeowners from Whitefield, Indiranagar, HSR Layout &amp; Jayanagar praising our punctuality, free measurement, and precision fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#F5C451]/90 bg-[#1d1d20] border border-[#F5C451]/35 px-6 py-2.5 rounded-full inline-block shadow-lg">
            5.0 Star Rating · 100% Satisfaction Across Bangalore &amp; South India
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
