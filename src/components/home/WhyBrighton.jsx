// src/components/home/WhyBrighton.jsx
// Section 5: Why Brighton Decor & Bangalore Craftsmanship — Espresso Luxe & Warm Champagne (#120e0b)
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Clock, Star, MapPin, Ruler, Wrench, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: '5–7 Years Warranty',
    desc: 'Comprehensive 5 to 7 years warranty on window solutions — built for lasting reliability in Bangalore homes.',
  },
  {
    icon: Clock,
    title: '3–4 Days Fast Delivery',
    desc: 'Rapid bespoke manufacturing and delivery turnaround in 3 to 4 days from final measurement confirmation.',
  },
  {
    icon: Wrench,
    title: '₹250 Nominal Installation',
    desc: 'Trained technicians deliver dust-free, precision installation across Bangalore for a transparent ₹250 nominal charge.',
  },
  {
    icon: Ruler,
    title: '100% Free Site Measurement',
    desc: 'Complimentary on-site measurement & consultation across Bangalore with 1m x 1m samples before any commitment.',
  },
  {
    icon: Sparkles,
    title: 'Somfy & Tuya Motorization',
    desc: 'Remote-controlled & smart home motor options across Dream Curtains, blinds & drapery — tailored to your chosen brand.',
  },
  {
    icon: MapPin,
    title: 'Bangalore & South India HQ',
    desc: "Visit our Vinayaka Nagar showroom (10 AM – 8 PM Mon–Sun). 500+ projects delivered since 2022 under N Musaib Ahmed & Nisar Ahmed.",
  },
];

const ReasonGlassCard = ({ reason, index, isInView }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = reason.icon;

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
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden backdrop-blur-xl bg-[#1b1511]/80 border border-[#E8D2A6]/20 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] hover:border-[#E8D2A6]/60 transition-all duration-500 group h-full flex flex-col justify-between"
      >
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-[inherit]"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 210, 166, 0.16), transparent 70%)`,
          }}
        />

        <div>
          <div className="w-12 h-12 rounded-xl bg-[#E8D2A6]/10 border border-[#E8D2A6]/35 flex items-center justify-center mb-6 text-[#E8D2A6] group-hover:bg-[#E8D2A6] group-hover:text-[#120e0b] group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(232,210,166,0.2)]">
            <Icon size={22} />
          </div>

          <h3 className="font-serif text-white text-xl font-bold mb-3 group-hover:text-[#E8D2A6] transition-colors duration-300">
            {reason.title}
          </h3>

          <p className="text-white/75 font-sans font-light text-sm leading-relaxed">
            {reason.desc}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-white/45">
          <span>Bangalore Craftsmanship</span>
          <span className="text-[#E8D2A6]">✦ Guaranteed</span>
        </div>
      </div>
    </motion.div>
  );
};

const WhyBrighton = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      id="section-why-brighton"
      className="py-20 md:py-28 bg-[#120e0b] text-white relative overflow-hidden border-t border-[#E8D2A6]/20"
      aria-label="Why choose Brighton Decor Bangalore"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(232,210,166,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(232,210,166,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#E8D2A6]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#E8D2A6]/12 border border-[#E8D2A6]/30 mb-4">
            <Star size={13} className="text-[#E8D2A6]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E8D2A6]">
              Espresso Luxe · Bangalore Craftsmanship
            </span>
          </div>

          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Why Brighton Decor{' '}
            <span className="italic text-[#E8D2A6]">Stands Apart</span>
          </h2>

          <p className="text-white/75 text-base font-sans font-light leading-relaxed">
            Built on transparent custom quoting, 5–7 years warranty, rapid 3–4 day delivery, and ₹250 nominal professional installation across Bangalore &amp; South India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <ReasonGlassCard key={reason.title} reason={reason} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBrighton;
