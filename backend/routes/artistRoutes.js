const express = require("express");
const Artist = require("../models/Artist");
const { artistsStore } = require("../data/store");
const { getIsMongoConnected } = require("../config/db");

const router = express.Router();

// GET /api/artists
router.get("/", async (req, res) => {
  try {
    if (getIsMongoConnected()) {
      const artists = await Artist.find().sort({ rating: -1 });
      return res.json({
        code: 200,
        status: true,
        message: "Artists retrieved successfully.",
        data: {
          result: artists,
          total: artists.length
        }
      });
    }

    return res.json({
      code: 200,
      status: true,
      message: "Artists retrieved successfully.",
      data: {
        result: artistsStore,
        total: artistsStore.length
      }
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to fetch makeup artists.",
      data: null
    });
  }
});

// GET /api/artists/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let artist;
    if (getIsMongoConnected()) {
      artist = await Artist.findOne({ id });
    } else {
      artist = artistsStore.find((a) => a.id === id);
    }

    if (!artist) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: `Artist with ID '${id}' not found.`,
        data: null
      });
    }

    return res.json({
      code: 200,
      status: true,
      message: "Artist details fetched.",
      data: artist
    });
  } catch (err) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to fetch artist details.",
      data: null
    });
  }
});

module.exports = router;
