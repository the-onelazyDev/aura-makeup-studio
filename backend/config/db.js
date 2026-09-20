const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Service = require("../models/Service");
const Artist = require("../models/Artist");
const Booking = require("../models/Booking");
const { INITIAL_SERVICES, INITIAL_ARTISTS } = require("../data/seedData");

let isMongoConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.log("ℹ️  MONGODB_URI not provided. Running with in-memory data store.");
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000
    });
    isMongoConnected = true;
    console.log(`🌿 MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);

    // Auto-seed initial default data if collections are empty
    await seedDatabaseIfEmpty();
    return true;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.log("⚠️  Falling back to in-memory store so app continues running.");
    isMongoConnected = false;
    return false;
  }
};

const seedDatabaseIfEmpty = async () => {
  try {
    // Seed Admin & Demo Users
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const adminPass = await bcrypt.hash("Admin@123", 10);
      const userPass = await bcrypt.hash("Priya@123", 10);

      await User.create([
        {
          id: "admin-1",
          name: "Salon Manager (Admin)",
          email: "admin@thebeautybar.com",
          passwordHash: adminPass,
          phone: "+91 98110 00000",
          role: "adminUser"
        },
        {
          id: "user-demo-1",
          name: "Priya Sharma",
          email: "priya@example.com",
          passwordHash: userPass,
          phone: "+91 98765 43210",
          role: "appUser"
        }
      ]);
      console.log("✨ Seeded default Admin & Demo users into MongoDB.");
    }

    // Sync Services catalog (Replace any old or obsolete services)
    await Service.deleteMany({});
    await Service.insertMany(INITIAL_SERVICES);
    console.log("✨ Successfully synchronized fresh Services catalog into MongoDB.");

    // Seed Artists / Ensure Vaishnavi Singh is Lead Artist
    const artistCount = await Artist.countDocuments();
    if (artistCount === 0) {
      await Artist.insertMany(INITIAL_ARTISTS);
      console.log("✨ Seeded default Master Artists into MongoDB.");
    } else {
      await Artist.findOneAndUpdate(
        { id: "art-1" },
        {
          name: "Vaishnavi Singh",
          title: "Founder & Lead Celebrity Makeup Artist",
          avatar: "/images/airbrush-bridal.jpg",
          specialty: "Royal HD Bridal, Airbrush & Sangeet Glamour"
        }
      );
    }

    // Seed Demo Booking
    const bookingCount = await Booking.countDocuments();
    if (bookingCount === 0) {
      await Booking.create({
        id: "bk-1001",
        userId: "user-demo-1",
        serviceId: "srv-1",
        serviceTitle: "Royal Bridal Signature Makeover",
        servicePrice: 25000,
        artistId: "art-1",
        artistName: "Vaishnavi Singh",
        bookingDate: "2026-08-20",
        slotTime: "10:00 AM",
        status: "Confirmed",
        customerName: "Priya Sharma",
        customerPhone: "+91 98765 43210",
        notes: "Requires heavy gold saree draping assistance."
      });
      console.log("✨ Seeded sample VIP booking into MongoDB.");
    }
  } catch (seedErr) {
    console.warn("MongoDB Auto-seed warning:", seedErr.message);
  }
};

const getIsMongoConnected = () => isMongoConnected;

module.exports = {
  connectDB,
  getIsMongoConnected
};
