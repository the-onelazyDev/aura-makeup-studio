import React from 'react';
import { Star, Award, Calendar, Sparkles, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function ArtistSection({ artists, onSelectArtist }) {
  const vaishnaviArtist = artists && artists.length > 0 ? artists[0] : { id: 'art-1', name: 'Vaishnavi Singh' };

  return (
    <section id="artists" style={{
      padding: '70px 30px',
      background: '#FFFFFF',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Title */}
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
            <span className="badge">Studio Founders & Leadership</span>
            <span className="badge" style={{ background: '#ECFDF5', borderColor: '#A7F3D0', color: '#047857' }}>
              <MapPin size={12} />
              Govindpuri, Modinagar
            </span>
          </div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '700', marginBottom: '12px' }}>
            Meet the Founders: <span className="gold-text">Vaishnavi Singh & Amit Singh</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', fontSize: '0.98rem' }}>
            Visionary founders behind The Beauty Bar — combining master celebrity artistry, academy excellence, and premier studio operations in Govindpuri, Modinagar.
          </p>
        </div>

        {/* Spotlight Showcase of Founders */}
        <div className="glass-card founder-spotlight-card" style={{
          padding: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.03)'
        }}>
          {/* Dual Photo Gallery */}
          <div className="founder-dual-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div className="founder-photo-box" style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-subtle)', height: '360px' }}>
              <img
                src="/images/airbrush-bridal.jpg"
                alt="Celebrity Master Artistry - The Beauty Bar (Vaishnavi Singh & Amit Singh)"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
            <div className="founder-photo-box" style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-subtle)', height: '360px' }}>
              <img
                src="/images/hd-bridal.jpg"
                alt="Royal HD Bridal Couture - The Beauty Bar (Vaishnavi Singh & Amit Singh)"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
          </div>

          {/* Bio & Details */}
          <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
              <span className="badge">Co-Founders</span>
              <span className="badge" style={{ background: '#FFFBEB', color: '#926C05', borderColor: '#FDE68A' }}>Leadership & Artistry</span>
            </div>
            <h3 style={{ fontSize: '1.9rem', fontWeight: '700', marginBottom: '4px' }} className="gold-text">
              Vaishnavi Singh & Amit Singh
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#9A7412', fontWeight: '700', marginBottom: '14px' }}>
              Founders • Master Artistry, Academy & Studio Operations • Govindpuri, Modinagar
            </p>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
              Founded by <strong>Vaishnavi Singh</strong> (Celebrity Makeup Artist & Master Educator specializing in HD Airbrush transformations & certified training) and <strong>Amit Singh</strong> (Co-Founder leading business operations, client experience & studio expansion). Together, they bring international beauty and academy standards to Modinagar.
            </p>

            {/* Badges / Stats Grid */}
            <div className="founder-stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              marginBottom: '24px'
            }}>
              <div className="founder-stat-box" style={{ background: '#F9FAFB', padding: '10px 8px', borderRadius: '12px', textAlign: 'center', border: '1px solid #E5E7EB' }}>
                <div className="stat-val" style={{ fontWeight: '700', color: '#9A7412', fontSize: '1.05rem' }}>10+ Yrs</div>
                <div className="stat-lbl" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Experience</div>
              </div>
              <div className="founder-stat-box" style={{ background: '#F9FAFB', padding: '10px 8px', borderRadius: '12px', textAlign: 'center', border: '1px solid #E5E7EB' }}>
                <div className="stat-val" style={{ fontWeight: '700', color: '#9A7412', fontSize: '1.05rem' }}>5.0 ★</div>
                <div className="stat-lbl" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>850+ Reviews</div>
              </div>
              <div className="founder-stat-box" style={{ background: '#F9FAFB', padding: '10px 8px', borderRadius: '12px', textAlign: 'center', border: '1px solid #E5E7EB' }}>
                <div className="stat-val" style={{ fontWeight: '700', color: '#059669', fontSize: '1.05rem' }}>100%</div>
                <div className="stat-lbl" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Global Brands</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="founder-cta-group">
              <button
                onClick={() => onSelectArtist(vaishnaviArtist)}
                className="btn-gold founder-primary-btn"
              >
                <Sparkles size={16} />
                <span>Book Appointment / Course</span>
              </button>
              <div className="founder-cta-subgroup">
                <a
                  href="https://wa.me/919999250883?text=Hi%20Vaishnavi%20Singh%20&%20Amit%20Singh,%20I%20would%20like%20to%20consult%20for%20a%20Service%20or%20Academy%20Course%20at%20The%20Beauty%20Bar."
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
