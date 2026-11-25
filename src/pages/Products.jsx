// src/pages/Products.jsx
// Brighton Decor Private Limited (Bangalore HQ) — Products Showroom
// STRICT NO-PRICE POLICY: All products display "Get Custom Quote" & "Book Free Measurement" CTAs.
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import SEO from '../components/common/SEO';
import { BLIND_PRODUCTS, DREAM_CURTAINS_PRODUCT } from '../data/roomProducts';
import WindowCurtainShowcase from '../components/products/WindowCurtainShowcase';
import { ArrowRight, Tag, Sparkles, Box, CheckCircle2, ShieldCheck, Clock, Ruler } from 'lucide-react';
import styles from '../styles/pages/products.module.css';

const blindImages = {
  roller: '/assets/imgs/products/roller-blinds.jpg',
  zebra: '/assets/imgs/products/zebra-blinds.jpg',
  honeycomb: '/assets/imgs/products/honeycomb-blinds.jpg',
  vertical: '/assets/imgs/products/vertical-blinds.jpg',
  wooden: '/assets/imgs/products/wooden-blinds.jpg',
  pvc: '/assets/imgs/products/pvc-blinds.jpg',
};

const dreamCurtainsCollection = [
  {
    id: 'dream-curtains',
    name: 'Dream Curtains — Sheer Vertical Drape',
    category: 'Dream Curtains',
    desc: 'The Poetry of Sheers with the Privacy of Blinds. Walk-through sheer vertical louvers with 180° light rotation & machine-washable individual vanes.',
    image: '/assets/imgs/decore/living-room-custom-drapery.jpg',
    swatches: [
      { name: 'Pearl Ivory', hex: '#F6F2EA' },
      { name: 'Champagne Silk', hex: '#DECBA4' },
      { name: 'Warm Sand', hex: '#CBB89D' },
      { name: 'Charcoal Mist', hex: '#4B4E54' },
    ],
  },
  {
    id: 'dream-curtains-motorized',
    name: 'Dream Curtains — Motorized Smart Track',
    category: 'Dream Curtains',
    desc: 'Walk-through luxury sheer vanes paired with Somfy or Tuya motorized smart wand & remote control for effortless balcony transitions.',
    image: '/assets/imgs/decore/french-patio-door-drapery.jpg',
    swatches: [
      { name: 'Alabaster Voile', hex: '#FAF8F5' },
      { name: 'Dune Gold', hex: '#D4AF37' },
      { name: 'Dove Grey', hex: '#9BA0A6' },
      { name: 'Espresso Sheer', hex: '#3D312A' },
    ],
  },
];

