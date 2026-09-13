const express = require("express");
const { servicesStore } = require("../data/store");

const router = express.Router();

// GET /api/services
router.get("/", (req, res) => {
  const { category } = req.query;
  let results = servicesStore;

  if (category && category !== "All") {
    results = servicesStore.filter(
      (s) => s.category.toLowerCase() === category.toLowerCase()
    );
  }

  return res.json({
    code: 200,
    status: true,
    message: "Services retrieved successfully.",
    data: {
      result: results,
      total: results.length
    }
  });
});

// GET /api/services/:id
router.get("/:id", (req, res) => {
  const service = servicesStore.find((s) => s.id === req.params.id);
  if (!service) {
    return res.status(404).json({
      code: 404,
      status: false,
      message: "Service not found.",
      data: null
    });
  }

  return res.json({
    code: 200,
    status: true,
    message: "Service details retrieved.",
    data: { service }
  });
});

module.exports = router;
