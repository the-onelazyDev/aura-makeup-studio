const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { usersStore } = require("../data/store");
const { authenticateToken, JWT_SECRET } = require("../middleware/authMiddleware");

const router = express.Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        code: 400,
        status: false,
        message: "Name, email, and password are required.",
        data: null
      });
    }

    const existingUser = usersStore.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      return res.status(409).json({
        code: 409,
        status: false,
        message: "An account with this email address already exists.",
        data: null
      });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = {
      id: "user-" + Date.now(),
      name,
      email: email.toLowerCase(),
      passwordHash,
      phone: phone || "",
      role: "appUser",
      createdAt: new Date().toISOString()
    };

    usersStore.push(newUser);

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      code: 201,
      status: true,
      message: "Account registered successfully!",
      data: {
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          role: newUser.role
        }
      }
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Server error during registration.",
      data: null
    });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        code: 400,
        status: false,
        message: "Email and password are required.",
        data: null
      });
    }

    const user = usersStore.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(401).json({
        code: 401,
        status: false,
        message: "Invalid email or password.",
        data: null
      });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({
        code: 401,
        status: false,
        message: "Invalid email or password.",
        data: null
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      code: 200,
      status: true,
      message: "Logged in successfully!",
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role
        }
      }
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Server error during login.",
      data: null
    });
  }
});

// GET /api/auth/me
router.get("/me", authenticateToken, (req, res) => {
  const user = usersStore.find((u) => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({
      code: 404,
      status: false,
      message: "User profile not found.",
      data: null
    });
  }

  return res.json({
    code: 200,
    status: true,
    message: "User profile retrieved.",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    }
  });
});

module.exports = router;
