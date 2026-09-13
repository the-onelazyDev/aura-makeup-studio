const express = require("express");
const Booking = require("../models/Booking");
const Service = require("../models/Service");
const Artist = require("../models/Artist");
const { bookingsStore, servicesStore, artistsStore } = require("../data/store");
const { getIsMongoConnected } = require("../config/db");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

// POST /api/bookings
router.post("/", async (req, res) => {
  try {
    const {
      userId,
      serviceId,
      artistId,
      bookingDate,
      slotTime,
      customerName,
      customerPhone,
      notes
    } = req.body;

    if (
      !serviceId ||
      !artistId ||
      !bookingDate ||
      !slotTime ||
      !customerName ||
      !customerPhone
    ) {
      return res.status(400).json({
        code: 400,
        status: false,
        message: "Please provide all required booking fields.",
        data: null
      });
    }

    let service, artist;

    if (getIsMongoConnected()) {
      service = await Service.findOne({ id: serviceId });
      artist = await Artist.findOne({ id: artistId });
    } else {
      service = servicesStore.find((s) => s.id === serviceId);
      artist = artistsStore.find((a) => a.id === artistId);
    }

    if (!service) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: `Selected service '${serviceId}' not found.`,
        data: null
      });
    }

    if (!artist) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: `Selected artist '${artistId}' not found.`,
        data: null
      });
    }

    const newBookingData = {
      id: "bk-" + Math.floor(1000 + Math.random() * 9000),
      userId: userId || "guest-user",
      serviceId,
      serviceTitle: service.title,
      servicePrice: service.price,
      artistId,
      artistName: artist.name,
      bookingDate,
      slotTime,
      status: "Confirmed",
      customerName,
      customerPhone,
      notes: notes || ""
    };

    let createdBooking;
    if (getIsMongoConnected()) {
      createdBooking = await Booking.create(newBookingData);
    } else {
      createdBooking = {
        ...newBookingData,
        createdAt: new Date().toISOString()
      };
      bookingsStore.push(createdBooking);
    }

    return res.status(201).json({
      code: 201,
      status: true,
      message: "VIP Makeover appointment confirmed successfully!",
      data: createdBooking
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: error.message || "Failed to create booking reservation.",
      data: null
    });
  }
});

// GET /api/bookings/my-bookings
router.get("/my-bookings", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    let userBookings;
    if (getIsMongoConnected()) {
      userBookings = await Booking.find({
        $or: [{ userId }, { customerName: req.user.name }]
      }).sort({ createdAt: -1 });
    } else {
      userBookings = bookingsStore.filter(
        (b) => b.userId === userId || b.customerName.toLowerCase() === req.user.name.toLowerCase()
      );
    }

    return res.json({
      code: 200,
      status: true,
      message: "User booking history retrieved.",
      data: {
        result: userBookings,
        total: userBookings.length
      }
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to fetch user bookings.",
      data: null
    });
  }
});

// PUT /api/bookings/:id/cancel
router.put("/:id/cancel", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    let updatedBooking;
    if (getIsMongoConnected()) {
      updatedBooking = await Booking.findOneAndUpdate(
        { id },
        { status: "Cancelled" },
        { new: true }
      );
    } else {
      const booking = bookingsStore.find((b) => b.id === id);
      if (booking) {
        booking.status = "Cancelled";
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
      message: "Booking cancelled successfully.",
      data: updatedBooking
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to cancel booking.",
      data: null
    });
  }
});

module.exports = router;
