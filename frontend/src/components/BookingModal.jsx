import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, User, Phone, Check, AlertCircle } from 'lucide-react';
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

  const [selectedServiceId, setSelectedServiceId] = useState(preselectedService?.id || services[0]?.id || '');
  const [selectedArtistId, setSelectedArtistId] = useState(preselectedArtist?.id || artists[0]?.id || '');
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');
  const [customerName, setCustomerName] = useState(currentUser?.name || '');
  const [customerPhone, setCustomerPhone] = useState(currentUser?.phone || '');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const currentService = services.find(s => s.id === selectedServiceId);
  const currentArtist = artists.find(a => a.id === selectedArtistId);
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
        serviceId: selectedServiceId,
        artistId: selectedArtistId,
        bookingDate,
        slotTime: selectedSlot,
        customerName: customerName || currentUser.name,
        customerPhone,
        notes
      };

      const response = await api.createBooking(payload);
      setLoading(false);

      if (response.status) {
        onBookingSuccess(response.data.booking);
        onClose();
      } else {
        setErrorMsg(response.message || 'Failed to book appointment.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg('Server error. Please check your backend connection.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '680px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '32px',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(212,175,55,0.2)'
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
          <X size={24} />
        </button>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="badge" style={{ marginBottom: '8px', display: 'inline-block' }}>VIP Reservation</div>
          <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>
            Book Your <span className="gold-text">Makeover Appointment</span>
          </h2>
        </div>

        {errorMsg && (
          <div style={{
            background: 'rgba(255, 77, 77, 0.15)',
            border: '1px solid rgba(255, 77, 77, 0.4)',
            color: '#ff9999',
            padding: '12px 16px',
            borderRadius: '10px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.9rem'
          }}>
            <AlertCircle size={18} />
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
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '0.75rem'
                }}
              >
                Sign In Now
              </button>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#d4af37', fontWeight: '600', marginBottom: '8px' }}>
              1. SELECT SERVICE / PACKAGE
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                background: '#181824',
                border: '1px solid var(--border-gold)',
                color: '#fff',
                fontSize: '0.95rem',
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

          {/* Step 2: Master Artist */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#d4af37', fontWeight: '600', marginBottom: '8px' }}>
              2. CHOOSE MASTER ARTIST
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
              {artists.map((artist) => {
                const isSelected = selectedArtistId === artist.id;
                return (
                  <div
                    key={artist.id}
                    onClick={() => setSelectedArtistId(artist.id)}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #d4af37' : '1px solid var(--border-subtle)',
                      background: isSelected ? 'rgba(212, 175, 55, 0.15)' : '#181824',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img
                      src={artist.avatar}
                      alt={artist.name}
                      style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 6px' }}
                    />
                    <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>{artist.name.split(' ')[0]}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{artist.rating} ★</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Date & Time Slot */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#d4af37', fontWeight: '600', marginBottom: '8px' }}>
                3. APPOINTMENT DATE
              </label>
              <input
                type="date"
                value={bookingDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setBookingDate(e.target.value)}
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
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#d4af37', fontWeight: '600', marginBottom: '8px' }}>
                4. TIME SLOT
              </label>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
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
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 4: Contact & Notes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
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
                  padding: '12px',
                  borderRadius: '10px',
                  background: '#181824',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
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
                  padding: '12px',
                  borderRadius: '10px',
                  background: '#181824',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
              Special Styling Requirements / Notes (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="E.g. Saree draping required, long hair extensions, skin allergy details..."
              rows={2}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                background: '#181824',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.9rem',
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
              padding: '16px',
              borderRadius: '12px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Total Booking Fee</span>
                <span style={{ fontSize: '1.4rem', fontWeight: '700' }} className="gold-text">
                  ₹{currentService.price.toLocaleString('en-IN')}
                </span>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>Artist: {currentArtist?.name}</span><br />
                <span>Slot: {bookingDate} @ {selectedSlot}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '0.95rem' }}
          >
            <Sparkles size={18} />
            <span>{loading ? 'Confirming Reservation...' : 'Confirm VIP Booking'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
