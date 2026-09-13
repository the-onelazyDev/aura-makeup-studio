const express = require("express");
const { bookingsStore, servicesStore, artistsStore } = require("../data/store");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

// POST /api/bookings (Create booking)
router.post("/", authenticateToken, (req, res) => {
  try {
    const { serviceId, artistId, bookingDate, slotTime, customerName, customerPhone, notes } = req.body;

    if (!serviceId || !artistId || !bookingDate || !slotTime) {
      return res.status(400).json({
        code: 400,
        status: false,
        message: "Service, artist, date, and time slot are required.",
        data: null
      });
    }

    const service = servicesStore.find((s) => s.id === serviceId);
    if (!service) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: "Selected service was not found.",
        data: null
      });
    }

    const artist = artistsStore.find((a) => a.id === artistId);
    if (!artist) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: "Selected artist was not found.",
        data: null
      });
    }

    const newBooking = {
      id: "bk-" + Math.floor(1000 + Math.random() * 9000),
      userId: req.user.id,
      serviceId: service.id,
      serviceTitle: service.title,
      servicePrice: service.price,
      artistId: artist.id,
      artistName: artist.name,
      bookingDate,
      slotTime,
      status: "Confirmed",
      customerName: customerName || req.user.name,
      customerPhone: customerPhone || "",
      notes: notes || "",
      createdAt: new Date().toISOString()
    };

    bookingsStore.unshift(newBooking);

    return res.status(201).json({
      code: 201,
      status: true,
      message: "Appointment booked successfully!",
      data: { booking: newBooking }
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to process appointment booking.",
      data: null
    });
  }
});

// GET /api/bookings/my-bookings
router.get("/my-bookings", authenticateToken, (req, res) => {
  const userBookings = bookingsStore.filter((b) => b.userId === req.user.id);
  return res.json({
    code: 200,
    status: true,
    message: "User bookings retrieved.",
    data: {
      result: userBookings,
      total: userBookings.length
    }
  });
});

// PUT /api/bookings/:id/cancel
router.put("/:id/cancel", authenticateToken, (req, res) => {
  const booking = bookingsStore.find((b) => b.id === req.params.id && b.userId === req.user.id);
  if (!booking) {
    return res.status(404).json({
      code: 404,
      status: false,
      message: "Booking not found or unauthorized.",
      data: null
    });
  }

  booking.status = "Cancelled";
  return res.json({
    code: 200,
    status: true,
    message: "Booking cancelled successfully.",
    data: { booking }
  });
});

module.exports = router;
