import React, { useEffect, useState } from 'react';
import { X, Search, RefreshCw, Calendar, IndianRupee, UserCheck, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { api } from '../services/api';

export default function AdminDashboard({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    confirmedCount: 0,
    completedCount: 0,
    cancelledCount: 0
  });
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await api.fetchAdminBookings(statusFilter, searchQuery);
      if (res.status && res.data) {
        setBookings(res.data.bookings || []);
        if (res.data.stats) {
          setStats(res.data.stats);
        }
      }
    } catch (err) {
      console.error('Failed to load admin bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [statusFilter, searchQuery]);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await api.updateAdminBookingStatus(id, newStatus);
      if (res.status) {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
        loadData();
      } else {
        alert(res.message || 'Failed to update status.');
      }
    } catch (err) {
      alert('Error connecting to backend server.');
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '1000px',
        maxHeight: '92vh',
        overflowY: 'auto',
        padding: '32px',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 45px rgba(212,175,55,0.3)'
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <ShieldCheck size={18} color="#d4af37" />
              <span className="badge">Salon Manager Portal</span>
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>
              Studio Booking <span className="gold-text">Management Console</span>
            </h2>
          </div>
          <button onClick={loadData} className="btn-outline" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
            <RefreshCw size={14} />
            <span>Sync Data</span>
          </button>
        </div>

        {/* Analytics Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div style={{
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid var(--border-gold)',
            borderRadius: '14px',
            padding: '18px'
          }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '600' }}>
              Total Salon Revenue
            </span>
            <h3 style={{ fontSize: '1.7rem', fontWeight: '700', marginTop: '4px' }} className="gold-text">
              ₹{stats.totalRevenue.toLocaleString('en-IN')}
            </h3>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding: '18px'
          }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '600' }}>
              Total Reservations
            </span>
            <h3 style={{ fontSize: '1.7rem', fontWeight: '700', marginTop: '4px', color: '#fff' }}>
              {stats.totalBookings}
            </h3>
          </div>

          <div style={{
            background: 'rgba(74, 222, 128, 0.1)',
            border: '1px solid rgba(74, 222, 128, 0.3)',
            borderRadius: '14px',
            padding: '18px'
          }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#4ade80', fontWeight: '600' }}>
              Confirmed Appointments
            </span>
            <h3 style={{ fontSize: '1.7rem', fontWeight: '700', marginTop: '4px', color: '#4ade80' }}>
              {stats.confirmedCount}
            </h3>
          </div>

          <div style={{
            background: 'rgba(248, 113, 113, 0.1)',
            border: '1px solid rgba(248, 113, 113, 0.3)',
            borderRadius: '14px',
            padding: '18px'
          }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#f87171', fontWeight: '600' }}>
              Cancelled Requests
            </span>
            <h3 style={{ fontSize: '1.7rem', fontWeight: '700', marginTop: '4px', color: '#f87171' }}>
              {stats.cancelledCount}
            </h3>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          {/* Status Filter Tabs */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {['All', 'Confirmed', 'Completed', 'Cancelled'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: statusFilter === st ? '1px solid #d4af37' : '1px solid var(--border-subtle)',
                  background: statusFilter === st ? 'var(--gold-gradient)' : 'transparent',
                  color: statusFilter === st ? '#000' : '#a1a1b5',
                  fontWeight: '700',
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
            <Search size={16} color="#a1a1b5" style={{ position: 'absolute', left: '12px', top: '10px' }} />
            <input
              type="text"
              placeholder="Search customer, service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '20px',
                background: '#161622',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Bookings Table */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            Loading bookings console...
          </div>
        ) : bookings.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            No bookings found matching query.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.85rem',
              textAlign: 'left'
            }}>
              <thead>
                <tr style={{ background: '#181824', borderBottom: '1px solid var(--border-gold)', color: '#d4af37' }}>
                  <th style={{ padding: '12px' }}>REF & DATE</th>
                  <th style={{ padding: '12px' }}>CUSTOMER</th>
                  <th style={{ padding: '12px' }}>SERVICE & FEE</th>
                  <th style={{ padding: '12px' }}>ARTIST & SLOT</th>
                  <th style={{ padding: '12px' }}>STATUS ACTION</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '14px 12px' }}>
                      <div style={{ fontWeight: '700', color: '#f3e5ab' }}>{b.id}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{b.bookingDate}</div>
                    </td>
                    <td style={{ padding: '14px 12px' }}>
                      <div style={{ fontWeight: '700', color: '#fff' }}>{b.customerName}</div>
                      <div style={{ fontSize: '0.75rem', color: '#a1a1b5' }}>{b.customerPhone || 'N/A'}</div>
                    </td>
                    <td style={{ padding: '14px 12px' }}>
                      <div style={{ fontWeight: '600' }}>{b.serviceTitle}</div>
                      <div style={{ fontWeight: '700', color: '#d4af37' }}>₹{b.servicePrice?.toLocaleString('en-IN')}</div>
                    </td>
                    <td style={{ padding: '14px 12px' }}>
                      <div style={{ color: '#fff' }}>{b.artistName}</div>
                      <div style={{ fontSize: '0.75rem', color: '#a1a1b5' }}>{b.slotTime}</div>
                    </td>
                    <td style={{ padding: '14px 12px' }}>
                      <select
                        value={b.status}
                        disabled={updatingId === b.id}
                        onChange={(e) => handleStatusChange(b.id, e.target.value)}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '8px',
                          background: b.status === 'Confirmed' ? 'rgba(74, 222, 128, 0.2)' : b.status === 'Completed' ? 'rgba(96, 165, 250, 0.2)' : 'rgba(248, 113, 113, 0.2)',
                          color: b.status === 'Confirmed' ? '#4ade80' : b.status === 'Completed' ? '#60a5fa' : '#f87171',
                          border: '1px solid var(--border-subtle)',
                          fontWeight: '700',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="Confirmed" style={{ background: '#161622', color: '#4ade80' }}>Confirmed</option>
                        <option value="Completed" style={{ background: '#161622', color: '#60a5fa' }}>Completed</option>
                        <option value="Cancelled" style={{ background: '#161622', color: '#f87171' }}>Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
