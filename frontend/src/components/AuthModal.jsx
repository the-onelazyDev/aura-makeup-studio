import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { api } from '../services/api';

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  if (!isOpen) return null;

  const [isLogin, setIsLogin] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      let res;
      if (isLogin || isAdminMode) {
        res = await api.login(email, password);
      } else {
        res = await api.register(name, email, password, phone);
      }

      setLoading(false);

      if (res.status && res.data?.token) {
        localStorage.setItem('beautybar_auth_token', res.data.token);
        localStorage.setItem('aura_auth_token', res.data.token);
        onAuthSuccess(res.data.user);
        onClose();
      } else {
        setErrorMsg(res.message || 'Authentication failed.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg('Server connection error. Please try again.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '440px',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(212,175,55,0.2)'
      }}>
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer'
        }}>
          <X size={22} />
        </button>

        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }} className="gold-text">
            {isAdminMode ? 'Studio Manager Sign In' : (isLogin ? 'Welcome Back' : 'Create VIP Account')}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            {isAdminMode ? 'Restricted portal for salon management & staff' : (isLogin ? 'Access your appointments and exclusive perks' : 'Join The Beauty Bar for seamless bookings')}
          </p>

          {isLogin && !isAdminMode && (
            <button
              type="button"
              onClick={() => {
                setEmail('priya@example.com');
                setPassword('Password123!');
              }}
              style={{
                marginTop: '12px',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--border-gold)',
                color: '#f3e5ab',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={13} color="#d4af37" />
              <span>Fill Customer Demo (Priya Sharma)</span>
            </button>
          )}

          {isAdminMode && (
            <button
              type="button"
              onClick={() => {
                setEmail('admin@thebeautybar.com');
                setPassword('AdminPass123!');
              }}
              style={{
                marginTop: '12px',
                background: 'rgba(74, 222, 128, 0.15)',
                border: '1px solid rgba(74, 222, 128, 0.4)',
                color: '#4ade80',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={13} color="#4ade80" />
              <span>Fill Manager Admin Demo (admin@thebeautybar.com)</span>
            </button>
          )}
        </div>

        {/* Tab Switcher (Only visible for customer mode) */}
        {!isAdminMode && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            background: '#14141f',
            padding: '4px',
            borderRadius: '30px',
            marginBottom: '24px',
            border: '1px solid var(--border-subtle)'
          }}>
            <button
              type="button"
              onClick={() => { setIsLogin(true); setErrorMsg(''); }}
              style={{
                padding: '8px',
                borderRadius: '25px',
                border: 'none',
                background: isLogin ? 'var(--gold-gradient)' : 'transparent',
                color: isLogin ? '#0b0b10' : '#a1a1b5',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setIsLogin(false); setErrorMsg(''); }}
              style={{
                padding: '8px',
                borderRadius: '25px',
                border: 'none',
                background: !isLogin ? 'var(--gold-gradient)' : 'transparent',
                color: !isLogin ? '#0b0b10' : '#a1a1b5',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Register
            </button>
          </div>
        )}

        {errorMsg && (
          <div style={{
            background: 'rgba(255, 77, 77, 0.15)',
            border: '1px solid rgba(255, 77, 77, 0.4)',
            color: '#ff9999',
            padding: '10px 14px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem'
          }}>
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && !isAdminMode && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="#a1a1b5" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="text"
                  placeholder="Priya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    borderRadius: '8px',
                    background: '#181824',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          )}

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#a1a1b5" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="email"
                placeholder={isAdminMode ? 'admin@thebeautybar.com' : 'priya@example.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 40px',
                  borderRadius: '8px',
                  background: '#181824',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: (isLogin || isAdminMode) ? '24px' : '16px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="#a1a1b5" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 40px',
                  borderRadius: '8px',
                  background: '#181824',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          {!isLogin && !isAdminMode && (
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Phone Number
              </label>
              <div style={{ position: 'relative' }}>
                <Phone size={18} color="#a1a1b5" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    borderRadius: '8px',
                    background: '#181824',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.9rem' }}
          >
            <Sparkles size={18} />
            <span>{loading ? 'Processing...' : (isAdminMode ? 'Login as Studio Manager' : (isLogin ? 'Sign In to Account' : 'Create Account'))}</span>
          </button>
        </form>

        {/* Discreet Staff Portal Toggle */}
        <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
          <button
            type="button"
            onClick={() => {
              setIsAdminMode(!isAdminMode);
              setIsLogin(true);
              setErrorMsg('');
              setEmail('');
              setPassword('');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isAdminMode ? '← Back to Customer Sign In' : 'Salon Staff / Manager Sign In →'}
          </button>
        </div>
      </div>
    </div>
  );
}
