// src/components/contact/ModernMap.jsx
import React, { useState } from 'react';
import { MapPin, Navigation, Layers, ExternalLink, ShieldCheck } from 'lucide-react';
import { company } from '../../config/company';

const ModernMap = () => {
  const [mapType, setMapType] = useState('dark');

  const mapUrls = {
    dark: 'https://maps.google.com/maps?q=Vinayaka%20Nagar%2C%20Bangalore%2C%20Karnataka%20560030&t=&z=15&ie=UTF8&iwloc=&output=embed',
    satellite:
      'https://maps.google.com/maps?q=Vinayaka%20Nagar%2C%20Bangalore%2C%20Karnataka%20560030&t=k&z=15&ie=UTF8&iwloc=&output=embed',
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#52B788]/35 shadow-[0_30px_80px_rgba(0,0,0,0.8)] group bg-[#0A120E]">
      {/* Map Control Header */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#0A120E]/90 backdrop-blur-xl border border-[#52B788]/30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#52B788]/20 border border-[#52B788]/40 flex items-center justify-center text-[#52B788]">
            <MapPin size={18} />
          </div>
          <div>
            <div className="text-white text-xs font-serif font-bold">
              {company.address.street}
            </div>
            <div className="text-white/70 text-[10px] font-sans flex items-center gap-1.5">
              <span>Bangalore, Karnataka</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                {company.address.pincode}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMapType(mapType === 'dark' ? 'satellite' : 'dark')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[11px] font-sans transition-all"
          >
            <Layers size={13} className="text-[#52B788]" />
            <span className="capitalize">{mapType} Map</span>
          </button>

          <a
            href={company.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#52B788] hover:bg-white text-[#0A120E] text-[11px] font-bold font-sans transition-all shadow-[0_0_18px_rgba(82,183,136,0.4)]"
          >
            <span>Directions</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Map Frame */}
      <div className="w-full h-[380px] md:h-[480px]">
        <iframe
          title="Brighton Decor Private Limited — Vinayaka Nagar, Bangalore Showroom"
          src={mapUrls[mapType]}
          className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Bottom Service Banner */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3.5 rounded-2xl bg-[#0A120E]/90 backdrop-blur-xl border border-[#52B788]/30">
        <div className="flex items-center gap-3">
          <ShieldCheck size={18} className="text-[#52B788]" />
          <span className="text-white text-xs font-sans">
            <strong className="text-[#52B788]">100% Free site measurement</strong> across Bangalore &amp; South India
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#52B788] font-mono font-bold">
          <Navigation size={12} />
          <span>Physical Showroom</span>
        </div>
      </div>
    </div>
  );
};

export default ModernMap;
