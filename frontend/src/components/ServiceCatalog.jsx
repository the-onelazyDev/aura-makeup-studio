import React, { useState } from 'react';

const MAIN_TABS = ["ALL", "HAIR", "SKIN", "BRIDE & GROOM"];

const TAGS = [
  "Bride and Groom Makeup Near Me",
  "Best Salon Near Me",
  "Nail Salon Near Me",
  "Facial & Skincare Near Me",
  "Manicure & Pedicure Near Me",
  "Salon Near Me"
];

export default function ServiceCatalog({ services = [], onSelectService }) {
  const [activeTab, setActiveTab] = useState("ALL");
  const [activeTag, setActiveTag] = useState(null);

  // Filter Services based on active tab & tag
  const filteredServices = services.filter((service) => {
    const sCat = (service.category || "").toUpperCase();
    const sTitle = (service.title || "").toUpperCase();
    const sSub = (service.subCategory || "").toUpperCase();

    // If a tag is active
    if (activeTag) {
      if (activeTag.includes("Bride and Groom") || activeTag.includes("Bridal")) {
        return sCat.includes("BRIDE") || sCat.includes("BRIDAL");
      }
      if (activeTag.includes("Nail")) {
        return sCat.includes("SKIN") || sSub.includes("NAIL") || sTitle.includes("NAIL");
      }
      if (activeTag.includes("Manicure") || activeTag.includes("Pedicure")) {
        return sCat.includes("SKIN") || sTitle.includes("MANICURE") || sTitle.includes("PEDICURE");
      }
      if (activeTag.includes("Facial") || activeTag.includes("Skincare")) {
        return sCat.includes("SKIN") || sTitle.includes("FACIAL") || sTitle.includes("FACE") || sTitle.includes("SKIN");
      }
    }

    if (activeTab === "ALL") return true;
    if (activeTab === "BRIDE & GROOM") {
      return sCat.includes("BRIDE") || sCat.includes("GROOM") || sCat.includes("BRIDAL");
    }
    return sCat === activeTab || sCat.includes(activeTab);
  });

  const handleEnquireWhatsApp = (service) => {
    const text = encodeURIComponent(
      `Hi Aura Studio, I want to enquire about ${service.title} at Govindpuri, Modinagar.`
    );
    window.open(`https://wa.me/919999250883?text=${text}`, '_blank');
  };

  return (
    <section id="services" style={{ padding: '20px 20px 70px 20px', maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        gap: '24px',
        borderBottom: '1px solid #E5E7EB',
        marginBottom: '18px',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: '2px'
      }}>
        {MAIN_TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setActiveTag(null); }}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 2px 10px 2px',
                fontSize: '0.82rem',
                fontWeight: isActive ? '700' : '500',
                color: isActive ? '#000000' : '#6B7280',
                borderBottom: isActive ? '2px solid #000000' : '2px solid transparent',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Services are also tagged with */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#000000', marginBottom: '8px' }}>
          Services are also tagged with
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {TAGS.map((tag) => {
            const isTagActive = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => {
                  if (activeTag === tag) {
                    setActiveTag(null);
                  } else {
                    setActiveTag(tag);
                  }
                }}
                style={{
                  background: isTagActive ? '#000000' : '#FFFFFF',
                  color: isTagActive ? '#FFFFFF' : '#374151',
                  border: '1px solid #9CA3AF',
                  borderRadius: '3px',
                  padding: '4px 8px',
                  fontSize: '0.70rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="service-swipe-hint" style={{
        display: 'none',
        alignItems: 'center',
        gap: '6px',
        fontSize: '0.74rem',
        color: '#6B7280',
        fontWeight: '600',
        marginBottom: '10px'
      }}>
        <span>👈 Swipe horizontally to view services 👉</span>
      </div>

      {/* Services Grid (Grid on Desktop, Swipe Carousel on Mobile) */}
      {filteredServices.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}>
          <p style={{ fontSize: '1.0rem', marginBottom: '14px' }}>No services found under this tab.</p>
          <button
            onClick={() => { setActiveTab("ALL"); setActiveTag(null); }}
            style={{
              background: '#000000',
              color: '#fff',
              border: 'none',
              padding: '8px 18px',
              borderRadius: '3px',
              fontSize: '0.82rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            View All Services
          </button>
        </div>
      ) : (
        <div className="service-catalog-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card-item"
              style={{
                background: '#FFFFFF',
                borderRadius: '0px',
                border: '1px solid #E5E7EB',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.03)';
              }}
            >
              {/* Service Image (Reduced for 4-in-a-row grid) */}
              <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#F3F4F6' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Service Info */}
              <div style={{ padding: '16px 14px 16px 14px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  color: '#1E293B',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2px',
                  marginBottom: '16px',
                  lineHeight: '1.35',
                  minHeight: '40px',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  {service.title}
                </h3>

                {/* Card Action Buttons (Exact Match to Reference) */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                  marginTop: 'auto'
                }}>
                  {/* Enquire Now Button (Black Outline Box with Bold Text) */}
                  <button
                    onClick={() => handleEnquireWhatsApp(service)}
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid #000000',
                      color: '#000000',
                      padding: '7px 14px',
                      borderRadius: '5px',
                      fontSize: '0.80rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap',
                      fontFamily: 'inherit',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#000000';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                      e.currentTarget.style.color = '#000000';
                    }}
                  >
                    Enquire Now
                  </button>

                  {/* Know More Button (Subtle Outline Box) */}
                  <button
                    onClick={() => onSelectService(service)}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #374151',
                      color: '#111827',
                      padding: '7px 14px',
                      borderRadius: '5px',
                      fontSize: '0.80rem',
                      fontWeight: '400',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap',
                      fontFamily: 'inherit',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#000000';
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.fontWeight = '600';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#374151';
                      e.currentTarget.style.color = '#111827';
                      e.currentTarget.style.fontWeight = '400';
                    }}
                  >
                    Know More
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
