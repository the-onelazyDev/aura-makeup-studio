import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

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
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Crown size={28} color="#d4af37" />
            <h2 style={{ fontSize: '1.6rem', fontWeight: '700' }} className="gold-text">AURA STUDIO</h2>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
            India’s premier luxury makeover studio and bridal couture destination. Inspired by timeless elegance and celebrity glamour.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ color: '#d4af37' }}><Instagram size={20} /></a>
            <a href="#" style={{ color: '#d4af37' }}><Facebook size={20} /></a>
            <a href="#" style={{ color: '#d4af37' }}><Youtube size={20} /></a>
          </div>
        </div>

        {/* Flagship Locations */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>Flagship Salons</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#d4af37" />
              <span>South Extension II, New Delhi</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#d4af37" />
              <span>Juhu Tara Road, Mumbai</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#d4af37" />
              <span>Indiranagar 100ft Rd, Bengaluru</span>
            </li>
          </ul>
        </div>

        {/* Studio Hours */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>Studio Hours</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} color="#d4af37" />
              <span>Mon – Sun: 10:00 AM – 09:00 PM</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#d4af37" />
              <span>+91 98110 00000 / 011 4500 9999</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="#d4af37" />
              <span>vip@auramakeovers.com</span>
            </li>
          </ul>
        </div>

        {/* Guarantees */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>Signature Promise</h4>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
            100% Authentic Luxury Products (Huda Beauty, Charlotte Tilbury, Dior, MAC, NARS). Sanitized & Hygiene Protocol Certified.
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
        © {new Date().getFullYear()} AURA Luxury Makeover Studio & Salon. All Rights Reserved.
      </div>
    </footer>
  );
}
