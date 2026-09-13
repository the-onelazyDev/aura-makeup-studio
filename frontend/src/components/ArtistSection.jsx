import React from 'react';
import { Star, Award, Calendar, Sparkles, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function ArtistSection({ artists, onSelectArtist }) {
  const vaishnaviArtist = artists && artists.length > 0 ? artists[0] : { id: 'art-1', name: 'Vaishnavi Singh' };

  return (
    <section id="artists" style={{
      padding: '70px 30px',
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, #101018 100%)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Title */}
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
            <span className="badge">Studio Founder & Master Artist</span>
            <span className="badge" style={{ background: 'rgba(74, 222, 128, 0.15)', borderColor: 'rgba(74, 222, 128, 0.4)', color: '#4ade80' }}>
              <MapPin size={12} />
              Govindpuri, Modinagar
            </span>
          </div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '700', marginBottom: '12px' }}>
            Meet <span className="gold-text">Vaishnavi Singh</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '0.98rem' }}>
            Founder, visionary owner, and master celebrity makeup artist behind every breathtaking bridal transformation in Govindpuri, Modinagar.
          </p>
        </div>

        {/* Spotlight Showcase of Vaishnavi Singh */}
        <div className="glass-card founder-spotlight-card" style={{
          padding: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(212,175,55,0.2)'
        }}>
          {/* Dual Photo Gallery */}
          <div className="founder-dual-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div className="founder-photo-box" style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-gold)', height: '360px' }}>
              <picture>
                <source srcSet="/images/owner-portrait.webp" type="image/webp" />
                <img
                  src="/images/owner-portrait.jpg"
                  alt="Vaishnavi Singh - Aura Studio Founder"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </picture>
            </div>
            <div className="founder-photo-box" style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-gold)', height: '360px' }}>
              <picture>
                <source srcSet="/images/owner-hero.webp" type="image/webp" />
                <img
                  src="/images/owner-hero.jpg"
                  alt="Vaishnavi Singh - Celebrity Couture Makeover"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </picture>
            </div>
          </div>

          {/* Bio & Details */}
          <div>
            <div className="badge" style={{ marginBottom: '10px' }}>Founder & Owner</div>
            <h3 style={{ fontSize: '2.0rem', fontWeight: '700', marginBottom: '4px' }} className="gold-text">
              Vaishnavi Singh
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#d4af37', fontWeight: '600', marginBottom: '14px' }}>
              Founder & Lead Celebrity Makeup Artist • Govindpuri, Modinagar
            </p>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
              Specializing in high-end HD Airbrush bridal transformations, royal reception looks, and modern hair couture. Every appointment is personally crafted to accentuate natural facial beauty with radiant luxury finishes.
            </p>

            {/* Badges / Stats Grid */}
            <div className="founder-stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              marginBottom: '24px'
            }}>
              <div className="founder-stat-box" style={{ background: '#161622', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <div className="stat-val" style={{ fontWeight: '700', color: '#d4af37', fontSize: '1.05rem' }}>10+ Yrs</div>
                <div className="stat-lbl" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Experience</div>
              </div>
              <div className="founder-stat-box" style={{ background: '#161622', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <div className="stat-val" style={{ fontWeight: '700', color: '#d4af37', fontSize: '1.05rem' }}>5.0 ★</div>
                <div className="stat-lbl" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>850+ Reviews</div>
              </div>
              <div className="founder-stat-box" style={{ background: '#161622', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <div className="stat-val" style={{ fontWeight: '700', color: '#4ade80', fontSize: '1.05rem' }}>100%</div>
                <div className="stat-lbl" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Luxury Brands</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="founder-cta-group">
              <button
                onClick={() => onSelectArtist(vaishnaviArtist)}
                className="btn-gold founder-primary-btn"
              >
                <Sparkles size={16} />
                <span>Book with Vaishnavi Singh</span>
              </button>
              <div className="founder-cta-subgroup">
                <a
                  href="https://wa.me/919999250883?text=Hi%20Vaishnavi%20Singh,%20I%20would%20like%20to%20consult%20for%20a%20Bridal%20Makeover%20in%20Govindpuri,%20Modinagar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    borderColor: '#25D366',
                    color: '#25D366',
                    background: 'rgba(37, 211, 102, 0.1)'
                  }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:9999250883"
                  className="btn-outline"
                >
                  <Phone size={15} />
                  <span>Call 9999250883</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
