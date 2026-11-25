// src/components/home/CTABanner.jsx
// Section 8: Showroom, Contact & Bangalore Live Map — High-Contrast Noir & Radiant Gold (#050506)
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Ruler,
  Sparkles,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  ExternalLink,
  CreditCard,
  ShieldAlert,
} from 'lucide-react';
import { company } from '../../config/company';

const CTABanner = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      id="section-showroom-contact"
      className="relative bg-[#050506] text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden border-t border-[#D4AF37]/30"
      aria-label="Bangalore Showroom, Contact and Live Map"
    >
      {/* Radiant Gold Ambient Light Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-[#D4AF37]/10 rounded-full blur-[210px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* Top Showroom + Live Bangalore Map Split */}
        <div className="backdrop-blur-2xl bg-[#0a0a0c]/95 border border-[#D4AF37]/45 p-7 sm:p-10 md:p-14 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Showroom Details & Direct Actions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-between space-y-7"
            >
              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45">
                  <Sparkles size={14} className="text-[#D4AF37]" />
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37]">
                    Physical Showroom · Bangalore HQ
                  </span>
                </div>

                <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Visit Our Vinayaka Nagar{' '}
                  <span className="italic text-[#D4AF37]">Showroom Today.</span>
                </h2>

                <p className="text-white/75 text-base font-sans font-light leading-relaxed">
                  Explore Dream Curtains, blinds, 1m x 1m fabric swatches, and live Somfy &amp; Tuya motorized tracks — or book a 100% free site measurement anywhere in Bangalore.
                </p>

                {/* Showroom Info Grid */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold font-sans mb-1">
                        Office &amp; Physical Showroom Address
                      </div>
                      <div className="text-sm sm:text-base font-serif text-white">
                        {company.address.line1},<br />
                        {company.address.line2}
                      </div>
                      <div className="text-[11px] font-mono text-white/55 mt-1">
                        GST: {company.gst}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <Clock size={17} className="text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] font-bold font-sans mb-1">
                          Working Hours
                        </div>
                        <div className="text-xs text-white/90 font-sans font-medium">
                          10:00 AM – 8:00 PM
                        </div>
                        <div className="text-[11px] text-white/55 font-sans">
                          Monday to Sunday (Open All 7 Days)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <Mail size={17} className="text-[#D4AF37] shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] font-bold font-sans mb-1">
                          Email Concierge
                        </div>
                        <a
                          href={`mailto:${company.email}`}
                          className="text-xs text-white hover:text-[#D4AF37] transition-colors font-sans block truncate"
                        >
                          {company.email}
                        </a>
                        <a
                          href={`mailto:${company.salesEmail}`}
                          className="text-xs text-white/75 hover:text-[#D4AF37] transition-colors font-sans block truncate mt-0.5"
                        >
                          {company.salesEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp + Free Measurement + Call */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] text-[#050506] px-7 py-4 text-[11px] uppercase font-bold tracking-[0.18em] font-sans hover:bg-white transition-all duration-300 shadow-[0_12px_35px_rgba(212,175,55,0.4)] rounded-full"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp +91 9731801476</span>
                </a>

                <button
                  id="cta-banner-measurement"
                  onClick={() => navigate('/contact', { state: { type: 'measurement' } })}
                  className="group inline-flex items-center justify-center gap-2.5 bg-white/[0.06] border border-[#D4AF37]/50 text-[#D4AF37] px-7 py-4 text-[11px] uppercase font-bold tracking-[0.18em] font-sans hover:bg-[#D4AF37] hover:text-[#050506] transition-all duration-300 rounded-full"
                >
                  <Ruler size={15} />
                  <span>Book Free Measurement</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/90 px-6 py-4 text-[11px] uppercase font-bold tracking-[0.18em] font-sans hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 rounded-full"
                >
                  <Phone size={14} />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Embedded Bangalore Live Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-between gap-4"
            >
              <div className="relative flex-1 min-h-[340px] md:min-h-[420px] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl group bg-[#0d0d0f]">
                <iframe
                  title="Brighton Decor Bangalore Showroom Live Map — Vinayaka Nagar"
                  src={company.googleMapsEmbed}
                  className="w-full h-full min-h-[340px] md:min-h-[420px] border-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#050506]/90 backdrop-blur-md border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050506] text-[10px] font-bold uppercase tracking-widest font-sans transition-all shadow-xl"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Payment Methods & Custom Architectural Policy Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-sans">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest mb-1.5">
                    <CreditCard size={13} />
                    <span>Accepted Payments</span>
                  </div>
                  <p className="text-white/75 text-[11px] leading-relaxed">
                    UPI (GPay / PhonePe / Paytm), Cash, Bank Transfer (NEFT / RTGS / IMPS), Cheque.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest mb-1.5">
                    <ShieldAlert size={13} />
                    <span>Custom Architectural Policy</span>
                  </div>
                  <p className="text-white/75 text-[11px] leading-relaxed">
                    {company.customOrderPolicy}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
