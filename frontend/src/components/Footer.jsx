import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" style={{
      background: '#07070a',
      borderTop: '1px solid var(--border-gold)',
      padding: '60px 40px 30px',
      color: 'var(--text-muted)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Crown size={28} color="#d4af37" />
            <h2 style={{ fontSize: '1.6rem', fontWeight: '700' }} className="gold-text">AURA MAKEUP STUDIO</h2>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
            Premier luxury makeover studio and bridal salon founded and led by our master celebrity artist in Govindpuri, Modinagar.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://wa.me/919999250883"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '20px',
                background: 'rgba(37, 211, 102, 0.15)',
                color: '#25D366',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: '700',
                border: '1px solid rgba(37, 211, 102, 0.4)'
              }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:9999250883"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '20px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: '#d4af37',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: '700',
                border: '1px solid var(--border-gold)'
              }}
            >
              <Phone size={15} />
              <span>Call Us</span>
            </a>
          </div>
        </div>

        {/* Studio Location (Only ONE Location) */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>Studio Location</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <MapPin size={18} color="#d4af37" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff' }}>Govindpuri, Modinagar</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ghaziabad, Uttar Pradesh, India</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Studio Contact & Hours */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>Contact & Hours</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={16} color="#d4af37" />
              <div>
                <a href="tel:9999250883" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}>+91 9999250883</a>
                <span style={{ color: 'var(--text-muted)' }}> / </span>
                <a href="tel:7417174025" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}>+91 7417174025</a>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={16} color="#d4af37" />
              <span>Open Daily: 09:30 AM – 08:30 PM</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={16} color="#d4af37" />
              <span>aura.modinagar@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Signature Promise */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>Our Guarantee</h4>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
            100% Original Global Luxury Cosmetic Brands (Huda Beauty, Charlotte Tilbury, Dior, MAC, NARS, Anastasia Beverly Hills). Certified Clean & Sanitized Setup.
          </p>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '20px',
        fontSize: '0.8rem',
        color: '#6e6e82'
      }}>
        © {new Date().getFullYear()} AURA Luxury Makeup Studio, Govindpuri, Modinagar. All Rights Reserved.
      </div>
    </footer>
  );
}
