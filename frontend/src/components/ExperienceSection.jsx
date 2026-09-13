import React from 'react';
import { ShieldCheck, Sparkles, Heart, Award, Star, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

const BRAND_PILLARS = [
  {
    icon: <Sparkles size={24} color="#C59B27" />,
    title: "100% International Luxury Products",
    description: "Exclusively genuine cosmetics from M·A·C, Huda Beauty, NARS, Dior, Estée Lauder, and Kryolan for skin-safe, poreless finishes."
  },
  {
    icon: <ShieldCheck size={24} color="#059669" />,
    title: "24-Hour Tear & Sweat Proof Base",
    description: "High-definition micro-pigmented foundations engineered to endure long wedding rituals, humidity, and 4K camera lenses."
  },
  {
    icon: <Heart size={24} color="#DC2626" />,
    title: "Private VIP Bridal Suites",
    description: "Spacious sanitized bridal dressing lounges with professional vanity studio lighting, mirror stages, and complimentary assistance."
  },
  {
    icon: <Award size={24} color="#2563EB" />,
    title: "Certified Master Artistry",
    description: "Over a decade of transformative bridal excellence, custom face-sculpting, and modern vintage Hollywood hair styling."
  }
];

const LUXURY_BRANDS = [
  "M·A·C", "HUDA BEAUTY", "NARS", "ESTÉE LAUDER", "ANASTASIA BEVERLY HILLS", "DYSON", "KÉRASTASE", "KRYOLAN"
];

const REVIEWS = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Bride (December Wedding)",
    rating: 5,
    comment: "My Celebrity Airbrush bridal look stayed completely intact through 8+ hours of wedding rituals, tears, and photoshoots. The glow was natural yet regal!"
  },
  {
    id: 2,
    name: "Dr. Ritu Verma",
    role: "Regular Salon & Hair Client",
    rating: 5,
    comment: "The finest luxury studio in Modinagar. The staff is polite, hygienic, and the hair keratin spa gave my hair a lasting mirror shine."
  },
  {
    id: 3,
    name: "Megha Aggarwal",
    role: "Pre-Bridal & Nail Art Client",
    rating: 5,
    comment: "The 24K Gold pre-bridal facial and custom gel extensions were flawless. Truly 5-star experience with great attention to comfort."
  }
];

export default function ExperienceSection({ onOpenBooking }) {
  return (
    <section id="experience" style={{
      padding: '70px 20px',
      background: '#FAFAFA',
      borderTop: '1px solid #E5E7EB',
      borderBottom: '1px solid #E5E7EB'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#FFFBEB',
            color: '#B45309',
            border: '1px solid #FDE68A',
            fontSize: '0.75rem',
            fontWeight: '700',
            padding: '4px 14px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            marginBottom: '10px'
          }}>
            <Sparkles size={13} color="#C59B27" />
            <span>The Aura Difference</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
            Why Brides & Clients Choose <span className="gold-text">Aura Luxury Studio</span>
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '620px', margin: '0 auto', fontSize: '0.96rem', lineHeight: '1.5' }}>
            Elevating beauty in Govindpuri, Modinagar with international cosmetic standards, hygienic studio suites, and bespoke artistry.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '50px'
        }}>
          {BRAND_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                padding: '28px 22px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: '#F9FAFB',
                border: '1px solid #F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#6B7280', lineHeight: '1.5', flex: 1 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Luxury Brand Marquee Banner */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          padding: '20px 24px',
          marginBottom: '50px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#9A7412', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
            ✦ 100% Genuine Luxury Brands Used at Aura Studio ✦
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            {LUXURY_BRANDS.map((brand, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#374151',
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  letterSpacing: '0.5px'
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Bride & Client Reviews */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>
              Stories from Our Real Brides & Clients
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#6B7280' }}>
              Rated 4.9/5 based on 520+ verified client appointments in Govindpuri, Modinagar.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.55', marginBottom: '16px' }}>
                    "{rev.comment}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <strong style={{ fontSize: '0.90rem', color: '#111827', display: 'block' }}>{rev.name}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{rev.role}</span>
                  </div>
                  <CheckCircle2 size={16} color="#059669" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking & Consultation Action Banner */}
        <div style={{
          background: '#111827',
          borderRadius: '16px',
          padding: '28px 24px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '6px', color: '#FFFFFF' }}>
              Planning Your Special Day in Govindpuri, Modinagar?
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#9CA3AF', margin: 0 }}>
              Speak directly with our senior bridal consultants to customize your bespoke package.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999250883?text=Hi%20Aura%20Studio,%20I%20would%20like%20to%20consult%20for%20a%20Bridal/Salon%20Package%20in%20Govindpuri,%20Modinagar."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#FFFFFF',
                border: 'none',
                padding: '11px 20px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.85rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:9999250883"
              style={{
                background: '#FFFFFF',
                color: '#111827',
                border: 'none',
                padding: '11px 20px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.85rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Phone size={15} />
              <span>Call 09999250883</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
