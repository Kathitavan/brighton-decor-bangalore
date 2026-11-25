// src/data/services.js
// Single source of truth dataset for Brighton Decor Private Limited (Bangalore HQ)

export const services = [
  {
    id: 'dream-curtains',
    name: 'Dream Curtains',
    category: 'FLAGSHIP SHEER DRAPERY',
    tagline: 'The Poetry of Sheers with the Privacy of Blinds.',
    image: '/assets/imgs/decore/living-room-custom-drapery.jpg',
    description:
      'Walk-through sheer vertical louvers with seamless light transitions. Effortlessly glide through closed curtains without opening them.',
    longDescription:
      'Introducing Dream Curtains — our flagship architectural window system for discerning Bangalore residences. Engineered with soft-flowing, walk-through sheer vertical louvers that rotate 180° for effortless transitions from sunlit radiance to complete evening privacy. Individual fabric vanes are machine washable and pair seamlessly with motorized smart wands or Somfy/Tuya remote controls.',
    icon: 'Sparkles',
    features: [
      'Walk-Through Fabric Vanes',
      '180° Light Rotation',
      'Machine Washable Individual Vanes',
      'Motorized Smart Wand or Remote Control',
      '1m x 1m Samples & Bespoke Site Sizing',
      '5–7 Years Warranty',
    ],
  },
  {
    id: 'blinds',
    name: 'Window Blinds',
    category: 'WINDOW SOLUTIONS',
    tagline: 'Precision light control. 5–7 years warranty.',
    image: '/assets/imgs/products/roller-blinds.jpg',
    description:
      'Custom-engineered Roller, Zebra, Honeycomb, Wooden, Vertical, and PVC blinds tailored to exact Bangalore window dimensions.',
    longDescription:
      'We craft an architectural collection of window blinds suited for Bangalore villas, high-rise apartments, and corporate spaces. From minimal solar-screen Roller and dual-layer Zebra blinds to thermal Honeycomb, natural Wooden, Vertical, and waterproof PVC blinds — every order is custom measured for free and delivered in 3–4 days.',
    icon: 'Layers',
    features: [
      'Roller Blinds',
      'Zebra Blinds',
      'Honeycomb Blinds',
      'Wooden Blinds',
      'Vertical Blinds',
      'PVC Blinds',
    ],
  },
  {
    id: 'window-coverings',
    name: 'Custom Drapery',
    category: 'ARCHITECTURAL DRAPERY',
    tagline: 'Light, shadow, and tailored Indian luxury.',
    image: '/assets/imgs/decore/french-patio-door-drapery.jpg',
    description:
      'Bespoke pinch-pleat curtains, ceiling-recessed sheer tracks, and blackout drapery tailored for balconies, bay windows, and grand living rooms.',
    longDescription:
      'Beyond blinds and Dream Curtains, our atelier tailors floor-to-ceiling custom drapery and architectural window coverings. Whether you require acoustic blackout linings for bedroom serenity, Belgian linen sheers for natural ventilation, or heavy-duty silent motorized tracks, our team delivers flawless finish within 3–4 days.',
    icon: 'Frame',
    features: [
      'Pinch-Pleat & S-Fold Curtains',
      'Sheer & Blackout Layering',
      'French & Balcony Door Drapery',
      'Ceiling-Recessed Tracks',
      'Somfy / Tuya Motorized Tracks',
      '5–7 Years Warranty',
    ],
  },
  {
    id: 'motorized-shading',
    name: 'Smart Motorized Shading',
    category: 'AUTOMATION & MOTORIZATION',
    tagline: 'Somfy & Tuya smart home control across all products.',
    image: '/assets/imgs/decore/motorized-zebra-blinds.jpg',
    description:
      'Remote-controlled & smart home shading powered by Somfy and Tuya motors — available across Dream Curtains, blinds, and custom drapery.',
    longDescription:
      'Elevate everyday convenience with whisper-quiet motorized window solutions. Available across every product category with your choice of Somfy or Tuya motors (final quote depends on selected motor brand and site dimensions). Sync with wall switches, handheld remotes, smartphone apps, and voice assistants.',
    icon: 'Sparkles',
    features: [
      'Somfy & Tuya Motor Options',
      'App, Voice & Remote Control',
      'Rechargeable & Hardwired Motors',
      'Automated Sun & Privacy Schedules',
      'Child & Pet Safe Cordless Design',
      'Multi-Window Group Sync',
    ],
    types: [
      {
        name: 'Motorized Dream Curtains',
        desc: '180° automated sheer vertical louver rotation and smooth silent traverse via Somfy or Tuya control.',
        image: '/assets/imgs/decore/living-room-custom-drapery.jpg',
      },
      {
        name: 'Automated Zebra & Roller Blinds',
        desc: 'Motorized dual-layer zebra and solar roller shades delivering one-touch daylight-to-blackout transitions.',
        image: '/assets/imgs/decore/motorized-zebra-blinds.jpg',
      },
      {
        name: 'Penthouse & Double-Height Shading',
        desc: 'High-torque motorized roller and drapery systems engineered for panoramic villa glass and double-height lounges.',
        image: '/assets/imgs/decore/conservatory-sunroom-shades.jpg',
      },
      {
        name: 'Commercial & Boardroom Systems',
        desc: 'Anti-glare architectural blinds engineered for Bangalore tech parks, executive boardrooms, and luxury offices.',
        image: '/assets/imgs/decore/commercial-conference-blinds.jpg',
      },
    ],
  },
  {
    id: 'measurement',
    name: 'Free Site Measurement',
    category: 'BANGALORE CONCIERGE',
    tagline: '100% Free across Bangalore. Zero obligation.',
    image: '/assets/imgs/portfolio/project-1.jpg',
    description:
      'Complimentary on-site measurement & consultation anywhere in Bangalore for millimeter-accurate custom fabrication.',
    longDescription:
      'Every bespoke window installation begins with exact measurement. Our Bangalore specialists visit your home or office 100% free of charge with 1m x 1m samples, take laser-precise window measurements, and provide a tailored custom quote. Fast 3–4 days delivery and nominal ₹250 professional installation.',
    icon: 'Ruler',
    features: [
      '100% Free Site Visit in Bangalore',
      '1m x 1m Physical Sample Viewing',
      'Bespoke Site Sizing',
      'Custom Tailored Quotes',
      '3–4 Days Fast Lead Time',
      '₹250 Nominal Installation',
    ],
  },
  {
    id: 'consultation',
    name: 'Showroom & Design Consultation',
    category: 'VINAYAKA NAGAR SHOWROOM',
    tagline: 'Visit our Bangalore showroom Mon–Sun, 10 AM – 8 PM.',
    image: '/assets/imgs/about/showroom-saskatoon.jpg',
    description:
      'Experience Dream Curtains, blinds, drapery fabrics, and live Somfy/Tuya motors at our Vinayaka Nagar showroom or in your home.',
    longDescription:
      "Visit our physical showroom at 2nd 'C' Cross, Vinayaka Nagar, Bangalore - 560030 (open Monday to Sunday, 10:00 AM – 8:00 PM) or book a home visit. Compare sheer weaves, blackout textiles, wooden slats, and motorized tracks side-by-side with honest guidance from our leadership and design specialists.",
    icon: 'Lightbulb',
    features: [
      'Physical Showroom in Bangalore',
      'Open Mon–Sun: 10 AM – 8 PM',
      'Live Motorization Demos',
      '1m x 1m Swatch Library',
      'Light & Privacy Engineering',
      'Dedicated Project Concierge',
    ],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Contact or Visit Showroom',
    description: "Call or WhatsApp +91 9731801476, or drop by our Vinayaka Nagar showroom in Bangalore (10 AM – 8 PM daily).",
  },
  {
    step: '02',
    title: 'Free Site Measurement',
    description: '100% complimentary on-site visit anywhere in Bangalore for laser-accurate window dimensions.',
  },
  {
    step: '03',
    title: 'Sample & Product Selection',
    description: 'Preview 1m x 1m samples of Dream Curtains, blinds, and drapery fabrics in your actual room light.',
  },
  {
    step: '04',
    title: 'Motorization & Custom Quote',
    description: 'Choose manual or Somfy / Tuya smart motors and receive a tailored quote — no hidden charges.',
  },
  {
    step: '05',
    title: 'Bespoke Fabrication (3–4 Days)',
    description: 'Your custom architectural order is crafted to exact site measurements with a fast 3–4 day turnaround.',
  },
  {
    step: '06',
    title: 'Precision Installation (₹250)',
    description: 'Trained technicians complete clean, dust-free installation across Bangalore for a nominal ₹250 fee.',
  },
  {
    step: '07',
    title: '5–7 Years Warranty Assurance',
    description: 'Enjoy lasting elegance backed by our 5 to 7 years warranty on window solutions and 100% satisfaction.',
  },
];
