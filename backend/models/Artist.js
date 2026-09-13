const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  experience: { type: String, required: true },
  rating: { type: Number, default: 4.8 },
  reviews: { type: Number, default: 0 },
  specialty: { type: String, required: true },
  avatar: { type: String, required: true },
  availableSlots: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Artist", artistSchema);
