import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceCatalog from './components/ServiceCatalog';
import ArtistSection from './components/ArtistSection';
import ExperienceSection from './components/ExperienceSection';
import BookingModal from './components/BookingModal';
import AuthModal from './components/AuthModal';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { api } from './services/api';
import { INITIAL_SERVICES, INITIAL_ARTISTS } from './data/initialData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [artists, setArtists] = useState(INITIAL_ARTISTS);

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize data in the background (Non-blocking)
  useEffect(() => {
    const initApp = async () => {
      try {
        // Check auth token
        const token = localStorage.getItem('beautybar_auth_token') || localStorage.getItem('aura_auth_token');
        if (token) {
          const profileRes = await api.getProfile();
          if (profileRes.status && profileRes.data?.user) {
            setCurrentUser(profileRes.data.user);
          }
        }

        // Fetch fresh services & artists in background
        const [servicesRes, artistsRes] = await Promise.all([
          api.fetchServices(),
          api.fetchArtists()
        ]);

        if (servicesRes.status && servicesRes.data?.result?.length > 0) {
          const sanitized = servicesRes.data.result.map(s => {
            let img = s.image;
            if (!img || img.includes('owner-')) {
              img = '/images/basic-bridal.jpg';
            }
            return { ...s, image: img };
          });
          setServices(sanitized);
        }
        if (artistsRes.status && artistsRes.data?.result?.length > 0) {
          const sanitizedArtists = artistsRes.data.result.map(a => ({
            ...a,
            avatar: a.avatar && !a.avatar.includes('owner-') ? a.avatar : '/images/airbrush-bridal.jpg'
          }));
          setArtists(sanitizedArtists);
        }
      } catch (error) {
        // Gracefully failover to pre-loaded high performance initial data
        console.warn('Background sync note:', error.message);
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
    const id = booking?.id || 'VIP';
    const title = booking?.serviceTitle || 'Makeover Package';
    const date = booking?.bookingDate || 'Upcoming Date';
    const time = booking?.slotTime ? `at ${booking.slotTime}` : '';
    showToast(`Appointment #${id} reserved for ${title} on ${date} ${time}!`);
  };

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
      <HeroSection onOpenBooking={() => setIsBookingOpen(true)} services={services} />

      {/* Service Catalog */}
      <ServiceCatalog
        services={services}
        onSelectService={handleOpenBookingForService}
      />

      {/* Founders & Leadership Showcase */}
      <ArtistSection
        artists={artists}
        onSelectArtist={(artist) => {
          setSelectedArtist(artist);
          setIsBookingOpen(true);
        }}
      />

      {/* Studio Experience & Assurance */}
      <ExperienceSection
        onOpenBooking={() => setIsBookingOpen(true)}
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
