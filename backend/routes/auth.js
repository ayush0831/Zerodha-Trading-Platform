const express = require("express");
const bcrypt = require("bcryptjs");
const { UserModel } = require("../model/UserModel");

const authRouter = express.Router();

/**
 * POST /api/auth/signup
 * Register a new user
 */
authRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Validate input
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(422).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Validate mobile format
    const digitsOnly = mobile.replace(/\D/g, "");
    if (!/^\d{10}$/.test(digitsOnly)) {
      return res.status(422).json({
        success: false,
        message: "Mobile number must be 10 digits",
      });
    }

    // Validate password
    if (password.length < 8) {
      return res.status(422).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({
      $or: [{ email: email.toLowerCase() }, { mobile: digitsOnly }],
    });

    if (existingUser) {
      const field =
        existingUser.email === email.toLowerCase() ? "email" : "mobile";
      return res.status(409).json({
        success: false,
        message: `This ${field} is already registered`,
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new UserModel({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      mobile: digitsOnly,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    // Return success response
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        userId: newUser._id,
        email: newUser.email,
        name: newUser.name,
        isEmailVerified: newUser.isEmailVerified,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      const errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(422).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    // Handle duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        success: false,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} is already registered`,
      });
    }

    // Generic server error
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

/**
 * GET /api/auth/check-email
 * Check if email exists
 */
authRouter.get("/check-email", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });

    return res.status(200).json({
      success: true,
      exists: !!user,
    });
  } catch (error) {
    console.error("Check email error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = authRouter;