const customDecorProducts = [
  {
    id: 'pinch-pleat-drapery',
    name: 'Pinch-Pleat Tailored Drapes',
    category: 'Drapery',
    desc: 'Bespoke floor-to-ceiling drapery with crisp architectural pinch pleats, acoustic blackout lining, and 1m x 1m sample verification.',
    image: '/assets/imgs/decore/french-patio-door-drapery.jpg',
    swatches: [
      { name: 'Slate Grey', hex: '#686B73' },
      { name: 'Ivory Linen', hex: '#F4EFEA' },
      { name: 'Oatmeal Tweed', hex: '#D6C7B2' },
      { name: 'Charcoal Weave', hex: '#2C2E35' },
    ],
  },
  {
    id: 'grand-sheer-suite',
    name: 'Bespoke Sheer & Drape Suite',
    category: 'Drapery',
    desc: 'Grand living room ceiling-recessed drapery with light-diffusing sheer accents tailored for Bangalore apartments & villas.',
    image: '/assets/imgs/decore/living-room-custom-drapery.jpg',
    swatches: [
      { name: 'Midnight Slate', hex: '#3B4856' },
      { name: 'Soft Pearl', hex: '#EBEAE6' },
      { name: 'Mist Blue', hex: '#7C8A99' },
      { name: 'Champagne Silk', hex: '#D8C6A5' },
    ],
  },
  {
    id: 'motorized-zebra-shades',
    name: 'Smart Motorized Zebra Blinds',
    category: 'Motorized',
    desc: 'Remote & app-controlled dual-transition shades powered by Somfy or Tuya motors with 5–7 years warranty.',
    image: '/assets/imgs/decore/motorized-zebra-blinds.jpg',
    swatches: [
      { name: 'Graphite Dual', hex: '#4B4D52' },
      { name: 'Chalk White', hex: '#F7F7F7' },
      { name: 'Espresso Bronze', hex: '#362D26' },
      { name: 'Sandstone Grey', hex: '#C2B6A6' },
    ],
  },
  {
    id: 'woven-textured-shades',
    name: 'Natural Woven Bamboo Shades',
    category: 'Drapery',
    desc: 'Artisanal organic bamboo and woven reed roller shades delivering warm filtered light for South Indian dining & living spaces.',
    image: '/assets/imgs/decore/natural-woven-dining-shades.jpg',
    swatches: [
      { name: 'Amber Woven', hex: '#C68E48' },
      { name: 'Natural Reed', hex: '#E0BA7B' },
      { name: 'Dark Walnut', hex: '#4F3824' },
      { name: 'Bleached Jute', hex: '#DFD4BE' },
    ],
  },
];

const allProducts = [
  ...dreamCurtainsCollection,
  ...BLIND_PRODUCTS.map((b) => ({
    id: b.id,
    name: b.name,
    category: 'Blinds',
    desc: b.shortDesc,
    image: blindImages[b.id] || '/assets/imgs/common/placeholder.jpg',
    swatches: [
      { name: 'Linen White', hex: '#FAF8F5' },
      { name: 'Warm Sand', hex: '#EAE3D2' },
      { name: 'Artisan Oak', hex: '#4A3520' },
      { name: 'Slate Gray', hex: '#7A8288' },
    ],
  })),
  ...customDecorProducts,
];

const categories = ['All', 'Dream Curtains', 'Blinds', 'Drapery', 'Motorized'];

