const INITIAL_SERVICES = [
  {
    id: "srv-1",
    title: "Royal Bridal Signature Makeover",
    category: "Bridal",
    price: 25000,
    duration: "180 mins",
    rating: 4.9,
    reviewsCount: 342,
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    description: "Flawless HD Airbrush bridal makeup tailored for your special day. Includes luxury mink lashes, saree/dupatta draping, couture hair styling, and premium touch-up kit.",
    highlights: ["HD Airbrush Finish", "Luxury Lash Extensions", "Dupatta & Saree Draping", "Complimentary Touch-up Kit"]
  },
  {
    id: "srv-2",
    title: "HD Glamour Party Makeover",
    category: "Party Glam",
    price: 8500,
    duration: "90 mins",
    rating: 4.8,
    reviewsCount: 215,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    description: "High-definition waterproof makeup designed for evening parties, sangeet, and gala receptions. Features sculpted contouring and smokey eye artistry.",
    highlights: ["Waterproof HD Base", "3D Eye Artistry", "Volume Blowdry / Updo", "Lip Tint Customization"]
  },
  {
    id: "srv-3",
    title: "Celebrity Airbrush HD Makeover",
    category: "Airbrush",
    price: 15000,
    duration: "120 mins",
    rating: 4.9,
    reviewsCount: 188,
    badge: "Luxury Choice",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    description: "Ultra-lightweight silicone airbrush formula offering 24-hour transfer-proof camera-ready glow. Perfect for high-profile events and red carpet shoots.",
    highlights: ["Silicone 24H Airbrush Base", "Transfer-proof & Sweat-proof", "Precision Brow Sculpting", "Glaze Setting Spray"]
  },
  {
    id: "srv-4",
    title: "Couture Hair Styling & Royal Spa",
    category: "Hair Styling",
    price: 5500,
    duration: "75 mins",
    rating: 4.8,
    reviewsCount: 142,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    description: "Transformative hair styling ranging from Hollywood Vintage Waves, Messy Textured Buns to Braided Couture paired with a nourishing Keratin hair spa.",
    highlights: ["Custom Updo or Waves", "Keratin Hydration Spa", "Heat Protection Shield", "Accessory Placement"]
  },
  {
    id: "srv-5",
    title: "24K Gold Radiance Prep Facial",
    category: "Skin Spa",
    price: 6000,
    duration: "60 mins",
    rating: 4.9,
    reviewsCount: 96,
    badge: "Skin Prep",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    description: "Deep dermal cleansing, ultrasonic exfoliation, and pure 24K gold foil infusion to prep your skin for seamless, poreless makeup application.",
    highlights: ["24K Gold Leaf Infusion", "Ultrasonic Exfoliation", "Lymphatic Facial Massage", "Instant Dewy Glow"]
  },
  {
    id: "srv-6",
    title: "Luxury Gel Extensions & Nail Art",
    category: "Nail Care",
    price: 3500,
    duration: "60 mins",
    rating: 4.7,
    reviewsCount: 110,
    badge: "Express Glam",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    description: "Premium gel nail extensions featuring custom ombre glitter, chrome finishes, or hand-painted botanical nail art.",
    highlights: ["Shatterproof Gel Extensions", "Custom Hand-Painted Art", "Cuticle Nourishing Oil", "Long-Lasting Gloss"]
  }
];

const INITIAL_ARTISTS = [
  {
    id: "art-1",
    name: "Meenakshi Dutt",
    title: "Senior Master Bridal Artist",
    experience: "18+ Years",
    rating: 4.9,
    reviews: 580,
    specialty: "Royal Bridal & Airbrush Specialist",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    availableSlots: ["10:00 AM", "01:30 PM", "04:30 PM", "07:00 PM"]
  },
  {
    id: "art-2",
    name: "Rhythm Kapoor",
    title: "Celebrity Makeup Specialist",
    experience: "12+ Years",
    rating: 4.8,
    reviews: 410,
    specialty: "HD Glamour & Editorial Artistry",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    availableSlots: ["11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"]
  },
  {
    id: "art-3",
    name: "Ananya Malhotra",
    title: "Couture Hair Architect",
    experience: "10+ Years",
    rating: 4.9,
    reviews: 320,
    specialty: "Hollywood Waves & Bridal Buns",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    availableSlots: ["09:30 AM", "12:30 PM", "03:30 PM", "06:30 PM"]
  },
  {
    id: "art-4",
    name: "Kavya Sharma",
    title: "Skin Radiance & Soft Glam Expert",
    experience: "8+ Years",
    rating: 4.7,
    reviews: 240,
    specialty: "Glass Skin & Dewy Engagement Looks",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    availableSlots: ["10:30 AM", "01:00 PM", "04:00 PM", "07:30 PM"]
  }
];

module.exports = {
  INITIAL_SERVICES,
  INITIAL_ARTISTS
};
