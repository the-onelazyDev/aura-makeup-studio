import React, { useState } from 'react';
import { Star, Clock, CheckCircle2, Sparkles, Filter } from 'lucide-react';

const CATEGORIES = ["All", "Bridal", "Party Glam", "Airbrush", "Hair Styling", "Skin Spa", "Nail Care"];

export default function ServiceCatalog({ services, onSelectService }) {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredServices = selectedCat === "All"
    ? services
    : services.filter(s => s.category.toLowerCase() === selectedCat.toLowerCase());

  return (
    <section id="services" style={{ padding: '80px 40px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="badge" style={{ marginBottom: '12px', display: 'inline-block' }}>Exclusive Menu</span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '16px' }}>
          Couture Services & <span className="gold-text">Bridal Packages</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          Explore our bespoke makeup, airbrush, and hair styling services tailored to amplify your beauty for every iconic occasion.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        marginBottom: '50px'
      }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            style={{
              padding: '10px 24px',
              borderRadius: '30px',
              border: selectedCat === cat ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
              background: selectedCat === cat ? 'var(--gold-gradient)' : 'rgba(19, 19, 28, 0.6)',
              color: selectedCat === cat ? '#0b0b10' : '#d1d1e0',
              fontWeight: selectedCat === cat ? '700' : '500',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.25s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '32px'
      }}>
        {filteredServices.map(service => (
          <div key={service.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Image Banner */}
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(11, 11, 16, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold-light)',
                fontSize: '0.75rem',
                fontWeight: '700',
                padding: '4px 12px',
                borderRadius: '20px',
                textTransform: 'uppercase'
              }}>
                {service.badge || service.category}
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#d4af37', fontWeight: '600' }}>
                  {service.category}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
                  <Star size={15} fill="#d4af37" color="#d4af37" />
                  <span style={{ fontWeight: '700' }}>{service.rating}</span>
                  <span style={{ color: 'var(--text-muted)' }}>({service.reviewsCount})</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '10px' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px', flex: 1 }}>
                {service.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '20px', borderTop: '1px dashed var(--border-subtle)', paddingTop: '14px' }}>
                {service.highlights && service.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#c5c5d6', marginBottom: '6px' }}>
                    <CheckCircle2 size={14} color="#d4af37" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Pricing & Duration */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '16px',
                marginTop: 'auto'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '2px' }}>
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700' }} className="gold-text">
                    ₹{service.price.toLocaleString('en-IN')}
                  </div>
                </div>

                <button onClick={() => onSelectService(service)} className="btn-gold" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
                  <Sparkles size={16} />
                  <span>Book Service</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
