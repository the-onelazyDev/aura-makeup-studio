const express = require("express");
const Booking = require("../models/Booking");
const Service = require("../models/Service");
const User = require("../models/User");
const { bookingsStore, servicesStore, usersStore } = require("../data/store");
const { getIsMongoConnected } = require("../config/db");
const { authenticateToken, requireAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// GET /api/admin/overview (KPI metrics)
router.get("/overview", authenticateToken, requireAdmin, async (req, res) => {
  try {
    let bookings, services, users;

    if (getIsMongoConnected()) {
      bookings = await Booking.find();
      services = await Service.find();
      users = await User.find();
    } else {
      bookings = bookingsStore;
      services = servicesStore;
      users = usersStore;
    }

    const totalRevenue = bookings
      .filter((b) => b.status !== "Cancelled")
      .reduce((sum, b) => sum + (Number(b.servicePrice) || 0), 0);

    const activeBookings = bookings.filter((b) => b.status === "Confirmed").length;
    const completedBookings = bookings.filter((b) => b.status === "Completed").length;
    const cancelledCount = bookings.filter((b) => b.status === "Cancelled").length;
    const totalClients = users.filter((u) => u.role === "appUser").length;

    return res.json({
      code: 200,
      status: true,
      message: "Admin metrics overview retrieved.",
      data: {
        totalRevenue,
        totalBookings: bookings.length,
        activeBookings,
        confirmedCount: activeBookings,
        completedBookings,
        completedCount: completedBookings,
        cancelledCount,
        totalClients,
        totalServices: services.length
      }
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to fetch admin overview stats.",
      data: null
    });
  }
});

// GET /api/admin/bookings (All bookings with optional filters and real-time stats)
router.get("/bookings", authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { status, search } = req.query;

    let allBookings;
    if (getIsMongoConnected()) {
      allBookings = await Booking.find().sort({ createdAt: -1 });
    } else {
      allBookings = [...bookingsStore].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    // Real-time statistics across all bookings
    const totalRevenue = allBookings
      .filter((b) => b.status !== "Cancelled")
      .reduce((sum, b) => sum + (Number(b.servicePrice) || 0), 0);
    const confirmedCount = allBookings.filter((b) => b.status === "Confirmed").length;
    const completedCount = allBookings.filter((b) => b.status === "Completed").length;
    const cancelledCount = allBookings.filter((b) => b.status === "Cancelled").length;

    const stats = {
      totalBookings: allBookings.length,
      totalRevenue,
      confirmedCount,
      completedCount,
      cancelledCount
    };

    // Filter bookings by status & search
    let filteredBookings = allBookings;
    if (status && status !== "All") {
      filteredBookings = filteredBookings.filter(
        (b) => b.status.toLowerCase() === status.toLowerCase()
      );
    }

    if (search && search.trim() !== "") {
      const q = search.toLowerCase().trim();
      filteredBookings = filteredBookings.filter(
        (b) =>
          (b.customerName && b.customerName.toLowerCase().includes(q)) ||
          (b.customerPhone && b.customerPhone.includes(q)) ||
          (b.serviceTitle && b.serviceTitle.toLowerCase().includes(q)) ||
          (b.artistName && b.artistName.toLowerCase().includes(q)) ||
          (b.id && b.id.toLowerCase().includes(q))
      );
    }

    return res.json({
      code: 200,
      status: true,
      message: "All studio bookings retrieved.",
      data: {
        bookings: filteredBookings,
        result: filteredBookings,
        total: filteredBookings.length,
        stats
      }
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to fetch bookings.",
      data: null
    });
  }
});

// PATCH & PUT /api/admin/bookings/:id/status
const handleStatusUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["Confirmed", "Pending", "Completed", "Cancelled"];
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        code: 400,
        status: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
        data: null
      });
    }

    let updatedBooking;
    if (getIsMongoConnected()) {
      updatedBooking = await Booking.findOneAndUpdate(
        { id },
        { status },
        { new: true }
      );
    } else {
      const booking = bookingsStore.find((b) => b.id === id);
      if (booking) {
        booking.status = status;
        updatedBooking = booking;
      }
    }

    if (!updatedBooking) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: `Booking with ID '${id}' not found.`,
        data: null
      });
    }

    return res.json({
      code: 200,
      status: true,
      message: `Booking status updated to '${status}'.`,
      data: updatedBooking
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to update booking status.",
      data: null
    });
  }
};

router.patch("/bookings/:id/status", authenticateToken, requireAdmin, handleStatusUpdate);
router.put("/bookings/:id/status", authenticateToken, requireAdmin, handleStatusUpdate);

module.exports = router;
