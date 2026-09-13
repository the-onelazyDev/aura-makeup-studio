const INITIAL_SERVICES = [
  {
    id: "srv-1",
    title: "Basic / Classic Bridal Makeover",
    category: "Basic Bridal",
    price: 12000,
    duration: "120 mins",
    rating: 4.9,
    reviewsCount: 310,
    badge: "Classic Essential",
    image: "/images/owner-portrait.jpg",
    description: "Traditional classic bridal makeover featuring a radiant glowing foundation base, soft contouring, festive Indian bridal eye styling, lash enhancement, and authentic lehenga/saree draping.",
    highlights: ["Traditional Long-Lasting Base", "Festive Bridal Eye Artistry", "Lash Enhancement & Bindi Setting", "Saree / Lehenga Draping Included"]
  },
  {
    id: "srv-2",
    title: "High-Definition (HD) Bridal Makeover",
    category: "HD Bridal",
    price: 18000,
    duration: "150 mins",
    rating: 5.0,
    reviewsCount: 450,
    badge: "Most Popular",
    image: "/images/owner-hero.jpg",
    description: "4K Camera-ready micro-pigmented HD base that seamlessly diffuses pores and fine lines. Ideal for high-definition wedding photography and all-day wedding rituals.",
    highlights: ["4K Camera-Ready HD Base", "Pore-Blown Seamless Finish", "Sculpted Facial Contouring", "Waterproof & Sweat-Resistant"]
  },
  {
    id: "srv-3",
    title: "Celebrity Airbrush Bridal Makeover",
    category: "Airbrush Bridal",
    price: 25000,
    duration: "180 mins",
    rating: 5.0,
    reviewsCount: 520,
    badge: "Founder Signature",
    image: "/images/owner-hero.jpg",
    description: "Ultra-luxury silicone-based airbrush misting personally crafted by Vaishnavi Singh. Delivers a feather-light, 24-hour transfer-proof, tear-proof, porcelain celebrity finish.",
    highlights: ["Done Personally by Vaishnavi Singh", "24H Tear-Proof & Transfer-Proof", "Silicone Micro-Mist Porcelain Base", "Includes 3D Lashes & Hair Couture"]
  },
  {
    id: "srv-4",
    title: "Dewy / Glass Skin Bridal Makeover",
    category: "Dewy / Glass Skin",
    price: 20000,
    duration: "150 mins",
    rating: 5.0,
    reviewsCount: 280,
    badge: "Trending Luxury",
    image: "/images/owner-portrait.jpg",
    description: "Modern Parisian wet-glow aesthetic with ultra-hydrated luminous skin, glossy rose lips, dewy cheekbone glaze, and soft romantic textured hair styling.",
    highlights: ["Luminous Ultra-Hydrated Glow", "Fresh Glazed Cheekbone Highlight", "Modern Glossy Lip Artistry", "Soft Romantic Hair Bun / Waves"]
  },
  {
    id: "srv-5",
    title: "Royal Velvet Matte Bridal Makeover",
    category: "Matte Royal",
    price: 18500,
    duration: "150 mins",
    rating: 4.9,
    reviewsCount: 240,
    badge: "Royal Heritage",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    description: "Regal full-coverage velvet matte base with bold royal lips, matte cut-crease smokey eyes, and authentic temple/heritage jewelry settings.",
    highlights: ["Transfer-Proof Velvet Matte Base", "Regal Bold Lip Artistry", "Matte Cut-Crease Smokey Eye", "Matha Patti & Dupatta Setting"]
  },
  {
    id: "srv-6",
    title: "Sangeet & Reception Cocktail Glam",
    category: "Party & Reception",
    price: 10500,
    duration: "90 mins",
    rating: 4.9,
    reviewsCount: 390,
    badge: "Party Favorite",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    description: "Glamorous evening reception and sangeet makeover with shimmering glitter eye artistry, glowing bronzer, and Hollywood volume curls.",
    highlights: ["Shimmer Glitter Cut-Crease", "Sculpted Evening Glow", "Hollywood Volume Waves / Updo", "24-Hour Stay Base"]
  },
  {
    id: "srv-7",
    title: "Couture Hair Styling & 24K Pre-Bridal Spa",
    category: "Hair & Pre-Bridal",
    price: 7500,
    duration: "90 mins",
    rating: 4.8,
    reviewsCount: 195,
    badge: "Bridal Prep",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    description: "Deep pre-bridal skin cleansing with 24K gold leaf infusion facial, paired with vintage bridal bun styling, hair extension integration, and floral veni setting.",
    highlights: ["24K Gold Dermal Prep Facial", "Custom Bridal Bun & Floral Veni", "Hair Extension Integration", "Ultrasonic Exfoliation Glow"]
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
    avatar: "/images/owner-portrait.jpg",
    availableSlots: ["10:00 AM", "01:30 PM", "04:30 PM", "07:00 PM"]
  }
];

module.exports = {
  INITIAL_SERVICES,
  INITIAL_ARTISTS
};
