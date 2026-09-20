import React from 'react';
import { Crown, Sparkles, User, Calendar, LogOut, ShieldCheck, Phone } from 'lucide-react';

export default function Navbar({ currentUser, onOpenAuth, onOpenDashboard, onOpenAdmin, onOpenBooking }) {
  const handleLogout = () => {
    localStorage.removeItem('beautybar_auth_token');
    localStorage.removeItem('aura_auth_token');
    window.location.reload();
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      boxShadow: '0 1px 10px rgba(0, 0, 0, 0.03)'
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
          boxShadow: '0 2px 10px rgba(197, 155, 39, 0.3)'
        }}>
          <Crown size={20} color="#111827" />
        </div>
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: '700', lineHeight: 1, letterSpacing: '0.5px' }} className="gold-text">THE BEAUTY BAR</h1>
          <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '1.2px', color: '#9A7412', fontWeight: '700', display: 'block' }}>
            Makeup Studio • Salon • Academy
          </span>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="nav-menu-desktop" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a href="#services" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Services & Academy</a>
        <a href="#artists" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Founders</a>
        <a href="#experience" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Why The Beauty Bar</a>
        <a href="#about" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Location & Contact</a>
      </div>

      {/* Actions */}
      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        {/* Admin Portal Button - Only visible to adminUser role */}
        {currentUser && currentUser.role === 'adminUser' && (
          <button
            onClick={onOpenAdmin}
            className="nav-action-btn"
            style={{
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              color: '#926C05',
              padding: '7px 12px',
              borderRadius: '30px',
              fontSize: '0.75rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <ShieldCheck size={14} color="#926C05" />
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
              background: '#F3F4F6',
              border: '1px solid #E5E7EB',
              padding: '5px 10px',
              borderRadius: '30px',
              fontSize: '0.75rem',
              color: '#111827'
            }}>
              <User size={13} color="#9A7412" />
              <span style={{ fontWeight: '600' }}>{currentUser.name.split(' ')[0]}</span>
              <button
                onClick={handleLogout}
                title="Logout"
                style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', marginLeft: '2px', display: 'flex', alignItems: 'center' }}
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
