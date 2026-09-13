const express = require("express");
const { bookingsStore, servicesStore, artistsStore, usersStore } = require("../data/store");
const { authenticateToken, requireAdminRole } = require("../middleware/authMiddleware");

const router = express.Router();

// Apply auth & admin role middleware to all admin routes
router.use(authenticateToken, requireAdminRole);

// GET /api/admin/bookings (Fetch all salon bookings)
router.get("/bookings", (req, res) => {
  const { status, search } = req.query;
  let results = [...bookingsStore];

  if (status && status !== "All") {
    results = results.filter((b) => b.status.toLowerCase() === status.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (b) =>
        b.customerName.toLowerCase().includes(q) ||
        b.serviceTitle.toLowerCase().includes(q) ||
        b.artistName.toLowerCase().includes(q) ||
        b.id.toLowerCase().includes(q)
    );
  }

  // Calculate stats
  const totalRevenue = bookingsStore
    .filter((b) => b.status !== "Cancelled")
    .reduce((sum, b) => sum + (b.servicePrice || 0), 0);

  const confirmedCount = bookingsStore.filter((b) => b.status === "Confirmed").length;
  const completedCount = bookingsStore.filter((b) => b.status === "Completed").length;
  const cancelledCount = bookingsStore.filter((b) => b.status === "Cancelled").length;

  return res.json({
    code: 200,
    status: true,
    message: "Admin bookings retrieved successfully.",
    data: {
      bookings: results,
      stats: {
        totalBookings: bookingsStore.length,
        totalRevenue,
        confirmedCount,
        completedCount,
        cancelledCount
      }
    }
  });
});

// PUT /api/admin/bookings/:id/status (Update booking status)
router.put("/bookings/:id/status", (req, res) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({
      code: 400,
      status: false,
      message: "Status is required.",
      data: null
    });
  }

  const booking = bookingsStore.find((b) => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({
      code: 404,
      status: false,
      message: "Booking record not found.",
      data: null
    });
  }

  booking.status = status;
  return res.json({
    code: 200,
    status: true,
    message: `Booking #${booking.id} status updated to ${status}.`,
    data: { booking }
  });
});

module.exports = router;
