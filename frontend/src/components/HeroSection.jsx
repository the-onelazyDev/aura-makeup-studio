import React from 'react';
import { Sparkles, Star, Award, ShieldCheck, ArrowRight, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      padding: '50px 30px',
      background: 'radial-gradient(circle at 75% 30%, rgba(212, 175, 55, 0.08) 0%, rgba(250, 250, 250, 1) 70%)',
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
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.10) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="hero-grid" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '48px',
        alignItems: 'center'
      }}>
        {/* Left Column: Headline & Info */}
        <div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <div className="badge">
              <Award size={13} color="#9A7412" />
              <span>Celebrity Makeover Studio</span>
            </div>
            <div className="badge" style={{ background: '#ECFDF5', borderColor: '#A7F3D0', color: '#047857' }}>
              <MapPin size={12} color="#047857" />
              <span>Govindpuri, Modinagar</span>
            </div>
          </div>

          <h1 className="hero-headline" style={{ fontSize: '3.4rem', fontWeight: '700', lineHeight: 1.15, marginBottom: '20px' }}>
            Unveil Your Extraordinary <span className="gold-text">Glow & Elegance</span>
          </h1>

          <p className="hero-description" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '28px', maxWidth: '560px' }}>
            Signature HD Airbrush Bridal Makeovers, Sangeet Glamour, and Couture Hair Artistry crafted personally by <strong>Vaishnavi Singh</strong> in <strong>Govindpuri, Modinagar</strong>.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button onClick={() => onOpenBooking(null)} className="btn-gold hero-primary-btn" style={{ fontSize: '0.95rem', padding: '15px 30px' }}>
              <Sparkles size={18} />
              <span>Book VIP Appointment</span>
            </button>
            <div className="hero-secondary-row">
              <a
                href="https://wa.me/919999250883?text=Hi%20Vaishnavi%20Singh,%20I%20would%20like%20to%20inquire%20about%20Bridal/Party%20Makeover%20services%20in%20Govindpuri,%20Modinagar."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline hero-secondary-btn"
                style={{
                  background: 'rgba(37, 211, 102, 0.12)',
                  borderColor: '#25D366',
                  color: '#25D366'
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:9999250883"
                className="btn-outline hero-secondary-btn"
              >
                <Phone size={15} />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Social Proof Stats Bar */}
          <div className="hero-stats-group" style={{
            display: 'flex',
            gap: '28px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap'
          }}>
            <div className="hero-stat-item">
              <h3 style={{ fontSize: '1.7rem', fontWeight: '700' }} className="gold-text">5,000+</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Brides Transformed</p>
            </div>
            <div className="hero-stat-item">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <h3 style={{ fontSize: '1.7rem', fontWeight: '700' }} className="gold-text">5.0</h3>
                <Star size={18} fill="#d4af37" color="#d4af37" />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Top Rated Studio</p>
            </div>
            <div className="hero-stat-item">
              <h3 style={{ fontSize: '1.7rem', fontWeight: '700' }} className="gold-text">10+ Yrs</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Artistry Excellence</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase (Real Photo of Vaishnavi Singh) */}
        <div>
          <div className="hero-image-card" style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.25)',
            border: '1px solid var(--border-gold)',
            height: '520px'
          }}>
            <picture>
              <source srcSet="/images/owner-hero.webp" type="image/webp" />
              <img
                src="/images/owner-hero.jpg"
                alt="Vaishnavi Singh - Aura Studio Founder & Lead Makeup Artist"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </picture>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11,11,16,0.92) 0%, transparent 60%)'
            }} />

            {/* Float Card Overlay */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                  <ShieldCheck size={14} color="#d4af37" />
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#d4af37', fontWeight: '700' }}>
                    Vaishnavi Singh
                  </span>
                </div>
                <h4 style={{ fontSize: '1.0rem', fontWeight: '700' }}>Founder & Lead Artist</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Govindpuri, Modinagar</p>
              </div>
              <button onClick={() => onOpenBooking(null)} className="btn-gold" style={{ padding: '9px 16px', fontSize: '0.75rem' }}>
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
