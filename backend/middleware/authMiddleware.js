const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "luxury_makeup_studio_secret_key_2026";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      code: 401,
      status: false,
      message: "Access denied. Authentication token required.",
      data: null
    });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(403).json({
      code: 403,
      status: false,
      message: "Invalid or expired authentication token.",
      data: null
    });
  }
}

function requireAdminRole(req, res, next) {
  if (!req.user || req.user.role !== "adminUser") {
    return res.status(403).json({
      code: 403,
      status: false,
      message: "Access denied. Admin privileges required.",
      data: null
    });
  }
  next();
}

module.exports = {
  authenticateToken,
  requireAdminRole,
  JWT_SECRET
};
