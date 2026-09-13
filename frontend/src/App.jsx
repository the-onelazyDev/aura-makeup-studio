import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceCatalog from './components/ServiceCatalog';
import ArtistSection from './components/ArtistSection';
import BookingModal from './components/BookingModal';
import AuthModal from './components/AuthModal';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { api } from './services/api';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [services, setServices] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize data
  useEffect(() => {
    const initApp = async () => {
      try {
        // Fetch services & artists
        const [servicesRes, artistsRes] = await Promise.all([
          api.fetchServices(),
          api.fetchArtists()
        ]);

        if (servicesRes.status && servicesRes.data?.result) {
          setServices(servicesRes.data.result);
        }
        if (artistsRes.status && artistsRes.data?.result) {
          setArtists(artistsRes.data.result);
        }

        // Check auth token
        const token = localStorage.getItem('aura_auth_token');
        if (token) {
          const profileRes = await api.getProfile();
          if (profileRes.status && profileRes.data?.user) {
            setCurrentUser(profileRes.data.user);
          }
        }
      } catch (error) {
        console.error('App init error:', error);
      } finally {
        setLoading(false);
      }
    };

    initApp();
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleOpenBookingForService = (service) => {
    setSelectedService(service);
    setSelectedArtist(null);
    setIsBookingOpen(true);
  };

  const handleOpenBookingForArtist = (artist) => {
    setSelectedArtist(artist);
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (booking) => {
    showToast(`Appointment #${booking.id} reserved for ${booking.serviceTitle} on ${booking.bookingDate} at ${booking.slotTime}!`);
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--bg-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '3px solid rgba(212,175,55,0.2)',
          borderTopColor: '#d4af37',
          animation: 'spin 1s linear infinite'
        }} />
        <span style={{ fontFamily: 'var(--font-heading)', color: '#d4af37', letterSpacing: '2px' }}>AURA LUXURY STUDIO</span>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 2000,
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--gold-primary)',
          color: '#fff',
          padding: '16px 24px',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <CheckCircle2 size={24} color="#4ade80" />
          <div>
            <div style={{ fontWeight: '700', color: '#d4af37', fontSize: '0.85rem' }}>SUCCESS</div>
            <div style={{ fontSize: '0.9rem' }}>{toastMessage}</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenBooking={() => { setSelectedService(null); setSelectedArtist(null); setIsBookingOpen(true); }}
      />

      {/* Hero Banner */}
      <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Service Catalog */}
      <ServiceCatalog
        services={services}
        onSelectService={handleOpenBookingForService}
      />

      {/* Senior Artists */}
      <ArtistSection
        artists={artists}
        onSelectArtist={handleOpenBookingForArtist}
      />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        services={services}
        artists={artists}
        preselectedService={selectedService}
        preselectedArtist={selectedArtist}
        currentUser={currentUser}
        onOpenAuth={() => { setIsBookingOpen(false); setIsAuthOpen(true); }}
        onBookingSuccess={handleBookingSuccess}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={(user) => {
          setCurrentUser(user);
          showToast(`Welcome, ${user.name}!`);
        }}
      />

      <UserDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        currentUser={currentUser}
      />

      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}
