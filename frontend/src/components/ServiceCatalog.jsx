import React, { useState } from 'react';
import { MessageCircle, Sparkles, Clock, Star, ArrowRight } from 'lucide-react';

const MAIN_TABS = ["ALL", "HAIR", "SKIN", "BRIDE & GROOM"];

const TAGS = [
  "Bride and Groom Makeup Near Me",
  "Best Salon Near Me",
  "Nail Salon Near Me",
  "Skincare & Spa Near Me",
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
      if (activeTag.includes("Skincare") || activeTag.includes("Spa")) {
        return sCat.includes("SKIN") || sSub.includes("SPA") || sTitle.includes("FACIAL");
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
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span>Aura Studio</span>
        <span>›</span>
        <span>Uttar Pradesh</span>
        <span>›</span>
        <span>Ghaziabad</span>
        <span>›</span>
        <span>Govindpuri, Modinagar</span>
        <span>›</span>
        <span>Category</span>
        <span>›</span>
        <strong style={{ color: '#111827' }}>
          {activeTab === "BRIDE & GROOM" ? "Bride & Groom" : activeTab.charAt(0) + activeTab.slice(1).toLowerCase()}
        </strong>
      </div>

      {/* Section Headline */}
      <h1 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#111827', marginBottom: '22px', letterSpacing: '-0.3px' }}>
        Aura Studio Services In Govindpuri, Modinagar
      </h1>

      {/* Main Category Tabs */}
      <div style={{
        display: 'flex',
        gap: '32px',
        borderBottom: '1px solid #E5E7EB',
        marginBottom: '22px',
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
                padding: '10px 4px 14px 4px',
                fontSize: '0.9rem',
                fontWeight: isActive ? '700' : '600',
                color: isActive ? '#111827' : '#6B7280',
                borderBottom: isActive ? '2px solid #111827' : '2px solid transparent',
                cursor: 'pointer',
                letterSpacing: '0.6px',
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
      <div style={{ marginBottom: '36px' }}>
        <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>
          Services are also tagged with
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
                  background: isTagActive ? '#111827' : '#FFFFFF',
                  color: isTagActive ? '#FFFFFF' : '#374151',
                  border: isTagActive ? '1px solid #111827' : '1px solid #D1D5DB',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  fontSize: '0.76rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  boxShadow: isTagActive ? '0 2px 6px rgba(0,0,0,0.12)' : 'none'
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}>
          <p style={{ fontSize: '1.05rem', marginBottom: '14px' }}>No services found under this tab.</p>
          <button
            onClick={() => { setActiveTab("ALL"); setActiveTag(null); }}
            style={{
              background: '#111827',
              color: '#fff',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '24px',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
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
          {filteredServices.map((service) => (
            <div
              key={service.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
              }}
            >
              {/* Service Image Banner with Badge */}
              <div style={{ position: 'relative', height: '190px', overflow: 'hidden', background: '#F9FAFB' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #FDE68A',
                  color: '#9A7412',
                  fontSize: '0.70rem',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                }}>
                  {service.badge || service.category}
                </div>
              </div>

              {/* Service Info */}
              <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Meta details: rating & duration */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.8rem' }}>
                    <Star size={13} fill="#D4AF37" color="#D4AF37" />
                    <span style={{ fontWeight: '700', color: '#111827' }}>{service.rating || 5.0}</span>
                    <span style={{ color: '#6B7280', fontSize: '0.75rem' }}>({service.reviewsCount || 300}+)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.76rem', color: '#6B7280' }}>
                    <Clock size={12} color="#9CA3AF" />
                    <span>{service.duration || '60 mins'}</span>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: '#111827',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3px',
                  marginBottom: '10px',
                  lineHeight: '1.35'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.84rem',
                  color: '#4B5563',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                  flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {service.description}
                </p>

                {/* Card Action Buttons (Enquire Now & Know More) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 0.9fr',
                  gap: '10px',
                  marginTop: 'auto'
                }}>
                  {/* WhatsApp Enquire Now Button */}
                  <button
                    onClick={() => handleEnquireWhatsApp(service)}
                    style={{
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      border: 'none',
                      color: '#FFFFFF',
                      padding: '11px 14px',
                      borderRadius: '30px',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.45)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
                    }}
                  >
                    <MessageCircle size={15} color="#FFFFFF" />
                    <span>Enquire Now</span>
                  </button>

                  {/* Know More Button */}
                  <button
                    onClick={() => onSelectService(service)}
                    style={{
                      background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                      border: 'none',
                      color: '#FFFFFF',
                      padding: '11px 14px',
                      borderRadius: '30px',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '5px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                    }}
                  >
                    <Sparkles size={14} color="#D4AF37" />
                    <span>Know More</span>
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
