// src/components/home/ProcessSection.jsx
// Section 6: The 7-Step Concierge Process — Titanium Slate & Amber Gold (#0e131b)
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { processSteps } from '../../data/services';

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      id="section-concierge-process"
      className="py-20 md:py-28 bg-[#0e131b] text-white relative overflow-hidden border-t border-[#E0A94E]/20"
      aria-label="The 7-Step Concierge Process"
    >
      {/* Titanium Grid & Amber Gold Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(224,169,78,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(224,169,78,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E0A94E]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#E0A94E]/12 border border-[#E0A94E]/30 mb-4">
            <Sparkles size={14} className="text-[#E0A94E]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E0A94E]">
              Titanium Slate · Concierge Methodology
            </span>
          </div>

          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            The 7-Step{' '}
            <span className="italic text-[#E0A94E]">Concierge Process</span>
          </h2>

          <p className="text-white/70 text-base font-sans font-light leading-relaxed">
            From your 100% free measurement in Bangalore to custom fabrication and 3–4 day delivery — effortless at every milestone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative backdrop-blur-xl bg-[#151c27]/75 border border-[#E0A94E]/20 p-7 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] hover:border-[#E0A94E]/60 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#E0A94E] group-hover:scale-110 transition-transform origin-left drop-shadow-md">
                    {step.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E0A94E]/45 group-hover:bg-[#E0A94E] transition-colors shadow-[0_0_10px_rgba(224,169,78,0.5)]" />
                </div>

                <h3 className="font-serif text-white text-xl font-bold mb-3 group-hover:text-[#E0A94E] transition-colors">
                  {step.title}
                </h3>

                <p className="text-white/70 text-sm font-sans font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[9px] font-mono uppercase tracking-widest text-white/45 flex items-center justify-between">
                <span>Step 0{i + 1}</span>
                <span className="text-[#E0A94E]/75 font-semibold">Bangalore Concierge</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
