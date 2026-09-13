import React from 'react';
import { Sparkles, Star, Award, ShieldCheck, ArrowRight, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      padding: '60px 40px',
      background: 'radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.12) 0%, rgba(11, 11, 16, 1) 70%)',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Element */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="hero-grid" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Left Column: Headline & Info */}
        <div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <div className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Award size={14} color="#d4af37" />
              <span>Premier Celebrity Makeover Studio</span>
            </div>
            <div className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(74, 222, 128, 0.15)', borderColor: 'rgba(74, 222, 128, 0.4)', color: '#4ade80' }}>
              <MapPin size={13} color="#4ade80" />
              <span>Govindpuri, Modinagar</span>
            </div>
          </div>

          <h1 className="hero-headline" style={{ fontSize: '3.6rem', fontWeight: '700', lineHeight: 1.15, marginBottom: '24px' }}>
            Unveil Your Extraordinary <span className="gold-text">Glow & Elegance</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '580px' }}>
            Experience signature HD Airbrush Bridal Makeovers, Sangeet Glamour, and Couture Hair Artistry crafted personally by <strong>Vaishnavi Singh</strong> (Founder & Celebrity Makeover Artist) in <strong>Govindpuri, Modinagar</strong>.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group" style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '36px', flexWrap: 'wrap' }}>
            <button onClick={() => onOpenBooking(null)} className="btn-gold" style={{ fontSize: '0.95rem', padding: '16px 30px' }}>
              <Sparkles size={19} />
              <span>Book VIP Appointment</span>
            </button>
            <a
              href="https://wa.me/919999250883?text=Hi%20Aura%20Studio,%20I%20would%20like%20to%20inquire%20about%20Bridal/Party%20Makeover%20services%20in%20Govindpuri,%20Modinagar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                padding: '15px 24px',
                textDecoration: 'none',
                background: 'rgba(37, 211, 102, 0.12)',
                borderColor: '#25D366',
                color: '#25D366'
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:9999250883"
              className="btn-outline"
              style={{ padding: '15px 22px', textDecoration: 'none' }}
            >
              <Phone size={17} />
              <span>Call 9999250883</span>
            </a>
          </div>

          {/* Social Proof Bar */}
          <div className="hero-stats-group" style={{
            display: 'flex',
            gap: '28px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap'
          }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }} className="gold-text">5,000+</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Brides Transformed</p>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }} className="gold-text">5.0</h3>
                <Star size={20} fill="#d4af37" color="#d4af37" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Top Rated in Modinagar</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }} className="gold-text">10+ Yrs</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Artistry Excellence</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase (Real Owner Photo) */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 45px rgba(212,175,55,0.25)',
            border: '1px solid var(--border-gold)'
          }}>
            <img
              src="/images/owner-hero.jpg"
              alt="Aura Studio Founder & Lead Makeup Artist"
              style={{ width: '100%', height: '560px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11,11,16,0.92) 0%, transparent 65%)'
            }} />

            {/* Float Card Overlay */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              padding: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <ShieldCheck size={16} color="#d4af37" />
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#d4af37', fontWeight: '700' }}>
                    Founder & Lead Artist
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700' }}>Aura Luxury Studio</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Govindpuri, Modinagar</p>
              </div>
              <button onClick={() => onOpenBooking(null)} className="btn-gold" style={{ padding: '10px 18px', fontSize: '0.75rem' }}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
