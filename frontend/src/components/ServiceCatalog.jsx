import React, { useState } from 'react';
import { Star, Clock, CheckCircle2, Sparkles } from 'lucide-react';

const CATEGORIES = ["All", "Bridal", "Party Glam", "Airbrush", "Hair Styling", "Skin Spa", "Nail Care"];

export default function ServiceCatalog({ services, onSelectService }) {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredServices = selectedCat === "All"
    ? services
    : services.filter(s => s.category.toLowerCase() === selectedCat.toLowerCase());

  return (
    <section id="services" style={{ padding: '70px 30px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="badge" style={{ marginBottom: '10px' }}>Exclusive Menu</span>
        <h2 style={{ fontSize: '2.6rem', fontWeight: '700', marginBottom: '14px' }}>
          Couture Services & <span className="gold-text">Bridal Packages</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.0rem' }}>
          Bespoke makeup, HD airbrush, and hair couture designed to amplify your beauty for every special occasion.
        </p>
      </div>

      {/* Category Filter Pills (Mobile Horizontal Native Scroll) */}
      <div className="category-pills-container">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className="category-pill-btn"
            style={{
              padding: '9px 20px',
              borderRadius: '30px',
              border: selectedCat === cat ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
              background: selectedCat === cat ? 'var(--gold-gradient)' : '#FFFFFF',
              color: selectedCat === cat ? '#111827' : '#4B5563',
              fontWeight: selectedCat === cat ? '700' : '500',
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              boxShadow: selectedCat === cat ? '0 2px 10px rgba(197, 155, 39, 0.25)' : 'var(--shadow-sm)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {filteredServices.map(service => (
          <div key={service.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Image Banner */}
            <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                border: '1px solid #FDE68A',
                color: '#9A7412',
                fontSize: '0.72rem',
                fontWeight: '700',
                padding: '4px 10px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                {service.badge || service.category}
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#9A7412', fontWeight: '700' }}>
                  {service.category}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.82rem' }}>
                  <Star size={14} fill="#D4AF37" color="#D4AF37" />
                  <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>{service.rating}</span>
                  <span style={{ color: 'var(--text-muted)' }}>({service.reviewsCount})</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>{service.title}</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '16px', flex: 1, lineHeight: '1.5' }}>
                {service.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '18px', borderTop: '1px dashed var(--border-subtle)', paddingTop: '12px' }}>
                {service.highlights && service.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#4B5563', marginBottom: '4px' }}>
                    <CheckCircle2 size={13} color="#C59B27" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Duration & Booking Action */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '14px',
                marginTop: 'auto'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '2px' }}>
                    <Clock size={13} />
                    <span>{service.duration}</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#9A7412' }}>
                    Custom Artistry
                  </div>
                </div>

                <button onClick={() => onSelectService(service)} className="btn-gold" style={{ padding: '9px 18px', fontSize: '0.78rem' }}>
                  <Sparkles size={14} />
                  <span>Book Makeover</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
