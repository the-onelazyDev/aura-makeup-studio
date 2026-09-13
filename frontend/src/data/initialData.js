export const INITIAL_SERVICES = [
  // BRIDE & GROOM
  {
    id: "srv-1",
    title: "Basic / Classic Bridal Makeover",
    category: "BRIDE & GROOM",
    subCategory: "MAKE UP",
    price: 12000,
    duration: "120 mins",
    rating: 4.9,
    reviewsCount: 310,
    badge: "Basic Bridal",
    image: "/images/basic-bridal.jpg",
    description: "Traditional classic bridal makeover featuring a radiant golden foundation base, soft contouring, classic winged Indian bridal eye styling, red bindi, and lehenga/saree draping.",
    highlights: ["Traditional Long-Lasting Base", "Festive Bridal Eye Artistry", "Lash Enhancement & Bindi Setting", "Saree / Lehenga Draping Included"]
  },
  {
    id: "srv-2",
    title: "High-Definition (HD) Bridal Makeover",
    category: "BRIDE & GROOM",
    subCategory: "HD BRIDAL",
    price: 18000,
    duration: "150 mins",
    rating: 5.0,
    reviewsCount: 450,
    badge: "HD Bridal",
    image: "/images/hd-bridal.jpg",
    description: "4K Camera-ready micro-pigmented HD base that seamlessly diffuses pores. Sculpted cheekbones, champagne cut-crease eye shadow, fluttery 3D lashes, and velvet nude-rose lips.",
    highlights: ["4K Camera-Ready HD Base", "Pore-Blown Seamless Finish", "Sculpted Facial Contouring", "Waterproof & Sweat-Resistant"]
  },
  {
    id: "srv-3",
    title: "Celebrity Airbrush Bridal Makeover",
    category: "BRIDE & GROOM",
    subCategory: "AIRBRUSH",
    price: 25000,
    duration: "180 mins",
    rating: 5.0,
    reviewsCount: 520,
    badge: "Airbrush Bridal",
    image: "/images/airbrush-bridal.jpg",
    description: "Ultra-luxury silicone-based airbrush misting personally crafted by Vaishnavi Singh. Delivers a featherlight, 24-hour transfer-proof, tear-proof, porcelain celebrity finish.",
    highlights: ["Done Personally by Vaishnavi Singh", "24H Tear-Proof & Transfer-Proof", "Silicone Micro-Mist Porcelain Base", "Includes 3D Lashes & Hair Couture"]
  },
  {
    id: "srv-4",
    title: "Dewy / Glass Skin Bridal Makeover",
    category: "BRIDE & GROOM",
    subCategory: "GLASS SKIN",
    price: 20000,
    duration: "150 mins",
    rating: 5.0,
    reviewsCount: 280,
    badge: "Dewy Glass Skin",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
    description: "Modern Parisian wet-glow aesthetic with ultra-hydrated luminous skin, glazed cheekbone highlight, glossy rose lips, and soft romantic textured hair styling.",
    highlights: ["Luminous Ultra-Hydrated Glow", "Fresh Glazed Cheekbone Highlight", "Modern Glossy Lip Artistry", "Soft Romantic Hair Bun / Waves"]
  },
  {
    id: "srv-5",
    title: "Royal Velvet Matte Bridal Makeover",
    category: "BRIDE & GROOM",
    subCategory: "MATTE ROYAL",
    price: 18500,
    duration: "150 mins",
    rating: 4.9,
    reviewsCount: 240,
    badge: "Matte Royal",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop",
    description: "Regal full-coverage velvet matte base with bold royal crimson lips, matte cut-crease smokey eyes, and authentic temple/heritage jewelry settings.",
    highlights: ["Transfer-Proof Velvet Matte Base", "Regal Bold Lip Artistry", "Matte Cut-Crease Smokey Eye", "Matha Patti & Dupatta Setting"]
  },
  {
    id: "srv-6",
    title: "Sangeet & Reception Cocktail Glam",
    category: "BRIDE & GROOM",
    subCategory: "COCKTAIL GLAM",
    price: 10500,
    duration: "90 mins",
    rating: 4.9,
    reviewsCount: 390,
    badge: "Cocktail Glam",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop",
    description: "Glamorous evening reception and sangeet makeover with shimmering glitter eye artistry, glowing bronzer, and Hollywood volume curls.",
    highlights: ["Shimmer Glitter Cut-Crease", "Sculpted Evening Glow", "Hollywood Volume Waves / Updo", "24-Hour Stay Base"]
  },

  // HAIR
  {
    id: "srv-7",
    title: "Unique & Personalized Hair Cuts",
    category: "HAIR",
    subCategory: "HAIR CUTS",
    price: 1500,
    duration: "45 mins",
    rating: 4.8,
    reviewsCount: 180,
    badge: "Hair Couture",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    description: "Expert customized haircuts, face-framing layers, and precision styling tailored to your facial structure and hair texture.",
    highlights: ["Custom Face-Framing Layers", "Blowdry & Styling Finish", "Hair Texture Assessment", "Heat Protection Shield"]
  },
  {
    id: "srv-8",
    title: "Hair Rituals – Care, Treatments & Texture",
    category: "HAIR",
    subCategory: "HAIR CARE",
    price: 5500,
    duration: "90 mins",
    rating: 4.9,
    reviewsCount: 220,
    badge: "Hair Spa",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    description: "Deep nourishing Keratin spa, botox hair infusion, and intense moisture repair treatments for ultra-glossy, frizz-free locks.",
    highlights: ["Keratin Deep Hydration Spa", "Scalp Detox & Massage", "Frizz-Free Shine Infusion", "Split-End Sealing"]
  },
  {
    id: "srv-9",
    title: "Personalized Ammonia Free Hair Colours",
    category: "HAIR",
    subCategory: "HAIR COLOUR",
    price: 6500,
    duration: "120 mins",
    rating: 4.9,
    reviewsCount: 195,
    badge: "Hair Colour",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
    description: "Bespoke balayage, ombre highlights, and global ammonia-free organic hair coloring with rich pigment and protective bond builders.",
    highlights: ["100% Ammonia-Free Organic Color", "Custom Balayage & Ombre", "Bond Multiplier Protection", "High-Gloss Post-Color Seal"]
  },

  // SKIN
  {
    id: "srv-10",
    title: "Face Rituals & Dermal Glow",
    category: "SKIN",
    subCategory: "FACE RITUALS",
    price: 4500,
    duration: "60 mins",
    rating: 4.9,
    reviewsCount: 210,
    badge: "Face Rituals",
    image: "https://images.unsplash.com/photo-1512290900672-1f02e71dfcf8?q=80&w=800&auto=format&fit=crop",
    description: "Hydra-infusion facial, ultrasonic pore cleansing, and instant brightening dermal glow therapies designed for smooth, glowing skin.",
    highlights: ["Ultrasonic Pore Cleansing", "Hydra-Infusion Brightening", "Lymphatic Drainage Massage", "Instant Dewy Glow"]
  },
  {
    id: "srv-11",
    title: "24K Gold Pre-Bridal Radiance Facial",
    category: "SKIN",
    subCategory: "PRE BRIDAL",
    price: 6000,
    duration: "75 mins",
    rating: 5.0,
    reviewsCount: 340,
    badge: "Skin Prep",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    description: "Deep dermal cleansing, ultrasonic exfoliation, and pure 24K gold foil infusion to prep your skin for flawless, poreless makeup application.",
    highlights: ["24K Gold Leaf Infusion", "Ultrasonic Exfoliation", "Lymphatic Facial Massage", "Instant Dewy Glow"]
  },
  {
    id: "srv-12",
    title: "Hands & Feet Spa – Manicure & Pedicure",
    category: "SKIN",
    subCategory: "BODY SPA",
    price: 3000,
    duration: "60 mins",
    rating: 4.8,
    reviewsCount: 160,
    badge: "Hands & Feet",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
    description: "Luxury rose-petal soak, sugar scrub exfoliation, cuticle therapy, and relaxing foot massage for silky smooth hands and feet.",
    highlights: ["Aromatic Rose Petal Soak", "Dead Sea Salt Scrub", "Deep Cuticle Nourishment", "Paraffin Wax Softening"]
  },
  {
    id: "srv-13",
    title: "Nail Bar – Luxury Gel Extensions & Art",
    category: "SKIN",
    subCategory: "NAIL BAR",
    price: 3500,
    duration: "60 mins",
    rating: 4.9,
    reviewsCount: 270,
    badge: "Nail Bar",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
    description: "Premium shatterproof gel nail extensions featuring custom ombre glitter, chrome finishes, or hand-painted botanical bridal nail art.",
    highlights: ["Shatterproof Gel Extensions", "Custom Hand-Painted Art", "Cuticle Nourishing Oil", "Long-Lasting High Gloss"]
  }
];

export const INITIAL_ARTISTS = [
  {
    id: "art-1",
    name: "Vaishnavi Singh",
    title: "Founder & Lead Celebrity Makeup Artist",
    experience: "10+ Years Excellence",
    rating: 5.0,
    reviews: 850,
    specialty: "Royal HD Bridal, Airbrush & Sangeet Glamour",
    avatar: "/images/owner-portrait.jpg",
    availableSlots: ["10:00 AM", "01:30 PM", "04:30 PM", "07:00 PM"]
  }
];
