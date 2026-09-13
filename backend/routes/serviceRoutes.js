const express = require("express");
const Service = require("../models/Service");
const { servicesStore } = require("../data/store");
const { getIsMongoConnected } = require("../config/db");

const router = express.Router();

// GET /api/services
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    if (getIsMongoConnected()) {
      const filter = category && category !== "All" ? { category } : {};
      const services = await Service.find(filter).sort({ createdAt: -1 });

      return res.json({
        code: 200,
        status: true,
        message: "Services retrieved successfully.",
        data: {
          result: services,
          total: services.length
        }
      });
    }

    // In-memory fallback
    let results = servicesStore;
    if (category && category !== "All") {
      results = results.filter(
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
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to fetch services.",
      data: null
    });
  }
});

// GET /api/services/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let service;
    if (getIsMongoConnected()) {
      service = await Service.findOne({ id });
    } else {
      service = servicesStore.find((s) => s.id === id);
    }

    if (!service) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: `Service with ID '${id}' not found.`,
        data: null
      });
    }

    return res.json({
      code: 200,
      status: true,
      message: "Service details fetched.",
      data: service
    });
  } catch (err) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Failed to fetch service details.",
      data: null
    });
  }
});

module.exports = router;