const ProductCard3D = ({ product, index, navigate }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSwatch, setSelectedSwatch] = useState(product.swatches[0]);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { stiffness: 350, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), { stiffness: 350, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`${styles.productCard3D} group flex flex-col justify-between select-none transform-gpu`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#FAF8F5] relative">
        <img
          src={product.image}
          alt={`${product.name} — Brighton Decor Bangalore`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/assets/imgs/common/placeholder.jpg';
          }}
        />

        <div
          className={styles.sheenBeam}
          style={{
            opacity: isHovered ? 1 : 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
          }}
        />

        <div className="absolute top-3 left-3 z-20">
          <span className="text-[9px] uppercase font-bold tracking-[0.2em] font-sans text-[#2B1F17] bg-white/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#2B1F17]/10 shadow-sm">
            {product.category}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 z-20">
          <span className="text-[9px] font-sans font-semibold text-[#2B1F17] bg-[#FAF8F5]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#B89656]/30 flex items-center gap-1 shadow-sm">
            <span className="w-2 h-2 rounded-full border border-black/20" style={{ backgroundColor: selectedSwatch.hex }} />
            <span>{selectedSwatch.name}</span>
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow bg-white">
        <div>
          <h3 className="font-serif text-[#2B1F17] text-xl font-medium mb-2 group-hover:text-[#B89656] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="line-clamp-3 text-[#2B1F17]/70 text-xs font-sans font-light leading-relaxed mb-4">
            {product.desc}
          </p>

          <div className="flex items-center gap-2 mb-6 pt-2 border-t border-[#2B1F17]/10">
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#2B1F17]/40 font-sans">
              Finish:
            </span>
            <div className="flex items-center gap-1.5">
              {product.swatches.map((swatch, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSwatch(swatch);
                  }}
                  onMouseEnter={() => setSelectedSwatch(swatch)}
                  title={swatch.name}
                  className={`${styles.swatchDot} ${selectedSwatch.name === swatch.name ? styles.swatchDotActive : ''}`}
                  style={{ backgroundColor: swatch.hex }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() =>
              navigate('/contact', {
                state: {
                  type: 'quote',
                  productName: product.name,
                  productId: product.id,
                  category: product.category,
                  finish: selectedSwatch?.name,
                },
              })
            }
            className={`${styles.primaryBtn} flex-1 text-[10px] uppercase font-bold tracking-widest font-sans py-3 rounded-xl transition-all flex items-center justify-center gap-1.5`}
          >
            <span>Get Custom Quote</span>
          </button>

          {product.category === 'Blinds' ? (
            <button
              onClick={() => navigate('/room-viewer', { state: { preselect: product.id } })}
              className={`${styles.try3dBtn} flex-1 text-[10px] uppercase font-bold tracking-widest font-sans border border-[#2B1F17]/20 text-[#2B1F17] py-3 rounded-xl hover:border-[#B89656] hover:text-[#B89656] transition-all bg-[#FAF8F5] flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(184,150,86,0.25)]`}
            >
              <Box size={13} className="text-[#B89656] animate-pulse" />
              <span>Try in 3D</span>
            </button>
          ) : (
            <button
              onClick={() =>
                navigate('/contact', {
                  state: {
                    type: 'measurement',
                    serviceName: product.name,
                  },
                })
              }
              className="flex-1 text-[10px] uppercase font-bold tracking-widest font-sans border border-[#2B1F17]/20 text-[#2B1F17] py-3 rounded-xl hover:border-[#B89656] hover:text-[#B89656] transition-all bg-[#FAF8F5] flex items-center justify-center gap-1.5"
            >
              <Ruler size={12} className="text-[#B89656]" />
              <span>Book Measure</span>
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filtered =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <SEO
        title="Dream Curtains, Luxury Window Blinds & Custom Drapery Collection"
        description="Explore flagship Dream Curtains, custom Roller, Zebra, Honeycomb, Wooden, Vertical & PVC blinds, and Somfy/Tuya motorized drapery in Bangalore. 5–7 years warranty & free measurement."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Brighton Decor Bangalore — Dream Curtains, Blinds & Drapery',
          itemListElement: allProducts.map((p, idx) => ({
            '@type': 'Product',
            position: idx + 1,
            name: p.name,
            description: p.desc,
            category: p.category,
            image: `https://brightondecor.in${p.image}`,
          })),
        }}
      />
      <div className={`${styles.productsPage} ${styles.gridPattern}`}>
        {/* 1. Refined Architectural Header */}
        <section className="relative pt-36 pb-12 px-6 md:px-12 border-b border-[#2B1F17]/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-[#2B1F17]/15 text-[#2B1F17] text-[10px] uppercase font-bold tracking-[0.25em] mb-4 shadow-sm backdrop-blur-md">
                <Sparkles size={14} className="text-[#B89656]" />
                <span>Bangalore Flagship Showroom Collection</span>
              </div>
              <h1
                className="font-serif text-[#2B1F17] font-light leading-tight mb-4"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Dream Curtains, Blinds &amp;<br />
                <span className="italic text-[#B89656]">Smart Motorized Drapery</span>
              </h1>
              <p className="text-[#2B1F17]/75 text-lg md:text-xl font-sans font-light leading-relaxed">
                Custom-tailored architectural window solutions crafted for Bangalore &amp; South India. Every product includes 100% free site measurement, Somfy or Tuya motorization options, 3–4 day delivery, and 5–7 years warranty.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Flagship Dream Curtains Spotlight */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto pt-10">
          <div className="rounded-3xl bg-[#0A1812] text-[#F5F2EA] border border-[#D4AF37]/40 p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.25em]">
                <Sparkles size={13} />
                <span>Flagship Innovation · Must-See</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                {DREAM_CURTAINS_PRODUCT.name}
                <span className="block italic text-[#D4AF37] text-xl md:text-2xl mt-1">
                  &ldquo;{DREAM_CURTAINS_PRODUCT.tagline}&rdquo;
                </span>
              </h2>
              <p className="text-white/80 text-sm md:text-base font-sans font-light leading-relaxed">
                {DREAM_CURTAINS_PRODUCT.shortDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {DREAM_CURTAINS_PRODUCT.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-white/90 font-sans">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={() =>
                    navigate('/contact', {
                      state: { type: 'quote', productName: 'Dream Curtains', category: 'Dream Curtains' },
                    })
                  }
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A0908] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={() =>
                    navigate('/contact', {
                      state: { type: 'measurement', serviceName: 'Dream Curtains Home Demo' },
                    })
                  }
                  className="inline-flex items-center gap-2 border border-[#D4AF37]/50 text-[#D4AF37] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all"
                >
                  <Ruler size={14} />
                  <span>Book Free Measurement</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/40 relative">
                <img
                  src={DREAM_CURTAINS_PRODUCT.image}
                  alt="Dream Curtains — Walk-Through Sheer Vertical Drapery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 flex items-center justify-between text-[11px] font-sans">
                  <span className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                    <ShieldCheck size={14} /> 5–7 Years Warranty
                  </span>
                  <span className="flex items-center gap-1.5 text-white/80">
                    <Clock size={13} className="text-[#D4AF37]" /> 3–4 Days Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive 3D Window & Curtain Studio Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto pt-6">
          <WindowCurtainShowcase />
        </section>

        {/* 3. Products Catalog & Filters */}
        <section ref={ref} className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Custom Quoting Policy Banner (NO PRICES DISPLAYED) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="bg-white/80 backdrop-blur-md border border-[#2B1F17]/12 p-6 rounded-2xl mb-12 flex items-start gap-4 shadow-sm"
            >
              <Tag size={20} className="text-[#B89656] mt-0.5 flex-shrink-0" />
              <p className="text-[#2B1F17]/85 text-sm font-sans font-light leading-relaxed">
                <strong className="font-semibold text-[#2B1F17]">Bespoke Architectural Quoting Policy:</strong>{' '}
                We do not display generic product prices online. Every quote is custom calculated from your exact window measurements (1m x 1m samples &amp; bespoke site sizing) and your chosen motorization brand (Somfy or Tuya).{' '}
                <strong className="text-[#B89656] font-semibold">
                  100% Free site measurement in Bangalore · 3–4 days delivery · 5–7 years warranty.
                </strong>
              </p>
            </motion.div>

            {/* Category Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`${styles.filterPill} ${isActive ? styles.filterPillActive : styles.filterPillInactive}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute inset-0 bg-[#2B1F17] rounded-full shadow-md -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* Product Cards Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              >
                {filtered.map((product, i) => (
                  <ProductCard3D
                    key={product.id}
                    product={product}
                    index={i}
                    navigate={navigate}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 4. CTA Banner */}
        <section className="py-20 px-6 md:px-12 bg-[#2B1F17] text-[#F5F0E6] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-[#F5F0E6] text-3xl md:text-4xl font-light mb-4">
              Need Custom Site Sizing or Somfy/Tuya Motorization?
            </h2>
            <p className="text-[#F5F0E6]/75 mb-8 text-base font-sans font-light">
              Visit our Vinayaka Nagar showroom in Bangalore or book a 100% free on-site measurement with 1m x 1m samples.
            </p>
            <button
              onClick={() =>
                navigate('/contact', {
                  state: {
                    type: 'measurement',
                    message: 'Requesting free site measurement & custom quote from Products catalog.',
                  },
                })
              }
              className="group inline-flex items-center gap-3 bg-[#B89656] text-[#2B1F17] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold font-sans hover:bg-white transition-all shadow-xl"
            >
              <span>Book Free Measurement</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Products;
