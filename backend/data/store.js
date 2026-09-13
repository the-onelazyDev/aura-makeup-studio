const bcrypt = require("bcryptjs");
const { INITIAL_SERVICES, INITIAL_ARTISTS } = require("./seedData");

// In-memory data store with seed defaults
const usersStore = [
  {
    id: "admin-1",
    name: "Salon Manager (Admin)",
    email: "admin@auramakeup.com",
    passwordHash: bcrypt.hashSync("AdminPass123!", 10),
    phone: "+91 98110 00000",
    role: "adminUser",
    createdAt: new Date().toISOString()
  },
  {
    id: "user-demo-1",
    name: "Priya Sharma",
    email: "priya@example.com",
    passwordHash: bcrypt.hashSync("Password123!", 10),
    phone: "+91 98765 43210",
    role: "appUser",
    createdAt: new Date().toISOString()
  }
];

const servicesStore = [...INITIAL_SERVICES];
const artistsStore = [...INITIAL_ARTISTS];
const bookingsStore = [
  {
    id: "bk-1001",
    userId: "user-demo-1",
    serviceId: "srv-1",
    serviceTitle: "Royal Bridal Signature Makeover",
    servicePrice: 25000,
    artistId: "art-1",
    artistName: "Meenakshi Dutt",
    bookingDate: "2026-08-20",
    slotTime: "10:00 AM",
    status: "Confirmed",
    customerName: "Priya Sharma",
    customerPhone: "+91 98765 43210",
    notes: "Requires heavy gold saree draping assistance.",
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

module.exports = {
  usersStore,
  servicesStore,
  artistsStore,
  bookingsStore
};
