// src/pages/About.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles, Ruler } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import SEO from '../components/common/SEO';
import BrandStory from '../components/about/BrandStory';
import TeamSection from '../components/about/TeamSection';
import VisionMission from '../components/about/VisionMission';
import Timeline from '../components/about/Timeline';
import { company } from '../config/company';
import InnovativeAddressBlock from '../components/common/InnovativeAddressBlock';
import styles from '../styles/pages/about.module.css';

const CountUpNumber = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numericStr = value.replace(/[^0-9]/g, '');
    if (!numericStr || value.includes('–') || value.includes('-')) {
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
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
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
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

const StatSpotlightCard = ({ stat, index }) => {
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden group hover:border-[#C9A55A]/50 transition-colors duration-500 text-center"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-[inherit]"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 165, 90, 0.2), transparent 70%)`,
        }}
      />

      <div className="font-serif text-[#C9A55A] text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
        <CountUpNumber value={stat.value} />
      </div>

      <div className="text-white/70 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};

const statItems = [
  { value: '500+', label: 'Completed Projects' },
  { value: '4+', label: 'Years Craftsmanship' },
  { value: '100%', label: 'Customer Satisfaction' },
  { value: '5–7 Yrs', label: 'Window Warranty' },
];

const About = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const rollUpVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: 1,
        delay: i * 0.18,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <PageTransition>
      <SEO
        title="About Brighton Decor Private Limited — Bangalore Leadership & Heritage"
        description="Led by N Musaib Ahmed and Nisar Ahmed since 2022, Brighton Decor Private Limited has transformed 500+ luxury apartments, villas, and commercial spaces across Bangalore & South India."
      />
      <div className={styles.aboutPage}>
        {/* 1. Cinematic Ambient Video Hero */}
        <section
          ref={heroRef}
          className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
        >
          <motion.div
            style={{ scale: videoScale, y: videoY }}
            className="absolute inset-0 z-0 transform-gpu will-change-transform"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/imgs/about/hero-poster.jpg"
              className="w-full h-full object-cover object-center"
            >
              <source src="/assets/videos/about/hero-ambient.mp4" type="video/mp4" />
            </video>

            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(15,14,12,0.3) 0%, rgba(15,14,12,0.85) 100%)',
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-[#0F0E0C]/60 to-transparent" />
          </motion.div>

          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A55A]/15 rounded-full blur-[140px] pointer-events-none z-0" />

          <motion.div
            style={{ y: textY }}
            className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center"
          >
            <div className="overflow-hidden inline-block mb-4">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={rollUpVariants}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#C9A55A]/15 border border-[#C9A55A]/30 backdrop-blur-md"
              >
                <Sparkles size={14} className="text-[#C9A55A]" />
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A55A]">
                  Brighton Decor Private Limited · Est. 2022 · Bangalore
                </span>
              </motion.div>
            </div>

            <h1
              className="font-serif text-white leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.25rem)' }}
            >
              <div className="overflow-hidden">
                <motion.span
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={rollUpVariants}
                  className="block"
                >
                  Illuminating Bangalore Homes
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={rollUpVariants}
                  className="block italic text-[#C9A55A]"
                >
                  With Architectural Precision.
                </motion.span>
              </div>
            </h1>

            <div className="overflow-hidden max-w-2xl mx-auto mb-10">
              <motion.p
                custom={3}
                initial="hidden"
                animate="visible"
                variants={rollUpVariants}
                className="text-white/80 text-lg md:text-xl font-sans font-light leading-relaxed"
              >
                {company.description}
              </motion.p>
            </div>

            <div className="overflow-hidden inline-block">
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={rollUpVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={() => navigate('/contact', { state: { type: 'measurement' } })}
                  className="group flex items-center justify-center gap-3 bg-[#C9A55A] text-[#0F0E0C] px-8 py-4 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(201,165,90,0.3)]"
                >
                  <Ruler size={16} />
                  <span>Book Free Measurement</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/room-viewer')}
                  className="group flex items-center justify-center gap-3 backdrop-blur-xl bg-white/[0.05] border border-white/20 text-white px-8 py-4 text-[11px] uppercase font-bold tracking-[0.2em] hover:border-[#C9A55A] hover:text-[#C9A55A] transition-all duration-300"
                >
                  <span>Explore 3D Studio</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 2. Kinetic Number Counters */}
        <section className="relative z-20 -mt-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/15 p-4 sm:p-6 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statItems.map((stat, idx) => (
                <StatSpotlightCard key={stat.label} stat={stat} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Brand Story */}
        <BrandStory />

        {/* 4. Founders & Leadership */}
        <TeamSection />

        {/* 5. Vision & Mission */}
        <VisionMission />

        {/* 6. Timeline */}
        <Timeline />

        {/* 7. Showroom & Bangalore Service Area Section */}
        <section className="py-32 bg-[#0F0E0C] text-white relative overflow-hidden border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#C9A55A]/10 border border-[#C9A55A]/25">
                  <MapPin size={14} className="text-[#C9A55A]" />
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A55A]">
                    Showroom &amp; HQ · GST: {company.gst}
                  </span>
                </div>

                <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Headquartered in Bangalore.<br />
                  <span className="italic text-[#C9A55A]">Serving South India.</span>
                </h2>

                <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed">
                  Visit our physical showroom at {company.address.street}, {company.address.city}, {company.address.state} - {company.address.pincode} ({company.hours}) — or schedule a 100% free on-site measurement across Bangalore, Karnataka &amp; South India.
                </p>

                <InnovativeAddressBlock
                  variant="feature"
                  accentColor="#C9A55A"
                  className="mt-6"
                />
              </div>

              <div className="lg:col-span-6">
                <div className="aspect-video sm:aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.6)] relative group">
                  <iframe
                    title="Brighton Decor Private Limited — Vinayaka Nagar, Bangalore Showroom"
                    src={company.googleMapsEmbed}
                    className="w-full h-full border-0 grayscale invert opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-[#C9A55A]/30 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Luxury Call to Action */}
        <section className="py-28 px-6 md:px-12 bg-gradient-to-b from-[#0F0E0C] to-[#1A1814] text-white text-center relative overflow-hidden border-t border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A55A]/10 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C9A55A] mb-4 block">
              Begin Your Transformation
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Craft Your Custom Living Space?
            </h2>

            <p className="text-white/70 text-base md:text-lg font-sans font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Book your 100% free on-site measurement in Bangalore today — with 3–4 days delivery, ₹250 nominal installation, and 5–7 years warranty.
            </p>

            <button
              onClick={() => navigate('/contact', { state: { type: 'measurement' } })}
              className="group inline-flex items-center gap-3 bg-[#C9A55A] text-[#0F0E0C] px-10 py-5 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_15px_40px_rgba(201,165,90,0.3)] transform hover:-translate-y-1"
            >
              <span>Schedule Free Site Measurement</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
