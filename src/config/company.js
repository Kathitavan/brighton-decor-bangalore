/**
 * Brighton Decor Private Limited — Bangalore (India) HQ Configuration
 * Central source of truth for all Bangalore business information.
 */

export const company = {
  name: 'Brighton decor',
  displayName: 'Brighton Decor',
  legalName: 'Brighton Decor Private Limited',
  logo: '/assets/imgs/main logo.png',
  tagline: 'Brightening your home',
  taglineSubtitle: 'Defining Your Space',
  taglineFull: 'Brightening your home. Defining Your Space.',
  taglineShort: 'Brightening your home.',
  description:
    'Thoughtfully engineered window blinds, Dream Curtains, custom drapery, and smart motorized shading crafted for luxury homes across Bangalore, Karnataka & South India.',
  established: 2022,
  businessType: 'Private Limited',
  gst: '29AAFCL7414BIZO',

  // Contact
  phone: '+91 9731801476',
  phoneRaw: '919731801476',
  whatsapp: '919731801476',
  whatsappUrl: 'https://wa.me/919731801476',
  email: 'Info@brightondecor.in',
  salesEmail: 'Musaib@brightondecor.in',

  // Address & Physical Showroom
  showroom: true,
  address: {
    street: "2nd 'C' Cross, Vinayaka Nagar",
    line1: "2nd 'C' Cross, Vinayaka Nagar",
    line2: 'Bangalore, Karnataka - 560030, India',
    city: 'Bangalore',
    state: 'Karnataka',
    province: 'Karnataka',
    pincode: '560030',
    postalCode: '560030',
    country: 'India',
    full: "2nd 'C' Cross, Vinayaka Nagar, Bangalore, Karnataka - 560030, India",
    short: 'Vinayaka Nagar, Bangalore - 560030',
  },

  // Hours
  hours: 'Monday – Sunday: 10:00 AM – 8:00 PM',
  hoursSchedule: {
    weekdays: 'Monday – Sunday',
    time: '10:00 AM – 8:00 PM',
    closed: 'Open All 7 Days',
  },

  // Maps
  googleMapsUrl: 'https://maps.app.goo.gl/QdT4vWFgv841pQqJ8?g_st=ic',
  googleMapsQuery: 'Vinayaka Nagar, Bangalore, Karnataka 560030',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=Vinayaka%20Nagar%2C%20Bangalore%2C%20Karnataka%20560030&t=&z=15&ie=UTF8&iwloc=&output=embed',

  // Social
  instagram: 'https://www.instagram.com/brightondecor.in?igsh=MTVjdnJmemRwdWY=',
  social: {
    instagram: 'https://www.instagram.com/brightondecor.in?igsh=MTVjdnJmemRwdWY=',
    facebook: '',
    linkedin: '',
  },

  // Service area
  serviceArea: 'Bangalore, Karnataka & South India',
  primaryCity: 'Bangalore, Karnataka',

  // Trust statistics
  stats: {
    projects: '500+',
    homes: '500+',
    years: '4+',
    satisfaction: '100%',
    warranty: '5–7 Years',
    leadTime: '3–4 Days',
  },

  // Policies, Motorization & Payments
  installationCharge: '₹250',
  sampleDimensions: '1m x 1m & Bespoke Site Sizing',
  motorBrands: ['Somfy', 'Tuya'],
  paymentMethods: [
    'UPI (GPay / PhonePe / Paytm)',
    'Cash',
    'Bank Transfer (NEFT / RTGS / IMPS)',
    'Cheque',
  ],
  customOrderPolicy:
    'Once order is placed, it is custom manufactured; no return or refund.',
  pricingPolicy:
    'All products are custom tailored to your window dimensions and selected motorization brand. Request a personalized quote after a free site measurement.',
};

// Services offered by Brighton Decor Bangalore HQ
export const bangaloreServices = [
  {
    id: 'dream-curtains',
    name: 'Dream Curtains',
    shortDesc: 'Walk-through sheer vertical luxury drape system — the poetry of sheers with the privacy of blinds.',
    icon: 'Sparkles',
    path: '/services#dream-curtains',
  },
  {
    id: 'blinds',
    name: 'Window Blinds',
    shortDesc: 'Precision-engineered Roller, Zebra, Honeycomb, Wooden, Vertical, and PVC blinds.',
    icon: 'Layers',
    path: '/services#blinds',
  },
  {
    id: 'window-coverings',
    name: 'Custom Drapery',
    shortDesc: 'Tailored pinch-pleat curtains, architectural sheers, and blackout drapery systems.',
    icon: 'Frame',
    path: '/services#window-coverings',
  },
  {
    id: 'motorized-shading',
    name: 'Smart Motorized Shading',
    shortDesc: 'Remote-controlled & smart home shading powered by Somfy and Tuya motors.',
    icon: 'Zap',
    path: '/services#motorized-shading',
  },
  {
    id: 'measurement',
    name: 'Free Site Measurement',
    shortDesc: '100% complimentary on-site measurement & consultation across Bangalore.',
    icon: 'Ruler',
    path: '/services#measurement',
  },
  {
    id: 'consultation',
    name: 'Showroom & Design Consultation',
    shortDesc: 'Visit our Vinayaka Nagar showroom or invite our specialists home with 1m x 1m samples.',
    icon: 'Lightbulb',
    path: '/services#consultation',
  },
];

