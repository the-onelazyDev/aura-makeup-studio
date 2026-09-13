import React from 'react';
import { Crown, Sparkles, User, Calendar, LogOut, ShieldCheck, Phone } from 'lucide-react';

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
      background: 'rgba(11, 11, 16, 0.94)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    }}>
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flexShrink: 0 }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: 'var(--gold-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 16px rgba(212, 175, 55, 0.4)'
        }}>
          <Crown size={20} color="#0b0b10" />
        </div>
        <div>
          <h1 style={{ fontSize: '1.35rem', fontWeight: '700', lineHeight: 1 }} className="gold-text">AURA</h1>
          <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '1.2px', color: '#d4af37', fontWeight: '600', display: 'block' }}>
            Govindpuri, Modinagar
          </span>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="nav-menu-desktop" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a href="#services" style={{ color: '#e2e2ee', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Services</a>
        <a href="#artists" style={{ color: '#e2e2ee', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Vaishnavi Singh</a>
        <a href="#about" style={{ color: '#e2e2ee', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Location & Contact</a>
      </div>

      {/* Actions */}
      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        {/* Admin Portal Button - Only visible to adminUser role */}
        {currentUser && currentUser.role === 'adminUser' && (
          <button
            onClick={onOpenAdmin}
            className="nav-action-btn"
            style={{
              background: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid #d4af37',
              color: '#f3e5ab',
              padding: '7px 12px',
              borderRadius: '30px',
              fontSize: '0.75rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              boxShadow: '0 0 12px rgba(212, 175, 55, 0.3)'
            }}
          >
            <ShieldCheck size={14} color="#d4af37" />
            <span>Admin</span>
          </button>
        )}

        {currentUser ? (
          <>
            <button onClick={onOpenDashboard} className="btn-outline nav-action-btn" style={{ padding: '7px 12px', fontSize: '0.75rem' }}>
              <Calendar size={14} />
              <span className="nav-menu-desktop">Bookings</span>
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              padding: '5px 10px',
              borderRadius: '30px',
              fontSize: '0.75rem'
            }}>
              <User size={13} color="#d4af37" />
              <span style={{ fontWeight: '600' }}>{currentUser.name.split(' ')[0]}</span>
              <button
                onClick={handleLogout}
                title="Logout"
                style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer', marginLeft: '2px', display: 'flex', alignItems: 'center' }}
              >
                <LogOut size={13} />
              </button>
            </div>
          </>
        ) : (
          <button onClick={onOpenAuth} className="btn-outline nav-action-btn" style={{ padding: '7px 12px', fontSize: '0.75rem' }}>
            <User size={14} />
            <span>Login</span>
          </button>
        )}

        <button onClick={() => onOpenBooking(null)} className="btn-gold nav-action-btn" style={{ padding: '8px 14px', fontSize: '0.75rem' }}>
          <Sparkles size={14} />
          <span>Book Now</span>
        </button>
      </div>
    </nav>
  );
}
