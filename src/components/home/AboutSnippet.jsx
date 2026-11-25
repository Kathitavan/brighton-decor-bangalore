// src/components/home/AboutSnippet.jsx
// Integrated within Espresso Luxe & Warm Champagne (#120e0b) Bangalore Craftsmanship Theme
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const highlights = [
  '100% Free site measurement & consultation in Bangalore',
  'Nominal ₹250 professional installation by trained technicians',
  '5–7 years warranty on window solutions & 3–4 days lead time',
  'Led by N Musaib Ahmed (MD) & Nisar Ahmed (Director)',
  'Established 2022 — 500+ projects across Bangalore & South India',
];

const AboutSnippet = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-[#120e0b] text-white relative overflow-hidden border-t border-[#E8D2A6]/15"
      aria-label="About Brighton Decor Bangalore"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(232,210,166,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(232,210,166,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#E8D2A6]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-[#E8D2A6]/25 group">
              <div className="aspect-[4/5] overflow-hidden bg-[#1A1410]">
                <img
                  src="/assets/imgs/home/about-snippet.jpg"
                  alt="Brighton Decor Private Limited showroom & studio — Vinayaka Nagar, Bangalore"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/assets/imgs/common/placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120e0b] via-transparent to-transparent opacity-70" />
              </div>

              <div className="absolute inset-0 border border-[#E8D2A6]/30 rounded-2xl pointer-events-none" />
            </div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -right-5 backdrop-blur-2xl bg-[#120e0b]/95 border border-[#E8D2A6]/45 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] flex items-center gap-3.5 z-20"
            >
              <div className="w-11 h-11 rounded-xl bg-[#E8D2A6] text-[#120e0b] flex items-center justify-center font-serif text-2xl font-bold shadow-[0_0_15px_rgba(232,210,166,0.4)]">
                4+
              </div>
              <div>
                <div className="font-serif text-white text-sm font-bold">Years of Craftsmanship</div>
                <div className="text-[#E8D2A6]/80 text-[11px] font-sans font-light">Est. 2022 · Bangalore HQ</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#E8D2A6]/10 border border-[#E8D2A6]/30">
              <Sparkles size={14} className="text-[#E8D2A6]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E8D2A6]">
                Brighton Decor Private Limited
              </span>
            </div>

            <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Bangalore Luxury,<br />
              <span className="italic text-[#E8D2A6]">Tailored to Every Window.</span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed font-sans font-light">
              Established in Bangalore in 2022, Brighton Decor Private Limited brings Dream Curtains, bespoke window blinds, and Somfy/Tuya motorized drapery to apartments, villas, and commercial spaces across Bangalore &amp; South India.
            </p>

            <p className="text-white/65 text-base leading-relaxed font-sans font-light">
              With 500+ completed projects and a physical showroom in Vinayaka Nagar open all 7 days (10 AM – 8 PM), every project starts with a free measurement and ends with 100% satisfaction.
            </p>

            <ul className="space-y-3 pt-4 border-t border-white/10">
              {highlights.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E8D2A6]/15 border border-[#E8D2A6]/40 flex items-center justify-center text-[#E8D2A6] flex-shrink-0">
                    <CheckCircle size={13} />
                  </div>
                  <span className="text-white/85 text-sm font-sans font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => navigate('/about')}
                className="group relative inline-flex items-center gap-3 bg-[#E8D2A6] text-[#120e0b] px-8 py-4 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(232,210,166,0.3)] rounded-full"
              >
                <span>Meet Our Bangalore Leadership</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
