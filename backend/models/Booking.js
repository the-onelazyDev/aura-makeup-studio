const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  serviceId: { type: String, required: true },
  serviceTitle: { type: String, required: true },
  servicePrice: { type: Number, required: true },
  artistId: { type: String, required: true },
  artistName: { type: String, required: true },
  bookingDate: { type: String, required: true },
  slotTime: { type: String, required: true },
  status: {
    type: String,
    enum: ["Confirmed", "Pending", "Completed", "Cancelled"],
    default: "Confirmed"
  },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  notes: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);
