const INITIAL_SERVICES = [
  // BRIDE & GROOM
  {
    id: "srv-bg-1",
    title: "MAKE UP",
    category: "BRIDE & GROOM",
    subCategory: "BRIDAL MAKEUP",
    price: 18000,
    duration: "150 mins",
    rating: 5.0,
    reviewsCount: 520,
    badge: "Most Popular",
    image: "/images/basic-bridal.jpg",
    description: "Couture Indian bridal makeovers personally crafted by Vaishnavi Singh. Options include Basic Classic Bridal, High-Definition (HD) 4K Base, and Celebrity Airbrush Makeup.",
    highlights: ["Basic, HD & Airbrush Options", "Tear-Proof 24H Waterproof Base", "Lash Enhancement & Eye Artistry", "Lehenga / Dupatta Draping Included"]
  },
  {
    id: "srv-bg-2",
    title: "SKIN RITUALS",
    category: "BRIDE & GROOM",
    subCategory: "BRIDAL SKIN",
    price: 7500,
    duration: "90 mins",
    rating: 4.9,
    reviewsCount: 380,
    badge: "Skin Radiance",
    image: "/images/skin-rituals.jpg",
    description: "Deep dermal cleansing, ultrasonic pore refining, and lymphatic drainage therapies designed to give brides a seamless, luminous glass-skin glow.",
    highlights: ["Deep Ultrasonic Cleansing", "Hydra-Infusion Glow Mask", "Lymphatic Facial Massage", "Instant Dewy Glass Finish"]
  },
  {
    id: "srv-bg-3",
    title: "PRE BRIDAL SERVICES",
    category: "BRIDE & GROOM",
    subCategory: "PRE BRIDAL",
    price: 12500,
    duration: "180 mins",
    rating: 5.0,
    reviewsCount: 450,
    badge: "Bridal Package",
    image: "/images/hd-bridal.jpg",
    description: "Complete pre-bridal package including 24K pure gold leaf facial, full body polish, lavender organic waxing, and revitalizing hair spa therapy.",
    highlights: ["24K Pure Gold Leaf Facial", "Full Body Polish & Glow", "Aroma Manicure & Pedicure", "Keratin Hair Revitalizer"]
  },

  // SKIN
  {
    id: "srv-sk-1",
    title: "FACE RITUALS",
    category: "SKIN",
    subCategory: "FACIAL",
    price: 4500,
    duration: "60 mins",
    rating: 4.9,
    reviewsCount: 310,
    badge: "Face Glow",
    image: "/images/face-rituals.jpg",
    description: "Hydra-infusion facial, cold-roller lymphatic contouring, and dermal brightening treatments designed for clear, smooth, radiant facial skin.",
    highlights: ["Hydra-Infusion Brightening", "Cold Roller Lymphatic Sculpting", "Ultrasonic Blackhead Extraction", "Collagen Sheet Mask"]
  },
  {
    id: "srv-sk-3",
    title: "HANDS & FEET – MANICURE & PEDICURE",
    category: "SKIN",
    subCategory: "MANI PEDI",
    price: 3200,
    duration: "60 mins",
    rating: 4.8,
    reviewsCount: 290,
    badge: "Hands & Feet",
    image: "/images/feet-spa.jpg",
    description: "Aromatic rose petal soak, dead sea sugar scrub exfoliation, cuticle therapy, and paraffin wax treatment for silky smooth hands and feet.",
    highlights: ["Rose Petal Warm Water Soak", "Sugar Scrub Exfoliation", "Cuticle Nourishing Therapy", "Paraffin Deep Hydration"]
  },
  {
    id: "srv-sk-4",
    title: "NAIL BAR – EXTENSIONS & ARTISTRY",
    category: "SKIN",
    subCategory: "NAIL ART",
    price: 3500,
    duration: "60 mins",
    rating: 4.9,
    reviewsCount: 340,
    badge: "Nail Couture",
    image: "/images/nail-bar.jpg",
    description: "Luxury salon nail bar offering shatterproof gel extensions, chrome finishes, french ombre manicure, and hand-painted nail artistry.",
    highlights: ["Shatterproof Gel Extensions", "Custom Chrome & Ombre Art", "Cuticle Conditioning Oil", "High-Gloss Long-Lasting Topcoat"]
  },

  // HAIR
  {
    id: "srv-hr-1",
    title: "UNIQUE & PERSONALIZED HAIR CUTS",
    category: "HAIR",
    subCategory: "HAIR CUTS",
    price: 1500,
    duration: "45 mins",
    rating: 4.8,
    reviewsCount: 420,
    badge: "Trending",
    image: "/images/hair-cuts.jpg",
    description: "Expert customized haircuts, face-framing layers, butterfly cut, and precision styling tailored to your facial structure and hair texture.",
    highlights: ["Face-Framing Layered Cuts", "Custom Texture & Volume Cut", "Blowdry & Styling Finish", "Heat Protection Shield"]
  },
  {
    id: "srv-hr-2",
    title: "HAIR RITUALS – CARE, TREATMENTS & TEXTURE",
    category: "HAIR",
    subCategory: "HAIR SPA",
    price: 5500,
    duration: "90 mins",
    rating: 4.9,
    reviewsCount: 310,
    badge: "Hair Spa",
    image: "/images/hair-rituals.jpg",
    description: "Deep nourishing Keratin spa, botox hair infusion, and intensive moisture repair treatments for ultra-glossy, frizz-free, silky hair.",
    highlights: ["Keratin Deep Hydration Spa", "Hair Botox Moisture Infusion", "Scalp Detox Massage", "Frizz-Free High Gloss Finish"]
  },
  {
    id: "srv-hr-3",
    title: "PERSONALIZED AMMONIA FREE HAIR COLOURS",
    category: "HAIR",
    subCategory: "HAIR COLOUR",
    price: 6500,
    duration: "120 mins",
    rating: 4.9,
    reviewsCount: 280,
    badge: "Organic Colour",
    image: "/images/hair-colors.jpg",
    description: "Bespoke balayage, ombre highlights, caramel tones, and global ammonia-free organic hair coloring with rich pigment and protective bond builders.",
    highlights: ["100% Ammonia-Free Organic Pigment", "Custom Balayage & Ombre", "Bond Multiplier Protection", "High-Gloss Post-Color Seal"]
  }
];

const INITIAL_ARTISTS = [
  {
    id: "art-1",
    name: "Vaishnavi Singh",
    title: "Founder & Lead Celebrity Makeup Artist",
    experience: "10+ Years Excellence",
    rating: 5.0,
    reviews: 850,
    specialty: "Royal HD Bridal, Airbrush & Sangeet Glamour",
    avatar: "/images/airbrush-bridal.jpg",
    availableSlots: ["10:00 AM", "01:30 PM", "04:30 PM", "07:00 PM"]
  }
];

module.exports = {
  INITIAL_SERVICES,
  INITIAL_ARTISTS
};
