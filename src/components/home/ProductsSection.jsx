// src/components/home/ProductsSection.jsx
// Section 3: Flagship Products & Dream Curtains — Deep Emerald Tinted Noir (#06140f -> #0b0f12)
// STRICT NO-PRICE POLICY: All products feature "Get Custom Quote" & "Book Measurement" CTAs.
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Box,
  FileText,
  Ruler,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { BLIND_PRODUCTS, DREAM_CURTAINS_PRODUCT } from '../../data/roomProducts';

const draperyAndMotorized = [
  {
    id: 'custom-drapery',
    name: 'Custom Drapery & Sheers',
    category: 'Custom Drapery',
    desc: 'Tailored floor-to-ceiling pinch-pleat curtains, blackout linings & ceiling-recessed sheer tracks with 1m x 1m swatch previews.',
    image: '/assets/imgs/decore/french-patio-door-drapery.jpg',
    route: '/products',
  },
  {
    id: 'smart-motorized',
    name: 'Smart Motorized Shading',
    category: 'Somfy & Tuya Motors',
    desc: 'Remote, app & voice automation available across all products. Quote depends on selected Somfy or Tuya motor brand.',
    image: '/assets/imgs/decore/motorized-zebra-blinds.jpg',
    route: '/services#motorized-shading',
  },
];

const ProductsSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="products-section"
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-b from-[#06140f] via-[#081310] to-[#0b0f12] text-white relative overflow-hidden border-t border-[#D4AF37]/20"
      aria-label="Flagship Products and Dream Curtains"
    >
      {/* Emerald & Champagne Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-[#10b981]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[420px] h-[420px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 mb-4">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37]">
                Flagship Window Collections
              </span>
            </div>

            <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Dream Curtains, Blinds &amp;{' '}
              <span className="italic text-[#D4AF37]">Motorized Luxury</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base mt-3 max-w-2xl font-sans font-light">
              Bespoke site sizing &amp; 1m x 1m sample previews. No generic online prices — request a custom quote tailored to your exact Bangalore window dimensions and Somfy/Tuya motor preference.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            onClick={() => navigate('/products')}
            className="group inline-flex items-center gap-2.5 border border-[#D4AF37]/45 bg-[#D4AF37]/10 px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold font-sans text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#06140f] transition-all duration-300 rounded-full shrink-0"
          >
            <span>Explore Full Catalog</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* FLAGSHIP SPOTLIGHT: DREAM CURTAINS */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-3xl bg-gradient-to-br from-[#0a1f17]/95 via-[#071510]/95 to-[#0b0f12]/95 border border-[#D4AF37]/50 p-6 sm:p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.65),0_0_40px_rgba(212,175,55,0.12)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#06140f] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                New Flagship System
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono uppercase tracking-wider">
                5–7 Years Warranty
              </span>
            </div>

            <div>
              <h3 className="font-serif text-white text-3xl sm:text-4xl font-bold leading-tight">
                {DREAM_CURTAINS_PRODUCT.name}
              </h3>
              <p className="font-serif italic text-[#D4AF37] text-lg sm:text-xl mt-1">
                &ldquo;{DREAM_CURTAINS_PRODUCT.tagline}&rdquo;
              </p>
            </div>

            <p className="text-white/80 text-sm sm:text-base font-sans font-light leading-relaxed">
              {DREAM_CURTAINS_PRODUCT.shortDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {DREAM_CURTAINS_PRODUCT.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2.5 bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl px-3.5 py-2.5 text-xs text-white/90 font-sans"
                >
                  <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() =>
                  navigate('/contact', {
                    state: {
                      type: 'quote',
                      productName: 'Dream Curtains',
                      category: 'Dream Curtains',
                    },
                  })
                }
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#06140f] px-7 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] font-sans hover:bg-white transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)]"
              >
                <FileText size={14} />
                <span>Get Custom Quote</span>
              </button>
              <button
                onClick={() =>
                  navigate('/contact', {
                    state: {
                      type: 'measurement',
                      serviceName: 'Dream Curtains Free Measurement',
                    },
                  })
                }
                className="inline-flex items-center gap-2 border border-[#D4AF37]/50 text-[#D4AF37] px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] font-sans hover:bg-[#D4AF37]/15 transition-all"
              >
                <Ruler size={14} />
                <span>Book Free Measurement</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#0b0f12] group">
              <img
                src={DREAM_CURTAINS_PRODUCT.image}
                alt="Dream Curtains — Sheer Vertical Luxury Drape System"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06140f]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-[11px] font-sans">
                <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 px-3 py-1.5 rounded-full text-[#D4AF37] font-semibold">
                  <Zap size={13} /> Somfy &amp; Tuya Motorized Wand / Remote
                </span>
                <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-white/85">
                  <ShieldCheck size={13} className="text-[#D4AF37]" /> 3–4 Days Delivery
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6 BESPOKE WINDOW BLINDS */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
              Architectural <span className="italic text-[#D4AF37]">Window Blinds</span>
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/80 hidden sm:inline">
              Manual · Somfy · Tuya Motorized
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLIND_PRODUCTS.map((blind, i) => (
              <motion.div
                key={blind.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group backdrop-blur-xl bg-[#0b1612]/80 border border-[#D4AF37]/25 hover:border-[#D4AF37]/75 rounded-2xl p-4 shadow-[0_20px_45px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.16)] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#0b0f12] mb-4 relative border border-white/10">
                    <img
                      src={blind.image}
                      alt={`${blind.name} — Brighton Decor Bangalore`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = '/assets/imgs/common/placeholder.jpg';
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md border border-[#D4AF37]/35 text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
                      {blind.materialBadge}
                    </span>
                  </div>

                  <h4 className="font-serif text-white text-xl font-bold mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                    {blind.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/65 mb-4 font-sans font-light leading-relaxed line-clamp-2">
                    {blind.shortDesc}
                  </p>
                </div>

                <div className="flex gap-2.5 pt-3 border-t border-white/10">
                  <button
                    onClick={() =>
                      navigate('/contact', {
                        state: {
                          type: 'quote',
                          productName: blind.name,
                          productId: blind.id,
                          category: 'Window Blinds',
                        },
                      })
                    }
                    className="flex-1 inline-flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-wider uppercase font-sans text-[#D4AF37] border border-[#D4AF37]/45 py-2.5 px-3 rounded-xl hover:bg-[#D4AF37] hover:text-[#06140f] transition-all duration-300"
                  >
                    <FileText size={12} />
                    <span>Get Custom Quote</span>
                  </button>
                  <button
                    onClick={() => navigate('/room-viewer', { state: { preselect: blind.id } })}
                    className="inline-flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-wider uppercase font-sans bg-white/10 text-white py-2.5 px-3.5 rounded-xl hover:bg-white hover:text-[#06140f] transition-all duration-300"
                  >
                    <Box size={12} />
                    <span>3D</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CUSTOM DRAPERY & SMART MOTORIZATION ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {draperyAndMotorized.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#0b1316]/85 border border-[#D4AF37]/30 hover:border-[#D4AF37]/75 p-5 flex flex-col sm:flex-row gap-5 items-center transition-all duration-500 shadow-xl"
            >
              <div className="w-full sm:w-44 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border border-white/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 space-y-2.5">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#D4AF37] font-sans block">
                  {item.category}
                </span>
                <h4 className="font-serif text-white text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <button
                    onClick={() =>
                      navigate('/contact', {
                        state: {
                          type: 'quote',
                          productName: item.name,
                          category: item.category,
                        },
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#D4AF37] text-[#06140f] hover:bg-white transition-colors"
                  >
                    <span>Get Custom Quote</span>
                  </button>
                  <button
                    onClick={() => navigate(item.route)}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-white/20 text-white/80 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
