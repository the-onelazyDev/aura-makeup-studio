const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { connectDB, getIsMongoConnected } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const artistRoutes = require("./routes/artistRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const PORT = process.env.PORT || 9005;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    code: 200,
    status: true,
    message: "Aura Makeup Studio API Server is operational.",
    data: {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
      database: getIsMongoConnected() ? "MongoDB Atlas (Connected)" : "In-Memory Store (Active)"
    }
  });
});

// Root API welcome
app.get("/", (req, res) => {
  res.json({
    code: 200,
    status: true,
    message: "Welcome to Aura Luxury Makeup Studio API",
    database: getIsMongoConnected() ? "MongoDB Atlas" : "In-Memory Store",
    endpoints: {
      auth: "/api/auth",
      services: "/api/services",
      artists: "/api/artists",
      bookings: "/api/bookings",
      health: "/api/health"
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    code: 404,
    status: false,
    message: `Route '${req.originalUrl}' not found.`,
    data: null
  });
});

// Start Server & Connect Database
app.listen(PORT, async () => {
  console.log(`✨ Aura Makeup Studio Backend running at http://localhost:${PORT}`);
  await connectDB();
});

module.exports = app;
