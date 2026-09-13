
const express = require("express");
const { artistsStore } = require("../data/store");

const router = express.Router();

// GET /api/artists
router.get("/", (req, res) => {
  return res.json({
    code: 200,
    status: true,
    message: "Artists retrieved successfully.",
    data: {
      result: artistsStore,
      total: artistsStore.length
    }
  });
});

// GET /api/artists/:id
router.get("/:id", (req, res) => {
  
  const artist = artistsStore.find((a) => a.id === req.params.id);
  if (!artist) {
    return res.status(404).json({
      code: 404,
      status: false,
      message: "Artist not found.",
      data: null
    });
  }

  return res.json({
    code: 200,
    status: true,
    message: "Artist details retrieved.",
    data: { artist }
  });
});

module.exports = router;
