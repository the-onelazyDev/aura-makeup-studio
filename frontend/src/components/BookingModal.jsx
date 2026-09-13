import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, User, Phone, Check, AlertCircle, ShieldCheck } from 'lucide-react';
import { api } from '../services/api';

export default function BookingModal({
  isOpen,
  onClose,
  services,
  artists,
  preselectedService,
  preselectedArtist,
  currentUser,
  onOpenAuth,
  onBookingSuccess
}) {
  if (!isOpen) return null;

  const defaultArtistId = preselectedArtist?.id || (artists && artists[0]?.id) || 'art-1';
  const defaultServiceId = preselectedService?.id || (services && services[0]?.id) || '';

  const [selectedServiceId, setSelectedServiceId] = useState(defaultServiceId);
  const [selectedArtistId, setSelectedArtistId] = useState(defaultArtistId);
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');
  const [customerName, setCustomerName] = useState(currentUser?.name || '');
  const [customerPhone, setCustomerPhone] = useState(currentUser?.phone || '');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const currentService = services.find(s => s.id === selectedServiceId) || services[0];
  const currentArtist = artists.find(a => a.id === selectedArtistId) || artists[0] || {
    id: 'art-1',
    name: 'Vaishnavi Singh',
    title: 'Founder & Lead Celebrity Makeup Artist',
    avatar: '/images/owner-portrait.jpg',
    rating: 5.0
  };
  const availableSlots = currentArtist?.availableSlots || ["10:00 AM", "01:30 PM", "04:30 PM", "07:00 PM"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      setErrorMsg('Please log in or create an account to finalize your booking.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const payload = {
        userId: currentUser.id,
        serviceId: selectedServiceId || currentService?.id,
        artistId: selectedArtistId || currentArtist?.id,
        bookingDate,
        slotTime: selectedSlot,
        customerName: customerName || currentUser.name,
        customerPhone: customerPhone || currentUser.phone || "+91 98765 43210",
        notes
      };

      const response = await api.createBooking(payload);
      setLoading(false);

      if (response && response.status) {
        const bookingData = response.data?.booking || response.data || payload;
        onBookingSuccess(bookingData);
        onClose();
      } else {
        setErrorMsg(response?.message || 'Failed to book appointment.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || 'Server error. Please check your backend connection.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '640px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '28px 20px',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(212,175,55,0.2)'
      }}>
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer'
        }}>
          <X size={22} />
        </button>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div className="badge" style={{ marginBottom: '6px' }}>VIP Reservation</div>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700' }}>
            Book Your <span className="gold-text">Makeover Appointment</span>
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Govindpuri, Modinagar</p>
        </div>

        {errorMsg && (
          <div style={{
            background: 'rgba(255, 77, 77, 0.15)',
            border: '1px solid rgba(255, 77, 77, 0.4)',
            color: '#ff9999',
            padding: '10px 14px',
            borderRadius: '10px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem'
          }}>
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
            {!currentUser && (
              <button
                type="button"
                onClick={onOpenAuth}
                style={{
                  marginLeft: 'auto',
                  background: '#d4af37',
                  color: '#000',
                  border: 'none',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '0.72rem'
                }}
              >
                Sign In
              </button>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#d4af37', fontWeight: '700', marginBottom: '6px' }}>
              1. SELECT SERVICE / PACKAGE
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                background: '#181824',
                border: '1px solid var(--border-gold)',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            >
              {services.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.title} — ₹{srv.price.toLocaleString('en-IN')} ({srv.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: Master Artist (Vaishnavi Singh featured card) */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#d4af37', fontWeight: '700', marginBottom: '6px' }}>
              2. MAKEOVER ARTIST
            </label>
            <div
              style={{
                padding: '12px 14px',
                borderRadius: '12px',
                border: '2px solid #d4af37',
                background: 'rgba(212, 175, 55, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <img
                src={currentArtist?.avatar || '/images/owner-portrait.jpg'}
                alt={currentArtist?.name || 'Vaishnavi Singh'}
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #d4af37', flexShrink: 0 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff' }}>
                    {currentArtist?.name || 'Vaishnavi Singh'}
                  </span>
                  <span className="badge" style={{ padding: '2px 6px', fontSize: '0.65rem' }}>Founder</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {currentArtist?.specialty || 'Royal Bridal & HD Airbrush Specialist'} • 5.0 ★
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Date & Time Slot */}
          <div className="form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#d4af37', fontWeight: '700', marginBottom: '6px' }}>
                3. APPOINTMENT DATE
              </label>
              <input
                type="date"
                value={bookingDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setBookingDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: '10px',
                  background: '#181824',
                  border: '1px solid var(--border-gold)',
                  color: '#fff',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#d4af37', fontWeight: '700', marginBottom: '6px' }}>
                4. TIME SLOT
              </label>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: '10px',
                  background: '#181824',
                  border: '1px solid var(--border-gold)',
                  color: '#fff',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              >
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 4: Contact & Notes */}
          <div className="form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Customer Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your Full Name"
                required
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: '10px',
                  background: '#181824',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Phone Number
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="+91 98765 43210"
                required
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: '10px',
                  background: '#181824',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Styling Notes / Requirements (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="E.g. Saree draping, bridal dupatta setting, skin sensitivity..."
              rows={2}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                background: '#181824',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.85rem',
                outline: 'none',
                resize: 'none'
              }}
            />
          </div>

          {/* Pricing Summary */}
          {currentService && (
            <div style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid var(--border-gold)',
              padding: '14px',
              borderRadius: '12px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Total Booking Fee</span>
                <span style={{ fontSize: '1.3rem', fontWeight: '700' }} className="gold-text">
                  ₹{currentService.price.toLocaleString('en-IN')}
                </span>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span>Artist: <strong>{currentArtist?.name || 'Vaishnavi Singh'}</strong></span><br />
                <span>Slot: {bookingDate} @ {selectedSlot}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold"
            style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}
          >
            <Sparkles size={16} />
            <span>{loading ? 'Confirming...' : 'Confirm VIP Booking'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