// Customer journey steps
export const processSteps = [
  {
    step: '01',
    title: 'Reach Out or Visit Showroom',
    description: 'Call or WhatsApp +91 9731801476, or visit our Vinayaka Nagar showroom in Bangalore (10 AM – 8 PM, Mon–Sun).',
  },
  {
    step: '02',
    title: 'Free Site Measurement',
    description: 'Our specialists visit your Bangalore residence or commercial site 100% free of charge for laser-accurate measurements.',
  },
  {
    step: '03',
    title: 'Sample & Fabric Curation',
    description: 'Inspect 1m x 1m fabric swatches, Dream Curtains vanes, and blind textures under your room’s natural lighting.',
  },
  {
    step: '04',
    title: 'Motorization & Custom Quote',
    description: 'Choose manual operation or Somfy / Tuya smart motorization and receive a tailored architectural quote with zero hidden fees.',
  },
  {
    step: '05',
    title: 'Custom Manufacturing',
    description: 'Once confirmed, your window solutions are precision-crafted to bespoke site dimensions within 3–4 days.',
  },
  {
    step: '06',
    title: 'Precision Installation (₹250)',
    description: 'Trained technicians complete dust-free installation at a nominal ₹250 charge across Bangalore.',
  },
  {
    step: '07',
    title: '5–7 Years Peace of Mind',
    description: 'Enjoy your transformed space backed by our 5 to 7 years warranty on window solutions and 100% satisfaction commitment.',
  },
];

// FAQ for Bangalore HQ
export const faqItems = [
  {
    q: 'Is site measurement and consultation really free in Bangalore?',
    a: 'Yes — site measurement and consultation are 100% free for all customers across Bangalore. Our design team visits your home or office with samples, takes exact measurements, and prepares a custom quote with zero obligation.',
  },
  {
    q: 'Why are prices not displayed on the website?',
    a: 'Every window treatment, Dream Curtain system, and motorized shade is custom manufactured to your exact site dimensions, chosen fabric grade, and motor brand (Somfy or Tuya). Request a custom quote or book a free measurement for an exact tailored estimate.',
  },
  {
    q: 'What is the installation charge and delivery timeline?',
    a: 'We offer a fast 3 to 4 days delivery lead time from order confirmation. Professional installation across Bangalore is charged nominally at just ₹250.',
  },
  {
    q: 'What warranty do you provide on window solutions?',
    a: 'Our window blinds, Dream Curtains, custom drapery hardware, and motorized systems are backed by a comprehensive 5 to 7 years warranty depending on the selected product and motor brand.',
  },
  {
    q: 'What are Dream Curtains?',
    a: 'Dream Curtains are our flagship walk-through sheer vertical luxury drape system. They combine the flowing elegance of sheer curtains with the light-control privacy of vertical blinds — allowing 180° light rotation, individual machine-washable vanes, and seamless walk-through convenience without opening the track.',
  },
  {
    q: 'Do you offer smart motorized blinds and curtains?',
    a: 'Yes! Remote-controlled and smart home motorization is available across all our products using trusted Somfy and Tuya motors. Final pricing depends on your chosen motor brand and window dimensions.',
  },
  {
    q: 'Do you have a physical showroom in Bangalore?',
    a: "Yes! Visit our physical showroom at 2nd 'C' Cross, Vinayaka Nagar, Bangalore, Karnataka - 560030. We are open Monday to Sunday from 10:00 AM to 8:00 PM.",
  },
  {
    q: 'What payment methods do you accept and what is your order policy?',
    a: 'We accept UPI (GPay / PhonePe / Paytm), Cash, Bank Transfer (NEFT / RTGS / IMPS), and Cheque. Please note our custom architectural order policy: once an order is placed, it is custom manufactured; no return or refund.',
  },
  {
    q: 'Can I preview blinds and curtains in 3D before booking a visit?',
    a: 'Yes! Use our interactive 3D Room Studio to experiment with Roller, Zebra, Honeycomb, Wooden, Vertical, and PVC blinds alongside drapery, wall colours, and lighting in real time.',
  },
];
