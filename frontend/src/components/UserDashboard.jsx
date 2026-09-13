import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle, Ban, RefreshCw, AlertCircle } from 'lucide-react';
import { api } from '../services/api';

export default function UserDashboard({ isOpen, onClose, currentUser }) {
  if (!isOpen) return null;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [cancellingId, setCancellingId] = useState(null);

  const fetchBookings = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await api.fetchMyBookings();
      if (res.status && res.data) {
        setBookings(res.data.result || []);
      } else {
        setErrorMsg(res.message || 'Failed to load bookings.');
      }
    } catch (err) {
      setErrorMsg('Error connecting to backend.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancelBooking = async (id) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;
    setCancellingId(id);
    try {
      const res = await api.cancelBooking(id);
      if (res.status) {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'Cancelled' } : b));
      } else {
        alert(res.message || 'Could not cancel booking.');
      }
    } catch (err) {
      alert('Network error while cancelling booking.');
    } finally {
      setCancellingId(null);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '720px',
        maxHeight: '85vh',
        overflowY: 'auto',
        padding: '32px',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(212,175,55,0.2)'
      }}>
        {/* Close button */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer'
        }}>
          <X size={24} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '6px', display: 'inline-block' }}>Dashboard</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>
              My VIP <span className="gold-text">Appointments</span>
            </h2>
          </div>
          <button onClick={fetchBookings} title="Refresh" className="btn-outline" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
            <RefreshCw size={14} />
            <span>Refresh</span>
          </button>
        </div>

        {errorMsg && (
          <div style={{ background: 'rgba(255, 77, 77, 0.15)', color: '#ff9999', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>
            {errorMsg}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            Loading your appointments...
          </div>
        ) : bookings.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 20px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '16px',
            border: '1px dashed var(--border-subtle)'
          }}>
            <Calendar size={48} color="#d4af37" style={{ marginBottom: '12px', opacity: 0.8 }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No Appointments Booked Yet</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Treat yourself to a luxury makeover or HD bridal transformation today.
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            {bookings.map((b) => (
              <div key={b.id} style={{
                background: '#161622',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(212,175,55,0.15)', color: '#d4af37', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
                      REF: {b.id}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      padding: '2px 10px',
                      borderRadius: '12px',
                      background: b.status === 'Confirmed' ? 'rgba(74, 222, 128, 0.15)' : 'rgba(248, 113, 113, 0.15)',
                      color: b.status === 'Confirmed' ? '#4ade80' : '#f87171',
                      border: b.status === 'Confirmed' ? '1px solid rgba(74, 222, 128, 0.3)' : '1px solid rgba(248, 113, 113, 0.3)'
                    }}>
                      {b.status}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '4px' }}>{b.serviceTitle}</h4>
                  
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span>Artist: <strong style={{ color: '#fff' }}>{b.artistName}</strong></span>
                    <span>Date: <strong style={{ color: '#fff' }}>{b.bookingDate}</strong></span>
                    <span>Slot: <strong style={{ color: '#fff' }}>{b.slotTime}</strong></span>
                  </div>

                  {b.notes && (
                    <div style={{ fontSize: '0.8rem', color: '#a0a0b5', marginTop: '6px', fontStyle: 'italic' }}>
                      Note: "{b.notes}"
                    </div>
                  )}
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#9A7412' }}>
                    VIP Booking
                  </div>

                  {b.status === 'Confirmed' && (
                    <button
                      onClick={() => handleCancelBooking(b.id)}
                      disabled={cancellingId === b.id}
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(248, 113, 113, 0.4)',
                        color: '#f87171',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Ban size={12} />
                      <span>{cancellingId === b.id ? 'Cancelling...' : 'Cancel Booking'}</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
