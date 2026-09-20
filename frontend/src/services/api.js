const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9005/api';

// Helper to get Auth Header
const getAuthHeaders = () => {
  const token = localStorage.getItem('beautybar_auth_token') || localStorage.getItem('aura_auth_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

export const api = {
  // Auth API
  async login(email, password) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return res.json();
  },

  async register(name, email, password, phone) {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, phone })
    });
    return res.json();
  },

  async getProfile() {
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // Services API
  async fetchServices(category = 'All') {
    const query = category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    const res = await fetch(`${API_BASE_URL}/services${query}`);
    return res.json();
  },

  // Artists API
  async fetchArtists() {
    const res = await fetch(`${API_BASE_URL}/artists`);
    return res.json();
  },

  // Bookings API
  async createBooking(bookingData) {
    const res = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(bookingData)
    });
    return res.json();
  },

  async fetchMyBookings() {
    const res = await fetch(`${API_BASE_URL}/bookings/my-bookings`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async cancelBooking(bookingId) {
    const res = await fetch(`${API_BASE_URL}/bookings/${bookingId}/cancel`, {
      method: 'PUT',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // Admin API
  async fetchAdminBookings(status = 'All', search = '') {
    const query = `?status=${encodeURIComponent(status)}&search=${encodeURIComponent(search)}`;
    const res = await fetch(`${API_BASE_URL}/admin/bookings${query}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async updateAdminBookingStatus(bookingId, status) {
    const res = await fetch(`${API_BASE_URL}/admin/bookings/${bookingId}/status`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return res.json();
  }
};
