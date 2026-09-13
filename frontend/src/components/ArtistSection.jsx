import React from 'react';
import { Star, Award, Calendar, Sparkles } from 'lucide-react';

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
          <span className="badge" style={{ marginBottom: '12px', display: 'inline-block' }}>Master Team</span>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '16px' }}>
            Meet Our <span className="gold-text">Celebrity Master Artists</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
            Handpicked industry icons specializing in haute couture bridal transformations, red carpet glam, and signature hair styling.
          </p>
        </div>

        {/* Artists Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {artists.map(artist => (
            <div key={artist.id} className="glass-card" style={{ padding: '24px', textAlign: 'center', position: 'relative' }}>
              {/* Avatar */}
              <div style={{
                position: 'relative',
                width: '120px',
                height: '120px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                padding: '4px',
                background: 'var(--gold-gradient)',
                boxShadow: '0 8px 24px rgba(212, 175, 55, 0.25)'
              }}>
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Info */}
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '4px' }}>{artist.name}</h3>
              <p style={{ fontSize: '0.85rem', color: '#d4af37', fontWeight: '600', marginBottom: '12px' }}>{artist.title}</p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '8px 12px',
                borderRadius: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Award size={14} color="#d4af37" />
                  <span>{artist.experience}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={14} fill="#d4af37" color="#d4af37" />
                  <span style={{ color: '#fff', fontWeight: '700' }}>{artist.rating}</span>
                  <span>({artist.reviews})</span>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#b0b0c5', marginBottom: '20px' }}>
                Specialty: <strong>{artist.specialty}</strong>
              </p>

              <button onClick={() => onSelectArtist(artist)} className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                <Calendar size={16} />
                <span>Book With {artist.name.split(' ')[0]}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
