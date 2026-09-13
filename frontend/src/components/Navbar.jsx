import React, { useState } from 'react';
import { Crown, Sparkles, User, Calendar, LogOut, ShieldCheck } from 'lucide-react';

export default function Navbar({ currentUser, onOpenAuth, onOpenDashboard, onOpenAdmin, onOpenBooking }) {
  const handleLogout = () => {
    localStorage.removeItem('aura_auth_token');
    window.location.reload();
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(11, 11, 16, 0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'var(--gold-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 16px rgba(212, 175, 55, 0.4)'
        }}>
          <Crown size={22} color="#0b0b10" />
        </div>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: '700', lineHeight: 1 }} className="gold-text">AURA</h1>
          <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#d4af37', fontWeight: '600' }}>
            Govindpuri, Modinagar
          </span>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="nav-menu-desktop" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        <a href="#services" style={{ color: '#e2e2ee', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Services</a>
        <a href="#artists" style={{ color: '#e2e2ee', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Master Artists</a>
        <a href="#bridal" style={{ color: '#e2e2ee', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Bridal Couture</a>
        <a href="#about" style={{ color: '#e2e2ee', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>About Salon</a>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Admin Portal Button - Only visible to adminUser role */}
        {currentUser && currentUser.role === 'adminUser' && (
          <button
            onClick={onOpenAdmin}
            style={{
              background: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid #d4af37',
              color: '#f3e5ab',
              padding: '8px 14px',
              borderRadius: '30px',
              fontSize: '0.8rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 0 12px rgba(212, 175, 55, 0.3)'
            }}
          >
            <ShieldCheck size={15} color="#d4af37" />
            <span>Admin Console</span>
          </button>
        )}

        {currentUser ? (
          <>
            <button onClick={onOpenDashboard} className="btn-outline" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
              <Calendar size={16} />
              <span className="nav-menu-desktop">My Bookings</span>
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              padding: '6px 12px',
              borderRadius: '30px'
            }}>
              <User size={14} color="#d4af37" />
              <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>{currentUser.name.split(' ')[0]}</span>
              <button
                onClick={handleLogout}
                title="Logout"
                style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer', marginLeft: '4px' }}
              >
                <LogOut size={14} />
              </button>
            </div>
          </>
        ) : (
          <button onClick={onOpenAuth} className="btn-outline" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
            <User size={16} />
            <span>Sign In</span>
          </button>
        )}

        <button onClick={() => onOpenBooking(null)} className="btn-gold" style={{ padding: '10px 18px', fontSize: '0.8rem' }}>
          <Sparkles size={16} />
          <span>Book Now</span>
        </button>
      </div>
    </nav>
  );
}

