import React, { useState } from 'react';
import { Star, Clock, CheckCircle2, Sparkles, Crown } from 'lucide-react';

const MAIN_CATEGORIES = [
  "All",
  "Bridal",
  "Party & Sangeet",
  "Hair Styling",
  "Pre-Bridal Spa",
  "Nail Art"
];

const BRIDAL_SUB_CATEGORIES = [
  "All Bridal",
  "Basic Bridal",
  "HD Bridal",
  "Airbrush Bridal",
  "Dewy / Glass Skin",
  "Matte Royal"
];

export default function ServiceCatalog({ services, onSelectService }) {
  const [selectedCat, setSelectedCat] = useState("All");
  const [selectedBridalSubCat, setSelectedBridalSubCat] = useState("All Bridal");

  // Handle Main Tab Click
  const handleMainCatClick = (cat) => {
    setSelectedCat(cat);
    if (cat === "Bridal") {
      setSelectedBridalSubCat("All Bridal");
    }
  };

  // Filter Services
  const filteredServices = services.filter((service) => {
    const sCat = (service.category || "").trim().toLowerCase();
    const sSubCat = (service.subCategory || "").trim().toLowerCase();
    const sTitle = (service.title || "").trim().toLowerCase();

    if (selectedCat === "All") {
      return true;
    }

    if (selectedCat === "Bridal") {
      const isBridal = sCat === "bridal" || sCat.includes("bridal") || sTitle.includes("bridal");
      if (!isBridal) return false;

      if (selectedBridalSubCat === "All Bridal") {
        return true;
      }

      const targetSub = selectedBridalSubCat.toLowerCase();
      if (targetSub === "basic bridal") {
        return sSubCat.includes("basic") || sTitle.includes("basic") || sTitle.includes("classic");
      }
      if (targetSub === "hd bridal") {
        return sSubCat.includes("hd") || sTitle.includes("hd") || sTitle.includes("high-definition");
      }
      if (targetSub === "airbrush bridal") {
        return sSubCat.includes("airbrush") || sTitle.includes("airbrush");
      }
      if (targetSub === "dewy / glass skin") {
        return sSubCat.includes("dewy") || sSubCat.includes("glass") || sTitle.includes("dewy") || sTitle.includes("glass");
      }
      if (targetSub === "matte royal") {
        return sSubCat.includes("matte") || sTitle.includes("matte") || sTitle.includes("royal");
      }
      return sSubCat === targetSub;
    }

    return sCat === selectedCat.toLowerCase() || sCat.includes(selectedCat.toLowerCase());
  });

  return (
    <section id="services" style={{ padding: '70px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="badge" style={{ marginBottom: '10px' }}>Exclusive Menu</span>
        <h2 style={{ fontSize: '2.6rem', fontWeight: '700', marginBottom: '14px' }}>
          Couture Services & <span className="gold-text">Bridal Packages</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.0rem' }}>
          Bespoke bridal makeovers, HD airbrush couture, and premium salon rituals tailored to amplify your natural grace.
        </p>
      </div>

      {/* Main Category Tabs */}
      <div className="category-pills-container" style={{ marginBottom: selectedCat === "Bridal" ? '18px' : '40px' }}>
        {MAIN_CATEGORIES.map((cat) => {
          const isActive = selectedCat === cat;
          return (
            <button
              key={cat}
              onClick={() => handleMainCatClick(cat)}
              className="category-pill-btn"
              style={{
                padding: '10px 22px',
                borderRadius: '30px',
                border: isActive ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                background: isActive ? 'var(--gold-gradient)' : '#FFFFFF',
                color: isActive ? '#111827' : '#4B5563',
                fontWeight: isActive ? '700' : '600',
                cursor: 'pointer',
                fontSize: '0.88rem',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 4px 14px rgba(197, 155, 39, 0.25)' : 'var(--shadow-sm)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {cat === "Bridal" && <Crown size={15} color={isActive ? "#111827" : "#C59B27"} />}
              <span>{cat === "Bridal" ? "Bridal Makeover" : cat}</span>
            </button>
          );
        })}
      </div>

      {/* Bridal Sub-Tabs (Exclusively rendered when Bridal is selected) */}
      {selectedCat === "Bridal" && (
        <div
          style={{
            background: 'linear-gradient(135deg, #FFFDF8 0%, #FFFBEB 100%)',
            border: '1px solid #FDE68A',
            borderRadius: '20px',
            padding: '16px 20px',
            marginBottom: '36px',
            boxShadow: '0 4px 20px rgba(197, 155, 39, 0.08)',
            animation: 'fadeIn 0.25s ease-in-out'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '12px' }}>
            <Sparkles size={14} color="#C59B27" />
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Choose Bridal Specialization & Finish:
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: '4px'
            }}
          >
            {BRIDAL_SUB_CATEGORIES.map((subCat) => {
              const isSubActive = selectedBridalSubCat === subCat;
              return (
                <button
                  key={subCat}
                  onClick={() => setSelectedBridalSubCat(subCat)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '24px',
                    border: isSubActive ? '1px solid #C59B27' : '1px solid #E5E7EB',
                    background: isSubActive ? '#9A7412' : '#FFFFFF',
                    color: isSubActive ? '#FFFFFF' : '#374151',
                    fontWeight: isSubActive ? '700' : '500',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    boxShadow: isSubActive ? '0 2px 8px rgba(154, 116, 18, 0.3)' : 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {subCat}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '12px' }}>No services found in this category.</p>
          <button
            onClick={() => { setSelectedCat("All"); setSelectedBridalSubCat("All Bridal"); }}
            className="btn-outline"
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            View All Services
          </button>
        </div>
      ) : (
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
                  {service.badge || service.subCategory || service.category}
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#9A7412', fontWeight: '700' }}>
                    {service.subCategory || service.category}
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
      )}
    </section>
  );
}
