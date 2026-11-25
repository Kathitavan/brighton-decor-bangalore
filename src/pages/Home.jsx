// src/pages/Home.jsx
// Brighton Decor Private Limited — 8-Section Distinct Dark Luxury Homepage (Bangalore HQ)
import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ProductsSection from '../components/home/ProductsSection';
import Immersive3DShowcase from '../components/home/Immersive3DShowcase';
import WhyBrighton from '../components/home/WhyBrighton';
import AboutSnippet from '../components/home/AboutSnippet';
import ProcessSection from '../components/home/ProcessSection';
import Testimonials from '../components/home/Testimonials';
import FAQSection from '../components/home/FAQSection';
import CTABanner from '../components/home/CTABanner';
import styles from '../styles/pages/home.module.css';

const Home = () => {
  return (
    <PageTransition>
      <SEO
        title="Luxury Window Blinds, Dream Curtains & Drapery | Bangalore"
        description="Brighton Decor Private Limited — Brightening your home, Defining Your Space. Dream Curtains, custom Roller, Zebra, Honeycomb & Wooden blinds, and Somfy/Tuya motorized drapery in Bangalore, Karnataka & South India."
        ogImage="https://brightondecor.in/assets/imgs/main%20logo.png"
      />
      <div className={styles.homePage}>
        {/* Section 1: Hero — Obsidian & 24K Champagne Gold (#0a0a0a) */}
        <Hero />

        {/* Section 2: Trust Stats & GST Badge — Onyx & Brushed Bronze (#121212) */}
        <Stats />

        {/* Section 3: Flagship Products & Dream Curtains — Deep Emerald Tinted Noir (#06140f -> #0b0f12) */}
        <ProductsSection />

        {/* Section 4: The 3D Interactive Room Studio — Midnight Sapphire & Platinum Gold (#080c18) */}
        <Immersive3DShowcase />

        {/* Section 5: Why Brighton Decor & Bangalore Craftsmanship — Espresso Luxe & Warm Champagne (#120e0b) */}
        <WhyBrighton />
        <AboutSnippet />

        {/* Section 6: The 7-Step Concierge Process — Titanium Slate & Amber Gold (#0e131b) */}
        <ProcessSection />

        {/* Section 7: Verified Bangalore Reviews & Testimonials — Charcoal Velvet & Star Gold (#141416) */}
        <Testimonials />
        <FAQSection />

        {/* Section 8: Showroom, Contact & Bangalore Live Map — High-Contrast Noir & Radiant Gold (#050506) */}
        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default Home;
