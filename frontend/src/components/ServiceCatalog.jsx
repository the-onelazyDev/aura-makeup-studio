import React, { useState } from 'react';
import { MessageCircle, Info } from 'lucide-react';

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
    <section id="services" style={{ padding: '20px 20px 60px 20px', maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.78rem', color: '#6B7280', marginBottom: '14px', display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span>Aura Studio</span>
        <span>›</span>
        <span>Uttar Pradesh</span>
        <span>›</span>
        <span>Ghaziabad</span>
        <span>›</span>
        <span>Sector / Govindpuri</span>
        <span>›</span>
        <span>Aura Studio</span>
        <span>›</span>
        <span>Category</span>
        <span>›</span>
        <strong style={{ color: '#111827' }}>
          {activeTab === "BRIDE & GROOM" ? "Bride & Groom" : activeTab.charAt(0) + activeTab.slice(1).toLowerCase()}
        </strong>
      </div>

      {/* Section Headline */}
      <h1 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#111827', marginBottom: '20px' }}>
        Aura Studio Services In Govindpuri, Modinagar
      </h1>

      {/* Main Category Tabs */}
      <div style={{
        display: 'flex',
        gap: '28px',
        borderBottom: '1px solid #E5E7EB',
        marginBottom: '20px',
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
                fontSize: '0.85rem',
                fontWeight: isActive ? '700' : '600',
                color: isActive ? '#111827' : '#6B7280',
                borderBottom: isActive ? '2px solid #111827' : '2px solid transparent',
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
      <div style={{ marginBottom: '32px' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>
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
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  padding: '5px 12px',
                  fontSize: '0.74rem',
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

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}>
          <p style={{ fontSize: '1rem', marginBottom: '12px' }}>No services found under this tab.</p>
          <button
            onClick={() => { setActiveTab("ALL"); setActiveTag(null); }}
            style={{
              background: '#111827',
              color: '#fff',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            View All Services
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              {/* Service Image Banner */}
              <div style={{ position: 'relative', height: '170px', overflow: 'hidden', background: '#F3F4F6' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Service Info */}
              <div style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                  fontSize: '0.92rem',
                  fontWeight: '700',
                  color: '#111827',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                  minHeight: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '1.3'
                }}>
                  {service.title}
                </h3>

                {/* Card Action Buttons (Enquire Now on WhatsApp & Know More) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  marginTop: 'auto'
                }}>
                  <button
                    onClick={() => handleEnquireWhatsApp(service)}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #111827',
                      color: '#111827',
                      padding: '8px 10px',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      transition: 'background 0.15s'
                    }}
                  >
                    <MessageCircle size={13} color="#25D366" />
                    <span>Enquire Now</span>
                  </button>

                  <button
                    onClick={() => onSelectService(service)}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #D1D5DB',
                      color: '#4B5563',
                      padding: '8px 10px',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      transition: 'background 0.15s'
                    }}
                  >
                    <Info size={13} />
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
