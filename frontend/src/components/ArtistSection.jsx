import React from 'react';
import { Star, Award, Calendar, Sparkles, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';

export default function ArtistSection({ artists, onSelectArtist }) {
  return (
    <section id="artists" style={{
      padding: '80px 40px',
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, #101018 100%)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '12px' }}>
            <span className="badge">Studio Founder & Master Artist</span>
            <span className="badge" style={{ background: 'rgba(74, 222, 128, 0.15)', borderColor: 'rgba(74, 222, 128, 0.4)', color: '#4ade80' }}>
              Govindpuri, Modinagar
            </span>
          </div>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '16px' }}>
            Meet the <span className="gold-text">Founder & Lead Makeup Artist</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem' }}>
            The driving force, visionary founder, and master artisan behind every breathtaking bridal and couture makeover at Aura Studio.
          </p>
        </div>

        {/* Spotlight Showcase of the Owner */}
        <div className="glass-card" style={{
          padding: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(212,175,55,0.2)'
        }}>
          {/* Dual Photo Gallery */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-gold)', height: '380px' }}>
              <img
                src="/images/owner-portrait.jpg"
                alt="Aura Studio Founder Portrait"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-gold)', height: '380px' }}>
              <img
                src="/images/owner-hero.jpg"
                alt="Aura Studio Founder Couture Look"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>

          {/* Bio & Details */}
          <div>
            <div className="badge" style={{ marginBottom: '12px', display: 'inline-block' }}>Master Artisan</div>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '6px' }} className="gold-text">
              Founder & Lead Celebrity Artist
            </h3>
            <p style={{ fontSize: '1rem', color: '#d4af37', fontWeight: '600', marginBottom: '18px' }}>
              Owner & Principal Makeover Specialist • Aura Studio, Govindpuri, Modinagar
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
              Specializing in high-end HD Airbrush bridal transformations, royal reception looks, and modern hair couture. Every appointment is personally crafted to accentuate natural facial contours with radiant luxury finishes.
            </p>

            {/* Badges / Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '28px'
            }}>
              <div style={{ background: '#161622', padding: '12px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: '700', color: '#d4af37', fontSize: '1.1rem' }}>10+ Yrs</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Experience</div>
              </div>
              <div style={{ background: '#161622', padding: '12px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: '700', color: '#d4af37', fontSize: '1.1rem' }}>5.0 ★</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>850+ Reviews</div>
              </div>
              <div style={{ background: '#161622', padding: '12px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: '700', color: '#4ade80', fontSize: '1.1rem' }}>100%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Luxury Brands</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onSelectArtist(artists[0] || { id: 'art-1', name: 'Founder & Lead Artist' })}
                className="btn-gold"
                style={{ padding: '14px 28px', fontSize: '0.9rem' }}
              >
                <Sparkles size={18} />
                <span>Book Direct Appointment</span>
              </button>
              <a
                href="https://wa.me/919999250883?text=Hi,%20I%20would%20like%20to%20consult%20with%20the%20Founder%20for%20a%20Bridal%20Makeover%20in%20Govindpuri,%20Modinagar."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  padding: '13px 20px',
                  textDecoration: 'none',
                  borderColor: '#25D366',
                  color: '#25D366',
                  background: 'rgba(37, 211, 102, 0.1)'
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:9999250883"
                className="btn-outline"
                style={{ padding: '13px 18px', textDecoration: 'none' }}
              >
                <Phone size={16} />
                <span>9999250883</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
