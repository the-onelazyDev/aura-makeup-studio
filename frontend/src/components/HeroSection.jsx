import React from 'react';
import { Sparkles, Star, Award, ShieldCheck, ArrowRight } from 'lucide-react';

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
          <div className="badge" style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Award size={14} color="#d4af37" />
            <span>Award-Winning Couture Makeover Studio</span>
          </div>

          <h1 className="hero-headline" style={{ fontSize: '3.6rem', fontWeight: '700', lineHeight: 1.15, marginBottom: '24px' }}>
            Unveil Your Extraordinary <span className="gold-text">Glow & Elegance</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '36px', maxWidth: '580px' }}>
            Experience world-class HD Airbrush Bridal Makeovers, Sangeet Dewy Glam, and Couture Hair Artistry tailored for Indian Celebrations.
          </p>

          <div className="hero-cta-group" style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
            <button onClick={() => onOpenBooking(null)} className="btn-gold" style={{ fontSize: '0.95rem', padding: '16px 32px' }}>
              <Sparkles size={20} />
              <span>Book VIP Appointment</span>
            </button>
            <a href="#services" className="btn-outline" style={{ padding: '15px 28px', textDecoration: 'none' }}>
              <span>View Services</span>
              <ArrowRight size={18} />
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
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }} className="gold-text">15,000+</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Stunning Brides Transformed</p>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }} className="gold-text">4.9</h3>
                <Star size={20} fill="#d4af37" color="#d4af37" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>1,200+ Verified Reviews</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }} className="gold-text">18+ Yrs</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Excellence & Heritage</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.2)',
            border: '1px solid var(--border-gold)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop"
              alt="Bridal Makeup Artistry"
              style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11,11,16,0.95) 0%, transparent 60%)'
            }} />

            {/* Float Card Overlay */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <ShieldCheck size={16} color="#d4af37" />
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#d4af37', fontWeight: '700' }}>Signature Package</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Royal HD Airbrush Bridal Makeover</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Includes Mink Lashes, Draping & Hair Couture</p>
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
